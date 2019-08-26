__d(function(g,r,i,a,m,e,d){var t=r(d[0]),n=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var n=(function(n){function s(){var t,n;(0,u.default)(this,s);for(var o=arguments.length,c=new Array(o),f=0;f<o;f++)c[f]=arguments[f];return(n=(0,p.default)(this,(t=(0,l.default)(s)).call.apply(t,[this].concat(c))))._renderScene=function(t){var o=t.route,s=n.props,u=s.screenProps,c=s.descriptors,p=c[o.key],l=p.getComponent();return b.createElement(v.SceneView,{screenProps:u,navigation:p.navigation,component:l})},n._renderIcon=function(t){var o=t.route,s=t.focused,u=void 0===s||s,c=t.tintColor,p=t.horizontal,l=void 0!==p&&p,f=n.props.descriptors,b=f[o.key],v=b.options;return v.tabBarIcon?'function'==typeof v.tabBarIcon?v.tabBarIcon({focused:u,tintColor:c,horizontal:l}):v.tabBarIcon:null},n._getButtonComponent=function(t){var o=t.route,s=n.props.descriptors,u=s[o.key],c=u.options;return c.tabBarButtonComponent?c.tabBarButtonComponent:null},n._getLabelText=function(t){var o=t.route,s=n.props.descriptors,u=s[o.key],c=u.options;return c.tabBarLabel?c.tabBarLabel:'string'==typeof c.title?c.title:o.routeName},n._getAccessibilityLabel=function(t){var o=t.route,s=n.props.descriptors,u=s[o.key],c=u.options;if(void 0!==c.tabBarAccessibilityLabel)return c.tabBarAccessibilityLabel;var p=n._getLabelText({route:o});if('string'==typeof p){var l=n.props.navigation.state.routes;return p+", tab, "+(l.indexOf(o)+1)+" of "+l.length}},n._getTestID=function(t){var o=t.route,s=n.props.descriptors,u=s[o.key],c=u.options;return c.tabBarTestID},n._makeDefaultHandler=function(t){var o=t.route,s=t.navigation;return function(){s.isFocused()?o.hasOwnProperty('index')&&o.index>0?s.dispatch(v.StackActions.popToTop({key:o.key})):s.emit('refocus'):n._jumpTo(o.routeName)}},n._handleTabPress=function(t){var o=t.route;n._isTabPress=!0;var s=n.props.descriptors,u=s[o.key],c=u.navigation,p=u.options,l=n._makeDefaultHandler({route:o,navigation:c});p.tabBarOnPress?p.tabBarOnPress({navigation:c,defaultHandler:l}):l()},n._handleTabLongPress=function(t){var o=t.route,s=n.props.descriptors,u=s[o.key],c=u.navigation,p=u.options,l=n._makeDefaultHandler({route:o,navigation:c});p.tabBarOnLongPress?p.tabBarOnLongPress({navigation:c,defaultHandler:l}):l()},n._handleIndexChange=function(t){n._isTabPress?n._isTabPress=!1:n._jumpTo(n.props.navigation.state.routes[t].routeName)},n._handleSwipeStart=function(){n.setState({isSwiping:!0})},n._handleSwipeEnd=function(){n.setState({isSwiping:!1})},n._jumpTo=function(t){return n.props.navigation.dispatch(v.NavigationActions.navigate({routeName:t}))},n._isTabPress=!1,n}return(0,f.default)(s,n),(0,c.default)(s,[{key:"render",value:function(){var n=this.props,s=n.descriptors,u=n.navigation,c=n.screenProps,p=u.state,l=p.routes[p.index],f=s[l.key],v=y({},this.props.navigationConfig,{},f.options);return b.createElement(t,(0,o.default)({},v,{getLabelText:this._getLabelText,getButtonComponent:this._getButtonComponent,getAccessibilityLabel:this._getAccessibilityLabel,getTestID:this._getTestID,renderIcon:this._renderIcon,renderScene:this._renderScene,onIndexChange:this._handleIndexChange,onTabPress:this._handleTabPress,onTabLongPress:this._handleTabLongPress,navigation:u,descriptors:s,screenProps:c}))}}]),s})(b.Component);return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=(0,v.TabRouter)(t,o);return(0,v.createNavigator)(n,s,o)}};var o=n(r(d[2])),s=n(r(d[3])),u=n(r(d[4])),c=n(r(d[5])),p=n(r(d[6])),l=n(r(d[7])),f=n(r(d[8])),b=t(r(d[9])),v=r(d[10]);function h(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,s)}return o}function y(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?h(o,!0).forEach(function(n){(0,s.default)(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):h(o).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}},722,[143,7,17,52,28,29,36,39,42,53,637]);