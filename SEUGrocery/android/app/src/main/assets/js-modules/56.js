__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]);function o(t,o){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);o&&(c=c.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,c)}return n}function n(n){for(var c=1;c<arguments.length;c++){var l=null!=arguments[c]?arguments[c]:{};c%2?o(l,!0).forEach(function(o){t(n,o,l[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):o(l).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(l,t))})}return n}var c=r(d[1]),l=r(d[2]),s=(r(d[3]),r(d[4])),u=c.roundToNearestPixel(.4);0===u&&(u=1/c.get());var p={position:'absolute',left:0,right:0,top:0,bottom:0};m.exports={hairlineWidth:u,absoluteFill:p,absoluteFillObject:p,compose:function(t,o){return null!=t&&null!=o?[t,o]:null!=t?t:o},flatten:s,setStyleAttributePreprocessor:function(t,o){var c;if(!0===l[t])c={};else{if('object'!=typeof l[t])return void console.error(t+" is not a valid style attribute");c=l[t]}l[t]=n({},c,{process:o})},create:function(t){return t}}},56,[52,57,60,77,78]);