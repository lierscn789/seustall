__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),_=r(d[3]),s=r(d[4]),u=r(d[5]),c=r(d[6]);function l(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(t);n&&(_=_.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,_)}return o}function h(n){for(var o=1;o<arguments.length;o++){var _=null!=arguments[o]?arguments[o]:{};o%2?l(_,!0).forEach(function(o){t(n,o,_[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(_)):l(_).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(_,t))})}return n}r(d[7]);var v=r(d[8]),f=r(d[9]),p=f.generateNewAnimationId,y=f.shouldUseNativeDriver,k=(function(t){function l(t,o,u,c,h){var v;return n(this,l),(v=_(this,s(l).call(this)))._value=t,v._parent=o,v._animationClass=u,v._animationConfig=c,v._useNativeDriver=y(c),v._callback=h,v.__attach(),v}return c(l,v),o(l,[{key:"__makeNative",value:function(){this.__isNative=!0,this._parent.__makeNative(),u(s(l.prototype),"__makeNative",this).call(this),this._value.__makeNative()}},{key:"__getValue",value:function(){return this._parent.__getValue()}},{key:"__attach",value:function(){this._parent.__addChild(this),this._useNativeDriver&&this.__makeNative()}},{key:"__detach",value:function(){this._parent.__removeChild(this),u(s(l.prototype),"__detach",this).call(this)}},{key:"update",value:function(){this._value.animate(new this._animationClass(h({},this._animationConfig,{toValue:this._animationConfig.toValue.__getValue()})),this._callback)}},{key:"__getNativeConfig",value:function(){var t=new this._animationClass(h({},this._animationConfig,{toValue:void 0})).__getNativeAnimationConfig();return{type:'tracking',animationId:p(),animationConfig:t,toValue:this._parent.__getNativeTag(),value:this._value.__getNativeTag()}}}]),l})();m.exports=k},218,[52,28,29,36,39,40,42,201,203,204]);