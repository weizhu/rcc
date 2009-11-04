/**
 * @provides FB.Data
 * @requires FB.Base FB.Type FB.Util FB.Event FB.Api FB.Async FB.App
 */


FB.provide('Data', {
  query: function(template) {
    var query = (new FB.Data.Query).parse(arguments);
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
        s += this.where.key + '=' + this.where.value;
        break;
      case 'in':
        if (this.where.value.length == 1) {
          s += this.where.key + '=' + this.where.value[0];
        } else {
          s += this.where.key + ' in (' + this.where.value.join(',') + ')';
        }
        break;
    }
    return s;
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

