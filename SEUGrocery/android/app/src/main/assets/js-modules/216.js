__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),s=r(d[3]),f=r(d[4]),_=r(d[5]),u=r(d[6]),c=r(d[7]),v=r(d[8]),h=(function(h){function l(n){var f;return t(this,l),(f=o(this,s(l).call(this)))._transforms=n,f}return _(l,c),n(l,[{key:"__makeNative",value:function(){this._transforms.forEach(function(t){for(var n in t){var o=t[n];o instanceof u&&o.__makeNative()}}),f(s(l.prototype),"__makeNative",this).call(this)}},{key:"__getValue",value:function(){return this._transforms.map(function(t){var n={};for(var o in t){var s=t[o];n[o]=s instanceof u?s.__getValue():s}return n})}},{key:"__getAnimatedValue",value:function(){return this._transforms.map(function(t){var n={};for(var o in t){var s=t[o];n[o]=s instanceof u?s.__getAnimatedValue():s}return n})}},{key:"__attach",value:function(){var t=this;this._transforms.forEach(function(n){for(var o in n){var s=n[o];s instanceof u&&s.__addChild(t)}})}},{key:"__detach",value:function(){var t=this;this._transforms.forEach(function(n){for(var o in n){var s=n[o];s instanceof u&&s.__removeChild(t)}}),f(s(l.prototype),"__detach",this).call(this)}},{key:"__getNativeConfig",value:function(){var t=[];return this._transforms.forEach(function(n){for(var o in n){var s=n[o];s instanceof u?t.push({type:'animated',property:o,nodeTag:s.__getNativeTag()}):t.push({type:'static',property:o,value:v.transformDataType(s)})}}),v.validateTransform(t),{type:'transform',transforms:t}}}]),l})();m.exports=h},216,[28,29,36,39,40,42,203,205,204]);