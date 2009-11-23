/**
 * @provides FB.Type
 * @layer Basic
 * @requires FB.Base
 */

/**
 * Provide Class/Type support
 * @class FB
 * @private
 */
FB.provide('', {

  /**
   * Create a new class.
   * Note: I have to use 'Class' instead of 'class' because 'class' is
   * a reserved (but unused) keyword.
   * @param {string} name class name
   * @param {function} constructor class constructor
   * @param {object} proto instance methods for class
   * @static
   */
  Class: function(name, constructor, proto) {
    if (FB.CLASSES[name]) {
      // FB.Log.warn('Ignoring Class "' + name + '" reload.');
      return;
    }

    var newClass = constructor ||  function(){};

    newClass.prototype =  proto;
    newClass.prototype.constructor = newClass;
    FB.create(name, newClass);
    return newClass;
  },

  /**
   * Create a subclass
   *
   * Note: To call base class constructor, use this._base(...).
   * If you override a method 'foo' but still want to call
   * the base class's method 'foo', use this._callBase('foo', ...)
   * @param {string} name class name
   * @param {string} baseName,
   * @param {function} constructor class constructor
   * @param {object} proto instance methods for class
   * @static
   */
  subclass: function(name, baseName, constructor, proto) {
    if (FB.CLASSES[name]) {1
      return;
    }
    var base = FB.create(baseName);
    FB.copy(proto, base.prototype);
    proto._base = base;
    proto._callBase = function(method) {
      var args = Array.prototype.slice.call(arguments, 1);
      return base.prototype[method].apply(this, args);
    };

    var cls = FB.Class(name,
     constructor ? constructor : function() {
       this._base.apply(this, arguments);
     },
     proto);
    return cls;
  },

  CLASSES: {}
});

FB.provide('Type', {
  isType: function(obj, type) {
    while (obj) {
      if (obj.constructor === type || obj === type) {
        return true;
      } else {
        obj = obj._base;
      }
    }
    return false;
  }
});
