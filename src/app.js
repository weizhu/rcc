/**
 * @provides v2.FB.App
 * @requires v2.FB.Base v2.FB.Event v2.FB.XdComm v2.FB.UI.PopupWin, v2.FB.UI.Dialog v2.FB.Dom
 *
 */


/**
 * This module provides application settings, states (session states, permissions, etc.) and auth related
 * methods (connect, logout)
 * @class FB.App
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

