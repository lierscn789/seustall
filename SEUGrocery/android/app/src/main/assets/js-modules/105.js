__d(function(g,r,i,a,m,e,d){'use strict';r(d[0]),r(d[1]);var t=r(d[2]),n=r(d[3]).Timing,l=r(d[4]),u=null;function o(){return u||(u=r(d[5])),u()}var c=16.666666666666668,s=[],f=[],v=[],h=[],I=[],T={},p=[],w=1,b=null,k=!1;function q(){var t=v.indexOf(null);return-1===t&&(t=v.length),t}function x(t,n){var l=w++,u=q();return v[u]=l,s[u]=t,f[u]=n,l}function y(t,n,l){r(d[6])(t<=w,'Tried to call timer with ID %s but no such timer exists.',t);var u=v.indexOf(t);if(-1!==u){var h=f[u],I=s[u];if(I&&h){'setTimeout'!==h&&'setImmediate'!==h&&'requestAnimationFrame'!==h&&'requestIdleCallback'!==h||A(u);try{'setTimeout'===h||'setInterval'===h||'setImmediate'===h?I():'requestAnimationFrame'===h?I(o()):'requestIdleCallback'===h?I({timeRemaining:function(){return Math.max(0,c-(o()-n))},didTimeout:!!l}):console.error('Tried to call a callback with invalid type: '+h)}catch(t){b?b.push(t):b=[t]}}else console.error('No callback found for timerID '+t)}}function C(){if(h.length>0){var t=h.slice();h=[];for(var n=0;n<t.length;++n)y(t[n],0)}return h.length>0}function A(t){v[t]=null,s[t]=null,f[t]=null,p[t]=null}function D(t){if(null!=t){var l=v.indexOf(t);if(-1!==l){A(l);var u=f[l];'setImmediate'!==u&&'requestIdleCallback'!==u&&n.deleteTimer(t)}}}var E,O={setTimeout:function(t,l){for(var u=arguments.length,o=new Array(u>2?u-2:0),c=2;c<u;c++)o[c-2]=arguments[c];var s=x(function(){return t.apply(void 0,o)},'setTimeout');return n.createTimer(s,l||0,Date.now(),!1),s},setInterval:function(t,l){for(var u=arguments.length,o=new Array(u>2?u-2:0),c=2;c<u;c++)o[c-2]=arguments[c];var s=x(function(){return t.apply(void 0,o)},'setInterval');return n.createTimer(s,l||0,Date.now(),!0),s},setImmediate:function(t){for(var n=arguments.length,l=new Array(n>1?n-1:0),u=1;u<n;u++)l[u-1]=arguments[u];var o=x(function(){return t.apply(void 0,l)},'setImmediate');return h.push(o),o},requestAnimationFrame:function(t){var l=x(t,'requestAnimationFrame');return n.createTimer(l,1,Date.now(),!1),l},requestIdleCallback:function(t,l){0===I.length&&n.setSendIdleEvents(!0);var u=l&&l.timeout,c=x(null!=u?function(n){var l=T[c];return l&&(O.clearTimeout(l),delete T[c]),t(n)}:t,'requestIdleCallback');if(I.push(c),null!=u){var s=O.setTimeout(function(){var t=I.indexOf(c);t>-1&&(I.splice(t,1),y(c,o(),!0)),delete T[c],0===I.length&&n.setSendIdleEvents(!1)},u);T[c]=s}return c},cancelIdleCallback:function(t){D(t);var l=I.indexOf(t);-1!==l&&I.splice(l,1);var u=T[t];u&&(O.clearTimeout(u),delete T[t]),0===I.length&&n.setSendIdleEvents(!1)},clearTimeout:function(t){D(t)},clearInterval:function(t){D(t)},clearImmediate:function(t){D(t);var n=h.indexOf(t);-1!==n&&h.splice(n,1)},cancelAnimationFrame:function(t){D(t)},callTimers:function(n){t(0!==n.length,'Cannot call `callTimers` with an empty list of IDs.'),b=null;for(var l=0;l<n.length;l++)y(n[l],0);if(b){var u=b.length;if(u>1)for(var o=1;o<u;o++)O.setTimeout(function(t){throw t}.bind(null,b[o]),0);throw b[0]}},callIdleCallbacks:function(t){if(!(c-(o()-t)<1)){if(b=null,I.length>0){var l=I.slice();I=[];for(var u=0;u<l.length;++u)y(l[u],t)}0===I.length&&n.setSendIdleEvents(!1),b&&b.forEach(function(t){return O.setTimeout(function(){throw t},0)})}},callImmediates:function(){for(b=null;C(););b&&b.forEach(function(t){return O.setTimeout(function(){throw t},0)})},emitTimeDriftWarning:function(t){k||(k=!0,console.warn(t))}};n?E=O:(console.warn("Timing native module is not available, can't set timers."),E={callImmediates:O.callImmediates,setImmediate:O.setImmediate}),l.setImmediatesCallback(E.callImmediates.bind(E)),m.exports=E},105,[49,31,9,14,22,106,11]);