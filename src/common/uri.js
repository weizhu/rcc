/**
 * @provides v2.FB.Uri
 * @requires v2.FB.Base
 *
 */

/**
 * Uri related functions
 * Note: I am creating a separate Uri component instead of putting it into
 * FB.Util because I expect that we will add more Uri related methods back
 * over time.
 * @class FB.Uri
 * @private
 */
FB.provide('Uri', {
  /*
   * combine
   */
  combine: function(absolute, relative) {
    return (absolute.match(/.*\//) + relative).replace(/(https?:\/\/[^\/]+)([^:]*\/\/)(.*)$/, '$1/$3')
  },

  /**
   * Given a dictionary mapping name to param
   * returns a query string with encoded values.
   * @param  {Object} q_params
   * the dictionary
   * @param {function} optional encoder for values
   * @return  String
   */
  createQueryString: function(params, valueEncoder) {
    var keyValues = [];
    FB.forEach(params, function(value, key) {
                 keyValues.push(key + (value === '' ? '' :
                                       '=' + encodeURIComponent(
                                         valueEncoder ? valueEncoder(value) : value)));
                 });
    return keyValues.join('&');
  }
});

