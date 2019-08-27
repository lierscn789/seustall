__d(function(g,r,i,a,m,e,d){var t=r(d[0]),n=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.getInset=D,e.getStatusBarHeight=function(t){return k(t)},e.withSafeArea=e.default=void 0;var o=n(r(d[2])),s=n(r(d[3])),u=n(r(d[4])),p=n(r(d[5])),c=n(r(d[6])),f=n(r(d[7])),l=n(r(d[8])),h=n(r(d[9])),v=t(r(d[10])),y=r(d[11]),w=n(r(d[12])),b=n(r(d[13]));function S(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,s)}return o}function _(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?S(o,!0).forEach(function(n){(0,u.default)(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):S(o).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}var L=function(){var t=y.Dimensions.get('window'),n=t.width,o=t.height;return 0===n&&0===o?y.Dimensions.get('screen'):{width:n,height:o}},O=L(),B=O.height,P=O.width,I=(((y.Platform.constants||{}).reactNativeVersion||{}).minor,'web'!==y.Platform.OS&&('ios'===y.Platform.OS&&(812===B&&375===P||375===B&&812===P)||896===B&&414===P||414===B&&896===P)),M='ios'===y.Platform.OS&&(1194===B&&834===P||834===B&&1194===P||1024===B&&1366===P||1366===B&&1024===P),R=!('ios'!==y.Platform.OS||I||B>P&&P<768||P>B&&B<768),T=null,j=null,k=function(t){return null!==T?T:'android'===y.Platform.OS?g.Expo?g.Expo.Constants.statusBarHeight:0:I?t?0:44:M?24:R?j?0:20:t||j?0:20},E=function(t){if(!t.includes('%'))return 0;var n=parseFloat(t)/100;return isNaN(n)?0:n},x=(function(t){function n(){var t,o;(0,p.default)(this,n);for(var u=arguments.length,c=new Array(u),h=0;h<u;h++)c[h]=arguments[h];return(o=(0,f.default)(this,(t=(0,l.default)(n)).call.apply(t,[this].concat(c)))).state={touchesTop:!0,touchesBottom:!0,touchesLeft:!0,touchesRight:!0,orientation:null,viewWidth:0,viewHeight:0},o._handleLayout=function(t){o.props.onLayout&&o.props.onLayout(t),o._updateMeasurements()},o._updateMeasurements=function(){if(o._isMounted&&o.view){var t=o.props.isLandscape,n=o.state.orientation,s=t?'landscape':'portrait';if(!n||n!==s){var u=L(),p=u.width,c=u.height;o.view.getNode().measureInWindow(function(t,n,u,f){if(o.view){var l=n,h=t;l>=c?l%=c:l<0&&(l=l%c+c),h>=p?h%=p:h<0&&(h=h%p+p);var v=0===l,y=l+f>=c,w=0===h,b=h+u>=p;o.setState({touchesTop:v,touchesBottom:y,touchesLeft:w,touchesRight:b,orientation:s,viewWidth:u,viewHeight:f})}})}}},o._getSafeAreaStyle=function(){var t=o.state,n=t.touchesTop,s=t.touchesBottom,u=t.touchesLeft,p=t.touchesRight,c=o.props,f=c.forceInset,l=(c.isLandscape,o._getViewStyles()),h=l.paddingTop,v=l.paddingBottom,y=l.paddingLeft,w=l.paddingRight,b=_({},l.viewStyle,{paddingTop:n?o._getInset('top'):0,paddingBottom:s?o._getInset('bottom'):0,paddingLeft:u?o._getInset('left'):0,paddingRight:p?o._getInset('right'):0});return f&&Object.keys(f).forEach(function(t){var n=f[t];switch('always'===n&&(n=o._getInset(t)),'never'===n&&(n=0),t){case'horizontal':b.paddingLeft=n,b.paddingRight=n;break;case'vertical':b.paddingTop=n,b.paddingBottom=n;break;case'left':case'right':case'top':case'bottom':var s="padding"+t[0].toUpperCase()+t.slice(1);b[s]=n}}),b.height&&'number'==typeof b.height&&(b.height+=b.paddingTop+b.paddingBottom),b.width&&'number'==typeof b.width&&(b.width+=b.paddingLeft+b.paddingRight),b.paddingTop=Math.max(b.paddingTop,h),b.paddingBottom=Math.max(b.paddingBottom,v),b.paddingLeft=Math.max(b.paddingLeft,y),b.paddingRight=Math.max(b.paddingRight,w),b},o._getViewStyles=function(){var t=o.state.viewWidth,n=y.StyleSheet.flatten(o.props.style||{}),u=n.padding,p=void 0===u?0:u,c=n.paddingVertical,f=void 0===c?p:c,l=n.paddingHorizontal,h=void 0===l?p:l,v=n.paddingTop,w=void 0===v?f:v,b=n.paddingBottom,S=void 0===b?f:b,_=n.paddingLeft,L=void 0===_?h:_,O=n.paddingRight,B=void 0===O?h:O,P=(0,s.default)(n,["padding","paddingVertical","paddingHorizontal","paddingTop","paddingBottom","paddingLeft","paddingRight"]);return'number'!=typeof w&&(w=E(w)*t),'number'!=typeof S&&(S=E(S)*t),'number'!=typeof L&&(L=E(L)*t),'number'!=typeof B&&(B=E(B)*t),{paddingTop:w,paddingBottom:S,paddingLeft:L,paddingRight:B,viewStyle:P}},o._getInset=function(t){return D(t,o.props.isLandscape)},o}return(0,h.default)(n,t),(0,c.default)(n,[{key:"componentDidMount",value:function(){var t=this;this._isMounted=!0,y.InteractionManager.runAfterInteractions(function(){t._updateMeasurements()})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidUpdate",value:function(){this._updateMeasurements()}},{key:"render",value:function(){var t=this,n=this.props,u=(n.forceInset,n.isLandscape,n.style,(0,s.default)(n,["forceInset","isLandscape","style"])),p=this._getSafeAreaStyle();return v.default.createElement(y.Animated.View,(0,o.default)({ref:function(n){return t.view=n},pointerEvents:"box-none"},u,{onLayout:this._handleLayout,style:p}))}}]),n})(v.Component);function D(t,n){switch(t){case'horizontal':case'right':case'left':return n&&I?44:0;case'vertical':case'top':return k(n);case'bottom':return I?n?24:34:M?20:0}}x.setStatusBarHeight=function(t){T=t},x.setStatusBarHidden=function(t){j=t};var H=(0,b.default)(x),A=H;e.default=A;e.withSafeArea=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var o=(function(o){function s(){return(0,p.default)(this,s),(0,f.default)(this,(0,l.default)(s).apply(this,arguments))}return(0,h.default)(s,o),(0,c.default)(s,[{key:"render",value:function(){return v.default.createElement(H,{style:{flex:1},forceInset:t},v.default.createElement(n,this.props))}}]),s})(v.Component);return(0,w.default)(o,n)}}},688,[143,7,17,15,52,28,29,36,39,42,53,8,689,690]);