/**
 * @provides FB.Async
 * @module Data
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
 * constructor of FB.Async.Data
 * @constructor
 * @param {object} [Optional] value of the data, if available.
 */
function(value) {
  this.value = value;
}, {
  set: function(value) {
    FB.Event.setProperty(this, 'value', value);
  },

  wait: function(callback) {
    FB.Async.wait(callback, [this]);
  }
});
