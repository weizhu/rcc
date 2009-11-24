/**
 * @provides FB.Util
 * @layer Basic
 * @requires FB.Base
 *
 */

/**
 * @class FB.Util
 * @private
 */
FB.provide('Util', {
  /**
   * Gets a reference to the statically stored base Facebook URL, and adjusts for the desired subdomain.
   * @param  {String} subDomain
   * Subdomain of Facebook to use
   * @return  String
   * @static
   */
  getFacebookUrl: function(subDomain) {
    return FB.String.format(FB.dynData.resources.base_url_format, subDomain);
  },

  /**
   * Create an unique id string
   * @static
   */
  createUnique: function(prefix) {
    return (prefix || '') + Math.random().toString().substr(0, 5);
  }
});

