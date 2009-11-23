/**
 * @provides FB.Event
 * @module Basic
 * @requires FB.Type FB.Base
 */
/**
 * Basic Event system
 *
 * @class FB.Event
 * @private
 */
FB.provide('Event', {
  /**
   * Subscribe to an event on the given object
   * Example:
   * FB.Event.add(FB.App, 'session', function(session) {
   *   if (session) {
   *     // Yeah!. User is connected
   *     ...
   *     return true; // I don't need to listen anymore
   *   }
   *
   *   // Hmm. no session. Keep listening
   * }
   *
   * @param {object} obj object that exposes the named event
   * @param {string} name Name of event
   * @param {function} callback A callback function.
   * arguments may be passed to the callback. If the callback function
   * returns true, the event will be subscribed.
   *
   * @static
   */
  add: function (obj, name, callback) {
    FB.Event._get(obj, name).add(callback);
  },

  /**
   * Unsubscribe to an event on the given object. Note you can also unsubscribe an event
   * by simply return true in the callback function provided to FB.Event.subscribe.
   * Example:
   * FB.Event.add(FB.App, 'connectState', mycallback);
   * ...
   * // Dont' need to subscribe to the event anymore
   * FB.Event.remove(FB.App, 'connectState', mycallback);
   * @param {object} obj object that exposes the named event
   * @param {string} name Name of event
   * @param {function} callback previous callback function passed to
   *        FB.Event.add
   * @static
   */
  remove: function(obj, name, callback) {
    FB.Event._get(obj, name).remove(callback);
  },

  /**
   * Fire an event on the given object
   * @param {object} obj object that exposes the named event
   * @param {string} name Name of event
   * @param {object} args0, .., argN arguments to be passed to callback
   * functions
   *   that subscribed to the event
   * @static
   */
  fire: function(obj, name) {
    var e = FB.Event._get(obj, name);
    e.invoke.apply(e, Array.prototype.slice.call(arguments, 2));
  },

  ////////////////////// Helper Methods ///////////////////////////////////////
  /**
   * Watch for changes
   * @param {object} obj object that exposes the named event
   * @param {string} name Name of event.
   * @param {function} callback A callback function. arguments may be passed to the callback.
   *     If the callback function returns true, the event will be unsubscribed.
   * @param {bool} no_sync_callback By default, the callback will be invoked immediately before
   *    the event is fired, unless this parameter specified a true value
   * @param {bool} auto_unsubscribe By default, the callback will be invoked whenever the event fires.
   *      However, if this parameter value is true, the callback will be unsubscribed from the event after
   *      it is fired once.
   * @static
   */
  monitor: function(obj, name, callback, /*optional*/ no_sync_callback, /*optional*/ auto_unsubscribe) {
    if (no_sync_callback || !callback()) {
      if (auto_unsubscribe) {
        FB.Event.once(obj, name, callback);
      } else {
        FB.Event.add(obj, name, callback);
      }
    }
  },

  once: function (obj, name, callback) {
    FB.Event.add(obj, name, function(result) {
      callback(result);
      return true;
    });
  },

  /*
   * Set property on an object and fire property
   * changed event if changed
   * @private
   * @static
   */
  setProperty: function(obj, propertyName, newValue) {
    // Check if property actually changed
    if(FB.JSON.serialize(newValue) != FB.JSON.serialize(obj[propertyName])) {
      obj[propertyName] = newValue;
      FB.Event.fire(obj, propertyName, newValue);
    }
  },

  _get: function(obj, name) {
    // It is a bit tricky to find a way to quickly
    // and safely attach events with a JavaScript object.
    // I decided to use a functin to store it so that
    // it won't alter JSON encoding behavior.
    //
    if (!obj.$evts) {
      obj.$evts = function(){};
      obj.$evts.map = {};
    }
    var map = obj.$evts.map;
    if (!map[name]) {
      map[name] =  new FB.Delegate();
    }
    return map[name];
  }

});



/**
 * @class FB.Delegate
 * @private
 */
FB.Class('Delegate',
  /*
   *  constructor
   */
  function() {
    this.subs = [];
  },

  /*
   * Instance methods
   */
  {
  add: function(callback) {
    this.subs.push(callback);
  },

  remove: function(callback) {
    for(var i=0; i < this.subs.length; i++) {
      if (this.subs[i] == callback) {
        delete this.subs[i];
        return;
      }
    }
  },

  invoke: function() {
    var args = arguments;
    var e = this;
    FB.forEach(this.subs.slice(), function(callback) {
      // Invoke handler. If handler returns true
      // remove it
      if (!callback || callback.apply(callback, args)) {
        e.remove(callback);
      }
    });
  }
});

