__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Overlay=void 0;var o=t(r(d[1])),l=t(r(d[2])),n=t(r(d[3])),u=t(r(d[4])),c=t(r(d[5])),s=r(d[6]),f=r(d[7]),y=r(d[8]);function h(t,o){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),l.push.apply(l,n)}return l}var b=function(t){var o=t.children,c=t.isVisible,f=t.containerStyle,y=t.overlayStyle,h=t.windowBackgroundColor,b=t.overlayBackgroundColor,w=t.onBackdropPress,v=t.borderRadius,O=t.width,S=t.height,k=t.fullScreen,P=(0,n.default)(t,["children","isVisible","containerStyle","overlayStyle","windowBackgroundColor","overlayBackgroundColor","onBackdropPress","borderRadius","width","height","fullScreen"]);return u.default.createElement(s.Modal,(0,l.default)({visible:c,onRequestClose:w,transparent:!0},P),u.default.createElement(s.TouchableWithoutFeedback,{onPress:w,testID:"RNE__Overlay__backdrop"},u.default.createElement(s.View,{testID:"overlayContainer",style:s.StyleSheet.flatten([p.backdrop,{backgroundColor:h},f])})),u.default.createElement(s.View,{style:p.container,pointerEvents:"box-none"},u.default.createElement(s.View,{style:s.StyleSheet.flatten([p.overlay,{borderRadius:v,backgroundColor:b,width:O,height:S},k&&p.fullscreen,y])},o)))};e.Overlay=b,b.propTypes={children:c.default.element.isRequired,isVisible:c.default.bool.isRequired,containerStyle:f.ViewPropTypes.style,overlayStyle:f.ViewPropTypes.style,windowBackgroundColor:c.default.string,overlayBackgroundColor:c.default.string,onBackdropPress:c.default.func,borderRadius:c.default.number,width:c.default.oneOfType([c.default.string,c.default.number]),height:c.default.oneOfType([c.default.string,c.default.number]),fullScreen:c.default.bool},b.defaultProps={borderRadius:3,fullScreen:!1,windowBackgroundColor:'rgba(0, 0, 0, .4)',overlayBackgroundColor:'white',width:y.ScreenWidth-80,height:y.ScreenHeight-180,onBackdropPress:function(){return null}};var p=s.StyleSheet.create({backdrop:{position:'absolute',top:0,left:0,width:'100%',height:'100%',justifyContent:'center',alignItems:'center'},container:{flex:1,alignItems:'center',justifyContent:'center'},fullscreen:{width:'100%',height:'100%'},overlay:(function(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?h(n,!0).forEach(function(l){(0,o.default)(t,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t})({borderRadius:5,padding:10},s.Platform.select({android:{elevation:2},default:{shadowColor:'rgba(0, 0, 0, .3)',shadowOffset:{width:0,height:1},shadowRadius:4}}))}),w=(0,f.withTheme)(b,'Overlay');e.default=w},570,[7,52,17,15,53,65,8,345,358]);