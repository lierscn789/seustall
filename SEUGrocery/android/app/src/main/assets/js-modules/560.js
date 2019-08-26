__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Input=void 0;var n=t(r(d[1])),o=t(r(d[2])),l=t(r(d[3])),u=t(r(d[4])),s=t(r(d[5])),f=t(r(d[6])),c=t(r(d[7])),p=t(r(d[8])),y=t(r(d[9])),h=t(r(d[10])),S=t(r(d[11])),b=r(d[12]),P=r(d[13]),v=r(d[14]),C=t(r(d[15]));function I(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,l)}return o}function w(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?I(o,!0).forEach(function(n){(0,y.default)(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):I(o).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}var T=(function(t){function y(){var t,n;(0,l.default)(this,y);for(var o=arguments.length,u=new Array(o),p=0;p<o;p++)u[p]=arguments[p];return(n=(0,s.default)(this,(t=(0,f.default)(y)).call.apply(t,[this].concat(u)))).shakeAnimationValue=new b.Animated.Value(0),n.shake=function(){var t=(0,c.default)(n).shakeAnimationValue;t.setValue(0),b.Animated.timing(t,{duration:375,toValue:3,ease:b.Easing.bounce}).start()},n}return(0,p.default)(y,t),(0,u.default)(y,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"clear",value:function(){this.input.clear()}},{key:"isFocused",value:function(){return this.input.isFocused()}},{key:"setNativeProps",value:function(t){this.input.setNativeProps(t)}},{key:"render",value:function(){var t,l,u,s=this,f=this.props,c=f.containerStyle,p=f.inputContainerStyle,y=f.leftIcon,S=f.leftIconContainerStyle,v=f.rightIcon,I=f.rightIconContainerStyle,T=f.inputComponent,j=void 0===T?b.TextInput:T,V=f.inputStyle,k=f.errorProps,E=f.errorStyle,x=f.errorMessage,A=f.label,_=f.labelStyle,D=f.labelProps,N=f.theme,z=(0,o.default)(f,["containerStyle","inputContainerStyle","leftIcon","leftIconContainerStyle","rightIcon","rightIconContainerStyle","inputComponent","inputStyle","errorProps","errorStyle","errorMessage","label","labelStyle","labelProps","theme"]),M=this.shakeAnimationValue.interpolate({inputRange:[0,.5,1,1.5,2,2.5,3],outputRange:[0,-15,0,15,0,-15,0]});return h.default.createElement(b.View,{style:b.StyleSheet.flatten([O.container,c])},(t=A,l=w({style:_},D),u=O.label(N),(0,P.renderNode)(b.Text,t,w({},l,{style:b.StyleSheet.flatten([u,l&&l.style])}))),h.default.createElement(b.Animated.View,{style:b.StyleSheet.flatten([O.inputContainer(N),p,{transform:[{translateX:M}]}])},y&&h.default.createElement(b.View,{style:b.StyleSheet.flatten([O.iconContainer,S])},(0,P.renderNode)(C.default,y)),h.default.createElement(j,(0,n.default)({testID:"RNE__Input__text-input",underlineColorAndroid:"transparent"},z,{ref:function(t){s.input=t},style:b.StyleSheet.flatten([O.input,V])})),v&&h.default.createElement(b.View,{style:b.StyleSheet.flatten([O.iconContainer,I])},(0,P.renderNode)(C.default,v))),!!x&&h.default.createElement(b.Text,(0,n.default)({},k,{style:b.StyleSheet.flatten([O.error(N),E&&E])}),x))}}]),y})(h.default.Component);e.Input=T,T.propTypes={containerStyle:v.ViewPropTypes.style,inputContainerStyle:v.ViewPropTypes.style,leftIcon:P.nodeType,leftIconContainerStyle:v.ViewPropTypes.style,rightIcon:P.nodeType,rightIconContainerStyle:v.ViewPropTypes.style,inputStyle:v.TextPropTypes.style,inputComponent:S.default.oneOfType([S.default.string,S.default.func]),shake:S.default.any,errorProps:S.default.object,errorStyle:v.TextPropTypes.style,errorMessage:S.default.string,label:S.default.node,labelStyle:v.TextPropTypes.style,labelProps:S.default.object,theme:S.default.object};var O={container:{width:'100%',paddingHorizontal:10},inputContainer:function(t){return{flexDirection:'row',borderBottomWidth:1,alignItems:'center',borderColor:t.colors.grey3}},iconContainer:{height:40,justifyContent:'center',alignItems:'center',marginLeft:15},input:{alignSelf:'center',color:'black',fontSize:18,flex:1,minHeight:40},error:function(t){return{margin:5,fontSize:12,color:t.colors.error}},label:function(t){return w({fontSize:16,color:t.colors.grey3},b.Platform.select({android:w({},v.fonts.android.bold),default:{fontWeight:'bold'}}))}},j=(0,v.withTheme)(T,'Input');e.default=j},560,[7,17,15,28,29,36,39,38,42,52,53,65,8,358,345,559]);