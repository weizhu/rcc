/**
 * @provides FB.JSON
 * @requires FB.Base
 */

/**
 * JSON functions
 * @class FB.JSON
 * @private
 */
FB.provide('JSON', {
  deserialize: function(s) {
    if (!s) {
        return null;
    }
    return eval('(' + s + ')');
  },

  serialize: function(o) {
    if (o === null || o === undefined) {
        return '';
    }
    var sb = [];
    FB.JSON._serializeCore(sb, o);
    return sb.join('');
  },

  _serializeCore: function(sb, o) {
    if (o === null || o === undefined) {
        sb.push('null');
        return;
    }
    var scriptType = typeof(o);

    switch (scriptType) {
        case 'boolean':
            sb.push(o.toString());
            return;
        case 'number':
            sb.push((isFinite(o)) ? o.toString() : 'null');
            return;
        case 'string':
            sb.push(FB.Util.quote(o));
            return;
        case 'object':
            if (o instanceof Array) {
                sb.push('[');
                var a = o;
                var length = a.length;
                var first = true;
                for (var i = 0; i < length; i++) {
                    if(typeof(a[i]) == 'function') {
                        continue;
                    }

                    if (first) {
                        first = false;
                    }
                    else {
                        sb.push(',');
                    }
                    FB.JSON._serializeCore(sb, a[i]);
                }
                sb.push(']');
            }
            else if (o instanceof Date) {
                var d = o;
                var utcValue = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
                sb.push('\"\\@');
                sb.push(utcValue.toString());
                sb.push('@\"');
            }
            else if (o instanceof RegExp) {
                sb.push(o.toString());
            }
            else {
                sb.push('{');
                var first = true;
                var $dict1 = o;
                for (var $key2 in $dict1) {
                    var entry = { key: $key2, value: $dict1[$key2] };
                    if (entry.key.charAt(0) == '$') {
                        continue;
                    }

                    if(typeof(entry.value) == 'function') {
                        continue;
                    }
                    if (first) {
                        first = false;
                    }
                    else {
                        sb.push(',');
                    }

                    sb.push('"' + entry.key + '"');
                    sb.push(':');
                    FB.JSON._serializeCore(sb, entry.value);
                }
                sb.push('}');
            }
            return;
        default:
            sb.push('null');
            return;
    }
  }
});
