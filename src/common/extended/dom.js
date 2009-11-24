/**
 * @provides FB.Dom
 * @layer Basic
 * @requires FB.Base FB.Util FB.String FB.Array
 */

/**
 * This provides helper methods related to DOM
 * @class FB.Dom
 * @private
 */
FB.provide('Dom', {
  /**
   * @param  {Object} dom
   * @param  {String} newClass
   * @static
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
   * @static
   */
  containsCss: function(dom, className) {
    var cssClassWithSpace = ' ' + dom.className + ' ';
    return cssClassWithSpace.indexOf(' ' + className + ' ') >= 0;
  },
  /**
   * @param  {Object} dom
   * @param  {String} className
   * @static
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

  /**
   * Create an unique DOM id
   * @return {string} an unique DOM id
   * @static
   */
  createId: function() {
    if (!FB.Dom._domId) {
      FB.Dom._domId = 1;
    }
    return '_fb_dom_' + FB.Dom_domId++;
  },

  /**
   * Cross browser way to add event listener to a DOM element, window or document object.
   * @param  {Object} element
   * @param  {String} type
   * @param  {Function} handler
   *
   * handler should be a function with no parameters.
   * @static
   */
  addEventListener: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    }
    else {
      handler._ieEventHandler = function() {
        handler(window.event);
      };
      element.attachEvent('on' + type, handler._ieEventHandler);
    }
  },

  /*
   * Get a hidden DOM container element. This is used to store hidden
   * iframes.
   * @static
   */
  getHidden: function() {
    if (FB.$('FB_HiddenContainer') == null) {
      var target = document.body;

      // For IE, we can't already insert a new element into
      // document.body because IE throw operation aborted error
      // when document is not completely parsed and a script
      // attempts to add, or remove an element from an unclosed ancestor
      // in the markup tree (not including the script block's
      // immediate parent element).
      //
      // To get around the problem, we will first attempt to find
      // an element where we can insert a <span> element and the element
      // doesn't have any children that contains HTML which could contains
      // a script that would execute this very function.
      //
      // I find this algorithm hard to explain (a possible indication of
      // flaw in my design :-(). So here are some examples:
      //
      // <body>
      //  <p id='good_candidate'>foo</p>
      //  <script>
      //    FB.Dom.getHidden();
      //  <script>
      // </body>
      //
      // <body>
      //   <div>
      //     <table>
      //     </table>
      //     <div>
      //       <div id='good_candiate'></div>
      //     </div>
      //   </div>
      //   <div>
      //    <script>
      //      FB.Dom.getHidden();
      //    </script>
      //   </div>
      // </body>
      //
      // NOTE: The container is a <span>, not a <div> and it cannot contains
      // divs as children. This is because the container may be inserted inside
      // an inline element like <p>
      //
      if (FB.Dom.getBrowserType() == 'ie') {
        var fn = function(dom) {
          var children = dom.children;
          excludeTags = {TABLE:1, TR:1, THEAD:1, TBODY:1, TFOOT:1};
          if (children.length > 0) {
            for (var i=0; i < children.length; i++) {
              var child = children[i];
              if (child.canHaveChildren && child.canHaveHTML &&
                  !excludeTags[child.tagName]) {
                // div into child. Either the child itself or
                // a node inside it must have
                // have the right condition
                return fn(child);
              }
            }
          }

          // If we reach this point, then the dom
          // itself is the right candidate
          return dom;
        }
        target = fn(target);
      }
      var hiddenDiv = document.createElement('span');
      hiddenDiv.id = "FB_HiddenContainer";
      var s = hiddenDiv.style;
      s.position = "absolute";
      s.top = "-10000px";
      s.width = "0px";
      s.height = "0px";
      s.display = "block";
      return target.appendChild(hiddenDiv);
    }
    return FB.$('FB_HiddenContainer');
  },


  /**
   * Create a hidden iframe
   * @static
   */
  createHiddenIFrame: function(src) {
    var receiverDom = document.createElement('iframe');
    receiverDom.className = 'FB_RECEIVER_DOM';

    var span = FB.Dom.getHidden().appendChild(document.createElement('span'));
    //  There is IE bug with iframe cache that we have to work around:
    //  Dynamically load the iframe to dummy content before loading the real content, as shown below.
    //  This works because the cached stream that exists after a refresh is consumed by the initial
    //  dummy load, and the second load fetches the content as expected.
    //  Must be javascript:false instead of about:blank, otherwise IE6 will complain in https
    if (FB.Dom.getBrowserType() == 'ie') {
      span.innerHTML = '<iframe src=\'javascript:false\' ></iframe>';
      span.innerHTML = '<iframe name = "' + FB.Util.createUnique() + '" src=\"' + src + '"></iframe>';
    } else {
      span.innerHTML = '<iframe name = "' + FB.Util.createUnique() + '"></iframe>';
      span.childNodes[0].src = src;
    }

    return span.childNodes[0];
 },

  /**
   * Dynamically add a script tag
   * @static
   */
   addScript: function(src) {
     var script = document.createElement('script');
     script.type = "text/javascript";
     script.src = src;
     return document.getElementsByTagName('HEAD')[0].appendChild(script);
   },

   addCssRules: function(s, id) {
     if (!FB.Dom._cssRules) {
       FB.Dom._cssRules = {};
     }

     // Check if this style sheet is already applied
     if (id in FB.Dom._cssRules) {
       return;
     }

     FB.Dom._cssRules[id] = true;

     if (FB.Dom.getBrowserType() != 'ie') {
       style = document.createElement('style');
       style.type = "text/css";
       style.innerHTML = s;
       document.getElementsByTagName('HEAD')[0].appendChild(style);
     } else {
       var re = /([\w|#|\.|\\][^{]*){(.*?)}/mg,
         a,
         style = document.createStyleSheet();
       while (a = re.exec(s)) {
         var rules = FB.Array.transform(a[1].split(','), FB.String.trim);
         for (var i=0; i < rules.length; i++) {
           style.addRule(rules[i], a[2]);
         }
       }
     }
   },

   /**
    * Get location of the browser window relative to computer screen
    * windowLocation
    * @return  FB.Point
    * @static
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
   * @static
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
   * @static
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
   * @static
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
          break;;
        }
      }
    }
    return FB.Dom._browserType;
  }
});
