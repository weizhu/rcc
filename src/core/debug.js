/**
* @provides FB.Debug
 * @module Basic
* @requires FB.Base
*/

FB.provide('Debug', {
  logLevel: 5,

  assert: function(condition, message) {
    /// <summary>
    /// Bring up an assert dialog when condition evaluates to false
    /// </summary>
    /// <param name="condition" type="Boolean">
    /// Evaluate this to determine whether
    /// message is presented
    /// </param>
    /// <param name="message" type="String">
    /// Message for debugging
    /// </param>
    if (FB.Debug.logLevel > 0 && !condition) {
      message = 'Assert failed: ' + message;
      if (confirm(message + '\r\n\r\nBreak into debugger?')) {
        FB.Debug._fail(message);
      }
    }
  },

  writeLine: function(message) {
    /// <summary>
    /// Output a debugging message, conditional on
    /// debugging being enabled.
    /// </summary>
    /// <param name="message" type="String">
    /// String to output
    /// </param>
    if (FB.Debug.logLevel > 0) {
      if (window.Debug && window.Debug.writeln) {
        window.Debug.writeln(message);
      } else if (window.console) {
        if (window.console.debug) {
          window.console.debug(message);
        } else if (window.console.log) {
          window.console.log(message);
        }
      }
      else if (window.opera &&
      window.opera.postError) {
        window.opera.postError(message);
      }
    }
  },

  logLine: function(logLevel, message) {
    /// <param name="logLevel" type="Number" integer="true">
    /// </param>
    /// <param name="message" type="String">
    /// </param>
    if (logLevel <= FB.Debug.logLevel) {
      FB.Debug.writeLine(message);
    }
  },

  _fail : function(message) {
    FB.Debug.writeLine(message);
    debugger;
  },

  _pushLine : function(sb, s) {
    sb.push(s + "\n");
  },

  _dumpCore : function Debug$_dumpCore(sb, object, name, indentation, dumpedObjects) {
    if (object === null) {
      sb.push(indentation + name + ': null');
      return;
    }
    switch (typeof(object)) {
      case 'undefined':
      FB.Debug._pushLine(sb, indentation + name + ': undefined');
      break;
      case 'number':
      case 'string':
      case 'boolean':
      FB.Debug._pushLine(sb, indentation + name + ': ' + object);
      break;
      default:
      if (object instanceof Date || object instanceof RegExp) {
        FB.Debug._pushLine(sb, indentation + name + ': ' + object);
        break;
      }

      if (object in dumpedObjects) {
        FB.Debug._pushLine(sb, indentation + name + ': ...');
        break;
      }
      dumpedObjects[dumpedObjects.length] = object;

      var recursiveIndentation = indentation + '  ';

      if (object.tagName) {
        FB.Debug._pushLine(sb, indentation + name + ': <' + object.tagName + '>');
        var attributes = object.attributes;
        for (var i = 0; i < attributes.length; i++) {
          var attrValue = attributes[i].nodeValue;
          if (attrValue) {
            FB.Debug._dumpCore(sb, attrValue, attributes[i].nodeName, recursiveIndentation, dumpedObjects);
          }
        }
      }
      else {
        FB.Debug._pushLine(sb, indentation + name + ': ' );
        for (var field in object) {
          var v = object[field];
          if (! (v instanceof Function)) {
            FB.Debug._dumpCore(sb, v, field, recursiveIndentation, dumpedObjects);
          }
        }
      }

      delete dumpedObjects[object];
      break;
    }
  },

  _dump: function Debug$dump(object, name) {
    if ((!name || !name.length) && (object !== null)) {
      name = typeof(object);
    }
    if (!name || !name.length) {
      return;
    }
    var sb = []
    FB.Debug._dumpCore(sb, object, name, '', []);
    FB.Debug.writeLine("Dump (" + window.location.pathname + sb.join('\n'));
  },

  dump: function() {
    var args = Array.prototype.slice.call(arguments, 0);
    FB.Debug._dump(args);
  },

  fail: function Debug$fail(message) {
    FB.Debug._fail(message);
  }
});

FB.FBDebug = FB.Debug;
