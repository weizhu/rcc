/**
 * @provides FB.Dom
 * @requires FB.Base
 */

/**
 * This provides helper methods related to DOM
 * @class FB.Dom
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

    var div = document.createElement('div');
    var hidden = FB.Dom.getHidden(),
    isIE = FB.Dom.getBrowserType() == 'ie';
    div = hidden.appendChild(div);

    //  There is IE bug with iframe cache that we have to work around:
    //  Dynamically load the iframe to dummy content before loading the real content, as shown below.
    //  This works because the cached stream that exists after a refresh is consumed by the initial
    //  dummy load, and the second load fetches the content as expected.
    //  Must be javascript:false instead of about:blank, otherwise IE6 will complain in https
    if (!FB.Dom._iframeCreated && isIE) {
      div.innerHTML = '<iframe src=\'javascript:false\' ></iframe>';
      // FB.Dom._iframeCreated = true;
    }

    div.innerHTML = '<iframe name = "' + FB.Util.createUnique() + '" src=\"' + src + '"></iframe>';
    return div.childNodes[0];
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

   addCssRules: function(s, id) {
     if (!FB.Dom._cssRules) {
       FB.Dom._cssRules = {};
     }

     // Check if this style sheet is already applied
     if (id in FB.Dom._cssRules) {
       return;
     }

     if (FB.Dom.getBrowserType() != 'ie') {
       style = document.createElement('style');
       style.type = "text/css";
       style.innerHTML = s;
       document.getElementsByTagName('HEAD')[0].appendChild(style);
     } else {
       var re = /([\w|#|\.|\\]+)\s*{(.*?)}/mg,
         a,
         style = document.createStyleSheet();
       while (a = re.exec(s)) {
         style.addRule(a[1], a[2]);
       }
     }
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
          break;;
        }
      }
    }
    return FB.Dom._browserType;
  }
});
