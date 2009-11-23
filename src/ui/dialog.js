/**
 * @provides FB.UI.Dialog
 * @layer Basic
 * @requires FB.Type FB.Base FB.XdComm FB.Util FB.Dom FB.Event FB.IframeResizer
 */

/**
 * An iframe dialog
 * @class FB.UI.Dialog
 * @private
 */
FB.Class('UI.Dialog',
  // Constructor
  function() {
    FB.UI.Dialog.loadStyle();
    this.id = 'fb_dialog_' + Math.random().toString();
    FB.UI.Dialog.dlgs[this.id] = this;
  },

  // Instance methods
  {
  set: function(title, src, w, h) {
    var content = FB.Util.format('<iframe name="{0}" src="{1}" frameborder="0"'
                  + 'style="width:{2}px; height:{3}px"></iframe>',
                  this.id, src, w, h);
    FB.IframeResizer.start();
    var html = FB.Util.format(
      '<div id="{0}" class="fb_css fb_pop_dialog {1}">'
      + '    <div class="fb_dialog_inner">'
      + '      <div class="fb_header">'
      + '        <div class="fb_dialog_icon">'
      + '        </div>'
      + '        <span class="fb_dialog_header" id="fb_dialog_header">{2}</span> '
      + '      </div>'
      + '    <a id="fb_dialog_cancel_button" class="fb_dialog_cancel_button" title="close dialog" href="#" '
      + '        onclick="FB.UI.Dialog.close({3})">'
      + '          &nbsp;</a>'
      + '      <div class="fb_content" style="">'
      + '      {4}</div>'
      + '    </div>'
      + '  </div>',
      this.id,
      FB.Dom.getBrowserType() == 'ie' ? 'pop_borderopacity' :  "pop_container_advanced",
      title,
      "'" + this.id + "'",
      content);
    FB.UI.Dialog.getContainer().innerHTML += html;
    this.dom = FB.$(this.id);

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
   * @static
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

  loadStyle: function() {
    FB.Dom.addCssRules(
      '#fb_popupContainer {'
        + '  position: absolute;'
        + '  top: 0px;'
        + '  left: 0px;'
        + '}'
        + ''
        + 'div.fb_dialog_inner {'
        + '  background: #6d84b4;'
        + '  border: 1px solid #3b5998;'
        + '  width: 100%;'
        + '}'
        + ''
        + 'div.fb_pop_dialog {'
        + '  padding:10px;'
        + '  position:absolute; left:-10000px; top:-10000px;'
        + '}'
        + ''
        + 'div.fb_pop_dialog.pop_container_advanced {'
        + '  background: rgba(82,82,82,0.7);'
        + '  padding: 10px;'
        + '  -moz-border-radius: 8px;'
        + '  -webkit-border-radius: 8px;'
        + '}'
        + ''
        + 'div.fb_pop_dialog.pop_borderopacity {'
        + '  background: #757575;'
        + '}'
        + ''
        + 'div.fb_header'
        + '{'
        + '    color: white;'
        + '    font-size: 14px;'
        + '    font-weight: bold;'
        + '    font-family: "lucida grande", tahoma, verdana, arial, sans-serif;'
        + '    margin: 0px;'
        + '    position:relative;'
        + '    overflow: hidden;'
        + '    letter-spacing:normal;'
        + '    line-height:normal;'
        + '    padding: 0px;'
        + '    text-align: left;'
        + '    zoom: 1;'
        + '    float:none;'
        + '    display: block;'
        + '    position:relative;'
        + '}'
        + ''
        + 'div.fb_header span {'
        + '  padding: 5px 10px 5px 10px;'
        + '}'
        + ''
        + 'div.fb_content {'
        + '  height: 100%;'
        + '  width: 100%;'
        + '}'
        + ''
        + '.fb_dialog_header {'
        + '  padding: 5px 10px;'
        + '}'
        + ''
        + '.fb_dialog_icon'
        + '{'
        + '    margin: 5px;'
        + '    float:left;'
        + '    width:16px;'
        + '    height:16px;'
        + '    background: #6D84B4 url(http://static.ak.fbcdn.net/images/icons-unsprited/favicon_fordarkbg.gif) no-repeat scroll center;'
        + '}'
        + ''
        + 'a.fb_dialog_cancel_button'
        + '{'
        + '    outline-color:invert;'
        + '    outline-style:none;'
        + '    outline-width:medium;'
        + '    text-decoration:none;'
        + '    position:absolute;'
        + '    right:14px;'
        + '    top: 17px;'
        + '    width:18px;'
        + '    color:#6D84B4;'
        + '    background:transparent url(http://static.ak.fbcdn.net/images/fbconnect/connect_icon_remove.gif) no-repeat  scroll 3px 0px;'
        + '}'
        + ''
        + 'a.fb_dialog_cancel_button:hover'
        + '{'
        + '    background:transparent url(http://static.ak.fbcdn.net/images/fbconnect/connect_icon_remove.gif) no-repeat scroll -10px 0px;'
        + '}', 'fb_dialog_css'
    );
  },

  dlgs : {}
});
