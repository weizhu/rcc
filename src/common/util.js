/**
 * @provides FB.Util
 * @requires FB.Base
 *
 */

/**
 * @class FB.Util
 */
FB.provide('Util', {
  /**
   * Gets a reference to the statically stored base Facebook URL, and adjusts for the desired subdomain.
   * @param  {String} subDomain
   * Subdomain of Facebook to use
   * @return  String
   */
  getFacebookUrl: function(subDomain) {
    return FB.Util.format(FB.dynData.resources.base_url_format, subDomain);
  },

  /**
   * Create an unique id string
   */
  createUnique: function(prefix) {
    return (prefix || '') + Math.random().toString().substr(0, 5);
  },

  trim: function(s) {
    return s.replace(/^\s*|\s*$/g, '');
  },

  indexOf: function (a, item) {
    if (a.indexOf) {
      return a.indexOf(item);
    }
    var length = a.length;
    if (length) {
      for (var index = 0; index < length; index++) {
        if (a[index] === item) {
          return index;
        }
      }
    }
    return -1;
  },

  merge: function(a, b) {
    for (var i=0; i < b.length; i++) {
      if (FB.Util.indexOf(a, (b[i])) < 0) {
        a.push(b[i]);
      }
    }
  },

  filter: function(a, fn) {
    var b  = [];
    for (var i=0; i < a.length; i++) {
      if (fn(a[i])) {
        b.push(a[i]);
      }
    }
    return b;
  },

  /**
   * Create an array from the keys in an object
   * Example: obj2array({'x': 2, 'y': 3'}) returns ['x', 'y']
   */
  obj2array: function(obj) {
    var a =[];
    for (key in obj) {
      a.push(key);
    }
    return a;
  },

  a2a: function(a, transform) {
    var newArray = [];
    for(var i=0; i < a.length; i++) {
      newArray.push(transform(a[i]));
    }
    return newArray;
  },

  /**
   * Format a string
   * Example:FB.Util.format('{0}.facebook.com/{1}', 'www', 'login.php') returns
   * 'www.facebook.com/login.php'
   */
  format: function (format) {
    if (!FB.Util.format._formatRE) {
      FB.Util.format._formatRE = /(\{[^\}^\{]+\})/g;
    }

    var values = arguments;

    return format.replace(FB.Util.format._formatRE,
                        function(str, m) {
                            var index = parseInt(m.substr(1));
                            var value = values[index + 1];
                            if (value === null || value === undefined) {
                                return '';
                            }
                            return value.toString();
                        });
  },

  quote: function(value) {
    var m = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        };

        var a,          // The array holding the partial texts.
                i,          // The loop counter.
                k,          // The member key.
                l,          // Length.
                r = /["\\\x00-\x1f\x7f-\x9f]/g,
                v;          // The member value.


        return r.test(value) ?
                    '"' + value.replace(r, function (a) {
                        var c = m[a];
                        if (c) {
                            return c;
                        }
                        c = a.charCodeAt();
                        return '\\u00' + Math.floor(c / 16).toString(16) +
                                                   (c % 16).toString(16);
                    }) + '"' :
                    '"' + value + '"';


  }
});

