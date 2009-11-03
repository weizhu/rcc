/**
 * @provides FB.Loader.use
 * @requires FB.Loader FB.Util FB.Dom FB.Base
 */

FB.provide('Loader', {
  /*
   * Use this to request dynamic loading of components in Facebook Client
   * JavaScript library
   * @param {string} comps  a component
   * @param {function} callback  callback function to be executed when all
   *                  required comps
   *                  are finished loading
   */
  use: function(comps, callback) {
    var request = {'comps': comps, 'cb': callback};
    // Check if request is already completed
    if (FB.Loader._check(request)) {
      callback();
      return;
    }

    FB.Loader._reqs.push(request);

    // TODO: We should use a timer trick to queue up multiple components requests
    // so we just need to send out a single script HTTP request

    // Note the '' token a temp hack for co-existance of old code
    FB.Dom.addScript(FB.dynData.resources.loader_url  + '?comps=' + comps + '&exclude=' +
                      FB.Util.obj2array(FB.Loader.loaded).join(','));
  },

  _onCompLoaded: function() {
    var completed = [];
    FB.forEach(FB.Loader._reqs, function(req, i) {
      if (req && FB.Loader._check(req)) {
        completed.push([i, req.cb]);
      }
    });

    // First delete them from request query before calling
    // callback functions to prevent re-entrant calls
    FB.forEach(completed, function(item) {
      delete FB.Loader._reqs[item[0]];
    });


    // Now call the callbacks
    FB.forEach(completed, function(item) {
      item[1]();
    })
  },


  /**
   * Check if a request if fullfilled
   * @return true if it is done
   */
  _check: function(req) {
    var comp = req.comps;
    // Is comp loaded?
     if (FB.Loader.loaded[comp] || FB.create(comp, false, true)) {
      return true;
    }

    return false;
  },

  /*
   * Global state variables
   */
  _reqs : []
});

