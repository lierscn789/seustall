__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),s=r(d[3]),_=r(d[4]),c=r(d[5]),v=r(d[6]);function p(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,s)}return o}function h(n){for(var o=1;o<arguments.length;o++){var s=null!=arguments[o]?arguments[o]:{};o%2?p(s,!0).forEach(function(o){t(n,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):p(s).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(s,t))})}return n}var u=r(d[7]).AnimatedEvent,l=r(d[8]),f=r(d[9]),y=r(d[10]),w=r(d[11]),b=r(d[12]),N=(function(t){function p(t,o){var c;return n(this,p),c=s(this,_(p).call(this)),t.style&&(t=h({},t,{style:new f(t.style)})),c._props=t,c._callback=o,c.__attach(),c}return v(p,l),o(p,[{key:"__getValue",value:function(){var t={};for(var n in this._props){var o=this._props[n];o instanceof l?(!o.__isNative||o instanceof f)&&(t[n]=o.__getValue()):t[n]=o instanceof u?o.__getHandler():o}return t}},{key:"__getAnimatedValue",value:function(){var t={};for(var n in this._props){var o=this._props[n];o instanceof l&&(t[n]=o.__getAnimatedValue())}return t}},{key:"__attach",value:function(){for(var t in this._props){var n=this._props[t];n instanceof l&&n.__addChild(this)}}},{key:"__detach",value:function(){for(var t in this.__isNative&&this._animatedView&&this.__disconnectAnimatedView(),this._props){var n=this._props[t];n instanceof l&&n.__removeChild(this)}c(_(p.prototype),"__detach",this).call(this)}},{key:"update",value:function(){this._callback()}},{key:"__makeNative",value:function(){if(!this.__isNative){for(var t in this.__isNative=!0,this._props){var n=this._props[t];n instanceof l&&n.__makeNative()}this._animatedView&&this.__connectAnimatedView()}}},{key:"setNativeView",value:function(t){this._animatedView!==t&&(this._animatedView=t,this.__isNative&&this.__connectAnimatedView())}},{key:"__connectAnimatedView",value:function(){b(this.__isNative,'Expected node to be marked as "native"');var t=w.findNodeHandle(this._animatedView);b(null!=t,'Unable to locate attached view in the native tree'),y.API.connectAnimatedNodeToView(this.__getNativeTag(),t)}},{key:"__disconnectAnimatedView",value:function(){b(this.__isNative,'Expected node to be marked as "native"');var t=w.findNodeHandle(this._animatedView);b(null!=t,'Unable to locate attached view in the native tree'),y.API.disconnectAnimatedNodeFromView(this.__getNativeTag(),t)}},{key:"__getNativeConfig",value:function(){var t={};for(var n in this._props){var o=this._props[n];o instanceof l&&(t[n]=o.__getNativeTag())}return{type:'props',props:t}}}]),p})();m.exports=N},214,[52,28,29,36,39,40,42,200,203,215,204,81,9]);