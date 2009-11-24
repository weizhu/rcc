/**
 * @provides FB.UI.PopupWin
 * @layer Basic
 * @requires FB.Type FB.Util FB.String FB.Event FB.XdComm FB.Dom
 */

/**
 * @class FB.UI.PopupWin
 * @private
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
         FB.String.format('location=yes,left={0},top={1},width={2},height={3},resizable=yes',
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
    try {
    if (this.win && !this.win.closed) {
      this.win.close();
    }
    } catch (e) {
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
      }, '', 'opener', true);
  }
});

