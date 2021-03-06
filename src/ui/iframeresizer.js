/**
 * @provides FB.IframeResizer
 * @layer Basic
 * @requires FB.Base FB.XdComm
 *
 */

/**
 * This class enable service to allow iframe to request size changes
 * @class FB.IframeResizer
 * @private
 */
FB.provide('IframeResizer', {
  start: function() {
    FB.XdComm.regRpc('iframeOuterServer',
      {'setCanvasHeight': function(height, sender) {
        FB.IframeResizer.getFrame(sender.frameName).style.height = height;
      }});
  },
  getFrame: function(name) {
    var frames = document.getElementsByTagName('iframe');
    for (var i=0; i < frames.length; i++ ) {
      if(frames[i].name == name) {
        return frames[i];
      }
    }
  }
});

