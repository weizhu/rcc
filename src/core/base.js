/**
 * @provides v2.FB.Base
 */

/**
 *
 * Provide a lowest level base functions for Connect JS. We should only place
 * commonly used generally purpose methods in this namespace
 * Every methods in this file are in FB namespace.
 */


/**
 * Copies things from source into target.
 *
 * @access protected
 * @param target    {Object}  the target object where things will be copied
 *                            into
 * @param source    {Object}  the source object where things will be copied
 *                            from
 * @param overwrite {Boolean} indicate if existing items should be
 *                            overwritten
 * @param tranform  {function} [Optional], transformation function for each item
 */
FB.copy = function(target, source, overwrite, transform) {
  for (key in source) {
    if (overwrite || typeof target[key] === 'undefined') {
      target[key] = transform ? transform(source[key]) :  source[key];
    }
  }
};


FB.copy(FB, {
  /**
   * Shortcut for document.getElementById
   * @param {string} DOM id
   * @return DOMElement
   */
  $: function(id) {
    return document.getElementById(id);
  },

  /**
   * Provide a module or static class methods with fully qualified namespace. The name
   * is a dot separated string. The feature is an object from which
   * properties are _copied_ into the target.
   *
   * Example:
   *
   * FB.provide('Server.Auth', {
   *   init: function() {
   *     // ...
   *   }
   * });

   *
   *    *
   * @access protected
   * @param name    {String}  a dot separated string naming the feature
   * @param feature {Object}  the feature being provided
   * @param append  {Boolean} indicate if an existing object should be
   *                          appended defaults to false. this need to be
   *                          explicit to detect inadvertent redefinition of
   *                          features.
   */
  provide: function(name, feature, append) {
    FB.copy(FB.create(name), feature, append);
  },


  /**
   * Bind a function to a given context and arguments.
   *
   * @access protected
   * @param fn      {Function}   the function to bind
   * @param context {Object}     object to be used as the context when
   *                             calling the function
   * @param ...     arguments    additional arguments to be bound to the
   *                             function
   * @returns       {Function}   the bound function
   */
  bind: function() {
    var
     args    = Array.prototype.slice.call(arguments),
     fn      = args.shift(),
     context = args.shift(),
     result = function() {
      return fn.apply(context,
          args.concat(Array.prototype.slice.call(arguments)));
     };
    return result;
  },

  /**
   * For looping through Arrays and Objects.
   *
   * @param item   Variant   an Array or an Object
   * @param fn     Function  the callback function for iteration
   * @param proto  Boolean   indicate if properties from the prototype should
   *                         be included
   */
  forEach: function(item, fn, proto) {
    if (Object.prototype.toString.apply(item) === '[object Array]') {
      if (item.forEach) {
        item.forEach(fn);
      } else {
        for (var i=0, l=item.length; i<l; i++) {
          fn(item[i], i, item);
        }
      }
    } else {
      for (var key in item) {
        if (proto || item.hasOwnProperty(key)) {
          fn(item[key], key, item);
        }
      }
    }
  },

  /**
   * Create a namespaced object
   * This create an fullly namespaced name.
   * Examples:
   * FB.create('XFBML.ProfilePic') = function() {...}
   *   create FB.XFBML.ProfilePic and assign the value of the function. If FB.XFBML does not exist, this call
   *   would automatically create it.
   *
   * FB.create('Util');
   *   create a namespace FB.Util if it doesn't already exist;
   *
   * FB.create('Util.foo', null, true)
   *   Check if FB.Util.foo exists
   *
   * @access private
   * @param {string} name full qualified name ('Util.foo', etc.)
   * @param {string} value [optional] value to set. Default value is {}
   * @param {bool} testOnly  [optional] This is an optional parameter. If set to true, then the function
   *                  will
   * @return object  The created object, or boolean if testOnly is true.
   */
  create: function(name, value, testOnly) {
    var ns = FB, // We will use 'FB' as root namespace
    nameParts = name ? name.split('.') : [],
    c = nameParts.length;
    for (var i = 0; i < c; i++) {
      var part = nameParts[i];
      var nso = ns[part];
      if (!nso) {
        if (testOnly) {
          return false;
        } else if (value && i + 1 == c) {
          nso = value;
        } else {
          nso = {};
        }

        ns[part] = nso;
      }
      ns = nso;
    }
    return ns;
  }

});


