/**
 * @provides FB.Data
 * @layer Data
 * @requires FB.Base FB.Type FB.Util FB.Event FB.Api FB.Async FB.App
 */


/**
 * Data access class for accessing Facebook data efficiently.
 *
 * @class FB.Data
 */
FB.provide('Data', {
  /**
   * Perform a FQL query
   * Example:
   * <div class="code_border">
   * <xmp class="prettyprint js">
   * // Get random 5 friends ids
   * var friends = FB.Data.query('select uid2 from friend where uid1={0} ORDER BY rand() limit 5', FB.App.session.uid);
   * var friendInfos = FB.Data.query(
   *      'select name, pic from user where uid in (select uid2 from {0})', friends);
   *
   * friendInfos.wait(function(data) {
   *   // Render info. For illustration of API, I am using any XFBML tags
   *   var html = '';
   *   FB.forEach(data, function(info) {
   *    html += '<p>' + info.name + '<img src="' + info.pic + '" /></p>';
   *   });
   *   FB.$('infos').innerHTML = html;
   * });
   * </xmp>
   * </div>
   *
   * @param {string} template FQL query string template. It can contains optional
   *                 formated parameters. When these
   *                 parameters are used in the string, the actual data should
   *                 be passed as parameter following the template parameter.
   * @param {object} data optional 0-n arguments of data. The arguments can be either
   *   real data or results from previous FB.Data.query().
   * @return {FB.Async.Data} An async query object that contains query result.
   *   You can pass the result as arguments to other functions that expect FB.Async.Data
   *   immediately, such as FB.Data.query(), FB.Async.eval(), FB.Async.wait(). If you want
   *   wait for the data's value to be available, you can call the wait() method on the
   *   result.
   * @static
   */
  query: function(template, data) {
    var query = (new FB.Data.Query).parse(arguments);
    FB.Data.queue.push(query);
    FB.Data._ensureTimer();
    return query;
  },

  /**
   * Alternate method from query, this method is more specific
   * but more efficient. We use it internally
   * @static
   * @private
   */
  _selectByIndex: function(fields, table, name, value) {
    var query = (new FB.Data.Query);
    query.fields = fields;
    query.table = table;
    query.where = {type: 'index', key: name, value: value};
    FB.Data.queue.push(query);
    FB.Data._ensureTimer();
    return query;
  },

  _ensureTimer: function() {
    if (FB.Data.timer < 0) {
      FB.Data.timer = setTimeout(FB.Data._process, 10);
    }
  },

  _process: function() {
    FB.Data.timer = -1;

    var mergedQ = {};
    var q = FB.Data.queue;
    FB.Data.queue = [];
    var mqueries = {};

    for (var i=0; i < q.length; i++) {
      var item = q[i];
      if (item.where.type == 'index' && !item.hasDependency) {
        FB.Data._mergeIndexQuery(item, mqueries);
      } else {
        mqueries[item.name] = item;
      }
    }

    // Now make a single multi-query API call
    var params = {queries: {}};
    FB.copy(params.queries, mqueries, true, function(query) {
      return query.toFql();
    });

    FB.Api.invoke('fql.multiquery', params, function(result) {
      FB.forEach(result, function(o) {
        mqueries[o.name].set(o.fql_result_set);
      });
    });
  },

  /**
   * Check if y can be merged into x
   * @private
   * @static
   */
  _mergeIndexQuery: function(item, mqueries) {
    var key = item.where.key,
    value = item.where.value;

    var name = 'index_' +  item.table + '_' + key;
    var master = mqueries[name];
    if (!master) {
      master = mqueries[name] = new FB.Data.Query();
      master.fields = [key];
      master.table = item.table;
      master.where = {type: 'in', key: key, value: []};
    }

    // Merge fields
    FB.Util.merge(master.fields, item.fields);
    FB.Util.merge(master.where.value, [value]);

    // Link data from master to item
    master.wait(function(r) {
      item.set(FB.Util.filter(r, function(x) {
        return x[key] == value;
      }));
    });
  },

  timer: -1,
  queue: []
});


/**
 * Query class that represent a FQL query
 * @class FB.Data.Query
 * @extends FB.Async.Data
 * @private
 */
FB.subclass('Data.Query', 'Async.Data',
  function () {
    if (!FB.Data.Query._c) {
      FB.Data.Query._c = 1;
    }
    this.name = 'v_' + FB.Data.Query._c++;
  },
  {
  parse: function(args) {

    var fql = FB.Util.format.apply(null, args);
    // Parse it
    re = (/^select (.*?) from (\w+)\s+where (.*)$/i).exec(fql);
    this.fields = this._toFields(re[1]);
    this.table = re[2];
    this.where = this._parseWhere(re[3]);

    for (var i=1; i < args.length; i++) {
      if (FB.Type.isType(args[i], FB.Data.Query)) {
        // Indicate this query can not be merged because
        // others depend on it.
        args[i].hasDependency = true;
      }
    }

    return this;
  },

  toFql: function() {
    var s = 'select ' + this.fields.join(',') + ' from ' +
      this.table + ' where ';
    switch(this.where.type) {
      case 'unknown':
        s += this.where.value;
        break;
      case 'index':

        s += this.where.key + '=' + this._encode(his.where.value);
        break;
      case 'in':
        if (this.where.value.length == 1) {
          s += this.where.key + '=' +  this._encode(this.where.value[0]);
        } else {
          s += this.where.key + ' in (' +
            FB.Util.a2a(this.where.value, this._encode).join(',') + ')';
        }
        break;
    }
    return s;
  },

  _encode: function(value) {
    return typeof(value) == 'string' ?  FB.Util.quote(value) : value;
  },

  toString: function() {
    return '#' + this.name;
  },

  _toFields: function(s) {
    return FB.Util.a2a(s.split(','), FB.Util.trim);
  },

  _parseWhere: function(s) {
    var re = (/^\s*(\w+)\s*=\s*([^=\s]*)\s*$/i).exec(s);
    var result;
    if (re) {
      // a simple <key>=<value> clause
      result = {type:'index', key:re[1], value:re[2]};
    } else {
      // Not a simple <key>=<value> clause
      result = {type:'unknown', value:s};
    }
    return result;
  }
});

