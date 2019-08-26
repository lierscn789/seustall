__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Header=void 0;var n=t(r(d[1])),l=t(r(d[2])),o=t(r(d[3])),c=t(r(d[4])),f=t(r(d[5])),u=r(d[6]),y=r(d[7]),p=r(d[8]),s=t(r(d[9])),h=t(r(d[10]));function S(t,n){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),l.push.apply(l,o)}return l}function b(t){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?S(l,!0).forEach(function(n){(0,o.default)(t,n,l[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):S(l).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(l,n))})}return t}var C={left:'flex-start',right:'flex-end',center:'center'},O=function(t){var n=t.style,l=t.placement,o=t.children;return c.default.createElement(u.View,{style:u.StyleSheet.flatten([{alignItems:C[l]},n])},null==o||!1===o?null:o.text?(0,p.renderNode)(s.default,o.text,b({numberOfLines:1},o)):o.icon?(0,p.renderNode)(h.default,b({},o,{name:o.icon,containerStyle:u.StyleSheet.flatten([{alignItems:C[l]},o.containerStyle])})):(0,p.renderNode)(s.default,o))};O.propTypes={placement:f.default.oneOf(['left','center','right']),style:y.ViewPropTypes.style,children:f.default.oneOfType([p.nodeType,f.default.node])};var P=function(t){var o=t.statusBarProps,f=t.leftComponent,y=t.centerComponent,p=t.rightComponent,s=t.leftContainerStyle,h=t.centerContainerStyle,S=t.rightContainerStyle,b=t.backgroundColor,C=t.backgroundImage,P=t.backgroundImageStyle,w=t.containerStyle,j=t.placement,k=t.barStyle,v=t.children,I=t.theme,B=(0,l.default)(t,["statusBarProps","leftComponent","centerComponent","rightComponent","leftContainerStyle","centerContainerStyle","rightContainerStyle","backgroundColor","backgroundImage","backgroundImageStyle","containerStyle","placement","barStyle","children","theme"]);return c.default.createElement(u.ImageBackground,(0,n.default)({testID:"headerContainer"},B,{style:u.StyleSheet.flatten([T.container(I),b&&{backgroundColor:b},w]),source:C,imageStyle:P}),c.default.createElement(u.StatusBar,(0,n.default)({barStyle:k},o)),c.default.createElement(O,{style:u.StyleSheet.flatten(['center'===j&&T.rightLeftContainer,s]),placement:"left"},c.default.isValidElement(v)&&v||v[0]||f),c.default.createElement(O,{style:u.StyleSheet.flatten([T.centerContainer,'center'!==j&&{paddingHorizontal:u.Platform.select({android:16,default:15})},h]),placement:j},v[1]||y),c.default.createElement(O,{style:u.StyleSheet.flatten(['center'===j&&T.rightLeftContainer,S]),placement:"right"},v[2]||p))};e.Header=P,P.propTypes={placement:f.default.oneOf(['left','center','right']),leftComponent:p.nodeType,centerComponent:p.nodeType,rightComponent:p.nodeType,leftContainerStyle:y.ViewPropTypes.style,centerContainerStyle:y.ViewPropTypes.style,rightContainerStyle:y.ViewPropTypes.style,backgroundColor:f.default.string,backgroundImage:f.default.object,backgroundImageStyle:u.Image.propTypes.style,containerStyle:y.ViewPropTypes.style,statusBarProps:f.default.object,barStyle:f.default.oneOf(['default','light-content','dark-content']),children:f.default.oneOfType([f.default.arrayOf(f.default.node),f.default.node]),theme:f.default.object},P.defaultProps={placement:'center',children:[]};var T={container:function(t){return{borderBottomColor:'#f2f2f2',borderBottomWidth:u.StyleSheet.hairlineWidth,paddingHorizontal:10,backgroundColor:t.colors.primary,paddingTop:(0,y.getStatusBarHeight)(),flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:u.Platform.select({android:56,default:44})+(0,y.getStatusBarHeight)()}},centerContainer:{flex:3},rightLeftContainer:{flex:1}},w=(0,y.withTheme)(P,'Header');e.default=w},581,[7,17,15,52,53,65,8,345,358,566,559]);