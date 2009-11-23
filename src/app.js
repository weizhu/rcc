/**
 * @provides FB.App
 * @layer Basic
 * @requires FB.Base FB.Event FB.XdComm FB.UI.PopupWin, FB.UI.Dialog FB.Dom
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
   * @static
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
   * @static
   */
  session: undefined,

  /**
   * current connect status. Note we use undefined
   * to signal that we don't know yet
   * @type string
   * @static
   */
  status: undefined,

  /**
   * initialize an Facebook app. xdChannelUrl parameter may not be needed if stats shows postMessage and flash XdComm have enough coverage
   * @param  {String} apiKey
   * API key for your Facebook application
   * @param  {Object} settings
   * An optional dictionary of other application settings.
   * Currently supported key/value are:
   * @static
   */
  init: function(apiKey, settings) {
    // Check if init is already called.
    if (FB.App.apiKey) {
      return;
    }

    FB.App.apiKey = apiKey;
    if (settings) {
      FB.copy(FB.App.settings, settings);
    }

    FB.XdComm.init(FB.App.settings['xdChannelUrl']);

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
   * @static
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
   * @static
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
        origin: FB.XdComm._origin,
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
   * @static
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
          FB.App._onStatus({not_connected: true});
          callback();
        }, null, 'parent'),
      origin: FB.XdComm._origin
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
   * @static
   */
  _onStatus: function(data) {
    var value = 'no_user';
    if (data.session) {
      value = 'connected';
    } else if ('not_connected' in data) {
      value = 'not_connected';
    }

    FB.Event.setProperty(FB.App, 'session', FB.JSON.deserialize(data.session));
    FB.Event.setProperty(FB.App, 'status', value);
  },


  /**
   * This function create an hidden iframe to login_status.lphp
   * @private
   * @static
   */
  _checkStatus: function() {
    var q_params = { api_key: FB.App.apiKey, extern: 0,
        origin: FB.XdComm._origin,
        ok_session: FB.XdComm.getUdp(FB.App._onStatus, '', 'parent', true),
        no_session: FB.XdComm.getUdp(FB.App._onStatus, 'not_connected', 'parent', true),
        no_user: FB.XdComm.getUdp(FB.App._onStatus, 'no_user', 'parent', true)
    };

    FB.Dom.createHiddenIFrame(
        FB.Util.getFacebookUrl('www') + 'extern/login_status.php?' +
        FB.Uri.createQueryString(q_params));
  }
});

