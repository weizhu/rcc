/**
 * author blaise
 * @provides FB.connect-button-css
 * @module XFBML
 * @requires FB.Dom
 * @option preserve-image-urls
 */

FB.Dom.addCssRules(
'.FBConnectButton_Simple,' +
'.FBConnectButton_RTL_Simple {' +
'  background-image: url(/images/connect_favicon.png);' +
'  background-repeat: no-repeat;' +
'  outline: none;' +
'  text-decoration: none;' +
'}' +
'.FBConnectButton_RTL_Simple {' +
' background-position: right 0px;' +
'}' +
'' +
'.FBConnectButton_Simple .FBConnectButton_Text_Simple {' +
'  margin: 0 0 0px 20px;' +
'  padding-bottom: 1px;' +
'}' +
'' +
'.FBConnectButton_RTL_Simple .FBConnectButton_Text_Simple {' +
'  margin: 0px 10px 0px 0px;' +
'}' +
'' +
'a.FBConnectButton_Simple:hover .FBConnectButton_Text_Simple,' +
'a.FBConnectButton_RTL_Simple:hover .FBConnectButton_Text_Simple,' +
'.FBConnectButton_Simple:hover .FBConnectButton_Text_Simple,' +
'.FBConnectButton_RTL_Simple:hover .FBConnectButton_Text_Simple  {' +
'  text-decoration: underline;' +
'}' +
'' +
'' +

'' +
'.FBConnectButton,' +
'.FBConnectButton_RTL {' +
'  background: #29447e url(/images/connect_sprite.png);' +
'  background-repeat: no-repeat;' +
'  cursor: default;' +
'  display: inline-block;' +
'  padding: 0px 0px 0px 1px;' +
'  text-decoration: none;' +
'  outline: none;' +
'}' +
'' +
'.FBConnectButton .FBConnectButton_Text,' +
'.FBConnectButton_RTL .FBConnectButton_Text {' +
'  background: #5f78ab url(/images/connect_sprite.png);' +
'  border-top: solid 1px #879ac0;' +
'  border-bottom: solid 1px #1a356e;' +
'  color: white;' +
'  display: block;' +
'  font-family: "lucida grande",tahoma,verdana,arial,sans-serif;' +
'  font-weight: bold;' +
'  padding: 2px 6px 4px;' +
'  margin: 1px 1px 0px 0px;' +
'  text-shadow: none;' +
'}' +
'' +
'' +
'a.FBConnectButton,' +
'a.FBConnectButton_RTL ,' +
'.FBConnectButton,' +
'.FBConnectButton_RTL {' +
'  text-decoration: none;' +
'}' +
'' +
'a.FBConnectButton:active .FBConnectButton_Text,' +
'a.FBConnectButton_RTL:active .FBConnectButton_Text ,' +
'.FBConnectButton:active .FBConnectButton_Text,' +
'.FBConnectButton_RTL:active .FBConnectButton_Text{' +
'  border-bottom: solid 1px #29447e;' +
'  border-top: solid 1px #45619d;' +
'  background: #4f6aa3;' +
'  text-shadow: none;' +
'}' +
'' +
'' +
'.FBConnectButton_BigPun,' +
'.FBConnectButton_RTL_BigPun {' +
'  background-position: left -60px;' +
'  font-size: 24px;' +
'  line-height: 30px;' +
'}' +
'.FBConnectButton_BigPun .FBConnectButton_Text {' +
'  padding: 3px 8px 3px 12px;' +
'  margin-left: 38px;' +
'}' +
'a.FBConnectButton_BigPun:active {' +
'  background-position: left -99px;' +
'}' +
'.FBConnectButton_RTL_BigPun {' +
'  background-position: right -268px;' +
'}' +
'.FBConnectButton_RTL_BigPun .FBConnectButton_Text {' +
'  padding: 3px 8px 3px 12px;' +
'  margin-right: 39px;' +
'}' +
'a.FBConnectButton_RTL_BigPun:active {' +
'  background-position: right -307px;' +
'}' +
'' +
'.FBConnectButton_Large,' +
'.FBConnectButton_RTL_Large {' +
'  background-position: left -138px;' +
'  font-size: 13px;' +
'  line-height: 16px;' +
'}' +
'.FBConnectButton_Large .FBConnectButton_Text {' +
'  margin-left: 24px;' +
'}' +
'a.FBConnectButton_Large:active {' +
'  background-position: left -163px;' +
'}' +
'.FBConnectButton_RTL_Large {' +
'  background-position: right -346px;' +
'}' +
'.FBConnectButton_RTL_Large .FBConnectButton_Text {' +
'  margin-right: 25px;' +
'}' +
'a.FBConnectButton_RTL_Large:active {' +
'  background-position: right -371px;' +
'}' +
'' +
'.FBConnectButton_Medium,' +
'.FBConnectButton_RTL_Medium  {' +
'  background-position: left -188px;' +
'  font-size: 11px;' +
'  line-height: 14px;' +
'}' +
'.FBConnectButton_Text,' +
'.FBConnectButton_Medium .FBConnectButton_Text {' +
'  padding: 2px 6px 3px 6px;' +
'  margin-left: 21px;' +
'}' +
'a.FBConnectButton_Medium:active  {' +
'  background-position: left -210px;' +
'}' +
'' +
'.FBConnectButton_RTL_Medium  {' +
'  background-position: right -396px;' +
'}' +
'.FBConnectButton_RTL_Text,' +
'.FBConnectButton_RTL_Medium .FBConnectButton_Text {' +
'  padding: 2px 6px 3px 6px;' +
'  margin-right: 22px;' +
'}' +
'a.FBConnectButton_RTL_Medium:active  {' +
'  background-position: right -418px;' +
'}' +
'' +
'.FBConnectButton_Small,' +
'.FBConnectButton_RTL_Small {' +
'  background-position: left -232px;' +
'  font-size: 10px;' +
'  line-height: 10px;' +
'}' +
'.FBConnectButton_Small .FBConnectButton_Text {' +
'  padding: 2px 6px 3px;' +
'  margin-left: 17px;' +
'}' +
'a.FBConnectButton_Small:active ,' +
'.FBConnectButton_Small:active {' +
'  background-position: left -250px;' +
'}' +
'' +
'.FBConnectButton_RTL_Small {' +
'  background-position: right -440px;' +
'}' +
'.FBConnectButton_RTL_Small .FBConnectButton_Text {' +
'  padding: 2px 6px;' +
'  margin-right: 18px;' +
'}' +
'a.FBConnectButton_RTL_Small:active {' +
'  background-position: right -458px;' +
'}', 'FB.connect-button-css');

