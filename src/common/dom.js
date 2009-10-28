/**
 * @provides v2.FB.Dom
 * @requires v2.FB.Base
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
