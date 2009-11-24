/**
 * @provides FB.XFBML.ShareButton
 * @layer XFBML
 * @requires FB.Type FB.XFBML FB.Event FB.String FB.Dom FB.XFBML.Element
 *  FB.Data FB.Helper FB.share-button-css
 */

/**
 * Implementation for fb:share-button tag.
 * @class FB.XFBML.ShareButton
 * @extends  FB.XFBML.Element
 */
FB.subclass('XFBML.ShareButton', 'XFBML.Element', null,
  /*
   * Instance methods
   */
  {
  process: function() {
    this._href = this.getAttribute('href', window.location.href);

    //TODO: When we turn sharepro on, replace icon_link with button_count
    this._type = this.getAttribute('type', 'icon_link');

    this._renderButton();

  },

  _renderButton: function() {
    if (!this.isValid()) {
      return;
    }
    var contentStr = '',
    extra ='',
    classStr = '';
    share = 'Share',
    wrapperClass = '';

    switch (this._type) {
    case 'icon':
    case 'icon_link':
      classStr = 'FBConnectButton_Simple';
      contentStr = '<span class=\'FBConnectButton_Text_Simple\'>' +
              (this._type == 'icon_link' ? share : '&nbsp;') +
              '</span>';
      break;
    case 'link':
      contentStr = 'Share on Facebook';
      break;
    case 'button_count':
      contentStr = '<span class="FBConnectButton_Text">' + share +  '</span>';
      extra ='<span class=\'fb_share_count_nub_right\'>&nbsp;</span>' +
        '<span class=\'fb_share_count fb_share_count_right\'>'+
        this._getCounterMarkup() +
        '</span>';
      classStr = 'FBConnectButton FBConnectButton_Small';
      break;
    default:
      // box count
      contentStr = '<span class=\'fb_share_count_nub_top\'>&nbsp;</span>';
      extra = '<span class=\'fb_share_count fb_share_count_top\'>' +
        this._getCounterMarkup() +
        '</span>' +
        '<span class="FBConnectButton_Text">' + share +  '</span>';
      classStr = 'FBConnectButton FBConnectButton_Small';
      wrapperClass = 'fb_share_count_wrapper';
    }
    this.dom.innerHTML = FB.String.format(
        '<span class="{0}"><a href="{1}" class="{2}"' +
        ' onclick=\'FB.Api.invoke("ui.share", {u:\"{1}\"}, function(){});'+
        'return false;\''+
          'target=\'_blank\'>{3}</a>{4}</span>',
          wrapperClass,
          this._href,
          classStr,
          contentStr, extra);
  },

  _getCounterMarkup: function() {
    if (!this._count) {
      this._count = FB.Data._selectByIndex(['share_count'], 'link_stat',
                                       'url', this._href);
    }

    if (this._count.value !== undefined) {
      if (this._count.value.length > 0) {
        var c = this._count.value[0].share_count;
        if (c > 3) {
          prettyCount = c >= 10000000 ? Math.round(c/1000000) + 'M' :
                          ( c >= 10000 ? Math.round(c/1000) + 'K' : c );
          return  '<span class=\'fb_share_count_inner\'>' +
            prettyCount + '</span>';
        }
      }
    } else {
      this._count.wait(FB.bind(this._renderButton, this));
    }

    return '';

  }
});
