/**
 * @provides FB.Async
 * @layer Data
 * @requires FB.Base FB.Type FB.Util FB.Event
 */

/**
 * Async operations
 * @class FB.Async
 */
FB.provide('Async', {
  isAsync: function(obj) {
    return FB.Type.isType(obj, FB.Async.Data);
  },

  /**
   *
   * @param {string | function} a string or a function will be evaluated when all data are ready
   * @data a list of objects that needs to be evaluted when they are ready
   * @static
   */
  eval: function(fn, data) {
    var asyncData = new FB.Async.Data();
    FB.Data.wait(function() {
      if (typeof(fn) == 'function') {
        asyncData.set(fn.apply(fn, arguments));
      } else {
        // Assume fn is a string
        asyncData.set(FB.Data._evalString(fn, arguments));
      }
    }, data);

    return asyncData;
  },

  /**
   * Given a list of potential async data,
   * wait until they are all ready
   * @static
   */
  wait: function(callback, data) {
    var c = data.length;

    FB.forEach(data, function(item) {
      FB.Event.monitor(item, 'value', function() {
        var done = false;;
        if (!FB.Async.isAsync(item) || item.value !== undefined) {
          c--;
          done = true;
        }
        if (c == 0) {
          callback.apply(callback, FB.Util.a2a(data, FB.Async.getValue));
        }
        return done;
      });
    });
  },

  getValue: function(item) {
    return FB.Async.isAsync(item) ? item.value : item;
  },

  _evalString: function(fnStr, data) {
    var varPrefix = FB. Util.createUnique('$');
    var sb = [];
    var formatArgs = [fnStr];
    for(var i = 0; i < data.length; i++) {
      var v = varPrefix + i;
      formatArgs.push(v);
      sb.push('var ' + varPrefix + ' = data[' + i  + '];');
    }

    var s = sb.join('\n') + FB.Util.format.apply(FB.Util.format, formatArgs);
  }

});

/**
 * An node that holds data that may not be available immediately
 * @class FB.Async.Data
 */
FB.Class('Async.Data',

/**
 * Constructor
 * @constructor
 * @param {object} value [Optional] value of the data, if available.
 */
function(value) {
  this.value = value;
}, {

  /**
   * @param {object} Set value property of the data object. This will
   *  cause "value" event to be fire on the object. Any callback functions
   *  that are waiting for the data through wait() methods will be invoked
   *  if the value was previously not set.
   */
  set: function(value) {
    FB.Event.setProperty(this, 'value', value);
  },


  /**
   * Wait until this.value is set.
   * Example:
   * <div class="code_border">
   * <xmp class="prettyprint lang-js">
   *     var friendInfos = FB.Data.query(
   *      'select name, pic from user where uid in (select uid2 from {0})', friends);
   *
   *     friendInfos.wait(function(data) {
   *       // Render info. For illustration of API, I am using any XFBML tags
   *       var html = '';
   *       FB.forEach(data, function(info) {
   *         html += '<p>' + info.name + '<img src="' + info.pic + '" /></p>';
   *       });
   *       FB.$('infos').innerHTML = html;
   *     });
   * </xmp>
   * </div>
   * @param {function} A callback function that will be invoked when this.value
   *   is set.
   */
  wait: function(callback) {
    FB.Async.wait(callback, [this]);
  }
});
