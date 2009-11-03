/**
 * @provides FB.XFBML.ProfilePic
 * @requires FB.Type FB.XFBML FB.Event FB.Util FB.Dom FB.XFBML.Element FB.Data
 */

/**
 * @class FB.XFBML.ProfilePic
 * @extends  FB.XFBML.Element
 */
FB.subclass('XFBML.ProfilePic', 'XFBML.Element',
  /*
   * @constructor
   */
  function(dom) {
    this.dom = dom;
  },

  /*
   * Instance methods
   */
  {
  process: function() {
    var size = this.getAttribute('size', 'thumb'),
    sizeToPicFieldMap = { thumb: 'pic_small', small: 'pic', normal: 'pic_big',
                              square: 'pic_square', t: 'pic_small',
                              s: 'pic', n: 'pic_big', q: 'pic_square' },
    picFieldName = sizeToPicFieldMap[size],
        widthAttribute = this.getAttribute('width'),
    heightAttribute = this.getAttribute('height'),
    style = this.dom.style,
    uid = this.getAttribute('uid');

    //  Check if we need to add facebook logo image
    if (this._getBoolAttribute('facebook-logo')) {
      picFieldName += '_with_logo';
    }

    if (widthAttribute) {
      style.width = this.getUnit(widthAttribute);
    }
    if (heightAttribute) {
      style.height = this.getUnit(heightAttribute);
    }

    var renderFn = FB.bind(function(result) {
      var userInfo = result ? result[0] : null;
      var imageSrc = (userInfo) ? userInfo[picFieldName] : null;
      if (!imageSrc) {
        // Create default
        var subdomain = location.href.indexOf('https') === 0 ? 'ssl' : 'static.ak';
        imageSrc = FB.Util.getFacebookUrl(subdomain) + 'pics/' +
          FB.XFBML.ProfilePic._defPicMap[picFieldName];
      }
      //  Copy width, height style, and class name of fb:profile-pic down to the image
      //  element we create
      var styleValue = ((style.width) ? 'width:' + style.width + ';' : '') +
        ((style.height) ? 'height:' + style.width + ';' : '');
      var html = FB.Util.format('<img src=\'{0}\' alt=\'{1}\' title=\'{1}\' style=\'{2}\' class=\'{3}\' />',
                               imageSrc, userInfo ? userInfo.name : '', styleValue,
                               this.dom.className);
      if (this._getBoolAttribute('linked', true)) {
        html = FB.Util.getProfileLink(userInfo, html,
          this.getAttribute('href', null));
      }
      this.dom.innerHTML = html;
      FB.Dom.addCss(this.dom, 'fb_profile_pic_rendered');

    }, this);

    // Wait for status to be known
    FB.App.monitor('status', FB.bind(function() {
      //Is Element still in DOM tree
      if (!this.isValid())
        return true; // Stop processing

      // Is status known?
      if (FB.App.status) {
        if (uid === 'loggedinuser') {
          uid = FB.App.session.uid;
        }

        // Get data
        FB.Data.query('select name, ' + picFieldName + ' from user where uid = ' + uid)
            .wait(renderFn);
      } else {
        // Render default
        renderFn();
      }
    }, this));
  },

  getUnit: function(value) {
    return parseInt(value).toString() == value ? value + 'px' : value;
  }


});

FB.provide('XFBML.ProfilePic', {
  _defPicMap: { pic_small: 't_silhouette.jpg',
    pic: 's_silhouette.jpg',
    pic_big: 'd_silhouette.gif',
    pic_square: 'q_silhouette.gif',
    pic_small_with_logo: 't_silhouette_logo.gif',
    pic_with_logo: 's_silhouette_logo.gif',
    pic_big_with_logo: 'd_silhouette_logo.gif',
    pic_square_with_logo: 'q_silhouette_logo.gif'
  }
});

/**
 * link to the explicit href or profile.php
 * @param  {FB.UserInfo} userInfo
 * @param  {String} html
 * @param  {String} href
 * @return  String
 */
FB.create('Util.getProfileLink', function(userInfo, html, href) {
  href = href || (userInfo ?  FB.Util.getFacebookUrl('www') + 'profile.php?id=' +
        userInfo.uid : null);
  if (href) {
    html = '<a class="FB_Link" href="' + href + '">' + html + '</a>';
  }
  return html;
});

