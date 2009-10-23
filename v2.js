/*    HTTP Host:  www.wzhu-git.devrs002.facebook.com                           */
/*    Generated:  October 21st 2009 6:05:49 AM PDT                             */
/*      Machine:  10.20.11.184                                                 */
/*       Source:  Construction                                                 */
/*     Location:  JIT Construction: v194109                                    */
/*       Locale:  en_US                                                        */
/*   Components:  js/connect/v2/FB/core/base.js:r1255731855,js/connect/v2/FB/core/type.js:r1256121971,js/connect/v2/FB/core/event.js:r1255731855,js/connect/v2/FB/common/dom.js:r1255731855,js/connect/v2/FB/xdcomm/flash.js:r1255734375,js/connect/v2/FB/common/json.js:r1255731855,js/connect/v2/FB/common/uri.js:r1255731855,js/connect/v2/FB/common/util.js:r1256124417,js/connect/v2/FB/xdcomm/xdcomm.js:r1255734649,js/connect/v2/FB/ui/popupdlg.js:r1256021806,js/connect/v2/FB/ui/iframeresizer.js:r1255731855,js/connect/v2/FB/ui/dialog.js:r1255731855,js/connect/v2/FB/app.js:r1255731855,js/connect/v2/FB/common/md5.js:r1255731855,js/connect/v2/FB/api.js:r1256122757,js/connect/v2/FB/data/async.js:r1256084701,js/connect/v2/FB/data/data.js:r1256127837,js/connect/v2/v2.js.js:r1255731854,js/connect/v2/FB/core/loader.js:r1255731855 */

if (!window.FB) {FB = {};} if(!FB.dynData) { FB.dynData = {"site_vars":{"canvas_client_compute_content_size_method":1,"use_postMessage":1,"enable_custom_href":0},"resources":{"base_url_format":"http:\/\/{0}.wzhu-git.devrs002.facebook.com\/","base_cdn_url":"http:\/\/www.wzhu-git.devrs002.facebook.com\/","api_channel":1245446634,"api_server":1245446634,"www_channel":1253580927,"xd_proxy":1254919783,"xd_comm_swf_url":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z9PXE\/l\/FAKE_HASH\/en_US\/1253608950\/swf\/XdComm.swf","share_button":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z9WL7\/l\/FAKE_HASH\/en_US\/1238135659\/images\/share\/facebook_share_icon.gif","login_img_dark_small_short":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z6B8A\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_dark_small_short.gif","login_img_dark_medium_short":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z1AF3\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_dark_medium_short.gif","login_img_dark_medium_long":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/zBR5E\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_dark_medium_long.gif","login_img_dark_large_short":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/zJDDH\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_dark_large_short.gif","login_img_dark_large_long":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/zBM65\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_dark_large_long.gif","login_img_light_small_short":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/zCHJ7\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_light_small_short.gif","login_img_light_medium_short":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/zEUD4\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_light_medium_short.gif","login_img_light_medium_long":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z3LAU\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_light_medium_long.gif","login_img_light_large_short":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z2Z46\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_light_large_short.gif","login_img_light_large_long":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/zD5IK\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_light_large_long.gif","login_img_white_small_short":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z4FFF\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_white_small_short.gif","login_img_white_medium_short":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/zBONE\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_white_medium_short.gif","login_img_white_medium_long":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z5EGZ\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_white_medium_long.gif","login_img_white_large_short":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z7L53\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_white_large_short.gif","login_img_white_large_long":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/zDRYA\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/login-buttons\/connect_white_large_long.gif","logout_img_small":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z88HA\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/logout-buttons\/logout_small.gif","logout_img_medium":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z6NXX\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/logout-buttons\/logout_medium.gif","logout_img_large":"http:\/\/www.wzhu-git.devrs002.facebook.com\/rsrc.php\/z93KD\/l\/FAKE_HASH\/en_US\/1238135659\/images\/fbconnect\/logout-buttons\/logout_large.gif"}};} if (!FB.locale) {FB.locale = "en_US";} if (!FB.localeIsRTL) {FB.localeIsRTL = false;}
/**
 * @provides v2.FB.Base
 *
 * Provide a lowest level base functions for Connect JS. We should only place
 * commonly used generally purpose methods in this namespace
 * Every methods in this file are in FB namespace.
 */


/**
 * Copies things from source into targed.
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



/**
 * @provides v2.FB.Type
 * @requires v2.FB.Base
 */

/**
 * Provide Class/Type support
 *
 */
FB.provide('', {

  /**
   * Create a new class.
   * Note: I have to use 'Class' instead of 'class' because 'class' is
   * a reserved (but unused) keyword.
   * @param {string} name class name
   * @param {function} constructor class constructor
   * @param {object} proto instance methods for class
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
   */
  subclass: function(name, baseName, constructor, proto) {
    if (FB.CLASSES[name]) {
      return;
    }
    var base = FB.create(baseName);
    FB.copy(proto, base.prototype);
    proto._base = base;
    proto._callBase = function(method) {
      var args = Array.prototype.slice.call(arguments, 1);
      return base.prototype[method].apply(this, args);
    };

    var cls = FB.Class(name, constructor, proto);
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

/**
 * @provides v2.FB.Event
 * @requires v2.FB.Type v2.FB.Base
 */
/**
 * Basic Event system
 *
 * @class FB.Event
 * @private
 */
FB.provide('Event', {
  /**
   * Subscribe to an event on the given object
   * Example:
   * FB.Event.add(FB.App, 'session', function(session) {
   *   if (session) {
   *     // Yeah!. User is connected
   *     ...
   *     return true; // I don't need to listen anymore
   *   }
   *
   *   // Hmm. no session. Keep listening
   * }
   *
   * @param {object} obj object that exposes the named event
   * @param {string} name Name of event
   * @param {function} callback A callback function.
   * arguments may be passed to the callback. If the callback function
   * returns true, the event will be subscribed.
   *
   */
  add: function (obj, name, callback) {
    FB.Event._get(obj, name).add(callback);
  },

  /**
   * Unsubscribe to an event on the given object. Note you can also unsubscribe an event
   * by simply return true in the callback function provided to FB.Event.subscribe.
   * Example:
   * FB.Event.add(FB.App, 'connectState', mycallback);
   * ...
   * // Dont' need to subscribe to the event anymore
   * FB.Event.remove(FB.App, 'connectState', mycallback);
   * @param {object} obj object that exposes the named event
   * @param {string} name Name of event
   * @param {function} callback previous callback function passed to
   *        FB.Event.add
   */
  remove: function(obj, name, callback) {
    FB.Event._get(obj, name).remove(callback);
  },

  /**
   * Fire an event on the given object
   * @param {object} obj object that exposes the named event
   * @param {string} name Name of event
   * @param {object} args0, .., argN arguments to be passed to callback
   * functions
   *   that subscribed to the event
   */
  fire: function(obj, name) {
    var e = FB.Event._get(obj, name);
    e.invoke.apply(e, Array.prototype.slice.call(arguments, 2));
  },

  ////////////////////// Helper Methods ///////////////////////////////////////
  /**
   * Watch for changes
   * @param {object} obj object that exposes the named event
   * @param {string} name Name of event.
   * @param {function} callback A callback function. arguments may be passed to the callback.
   *     If the callback function returns true, the event will be unsubscribed.
   * @param {bool} no_sync_callback By default, the callback will be invoked immediately before
   *    the event is fired, unless this parameter specified a true value
   * @param {bool} auto_unsubscribe By default, the callback will be invoked whenever the event fires.
   *      However, if this parameter value is true, the callback will be unsubscribed from the event after
   *      it is fired once.
   */
  monitor: function(obj, name, callback, /*optional*/ no_sync_callback, /*optional*/ auto_unsubscribe) {
    if (no_sync_callback || !callback()) {
      if (auto_unsubscribe) {
        FB.Event.once(obj, name, callback);
      } else {
        FB.Event.add(obj, name, callback);
      }
    }
  },

  once: function (obj, name, callback) {
    FB.Event.add(obj, name, function(result) {
      callback(result);
      return true;
    });
  },

  /*
   * Set property on an object and fire property
   * changed event if changed
   * @private
   */
  setProperty: function(obj, propertyName, newValue) {
    // Check if property actually changed
    if(FB.JSON.serialize(newValue) != FB.JSON.serialize(obj[propertyName])) {
      obj[propertyName] = newValue;
      FB.Event.fire(obj, propertyName, newValue);
    }
  },

  _get: function(obj, name) {
    // It is a bit tricky to find a way to quickly
    // and safely attach events with a JavaScript object.
    // I decided to use a functin to store it so that
    // it won't alter JSON encoding behavior.
    //
    if (!obj.$evts) {
      obj.$evts = function(){};
      obj.$evts.map = {};
    }
    var map = obj.$evts.map;
    if (!map[name]) {
      map[name] =  new FB.Delegate();
    }
    return map[name];
  }

});



/**
 * @class FB.Delegate
 * @private
 */
FB.Class('Delegate',
  /*
   *  constructor
   */
  function() {
    this.subs = [];
  },

  /*
   * Instance methods
   */
  {
  add: function(callback) {
    this.subs.push(callback);
  },

  remove: function(callback) {
    for(var i=0; i < this.subs.length; i++) {
      if (this.subs[i] == callback) {
        delete this.subs[i];
        return;
      }
    }
  },

  invoke: function() {
    var args = arguments;
    var e = this;
    FB.forEach(this.subs.slice(), function(callback) {
      // Invoke handler. If handler returns true
      // remove it
      if (!callback || callback.apply(callback, args)) {
        e.remove(callback);
      }
    });
  }
});


/**
 * @provides v2.FB.Dom
 * @requires v2.FB.Base
 *
 * This provides helper methods related to DOM
 */

FB.provide('Dom', {
  /**
   * @param  {Object} dom
   * @param  {String} newClass
   */
  addCss: function(dom, newClass) {
    var cssClassWithSpace = ' ' + dom.className + ' ';
    var newClassWithSpace = ' ' + newClass + ' ';
    if (cssClassWithSpace.indexOf(newClassWithSpace) < 0) {
      dom.className = dom.className + ' ' + newClass;
    }
  },
  /**
   * @param  {Object} dom
   * @param  {String} className
   * @return  Boolean
   */
  containsCss: function(dom, className) {
    var cssClassWithSpace = ' ' + dom.className + ' ';
    return cssClassWithSpace.indexOf(' ' + className + ' ') >= 0;
  },
  /**
   * @param  {Object} dom
   * @param  {String} className
   */
  removeCss: function(dom, className) {
    var cssClassWithSpace = ' ' + dom.className + ' ';
    var classNameWithSpace = ' ' + className + ' ';
    var index = cssClassWithSpace.indexOf(classNameWithSpace);
    if (index >= 0) {
      var newClassName = cssClassWithSpace.substring(1, index) + cssClassWithSpace.substring(index + classNameWithSpace.length, cssClassWithSpace.length - 1);
      dom.className = newClassName;
    }
  },

  /*
   * Get a hidden DOM container element. This is used to store hidden
   * iframes. If developers do not want the document.write to be called,
   * they can create their own hidden div named "FB_HiddenContainer".
   */
  getHidden: function() {
    if (FB.$('FB_HiddenContainer') == null) {
      if (!document.readyState || document.readyState == "complete") {
        var hiddenDiv = document.createElement('div');
        hiddenDiv.id = "FB_HiddenContainer";
        hiddenDiv.style.position = "absolute";
        hiddenDiv.style.top = "-10000px";
        hiddenDiv.style.width = "0px";
        hiddenDiv.style.height = "0px";
        document.body.appendChild(hiddenDiv);
      } else {
        document.write('<div id="FB_HiddenContainer" '
                     + 'style="position:absolute; top:-10000px; left:-10000px; width:0px; height:0px;" >'
                     + '</div>');
      }
    }
    return FB.$('FB_HiddenContainer');
  },

  /**
   * Create a hidden iframe
   */
  createHiddenIFrame: function(src) {
    var receiverDom = document.createElement('iframe');
    receiverDom.className = 'FB_RECEIVER_DOM';
    //  There is IE bug with iframe cache that we have to work around:
    //  Dynamically load the iframe to dummy content before loading the real content, as shown below.
    //  This works because the cached stream that exists after a refresh is consumed by the initial
    //  dummy load, and the second load fetches the content as expected.
    //  Must be javascript:false instead of about:blank, otherwise IE6 will complain in https
    if (!FB.Dom._iframeCreated && FB.Dom.getBrowserType() === 'ie') {
      receiverDom.src = 'javascript:false';
      FB.Dom._iframeCreated = true;
    }
    //  We have to set the src property in carefully chosen (after days of painfully hacking :-))
    //  in order to get them to work properly on IE and Firefox.
    //  On IE, we need to set the src property before the DOM elemnt is inserted into
    //  the document tree in order to avoid the clicking sound IE generates whenever an iframe
    //  element's src changes.
    //  On Firefox, doing so caused a very nasty bug where the iframe's content will always
    //  reload with original content when the top page is reloaded with
    //  window.location.reload() method (see https://bugzilla.mozilla.org/show_bug.cgi?id=279048).
    //  I found that we appears to be able to avoid the Firefox bug by setting the src attribute
    //  after inserting the iframe element into the document tree.
    if (FB.Dom.getBrowserType() === 'ie') {
      receiverDom.src = src;
      receiverDom = FB.Dom.getHidden().appendChild(receiverDom);
    }
    else {
      receiverDom = FB.Dom.getHidden().appendChild(receiverDom);
      receiverDom.src = src;
    }
    return receiverDom;
 },

 /**
  * Dynamically add a script tag
  */
 addScript: function(src) {
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = src;
  return document.getElementsByTagName('HEAD')[0].appendChild(script);
 },

 /**
   * Get location of the browser window relative to computer screen
   * windowLocation
   * @return  FB.Point
   */
  getWindowLocation: function() {
    var lc = {x:0, y:0};
    var l, t;
    if(window.screenLeft) {
      l = window.screenLeft;
      t = window.screenTop;
    } else {
      l = window.screenX;
      t = window.screenY;
    }
    lc.x = l;
    lc.y = t;;
    //  We need to check for undefined because undefined does not
    //  behave the same as 0 in math operations.
    if (lc.x === undefined) {
      lc.x = 0;
    }
    if (lc.y === undefined) {
      lc.y = 0;
    }
    return lc;
  },

  /**
   * Get browser window size
   * windowSize
   * @return  FB.Size
   */
  getWindowSize: function() {
    return {w: (window && window.innerWidth)                                           ||
      (document && document.documentElement
                && document.documentElement.clientWidth)                      ||
      (document && document.body && document.body.clientWidth)                ||
      0,
      h: (window && window.innerHeight)                                          ||
      (document && document.documentElement
                && document.documentElement.clientHeight)                     ||
      (document && document.body && document.body.clientHeight)               ||
      0};
  },


  /**
   * Remove a dom element from dom tree
   * @param  {Object} element
   */
  removeDom: function(element) {
    if (element) {
      var parent = element.parentNode;
      if (parent) {
        parent.removeChild(element);
      }
    }
  },

  /**
   * Get browser type
   * @return string 'ie' | 'mozilla' |'safari' | 'other'
   */
  getBrowserType: function() {
    if (!FB.Dom._browserType) {
      var userAgent = window.navigator.userAgent.toLowerCase();
          // list of known browser and
          keys = ['msie', 'firefox', 'gecko',   'safari'];
          names = ['ie',  'mozilla', 'mozilla', 'safari'];
      this.hostName = 'other';
      for(var i = 0; i < keys.length; i++) {
        if (userAgent.indexOf(keys[i]) >= 0) {
          FB.Dom._browserType = names[i];
          return;
        }
      }
    }
    return FB.Dom._browserType;
  }
});

/**
 * @provides v2.FB.Flash
 * @requires v2.FB.Base v2.FB.Event v2.FB.Dom
 */

// XdComm part of flash
//
FB.provide('Flash', {
  state: undefined,

  init: function() {
    if (FB.Flash.getState() != 'disabled') {
      // This function will be called when XdComm flash
      // is ready
      window.FB_OnFlashXdCommReady = function() {
        FB.Event.setProperty(FB.Flash, 'isReady', true);
      }

      var html = '<object type="application/x-shockwave-flash" id="XdComm" ' +
           (FB.Dom.getBrowserType() == 'ie' ?
                 'name="XdComm" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' :
                 'data="' + swf + '" ') +
        'allowscriptaccess="always"><param name="movie" value="' + swf +
        '"></param><param name="allowscriptaccess" value="always"></param></object>',
      div = document.createElement('div');
      div.innerHTML = html;
      FB.HiddenContainer.get().appendChild(div);
    }
  },

  getState : function() {
    if (!FB.Flash.state) {
      var verArray = [ '0', '0' ];
      var isIE = FB.Dom.getBrowserType() == 'ie';
      var plugins = navigator.plugins;
      if (plugins && plugins.length > 0) {
        if (plugins['Shockwave Flash 2.0'] || plugins['Shockwave Flash']) {
          var description;
          if (plugins['Shockwave Flash 2.0']) {
            description = (plugins['Shockwave Flash 2.0'].description);
          }
          else {
            description = (plugins['Shockwave Flash'].description);
          }
          verArray = description.split(' ')[2].split('.');
        }
      }
      else if (isIE) {
        var versionStr = null;
        var activexObj;
        try {
          activexObj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7');
          versionStr = activexObj.GetVariable('$version');
        }
        catch (e1) {
        }
        if (!versionStr) {
          try {
            activexObj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
            versionStr = 'WIN 6,0,21,0';
          }
          catch (e2) {
          }
        }
        if (versionStr) {
          verArray = versionStr.split(' ')[1].split(',');
        }
      }

      // We currently require minimum version of 9.0
      FB.Event.setProperty(FB.Flash, 'state',
                           parseInt(verArray[0]) >= 9 ? 'hasVersion' : 'disabled');
    }

    return FB.Flash.state;
  },

  /**
   * Custom decoding to workaround bug in flash's ExternInterface
   * Code is from Dojo's library
   * @param  {String} data
   * @return  String
   */
  decode: function(data) {

    // wierdly enough, Flash sometimes returns the result as an
    // 'object' that is actually an array, rather than as a String;
    // detect this by looking for a length property; for IE
    // we also make sure that we aren't dealing with a typeof string
    // since string objects have length property there
    if(data && data.length && typeof data != "string"){
      data = data[0];
    }

    if(!data || typeof data != "string"){
      return data;
    }

    // certain XMLish characters break Flash's wire serialization for
    // ExternalInterface; these are encoded on the
    // DojoExternalInterface side into a custom encoding, rather than
    // the standard entity encoding, because otherwise we won't be able to
    // differentiate between our own encoding and any entity characters
    // that are being used in the string itself
    data = data.replace(/\&custom_lt\;/g, "<");
    data = data.replace(/\&custom_gt\;/g, ">");
    data = data.replace(/\&custom_backslash\;/g, '\\');

    // needed for IE; \0 is the NULL character
    data = data.replace(/\\0/g, "\0");;
    return data;
  }
});

/**
 * @provides v2.FB.JSON
 * @requires v2.FB.Base
 */

/**
 * JSON functions
 * @namespace FB.JSON
 * @private
 */
FB.provide('JSON', {
  deserialize: function(s) {
    if (!s) {
        return null;
    }
    return eval('(' + s + ')');
  },

  serialize: function(o) {
    if (o === null || o === undefined) {
        return '';
    }
    var sb = [];
    FB.JSON._serializeCore(sb, o);
    return sb.join('');
  },

  _serializeCore: function(sb, o) {
    if (o === null || o === undefined) {
        sb.push('null');
        return;
    }
    var scriptType = typeof(o);

    switch (scriptType) {
        case 'boolean':
            sb.push(o.toString());
            return;
        case 'number':
            sb.push((isFinite(o)) ? o.toString() : 'null');
            return;
        case 'string':
            sb.push(FB.Util.quote(o));
            return;
        case 'object':
            if (o instanceof Array) {
                sb.push('[');
                var a = o;
                var length = a.length;
                var first = true;
                for (var i = 0; i < length; i++) {
                    if(typeof(a[i]) == 'function') {
                        continue;
                    }

                    if (first) {
                        first = false;
                    }
                    else {
                        sb.push(',');
                    }
                    FB.JSON._serializeCore(sb, a[i]);
                }
                sb.push(']');
            }
            else if (o instanceof Date) {
                var d = o;
                var utcValue = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
                sb.push('\"\\@');
                sb.push(utcValue.toString());
                sb.push('@\"');
            }
            else if (o instanceof RegExp) {
                sb.push(o.toString());
            }
            else {
                sb.push('{');
                var first = true;
                var $dict1 = o;
                for (var $key2 in $dict1) {
                    var entry = { key: $key2, value: $dict1[$key2] };
                    if (entry.key.charAt(0) == '$') {
                        continue;
                    }

                    if(typeof(entry.value) == 'function') {
                        continue;
                    }
                    if (first) {
                        first = false;
                    }
                    else {
                        sb.push(',');
                    }

                    sb.push('"' + entry.key + '"');
                    sb.push(':');
                    FB.JSON._serializeCore(sb, entry.value);
                }
                sb.push('}');
            }
            return;
        default:
            sb.push('null');
            return;
    }
  }
});

/**
 * @provides v2.FB.Uri
 * @requires v2.FB.Base
 *
 */

/**
 * Uri related functions
 * Note: I am creating a separate Uri component instead of putting it into
 * FB.Util because I expect that we will add more Uri related methods back
 * over time.
 * @namespace FB.Uri
 * @private
 */
FB.provide('Uri', {
  /*
   * combine
   */
  combine: function(absolute, relative) {
    return (absolute.match(/.*\//) + relative).replace(/(https?:\/\/[^\/]+)([^:]*\/\/)(.*)$/, '$1/$3')
  },

  /**
   * Given a dictionary mapping name to param
   * returns a query string with encoded values.
   * @param  {Object} q_params
   * the dictionary
   * @param {function} optional encoder for values
   * @return  String
   */
  createQueryString: function(params, valueEncoder) {
    var keyValues = [];
    FB.forEach(params, function(value, key) {
                 keyValues.push(key + (value === '' ? '' :
                                       '=' + encodeURIComponent(
                                         typeof(value) != 'string' &&  valueEncoder ?
                                           valueEncoder(value) : value)));
                 });
    return keyValues.join('&');
  }
});


/**
 * @provides v2.FB.Util
 * @requires v2.FB.Base
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


/**
 * @provides v2.FB.XdComm
 * @requires v2.FB.Base  v2.FB.Util
 *           v2.FB.Uri  v2.FB.JSON v2.FB.Event v2.FB.Flash
 *
 */


/**
 * Server for cross domain communication
 * @class FB.XdComm
 * @private
 */
FB.provide('XdComm', {
  /**
   * Local receiver URL
   * receiverUrl
   * @param  {String} value
   */
  setReceiverUrl: function(value) {
    FB.XdComm.receiverUrl = value ? FB.Uri.combine(document.URL, value) :
      FB.dynData.resources.base_cdn_url + 'connect/xd_proxy.php#?=&';

    // The origin is used for:
    // 1) postMessage origin, provides security
    // 2) Flash Local Connection name
    // It is required and validated by Facebook as part of the xd_proxy.php.
    FB.XdComm._origin =
      window.location.protocol +
        '//' +
        window.location.host +
        '/' +
        FB.Util.createUnique();

    if (window.addEventListener && window.postMessage) {
      FB.XdComm._transport = 'postmessage';
    } else if (FB.Flash.getState() == 'hasVersion') {
      FB.XdComm._transport = 'flash';
    } else {
      FB.XdComm._transport = 'fragment';
    }

    window.addEventListener
      ? window.addEventListener('message', FB.XdComm._onNativeMessage, false)
      : window.attachEvent('onmessage', FB.XdComm._onNativeMessage);

    FB.Flash.init();
    FB.Event.once(FB.Flash, 'isReady', function() {
      document.XdComm.postMessage_init('FB.XdComm._onFlashMessage',
      FB.XdComm._origin);
    });
  },

  /**
   * Create an url that can be used to send a UDP like single message to
   * the specified end point when this url is opened.
   * @param {function} callback
   * @param  {Object} data
   * data to send.
   * @param  {FB.XdComm.EndPoint} endPoint
   * target to send message to
   * @param  {FB.XdComm.PacketDataFormat} dataFormat
   * format of data attached to string, default JSON
   * @return  String
   */
  getUdp: function(callback, data, endPoint, isRaw) {
    var handlerName = 'udp_' + FB.Util.createUnique();

    FB.Event.once(FB.XdComm, handlerName, callback);

    var packet = {
      t: 3, // udpSingle
      h: handlerName,
      sid:FB.XdComm._id,
      df: isRaw ? 1 : 0
    };

    //  Note that we don't specify packet.d in sending because we don't use
    //  JSON to encode packet.d
    var url = FB.XdComm.receiverUrl + '#fname=_' + endPoint + '&' +
      encodeURIComponent(FB.JSON.serialize(packet));

    url += encodeURIComponent(isRaw? data : FB.JSON.serialize(data));
    return url;
  },

  _onNativeMessage: function(event) {
    FB.XdComm._onData(event.data);
  },

  _onFlashMessage: function(message) {
    FB.XdComm._onData(decodeURIComponent(message));
  },


  /**
   * This method should be called by XdCommReceiver.js only!
   * @param  {String} hash
   */
  onReceiverLoaded: function(hash) {
    if (hash) {
      // There appears to be bug with Firefox's XMLHttpRequest when
      // it's run in the context of another iframe. I have to use this
      // workaround
      window.setTimeout(function() {
        //  The hashString is created in this format.
        //  Data can either be URI-encoded JSON, or raw text
        //  uriencode(json_encode(packet)) + data
        //  Here's an example string. %7D (which is "}") is the end of the packet
        //  %7B%22t%22%3A3%2C%22h%22%3A%22openIDresponse%22%2C%22sid%22%3A%220.672%22%7D?arbitrary=data&other=data
        var packetLength = hash.indexOf('%7D') + 3,
          packet = FB.JSON.deserialize(decodeURIComponent(hash.substring(0, packetLength)));
          dataString = hash.substr(packetLength);

        if (packet.sid && packet.sf) {
          FB.XdComm._senders[packet.sid] = packet.sf;
        }

        FB.Event.fire(FB.XdComm, packet.h,
                    packet.df ==  1? dataString : FB.JSON.deserialize(decodeURIComponent(dataString)),
                    {frameName:FB.XdComm._senders[packet.sid]});
      });
    }
  },

  _onData: function(data) {
    debugger;
  },

  /**
   * Register an RPC service. This allow us backward compatibility that would make migration from v1
   * smoother since we will have to support both for some time.
   * @constructor
   * @param  {String} rpcServerName
   * Name of the server
   * @param  {Object} registeredMethodMap
   * Methods to register as "legal" to be
   * called from this server
   */
  regRpc: function(rpcServerName, registeredMethodMap) {
   FB.Event.add(FB.XdComm, rpcServerName, function(data, sender) {
      registeredMethodMap[data[2]](data[3], sender);
                                    });
  },


  /**
   *
   * @type  String
   */
  receiverUrl: null,

  _senders: {},

  /**
   *
   * @type  String
   */
  _id: FB.Util.createUnique()
});



// Set up Server and onReceiverLoaded to backwards compat
FB.XdComm.Server = {
  singleton: {
    onReceiverLoaded: FB.XdComm.onReceiverLoaded
  }
};



/**
 * @provides v2.FB.UI.PopupWin
 * @requires v2.FB.Type v2.FB.Util v2.FB.Event v2.FB.XdComm v2.FB.Dom
 */

/**
 * @class FB.UI.PopupWin
 */
FB.Class('UI.PopupWin',
  /*
   * constructor
   */
  function() {
    this.id = FB.Util.createUnique();
  },

  /*
   * Instance methods
   */
  {
  set: function(title, src, w, h) {
    //  We want to place the login popup window relative to
    //  center of the current browser window.
    var windowLocation = FB.Dom.getWindowLocation();
    var windowSize = FB.Dom.getWindowSize();
    var popupScreen = {x: Math.max(0, windowLocation.x +
                                (windowSize.w - w) / 2),
                       y: Math.max(0,
                                windowLocation.y +
                                (windowSize.h - h) / 2)};

    this.win = window.open(src, '_blank',
         FB.Util.format('location=yes,left={0},top={1},width={2},height={3},resizable=yes',
                       popupScreen.x, popupScreen.y, w, h), true);

    // Monitor window being closed by user directly
    var timerId = setInterval(FB.bind(function() {
      if (this.win && this.win.closed){
        clearInterval(timerId);
        this.close();
      }
    }, this), 100);
  },

  /**
   * Close this popup window
   */
  close: function(result) {
    if (this.win && !this.win.closed) {
      this.win.close();
    }
    this.win = null;
    FB.Event.fire(this, 'closed', result);
  },

  createClosingUrl: function(ctx) {
    var handlerName = 'fbClose' + this.id;
    dlg = this;
    return FB.XdComm.getUdp(
      function(data, sender) {
        dlg.close(data);
      }, null, 'opener', true);
  }
});


/**
 * @provides v2.FB.IframeResizer
 * @requires v2.FB.Base v2.FB.XdComm
 *
 */

/**
 * This class enable service to allow iframe to request size changes
 * @class FB.IframeResizer
 */
FB.provide('IframeResizer', {
  start: function() {
    FB.XdComm.regRpc('iframeOuterServer',
      {'setCanvasHeight': function(height, sender) {
        FB.IframeResizer.getFrame(sender.frameName).style.height = height;
      }});
  },
  getFrame: function(name) {
    var frames = document.getElementsByTagName('iframe');
    for (var i=0; i < frames.length; i++ ) {
      if(frames[i].name == name) {
        return frames[i];
      }
    }
  }
});


/**
 * @provides v2.FB.UI.Dialog
 * @requires v2.FB.Type v2.FB.Base v2.FB.XdComm v2.FB.Util v2.FB.Dom v2.FB.Event v2.FB.IframeResizer v2.FB.UI.Dialog-css
 */

/**
 * An iframe dialog
 * @class FB.UI.Dialog
 */
FB.Class('UI.Dialog',
  // Constructor
  function() {
    this.id = 'fb_dialog_' + Math.random().toString();
    FB.UI.Dialog.dlgs[this.id] = this;
  },

  // Instance methods
  {
  set: function(title, content) {
    FB.IframeResizer.start();
    var html = FB.Util.format('<table id="{0}" class="fb_pop_dialog_table"><tr><td class="fb_pop_topleft"></td><td class="fb_pop_border"></td><td class="fb_pop_topright"></td> </tr><tr><td class="fb_pop_border"></td><td class="fb_pop_content" id="pop_content"><div class ="fb_pop_content_container"><h2 class="fb_resetstyles"> <div class="fb_dialog_icon"></div> <span class="fb_dialog_header" id="fb_dialog_header">{1}</span> <div class="fb_dialog_loading_spinner" id="fb_dialog_loading_spinner">&nbsp;</div> <a id="fb_dialog_cancel_button" class="fb_dialog_cancel_button" title="close dialog" href="#" onclick="FB.UI.Dialog.close({2})">&nbsp;</a> </h2> <div id="fb_dialog_content" class="fb_dialog_content">{3}</div> </div> </td> <td class="fb_pop_border"></td> </tr> <tr> <td class="fb_pop_bottomleft"></td> <td class="fb_pop_border"></td> <td class="fb_pop_bottomright"></td> </tr> </table>',
          this.id, title,
          "'" + this.id + "'",
          content);
    FB.UI.Dialog.getContainer().innerHTML += html;
    this.dom = FB.$(this.id);


    this.dom.style.width = '700px';

    var windowSize = FB.Dom.getWindowSize();
    var target = document.documentElement;
    var topHeight = target.scrollTop > 0 ? target.scrollTop :
                     document.body.scrollTop;
    var location = {x: Math.max(0, target.scrollLeft + (windowSize.w -700) / 2),
                    y: Math.max(0, topHeight + windowSize.h / 2) - 200};

    this.dom.style.left = location.x.toString() + 'px';
    this.dom.style.top = location.y.toString() + 'px';
  },

  createClosingUrl: function(ctx) {
    return FB.XdComm.getUdp(
      function(data, sender) {
        FB.UI.Dialog.close(data.token, data);
      },
      {
        token: this.id,
        ctx: ctx,
        data:'xxRESULTTOKENxx'
      }, 'parent');
  }
});

FB.provide('UI.Dialog', {
  /**
   * _popupContainer
   * @return  Object
   */
  getContainer: function() {
    if (!FB.UI.Dialog._popupContainer) {
      FB.UI.Dialog._popupContainer = FB.$('fb_popupContainer');
      if (!FB.UI.Dialog._popupContainer) {
        var div = document.createElement('div');
        div.className = 'fb_resetstyles fb_popupContainer';
        FB.UI.Dialog._popupContainer = document.body.appendChild(div);
      }
    }
    else {
      // Ensure that the container is the last of the body's children
      FB.UI.Dialog._popupContainer = document.body.appendChild(FB.UI.Dialog._popupContainer);
    }
    return FB.UI.Dialog._popupContainer;
  },

  close: function(id, result) {
    var dlgs = FB.UI.Dialog.dlgs,
    dlg = dlgs[id];
    FB.Event.fire(dlg, 'closed', result);
    FB.Dom.removeDom(dlg.dom);
    delete dlgs[id];
  },

  dlgs : {}
});

/**
 * @provides v2.FB.App
 * @requires v2.FB.Base v2.FB.Event v2.FB.XdComm v2.FB.UI.PopupWin, v2.FB.UI.Dialog v2.FB.Dom
 *
 */


/**
 * This module provides application settings, states (session states, permissions, etc.) and auth related
 * methods (connect, logout)
 * @namespace FB.App
 */
FB.provide('App', {
  /**
   * A dictionary of advanced facebook settings.
   * Currently supported key/value are:
   * @type object
   */
  settings: {
    'checkStatusOnInit': true   // By default, we will start checking connect status when FB.init is called
  },

  /**
   * current session.
   * When session exists, it is standard session structure that contains session_key,
   * uid, session_secret, expire_time
   * Note we use undefined
   * to signal that we don't know yet
   * @type object
   */
  session: undefined,

  /**
   * current connect status. Note we use undefined
   * to signal that we don't know yet
   * @type string
   */
  status: undefined,

  /**
   * initialize an Facebook app. xdChannelUrl parameter may not be needed if stats shows postMessage and flash XdComm have enough coverage
   * @param  {String} apiKey
   * API key for your Facebook application
   * @param  {String} xdChannelUrl
   * Relative URL to the cross-domain
   * channel file located on your servers.
   * @param  {Object} settings
   * An optional dictionary of other application settings.
   * Currently supported key/value are:
   */
  init: function(apiKey, xdChannelUrl, settings) {
    // Check if init is already called.
    if (FB.App.apiKey) {
      return;
    }

    FB.App.apiKey = apiKey;
    if (settings) {
      FB.copy(FB.App.settings, settings);
    }

    if (FB.XdComm) {
      FB.XdComm.setReceiverUrl(xdChannelUrl);
    }

    if (FB.App.settings.checkStatusOnInit) {
      FB.App._checkStatus();
      // Also start a timer to check every 60 min because our session expires
      // every two hours.
      setInterval(FB.App._checkStatus, 60 * 60 * 1000);
    }

    FB.Event.fire(FB.App, 'init');
  },

  /**
   * Watch for changes in FB.App.
   * @param {string} name Name of event. possible values are 'session', 'status', 'init'
   * @param {function} callback A callback function. arguments may be passed to the callback.
   *     If the callback function returns true, the event will be unsubscribed.
   * @param {bool} no_sync_callback By default, the callback will be invoked immediately before
   *    the event is fired, unless this parameter specified a true value
   * @param {bool} auto_unsubscribe By default, the callback will be invoked whenever the event fires.
   *      However, if this parameter value is true, the callback will be unsubscribed from the event after
   *      it is fired once.
   */
  monitor: function(name, callback, /*optional*/ no_sync_callback, /*optional*/ auto_unmonitor) {
    FB.Event.monitor(FB.App, name,  callback, no_sync_callback, auto_unmonitor);
  },

  /**
   * Add connect method to FB.App
   * This method is in a separate component because App's don't always
   * need to call connect method.
   * @namespace FB.App
   * @param {function} callback Callback to be invoked after connect result is known
   * @param {object} options
   */
  connect: function(callback, options) {
    // Check if we have session already
    if (FB.App.session) {
      callback(FB.App.session);
      return;
    }

    // Create login window if it's not already
    // open
    if (!FB.App._loginWin) {
      // Create a popup window dialog
      var dlg = new FB.UI.PopupWin(),
      q_params = {
        return_session: 1,
        nochrome: 1,
        fbconnect: 1,
        extern: 0,
        display: 'popup',
        api_key: FB.App.apiKey ,
        v: FB.App.version,
        next: dlg.createClosingUrl(),
        cancel_url: dlg.createClosingUrl(),
        'perms': (options && options.perms) || ''
      },

      url = FB.Util.getFacebookUrl('www') + 'login.php?' +
              FB.Uri.createQueryString(q_params);

      // When the dialog is closed, we will get an possible session
      // string back. At that time, we need to process updates
      // to FB.App.session and FB.App.connectState, then
      // fire a 'logoutResult' event to notify all the callback
      // functions passed to FB.App.connect methods.
      FB.Event.add(dlg, 'closed', function(data) {
        FB.App._loginWin = null;
        FB.App._onStatus(data);
        FB.Event.fire(FB.App, 'loginResult', FB.App.session)
        });
      dlg.set('Login', url, 448, 426);
      FB.App._loginWin = dlg;
    }

    // Listen to loginResult event, which will be fired when
    // login popup closes.
    // Note we use event here because multiple FB.App.connect
    // calls may be made while a single login popup is up.
    // With event module, it naturally takes cares of notifying
    // multiple callbacks
    FB.Event.once(FB.App, 'loginResult', callback);
  },

  /**
   * Log out of current session and facebook if current session.
   * Note this method is a separate component because logout method
   * is not always needed.
   * @param {function} callback This function will be called when operation is completed
   */
  logout: function(callback) {
    // Check if we have session already
    if (!FB.App.session) {
      callback();
      return;
    }

    // Construct query parameters to logout.php
    q_params = {
      api_key: FB.App.apiKey,
      session_key: FB.App.session.session_key,
      next: FB.XdComm.getUdp(function() {
          FB.App._onStatus('');
          callback();
        }, null, 'parent')
    };

    // Create a hiden iframe to perform the logout
    url = FB.Util.getFacebookUrl('www') + 'logout.php?' +
        FB.Uri.createQueryString(q_params);
    FB.Dom.createHiddenIFrame(url);
  },

  ///////////////////////// Private Members ///////////////////////////////////

  /**
   * callback handler when status string returned from somewhere (login_status,
   * login.php, etc.) Our existing wire prototype is not clean (not JSON
   * encoded), so we basically do some simple parsing for now.
   * @private
   */
  _onStatus: function(data) {
    var sessionKey = 'session=';
    var i = data.indexOf(sessionKey);
    var value = 'no_user';
    if (i >= 0) {
      var s = decodeURIComponent(data.substr(i + sessionKey.length));
      value = 'connected';
      FB.Event.setProperty(FB.App, 'session', FB.JSON.deserialize(s));
    } else if (data.indexOf('not_connected') >= 0) {
      value = 'not_connected';
    }

    FB.Event.setProperty(FB.App, 'status', value);
  },


  /**
   * This function create an hidden iframe to login_status.lphp
   * @private
   */
  _checkStatus: function() {
    var q_params = { api_key: FB.App.apiKey, extern: 0,
        ok_session: FB.XdComm.getUdp(FB.App._onStatus, null, 'parent', true),
        no_session: FB.XdComm.getUdp(FB.App._onStatus, 'not_connected', 'parent', true),
        no_user: FB.XdComm.getUdp(FB.App._onStatus, 'no_user', 'parent', true)
    };

    FB.Dom.createHiddenIFrame(
        FB.Util.getFacebookUrl('www') + 'extern/login_status.php?' +
        FB.Uri.createQueryString(q_params));
  }
});


/**
* @provides v2.FB.Md5
* @requires v2.FB.Base v2.FB.Util
*
* MD5 (Message-Digest Algorithm)
* http://www.webtoolkit.info/
*
**/

// thanks http://pajhome.org.uk/crypt/md5/md5.html
FB.provide('Md5', {

  /**
   * Generate the signature that Facebook expects from the parameters
   * by appending them all in a string with your application secret,
   * and taking the MD5 of that.
   * @param  {Object} parameters
   * The parameters to use in the signature
   * @param  {String} secret
   * Secret to use to sign the parameters
   * @return  String
   */
  sign: function(parameters, secret) {
    // Use an array as string builder to avoid expensive
    // string concat
    var sb = [];

    // We need to sort parameter by keys and append key/value
    // pairs.
    FB.forEach(FB.Util.obj2array(parameters).sort(), function(key) {
     sb.push(key + '=' + parameters[key]);
    });

    //  Append the secret to the string
    //  Compute the MD5 hash of the signature builder
    return  FB.Md5.sum(sb.join('') + secret);
  },

  sum: function(input) {
  // FLOW: input -> utf8 input -> bin input -> bin md5 -> utf8 md5 -> hex md5
  var
    hex_vocab = '0123456789abcdef',

    raw_input = '',
    raw_input_bits_len,
    bin_input,
    bin_md5,
    raw_md5 = '',
    hex_md5 = '',

    i = -1,
    x,
    y;


  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    return (((x >> 16) + (y >> 16) + (lsw >> 16)) << 16) | (lsw & 0xFFFF);
  }

  // basic operations
  function cmn(q, a, b, x, s, t) {
    var num = safe_add(safe_add(a, q), safe_add(x, t));
    return safe_add((num << s) | (num >>> (32 - s)), b);
  }
  function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
  }
  function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
  }
  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
  }


  // encode string to utf-8
  while (++i < input.length) {
    /* decode utf-16 surrogate pairs */
    x = input.charCodeAt(i);
    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
    if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
      x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
      i++;
    }

    /* encode raw_input as utf-8 */
    if (x <= 0x7F) {
      raw_input += String.fromCharCode(x);
    } else if (x <= 0x7FF) {
      raw_input += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F),
                                       0x80 | ( x         & 0x3F));
    } else if (x <= 0xFFFF) {
      raw_input += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                                       0x80 | ((x >>> 6 ) & 0x3F),
                                       0x80 | ( x         & 0x3F));
    } else if (x <= 0x1FFFFF) {
      raw_input += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                                       0x80 | ((x >>> 12) & 0x3F),
                                       0x80 | ((x >>> 6 ) & 0x3F),
                                       0x80 | ( x         & 0x3F));
    }
  }


  // number of bits in the raw utf-8 string
  raw_input_bits_len = raw_input.length * 8;


  // string to little-endian array words
  bin_input = Array(raw_input.length >> 2);
  for (i = 0; i < bin_input.length; i++) {
    bin_input[i] = 0;
  }
  for (i = 0; i < raw_input_bits_len; i += 8) {
    bin_input[i>>5] |= (raw_input.charCodeAt(i / 8) & 0xFF) << (i%32);
  }


  // calculate md5 as little-endian array words
  // padding
  bin_input[raw_input_bits_len >> 5] |= 0x80 << ((raw_input_bits_len) % 32);
  bin_input[(((raw_input_bits_len + 64) >>> 9) << 4) + 14] = raw_input_bits_len;

  var
    a =  1732584193,
    b = -271733879,
    c = -1732584194,
    d =  271733878;

  for (i = 0; i < bin_input.length; i += 16) {
    var
      olda = a,
      oldb = b,
      oldc = c,
      oldd = d;

    a = ff(a, b, c, d, bin_input[i+ 0], 7 , -680876936);
    d = ff(d, a, b, c, bin_input[i+ 1], 12, -389564586);
    c = ff(c, d, a, b, bin_input[i+ 2], 17,  606105819);
    b = ff(b, c, d, a, bin_input[i+ 3], 22, -1044525330);
    a = ff(a, b, c, d, bin_input[i+ 4], 7 , -176418897);
    d = ff(d, a, b, c, bin_input[i+ 5], 12,  1200080426);
    c = ff(c, d, a, b, bin_input[i+ 6], 17, -1473231341);
    b = ff(b, c, d, a, bin_input[i+ 7], 22, -45705983);
    a = ff(a, b, c, d, bin_input[i+ 8], 7 ,  1770035416);
    d = ff(d, a, b, c, bin_input[i+ 9], 12, -1958414417);
    c = ff(c, d, a, b, bin_input[i+10], 17, -42063);
    b = ff(b, c, d, a, bin_input[i+11], 22, -1990404162);
    a = ff(a, b, c, d, bin_input[i+12], 7 ,  1804603682);
    d = ff(d, a, b, c, bin_input[i+13], 12, -40341101);
    c = ff(c, d, a, b, bin_input[i+14], 17, -1502002290);
    b = ff(b, c, d, a, bin_input[i+15], 22,  1236535329);

    a = gg(a, b, c, d, bin_input[i+ 1], 5 , -165796510);
    d = gg(d, a, b, c, bin_input[i+ 6], 9 , -1069501632);
    c = gg(c, d, a, b, bin_input[i+11], 14,  643717713);
    b = gg(b, c, d, a, bin_input[i+ 0], 20, -373897302);
    a = gg(a, b, c, d, bin_input[i+ 5], 5 , -701558691);
    d = gg(d, a, b, c, bin_input[i+10], 9 ,  38016083);
    c = gg(c, d, a, b, bin_input[i+15], 14, -660478335);
    b = gg(b, c, d, a, bin_input[i+ 4], 20, -405537848);
    a = gg(a, b, c, d, bin_input[i+ 9], 5 ,  568446438);
    d = gg(d, a, b, c, bin_input[i+14], 9 , -1019803690);
    c = gg(c, d, a, b, bin_input[i+ 3], 14, -187363961);
    b = gg(b, c, d, a, bin_input[i+ 8], 20,  1163531501);
    a = gg(a, b, c, d, bin_input[i+13], 5 , -1444681467);
    d = gg(d, a, b, c, bin_input[i+ 2], 9 , -51403784);
    c = gg(c, d, a, b, bin_input[i+ 7], 14,  1735328473);
    b = gg(b, c, d, a, bin_input[i+12], 20, -1926607734);

    a = hh(a, b, c, d, bin_input[i+ 5], 4 , -378558);
    d = hh(d, a, b, c, bin_input[i+ 8], 11, -2022574463);
    c = hh(c, d, a, b, bin_input[i+11], 16,  1839030562);
    b = hh(b, c, d, a, bin_input[i+14], 23, -35309556);
    a = hh(a, b, c, d, bin_input[i+ 1], 4 , -1530992060);
    d = hh(d, a, b, c, bin_input[i+ 4], 11,  1272893353);
    c = hh(c, d, a, b, bin_input[i+ 7], 16, -155497632);
    b = hh(b, c, d, a, bin_input[i+10], 23, -1094730640);
    a = hh(a, b, c, d, bin_input[i+13], 4 ,  681279174);
    d = hh(d, a, b, c, bin_input[i+ 0], 11, -358537222);
    c = hh(c, d, a, b, bin_input[i+ 3], 16, -722521979);
    b = hh(b, c, d, a, bin_input[i+ 6], 23,  76029189);
    a = hh(a, b, c, d, bin_input[i+ 9], 4 , -640364487);
    d = hh(d, a, b, c, bin_input[i+12], 11, -421815835);
    c = hh(c, d, a, b, bin_input[i+15], 16,  530742520);
    b = hh(b, c, d, a, bin_input[i+ 2], 23, -995338651);

    a = ii(a, b, c, d, bin_input[i+ 0], 6 , -198630844);
    d = ii(d, a, b, c, bin_input[i+ 7], 10,  1126891415);
    c = ii(c, d, a, b, bin_input[i+14], 15, -1416354905);
    b = ii(b, c, d, a, bin_input[i+ 5], 21, -57434055);
    a = ii(a, b, c, d, bin_input[i+12], 6 ,  1700485571);
    d = ii(d, a, b, c, bin_input[i+ 3], 10, -1894986606);
    c = ii(c, d, a, b, bin_input[i+10], 15, -1051523);
    b = ii(b, c, d, a, bin_input[i+ 1], 21, -2054922799);
    a = ii(a, b, c, d, bin_input[i+ 8], 6 ,  1873313359);
    d = ii(d, a, b, c, bin_input[i+15], 10, -30611744);
    c = ii(c, d, a, b, bin_input[i+ 6], 15, -1560198380);
    b = ii(b, c, d, a, bin_input[i+13], 21,  1309151649);
    a = ii(a, b, c, d, bin_input[i+ 4], 6 , -145523070);
    d = ii(d, a, b, c, bin_input[i+11], 10, -1120210379);
    c = ii(c, d, a, b, bin_input[i+ 2], 15,  718787259);
    b = ii(b, c, d, a, bin_input[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  bin_md5 = [a, b, c, d];


  // little-endian array words to a string
  for (i = 0; i < bin_md5.length * 32; i += 8) {
    raw_md5 += String.fromCharCode((bin_md5[i>>5] >>> (i % 32)) & 0xFF);
  }


  // convert the raw md5 string to a hex md5 string
  for (i = 0; i < raw_md5.length; i++) {
    x = raw_md5.charCodeAt(i);
    hex_md5 += hex_vocab.charAt((x >>> 4) & 0x0F) + hex_vocab.charAt(x & 0x0F);
  }


  return hex_md5;
}

});

/**
 * @provides v2.FB.Api
 * @requires v2.FB.App v2.FB.Base v2.FB.Md5 v2.FB.Util v2.FB.Uri v2.FB.Dom
 *
 */

/**
 * This module provides unified API access (both REST and UI)
 * @namespace FB.Api
 */
FB.provide('Api', {
  /**
   * Calls the specified Facebook API method with given parameters, or
   * queues it on the Sequencer.
   * @param  {String} method
   * API method to call
   * @param  {Object} parameters
   * parameters corresponding to the method
   * @param  callback
   * @param  options
   * optional options
   */
  invoke: function(method, parameters, callback, options) {
    // Set an empty dictionary if the value is null
    // so later code doesn't have to check for null condition
    if (!parameters) {
      parameters = {};
    }

    // Set an empty dictionary if the value is null
    // so later code doesn't have to check for null condition
    if (!options) {
      options = {};
    }

    // This is rudimentary logic to perform automatically check for conditions
    // that requires for API calls to succeed. Currently, I just check for
    //  methods that need a session. If a session is needed but not available,
    //  the code will automatically invoke login UI, then continue the API call
    if ((FB.Api.mSessions[method] || options.requireSession) &&
      !FB.App.session) {
      // Need to connect first
      FB.App.connect(function() {
        FB.Api.invoke(method, parameters, callback, options);
      });
      return;
    }

    // Is this UI method?
    if (method.indexOf('ui.') == 0) {
      FB.Api._invokeUi(method, parameters, callback, options);
    } else {
      FB.Api._invokeRest(method, parameters, callback, options);
    }

  },

  /**
   * Make a REST Api call
   * @param  {String} method
   * API method to call
   * @param  {Object} parameters
   * parameters corresponding to the method
   * @param  callback
   * @param  options
   * optional options
   * @private
   */
  _invokeRest: function(method, parameters, callback, options) {
    FB.Api._callId++;
    var session = FB.App.session,
    callback_fn = "fb_" + FB.Api._callId;

    // We need to encode parameters and a new stuff
    // Let's use a copy instead of modifying parameters
    var params = {
      method: method,
      api_key: FB.App.apiKey,
      format: 'JSON',
      call_id: FB.Api._callId,
      v: '1.0',
      session_key: (session ? session.session_key : ''),
      callback: 'FB.Api._callbacks.' + callback_fn
    };

    FB.copy(params, parameters, true, FB.JSON.serialize);

    if (session && session.secret) {
      // Use session secret
      params['ss'] = 1;
      params['sig'] = FB.Md5.sign(params, session.secret);
    }

    // JSONP Callback
    var script;

    FB.Api._callbacks[callback_fn] = function(data) {
      delete FB.Api._callbacks[callback_fn];
      FB.Dom.removeDom(script);
      callback(data);
    };

    script = FB.Dom.addScript(FB.Util.getFacebookUrl('api') + 'restserver.php?' +
      FB.Uri.createQueryString(params));
  },


  /**
   *
   * Calls the specified Facebook UI method with given parameters
   * @param  {String} method
   * API method to call
   * @param  {Object} parameters
   * parameters corresponding to the method
   * @param  {function} callback callback function. The API result will passed to
   *          callback function when result is read.
   * @param  {object} options [Optional]
   * @private
   */
  _invokeUi: function(method, parameters, callback, options) {
    // TODO: We don't have UI server ready yet.
    // The method is supposed to a path to a endpont url (sans .php)
    var url = FB.Util.getFacebookUrl('www') + method.substring(3) + '.php';

    var dialog = new FB.UI.Dialog()

    // We need to encode parameters and a new stuff
    // Let's use a copy instead of modifying parameters
    var params = {
      in_iframe: 1,
      callback: dialog.createClosingUrl(),
      preview: 'true',
      api_key: FB.App.apiKey,
      channel_url: FB.XdComm.receiverUrl,
      session_key: FB.App.session ?  FB.App.session.session_key : ''
    };

    FB.copy(params, parameters);

    url += "?" + FB.Uri.createQueryString(params, FB.JSON.serialize);

    FB.Event.add(dialog, 'closed', callback);
    dialog.set(method, FB.Util.format(
                 '<iframe name="{0}" src="{1}" frameborder="0"></iframe>',
                 dialog.id, url));
  },

  /**
   * map of methods that requires session.
   * [TODO] Complete the list
   * @private
   */
  mSessions: {
    'friends.get': 1
  },

  /**
   *
   * @type  Number
   */
  _callId: 0,
  _callbacks: {}
});

/**
 * @provides v2.FB.Async
 * @requires v2.FB.Base v2.FB.Type v2.FB.Util v2.FB.Event
 */


FB.provide('Async', {
  isAsync: function(obj) {
    return FB.Type.isType(obj, FB.Async.Data);
  },

  /**
   *
   * @param {string | function} a string or a function will be evaluated when all data are ready
   * @data a list of objects that needs to be evaluted when they are ready
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

FB.Class('Async.Data', function(value) {
  this.value = value;
}, {
  set: function(value) {
    FB.Event.setProperty(this, 'value', value);
  },

  wait: function(callback) {
    FB.Async.wait(callback, [this]);
  }
});

/**
 * @provides v2.FB.Data
 * @requires v2.FB.Base v2.FB.Type v2.FB.Util v2.FB.Event v2.FB.Api v2.FB.Async v2.FB.App
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
    re = (/^select (.*?) from (\w+)\s+where (.*)$/gi).exec(fql);
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
    var re = (/^\s*(\w+)\s*=\s*([^=\s]*)\s*$/gi).exec(s);
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


/**
 * @provides v2.js
 */
0;

/**
 * @provides v2.FB.Loader
 * @requires v2.FB.Base
 *
 * 
 */

/**
* This base loader that does housekeeping of loaded components and support
* automatic loading of required css for a a component.
* @class
* @private
*/
FB.provide('Loader', {
  loaded: {},
  loadedCss: {},


  /**
   * This function will be invoked at end of each connect.php load
   */
  onScriptLoaded: function(components) {
    var c = components.length;
    for(var i = 0; i < c; i++) {
      FB.Loader.loaded[components[i]] = true;
    }

    if (FB.Loader._onCompLoaded) {
      FB.Loader._onCompLoaded(components);
    }
  },

  /**
   * TODO: Move this off to a different component
   * @param  String cssSrc
   */
  loadCssComps: function(cssComps) {
    var cssSrc = FB.dynData.resources.base_url_format.replace('{0}',
    'static.ak')
    + 'connect_v2.php/'+FB.locale+'/css/' + cssComps.join('/');

    //  Check if the style sheet is already loaded
    if (!this.loadedCss[cssSrc]) {
      var linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('href', cssSrc);
      document.getElementsByTagName('head')[0].appendChild(linkElement);
      this.loadedCss[cssSrc] = true;
    }
  }
});

FB.Loader.loadCssComps(["v2.FB.UI.Dialog-css"]);
FB.Loader.onScriptLoaded(["v2.FB.App","v2.FB.Api","v2.FB.Data","v2.js","v2.FB.Loader"]);