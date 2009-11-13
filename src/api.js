/**
 * @provides FB.Api
 * @requires FB.App FB.Base FB.Md5 FB.Util FB.Uri FB.Dom
 *
 */

/**
 * This module provides unified API access (both REST and UI)
 * @class FB.Api
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

    if (FB.Api._map[method]) {
      FB.copy(options, FB.Api._map[method]);
    }

    // This is rudimentary logic to perform automatically check for conditions
    // that requires for API calls to succeed. Currently, I just check for
    //  methods that need a session. If a session is needed but not available,
    //  the code will automatically invoke login UI, then continue the API call
    if (options.requireSession &&!FB.App.session) {
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

    FB.copy(params, parameters, true, FB.Api._encode);

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

  _encode: function(obj) {
    return typeof(obj) === 'string' ? obj : FB.JSON.serialize(obj);
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
    var url = FB.Util.getFacebookUrl('www') + options.url,
    w = options.w || 600,
    h = options.h || 400,
    title = parameters.title || options.title || "";
    // Always use popup if session does not exist
    usePopup = !FB.App.session;

    var dialog = usePopup ? new FB.UI.PopupWin() : new FB.UI.Dialog();

    // We need to encode parameters and a new stuff
    // Let's use a copy instead of modifying parameters
    var params = {
      in_iframe: usePopup ? 0 : 1,
      callback: dialog.createClosingUrl(),
      preview: 'true',
      api_key: FB.App.apiKey,
      channel_url: FB.XdComm.receiverUrl,
      origin: FB.XdComm._origin,
      session_key: FB.App.session ?  FB.App.session.session_key : ''
    };

    FB.copy(params, parameters);

    url += "?" + FB.Uri.createQueryString(params, FB.Api._encode);

    FB.Event.add(dialog, 'closed', callback);
    dialog.set(title, url, w, h);
  },


  _map: {
    'friends.get': {requireSession: true},
    'ui.publish': {url: 'connect/prompt_feed.php', w: 600, h: 300,
                   title:'Publish to Facebook'},
    'ui.share': {url: 'sharer.php', w: 600, h: 400}
  },
  /**
   *
   * @type  Number
   */
  _callId: 0,
  _callbacks: {}
});
