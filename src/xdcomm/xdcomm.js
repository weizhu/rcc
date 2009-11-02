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
   * Initialize XdComm
   *
   * @param  {String} Optional xd receiver url
   */
  init: function(receiverUrl) {
    FB.XdComm.receiverUrl = receiverUrl ? FB.Uri.combine(document.URL, receiverUrl) :
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

    FB.Event.once(FB.Flash, 'isReady', function() {
      document.XdComm.postMessage_init('FB.XdComm._onFlashMessage',
      FB.XdComm._origin);
    });
    FB.Flash.init();

    // createXdCommSwf();
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
    var url = FB.XdComm.receiverUrl;
    if (FB.XdComm._transport == 'fragment') {
      var packet = {
        t: 3, // udpSingle
        h: handlerName,
        sid:FB.XdComm._id,
        df: isRaw ? 1 : 0
      };

      //  Note that we don't specify packet.d in sending because we don't use
      //  JSON to encode packet.d
      url += '#fname=_' + endPoint + '&' +
        encodeURIComponent(FB.JSON.serialize(packet));

      url += encodeURIComponent(isRaw? data : FB.JSON.serialize(data));
    } else {
      url += FB.Uri.createQueryString({
        cb : handlerName,
        origin : FB.XdComm._origin,
        relation: endPoint || 'opener',
        transport: FB.XdComm._transport,
        df: isRaw ? 1 : 0
      });
    }
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
        var dataString = hash.substr(packetLength);
        packet.nd = packet.df ==  1? FB.Uri.getQueryParameters(dataString)
                            : FB.JSON.deserialize(
                              decodeURIComponent(dataString)),
                            FB.XdComm._onPacket(packet);
      });
    }
  },

  _onNativeMessage: function(e) {
    FB.XdComm._onData(e.data, e);
  },

  _onFlashMessage: function(message) {
    FB.XdComm._onData(decodeURIComponent(message));
  },

  _onData: function(data, e) {
    // Unfortunately, xd_proxy uses a different data format
    // from original packet data format, so we have to
    // handle both now.
    var header = 'FB_msg:';
    if (data.indexOf(header) == 0) {
      data = data.substr(header.length);
      // original packet format
      FB.XdComm._onPacket(FB.JSON.deserialize(data), e);
    } else {
      // Xd Proxy format
      data = FB.Uri.getQueryParameters(data);
      FB.Event.fire(FB.XdComm, data.cb, data);
    }
  },

  _onPacket: function(packet, e) {
    if (packet.sid && packet.sf) {
      FB.XdComm._senders[packet.sid] = packet.sf;
    }

    if (packet.id) {
      var ackMsg = 'FB_msg_ack:' + packet.sid + packet.id.toString();
      if (packet.ackFlashOrigin) {
        document.XdComm.postMessage_send(ackMsg, packet.ackFlashOrigin);
      } else if (e && e.origin) {
        (e.source).postMessage(ackMsg, e.origin);
      }
    }

    FB.Event.fire(FB.XdComm, packet.h, packet.nd,
      {frameName:FB.XdComm._senders[packet.sid]});
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


