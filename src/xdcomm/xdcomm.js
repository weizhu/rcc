/**
 * @provides v2.FB.XdComm
 * @requires v2.FB.Base  v2.FB.Util
 *           v2.FB.Uri  v2.FB.JSON v2.FB.Event
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


