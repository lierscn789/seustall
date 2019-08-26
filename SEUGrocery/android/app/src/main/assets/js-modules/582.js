__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.PricingCard=void 0;var n=t(r(d[1])),o=t(r(d[2])),l=t(r(d[3])),f=t(r(d[4])),c=t(r(d[5])),u=r(d[6]),p=r(d[7]),s=r(d[8]),y=t(r(d[9])),b=t(r(d[10])),S=t(r(d[11]));function h(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,l)}return o}function P(t){for(var o=1;o<arguments.length;o++){var l=null!=arguments[o]?arguments[o]:{};o%2?h(l,!0).forEach(function(o){(0,n.default)(t,o,l[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):h(l).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(l,n))})}return t}var w=function(t){var n=t.theme,c=(0,l.default)(t,["theme"]),p=c.containerStyle,s=c.wrapperStyle,h=c.title,P=c.price,w=c.info,j=c.button,v=c.color,T=void 0===v?n.colors.primary:v,C=c.titleStyle,E=c.pricingStyle,B=c.infoStyle,k=c.onButtonPress,x=(0,l.default)(c,["containerStyle","wrapperStyle","title","price","info","button","color","titleStyle","pricingStyle","infoStyle","onButtonPress"]);return f.default.createElement(u.View,(0,o.default)({},x,{style:u.StyleSheet.flatten([O.container(n),p&&p])}),f.default.createElement(u.View,{style:u.StyleSheet.flatten([O.wrapper,s&&s])},f.default.createElement(y.default,{testID:"pricingCardTitle",style:u.StyleSheet.flatten([O.pricingTitle,C,{color:T}])},h),f.default.createElement(y.default,{style:u.StyleSheet.flatten([O.pricingPrice,E])},P),w.map(function(t){return f.default.createElement(y.default,{key:t,style:u.StyleSheet.flatten([O.pricingInfo(n),B])},t)}),f.default.createElement(b.default,{title:j.title,buttonStyle:u.StyleSheet.flatten([O.button,j.buttonStyle,{backgroundColor:T}]),onPress:k,icon:f.default.createElement(S.default,{name:j.icon,size:15,color:"white"})})))};e.PricingCard=w,w.propTypes={containerStyle:s.ViewPropTypes.style,wrapperStyle:s.ViewPropTypes.style,title:c.default.string,price:c.default.oneOfType([c.default.string,c.default.number]),info:c.default.arrayOf(c.default.string),button:c.default.object,color:c.default.string,onButtonPress:c.default.func,titleStyle:c.default.object,pricingStyle:c.default.object,infoStyle:c.default.object,theme:c.default.object},w.defaultProps={info:[]};var O={container:function(t){return P({margin:15,marginBottom:15,backgroundColor:'white',borderWidth:1,padding:15,borderColor:t.colors.grey5},u.Platform.select({android:{elevation:1},default:{shadowColor:'rgba(0,0,0, .2)',shadowOffset:{height:1,width:0},shadowOpacity:.5,shadowRadius:.5}}))},wrapper:{backgroundColor:'transparent'},pricingTitle:P({textAlign:'center',fontSize:(0,p.normalizeText)(30)},u.Platform.select({android:P({},s.fonts.android.black),default:{fontWeight:'800'}})),pricingPrice:P({textAlign:'center',marginTop:10,marginBottom:10,fontSize:(0,p.normalizeText)(40)},u.Platform.select({android:P({},s.fonts.android.bold),default:{fontWeight:'700'}})),pricingInfo:function(t){return P({textAlign:'center',marginTop:5,marginBottom:5,color:t.colors.grey3},u.Platform.select({android:P({},s.fonts.android.bold),default:{fontWeight:'600'}}))},button:{marginTop:15,marginBottom:10}},j=(0,s.withTheme)(w,'PricingCard');e.default=j},582,[7,52,17,15,53,65,8,358,345,566,344,559]);