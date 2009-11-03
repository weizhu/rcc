/**
 * @provides FB.Flash
 * @requires FB.Base FB.Event FB.Dom
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
        window.setTimeout(function() {
        FB.Event.setProperty(FB.Flash, 'isReady', true);
        }, 0);
      }

      var swf = FB.dynData.resources.xd_comm_swf_url;

      var html = '<object type="application/x-shockwave-flash" id="XdComm" ' +
           (FB.Dom.getBrowserType() == 'ie' ?
                 'name="XdComm" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' :
                 'data="' + swf + '" ') +
        'allowscriptaccess="always"><param name="movie" value="' + swf +
        '"></param><param name="allowscriptaccess" value="always"></param></object>',

      div = document.createElement('div');
      FB.Dom.getHidden().appendChild(div);
      div.innerHTML = html;
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
