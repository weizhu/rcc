/**
 * @provides FB.Uri
 * @layer Basic
 * @requires FB.Base
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
   * @static
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
   * @static
   */
  createQueryString: function(params, valueEncoder) {
    var keyValues = [];
    FB.forEach(params, function(value, key) {
                 keyValues.push(key + (value === '' ? '' :
                                       '=' + encodeURIComponent(
                                         valueEncoder ? valueEncoder(value) : value)));
                 });
    return keyValues.join('&');
  },

  /**
   * Decode a query string into a parameters object.
   *
   * @access private
   * @param   str {String} the query string
   * @returns     {Object} the parameters to encode
   * @static
   */
  getQueryParameters: function(str) {
    if (str.indexOf('?') == 0) {
      str = str.substr(1);
    }

    var
      decode = decodeURIComponent,
      params = {},
      parts  = str.split('&'),
      i,
      pair;

    for (i=0; i<parts.length; i++) {
      pair = parts[i].split('=', 2);
      params[decode(pair[0])] = decode(pair[1]);
    }

    return params;
  }
});

