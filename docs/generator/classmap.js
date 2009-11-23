YAHOO.env.classMap = {"FB.XFBML.LoginButton": "FB.XFBML.LoginButton", "FB.Api": "FB.Api", "FB.XFBML.ProfilePic": "FB.XFBML.ProfilePic", "FB": "FB.Type", "FB.App": "FB.App", "FB.XFBML.Element": "FB.XFBML.Element", "FB.UI.PopupWin": "FB.UI.PopupWin", "FB.Data": "FB.Data", "FB.IframeResizer": "FB.IframeResizer", "FB.Async": "FB.Async", "FB.Delegate": "FB.Event", "FB.Async.Data": "FB.Async", "FB.Dom": "FB.Dom", "FB.Event": "FB.Event", "FB.JSON": "FB.JSON", "FB.Util": "FB.Util", "FB.Loader": "FB.Loader.use", "FB.XFBML": "FB.XFBML", "FB.XdComm": "FB.XdComm", "FB.Data.Query": "FB.Data", "FB.XFBML.Name": "FB.XFBML.Name", "FB.UI.Dialog": "FB.UI.Dialog", "FB.Uri": "FB.Uri", "FB.XFBML.ShareButton": "FB.XFBML.ShareButton"};

YAHOO.env.resolveClass = function(className) {
    var a=className.split('.'), ns=YAHOO.env.classMap;

    for (var i=0; i<a.length; i=i+1) {
        if (ns[a[i]]) {
            ns = ns[a[i]];
        } else {
            return null;
        }
    }

    return ns;
};
