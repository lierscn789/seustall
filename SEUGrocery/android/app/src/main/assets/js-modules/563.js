__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Image=void 0;var n=t(r(d[1])),l=t(r(d[2])),o=t(r(d[3])),c=t(r(d[4])),u=t(r(d[5])),p=t(r(d[6])),f=t(r(d[7])),y=t(r(d[8])),s=t(r(d[9])),h=t(r(d[10])),b=r(d[11]),O=r(d[12]),C=r(d[13]);function v(t,n){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),l.push.apply(l,o)}return l}function S(t){for(var l=1;l<arguments.length;l++){var o=null!=arguments[l]?arguments[l]:{};l%2?v(o,!0).forEach(function(l){(0,n.default)(t,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(o).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}var E=(function(t){function n(){var t,l;(0,c.default)(this,n);for(var o=arguments.length,u=new Array(o),y=0;y<o;y++)u[y]=arguments[y];return(l=(0,p.default)(this,(t=(0,f.default)(n)).call.apply(t,[this].concat(u)))).placeholderContainerOpacity=new b.Animated.Value(1),l.onLoadEnd=function(){var t=200*Math.random();setTimeout(function(){return b.Animated.timing(l.placeholderContainerOpacity,{toValue:0,duration:350,useNativeDriver:!0}).start()},100+t)},l}return(0,y.default)(n,t),(0,u.default)(n,[{key:"render",value:function(){var t=this.props,n=t.placeholderStyle,c=t.PlaceholderContent,u=t.containerStyle,p=t.style,f=t.ImageComponent,y=(0,o.default)(t,["placeholderStyle","PlaceholderContent","containerStyle","style","ImageComponent"]);return s.default.createElement(b.View,{style:b.StyleSheet.flatten([P.container,u])},b.Platform.select({android:s.default.createElement(s.default.Fragment,null,s.default.createElement(b.View,{style:P.placeholderContainer},s.default.createElement(b.Animated.View,{testID:"RNE__Image__placeholder",style:b.StyleSheet.flatten([p,P.placeholder,{backgroundColor:this.placeholderContainerOpacity.interpolate({inputRange:[0,1],outputRange:[P.placeholder.backgroundColor,'transparent']})},n])},c)),s.default.createElement(f,(0,l.default)({},y,{style:p}))),default:s.default.createElement(s.default.Fragment,null,s.default.createElement(f,(0,l.default)({},y,{onLoadEnd:this.onLoadEnd,style:p})),s.default.createElement(b.Animated.View,{style:b.StyleSheet.flatten([P.placeholderContainer,{opacity:this.placeholderContainerOpacity}])},s.default.createElement(b.View,{testID:"RNE__Image__placeholder",style:b.StyleSheet.flatten([p,P.placeholder,n])},c)))}))}}]),n})(s.default.PureComponent);e.Image=E;var P={container:{backgroundColor:'transparent',position:'relative'},placeholderContainer:S({},b.StyleSheet.absoluteFillObject),placeholder:{backgroundColor:'#bdbdbd',alignItems:'center',justifyContent:'center'}};E.propTypes=S({},b.Image.propTypes,{ImageComponent:h.default.oneOfType([h.default.func,h.default.object]),PlaceholderContent:O.nodeType,containerStyle:C.ViewPropTypes.style,placeholderStyle:b.Image.propTypes.style}),E.defaultProps={ImageComponent:b.Image};var w=(0,C.withTheme)(E,'Image');e.default=w},563,[7,52,17,15,28,29,36,39,42,53,65,8,358,345]);