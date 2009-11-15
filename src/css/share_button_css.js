/**
 * author arunv
 * @provides FB.share-button-css
 * @requires FB.connect-button-css FB.Dom
 */

FB.Dom.addCssRules(
'.fb_share_count_wrapper {' +
'    position: relative;' +
'    float: left;' +
'}' +
'' +
'.fb_share_count {' +
'  background: #b0b9ec none repeat scroll 0 0;' +
'  color: #333333;' +
'  font-family:"lucida grande",tahoma,verdana,arial,sans-serif;' +
'  text-align: center;' +
'}' +
'' +
'.fb_share_count_inner {' +
'  background: #e8ebf2;' +
'  display: block;' +
'}' +
'' +
'.fb_share_count_right {' +
'  margin-left: -1px;' +
'  display: inline-block;' +
'}' +
'' +
'.fb_share_count_right .fb_share_count_inner {' +
'  border-top: solid 1px #e8ebf2;' +
'  border-bottom: solid 1px #b0b9ec;' +
'  margin: 1px 1px 0px 1px;' +
'  font-size: 10px;' +
'  line-height: 10px;' +
'  padding: 2px 6px 3px;' +
'  font-weight: bold;' +
'}' +
'' +
'.fb_share_count_top {' +
'  display: block;' +
'  letter-spacing: -1px;' +
'  line-height: 34px;' +
'  margin-bottom: 7px;' +
'  font-size: 22px;' +
'  border: solid 1px #b0b9ec;' +
'}' +
'' +
'.fb_share_count_nub_top {' +
'    border: none;' +
'    display: block;' +
'    position: absolute;' +
'    left: 7px;' +
'    top: 35px;' +
'    margin: 0;' +
'    padding: 0;' +
'    width: 6px;' +
'    height: 7px;' +
'    background-repeat: no-repeat;' +
'    background-image: url(/images/sharepro/sp_h_nub.png);' +
'}' +
'' +
'.fb_share_count_nub_right {' +
'    border: none;' +
'    display: inline-block;' +
'    padding: 0;' +
'    width: 5px;' +
'    height: 10px;' +
'    background-repeat: no-repeat;' +
'    background-image: url(/images/sharepro/sp_v_nub.png);' +
'    vertical-align: top;' +
'    background-position:right 5px;' +
'    z-index: 10;' +
'    left: 2px;' +
'    margin: 0px 2px 0px 0px;' +
'    position: relative;' +
'}' +
'' +
'.fb_share_no_count {' +
'  display: none;' +
'}' +
'' +
'.fb_share_size_Small .fb_share_count_right .fb_share_count_inner {' +
'  font-size: 10px;' +
'}' +
'' +
'.fb_share_size_Medium .fb_share_count_right .fb_share_count_inner {' +
'  font-size: 11px;' +
'  padding: 2px 6px 3px;' +
'  letter-spacing: -1px;' +
'  line-height: 14px;' +
'}' +
'' +
'.fb_share_size_Large .fb_share_count_right .fb_share_count_inner {' +
'  font-size: 13px;' +
'  line-height: 16px;' +
'  padding: 2px 6px 4px;' +
'  font-weight: normal;' +
'  letter-spacing: -1px;' +
'}','FB.share-button-css');
