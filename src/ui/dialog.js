/**
 * @provides v2.FB.UI.Dialog
 * @requires v2.FB.Type v2.FB.Base v2.FB.XdComm v2.FB.Util v2.FB.Dom v2.FB.Event v2.FB.IframeResizer v2.FB.UI.Dialog-css
 */

/**
 * An iframe dialog
 * @class FB.UI.Dialog
 */
FB.Class('UI.Dialog',
  // Constructor
  function() {
    this.id = 'fb_dialog_' + Math.random().toString();
    FB.UI.Dialog.dlgs[this.id] = this;
  },

  // Instance methods
  {
  set: function(title, content) {
    FB.IframeResizer.start();
    var html = FB.Util.format('<table id="{0}" class="fb_pop_dialog_table"><tr><td class="fb_pop_topleft"></td><td class="fb_pop_border"></td><td class="fb_pop_topright"></td> </tr><tr><td class="fb_pop_border"></td><td class="fb_pop_content" id="pop_content"><div class ="fb_pop_content_container"><h2 class="fb_resetstyles"> <div class="fb_dialog_icon"></div> <span class="fb_dialog_header" id="fb_dialog_header">{1}</span> <div class="fb_dialog_loading_spinner" id="fb_dialog_loading_spinner">&nbsp;</div> <a id="fb_dialog_cancel_button" class="fb_dialog_cancel_button" title="close dialog" href="#" onclick="FB.UI.Dialog.close({2})">&nbsp;</a> </h2> <div id="fb_dialog_content" class="fb_dialog_content">{3}</div> </div> </td> <td class="fb_pop_border"></td> </tr> <tr> <td class="fb_pop_bottomleft"></td> <td class="fb_pop_border"></td> <td class="fb_pop_bottomright"></td> </tr> </table>',
          this.id, title,
          "'" + this.id + "'",
          content);
    FB.UI.Dialog.getContainer().innerHTML += html;
    this.dom = FB.$(this.id);


    this.dom.style.width = '700px';

    var windowSize = FB.Dom.getWindowSize();
    var target = document.documentElement;
    var topHeight = target.scrollTop > 0 ? target.scrollTop :
                     document.body.scrollTop;
    var location = {x: Math.max(0, target.scrollLeft + (windowSize.w -700) / 2),
                    y: Math.max(0, topHeight + windowSize.h / 2) - 200};

    this.dom.style.left = location.x.toString() + 'px';
    this.dom.style.top = location.y.toString() + 'px';
  },

  createClosingUrl: function(ctx) {
    return FB.XdComm.getUdp(
      function(data, sender) {
        FB.UI.Dialog.close(data.token, data);
      },
      {
        token: this.id,
        ctx: ctx,
        data:'xxRESULTTOKENxx'
      }, 'parent');
  }
});

FB.provide('UI.Dialog', {
  /**
   * _popupContainer
   * @return  Object
   */
  getContainer: function() {
    if (!FB.UI.Dialog._popupContainer) {
      FB.UI.Dialog._popupContainer = FB.$('fb_popupContainer');
      if (!FB.UI.Dialog._popupContainer) {
        var div = document.createElement('div');
        div.className = 'fb_resetstyles fb_popupContainer';
        FB.UI.Dialog._popupContainer = document.body.appendChild(div);
      }
    }
    else {
      // Ensure that the container is the last of the body's children
      FB.UI.Dialog._popupContainer = document.body.appendChild(FB.UI.Dialog._popupContainer);
    }
    return FB.UI.Dialog._popupContainer;
  },

  close: function(id, result) {
    var dlgs = FB.UI.Dialog.dlgs,
    dlg = dlgs[id];
    FB.Event.fire(dlg, 'closed', result);
    FB.Dom.removeDom(dlg.dom);
    delete dlgs[id];
  },

  dlgs : {}
});
