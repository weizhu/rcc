/**
 * @provides v2.FB.Loader
 * @requires v2.FB.Base
 *
 * 
 */

/**
* This base loader that does housekeeping of loaded components and support
* automatic loading of required css for a a component.
* @class
* @private
*/
FB.provide('Loader', {
  loaded: {},
  loadedCss: {},


  /**
   * This function will be invoked at end of each connect.php load
   */
  onScriptLoaded: function(components) {
    var c = components.length;
    for(var i = 0; i < c; i++) {
      FB.Loader.loaded[components[i]] = true;
    }

    if (FB.Loader._onCompLoaded) {
      FB.Loader._onCompLoaded(components);
    }
  },

  /**
   * TODO: Move this off to a different component
   * @param  String cssSrc
   */
  loadCssComps: function(cssComps) {
    var cssSrc = FB.dynData.resources.base_url_format.replace('{0}',
    'static.ak')
    + 'connect_v2.php/'+FB.locale+'/css/' + cssComps.join('/');

    //  Check if the style sheet is already loaded
    if (!this.loadedCss[cssSrc]) {
      var linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('href', cssSrc);
      document.getElementsByTagName('head')[0].appendChild(linkElement);
      this.loadedCss[cssSrc] = true;
    }
  }
});