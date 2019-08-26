__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(r(d[1])),n=t(r(d[2])),l=t(r(d[3])),s=t(r(d[4])),u=t(r(d[5])),c=t(r(d[6])),h=t(r(d[7])),b=r(d[8]),f=r(d[9]),y=r(d[10]),p=t(r(d[11])),v=t(r(d[12])),L=parseInt(b.Platform.Version,10),k='ios'===b.Platform.OS,C=L>=11&&k,S=125,_=(function(t){function f(){return(0,n.default)(this,f),(0,s.default)(this,(0,u.default)(f).apply(this,arguments))}return(0,c.default)(f,t),(0,l.default)(f,[{key:"render",value:function(){var t=this.props,n=t.onPress,l=t.onLongPress,s=t.testID,u=t.accessibilityLabel,c=t.accessibilityRole,f=t.accessibilityStates,y=(0,o.default)(t,["onPress","onLongPress","testID","accessibilityLabel","accessibilityRole","accessibilityStates"]);return h.default.createElement(b.TouchableWithoutFeedback,{onPress:n,onLongPress:l,testID:s,hitSlop:{left:15,right:15,top:0,bottom:5},accessibilityLabel:u,accessibilityRole:c,accessibilityStates:f},h.default.createElement(b.View,y))}}]),f})(h.default.Component),w=(function(t){function o(){var t,l;(0,n.default)(this,o);for(var c=arguments.length,f=new Array(c),y=0;y<c;y++)f[y]=arguments[y];return(l=(0,s.default)(this,(t=(0,u.default)(o)).call.apply(t,[this].concat(f)))).state={layout:{height:0,width:0},keyboard:!1,visible:new b.Animated.Value(1)},l._handleKeyboardShow=function(){return l.setState({keyboard:!0},function(){return b.Animated.timing(l.state.visible,{toValue:0,duration:150,useNativeDriver:!0}).start()})},l._handleKeyboardHide=function(){return b.Animated.timing(l.state.visible,{toValue:1,duration:100,useNativeDriver:!0}).start(function(){l.setState({keyboard:!1})})},l._handleLayout=function(t){var o=l.state.layout,n=t.nativeEvent.layout,s=n.height,u=n.width;s===o.height&&u===o.width||l.setState({layout:{height:s,width:u}})},l._getActiveTintColor=function(){var t=l.props.activeTintColor;if(t)return'string'==typeof t?t:t[l.context]},l._getInactiveTintColor=function(){var t=l.props.inactiveTintColor;if(t)return'string'==typeof t?t:t[l.context]},l._getActiveBackgroundColor=function(){var t=l.props.activeBackgroundColor;if(t)return'string'==typeof t?t:t[l.context]},l._getInactiveBackgroundColor=function(){var t=l.props.inactiveBackgroundColor;if(t)return'string'==typeof t?t:t[l.context]},l._renderLabel=function(t){var o=t.route,n=t.focused,s=l.props,u=s.labelStyle,c=s.showLabel,f=s.showIcon,y=s.allowFontScaling;if(!1===c)return null;var p=l._getActiveTintColor(),v=l._getInactiveTintColor(),L=l.props.getLabelText({route:o}),k=n?p:v;return'string'==typeof L?h.default.createElement(b.Animated.Text,{numberOfLines:1,style:[T.label,{color:k},f&&l._shouldUseHorizontalLabels()?T.labelBeside:T.labelBeneath,u],allowFontScaling:y},L):'function'==typeof L?L({route:o,focused:n,tintColor:k}):L},l._renderIcon=function(t){var o=t.route,n=t.focused,s=l.props,u=s.navigation,c=s.renderIcon,b=s.showIcon,f=s.showLabel;if(!1===b)return null;var y=l._shouldUseHorizontalLabels(),v=l._getActiveTintColor(),L=l._getInactiveTintColor(),k=n?1:0,C=n?0:1;return h.default.createElement(p.default,{route:o,horizontal:y,navigation:u,activeOpacity:k,inactiveOpacity:C,activeTintColor:v,inactiveTintColor:L,renderIcon:c,style:[T.iconWithExplicitHeight,!1===f&&!y&&T.iconWithoutLabel,!1!==f&&!y&&T.iconWithLabel]})},l._shouldUseHorizontalLabels=function(){var t=l.props.navigation.state.routes,o=l.props,n=o.isLandscape,s=o.dimensions,u=o.adaptive,c=o.tabStyle;if(!u)return!1;if(b.Platform.isPad){var h=S,f=b.StyleSheet.flatten(c);return f&&('number'==typeof f.width?h=f.width:'number'==typeof f.maxWidth&&(h=f.maxWidth)),t.length*h<=s.width}return n},l}return(0,c.default)(o,t),(0,l.default)(o,[{key:"componentDidMount",value:function(){'ios'===b.Platform.OS?(b.Keyboard.addListener('keyboardWillShow',this._handleKeyboardShow),b.Keyboard.addListener('keyboardWillHide',this._handleKeyboardHide)):(b.Keyboard.addListener('keyboardDidShow',this._handleKeyboardShow),b.Keyboard.addListener('keyboardDidHide',this._handleKeyboardHide))}},{key:"componentWillUnmount",value:function(){'ios'===b.Platform.OS?(b.Keyboard.removeListener('keyboardWillShow',this._handleKeyboardShow),b.Keyboard.removeListener('keyboardWillHide',this._handleKeyboardHide)):(b.Keyboard.removeListener('keyboardDidShow',this._handleKeyboardShow),b.Keyboard.removeListener('keyboardDidHide',this._handleKeyboardHide))}},{key:"render",value:function(){var t=this,o=this.props,n=o.navigation,l=o.keyboardHidesTabBar,s=o.onTabPress,u=o.onTabLongPress,c=o.safeAreaInset,f=o.style,p=o.tabStyle,v=n.state.routes,L='dark'===this.context,k=this._getActiveBackgroundColor(),C=this._getInactiveBackgroundColor(),S=[T.tabBar,L?T.tabBarDark:T.tabBarLight,this._shouldUseHorizontalLabels()&&!b.Platform.isPad?T.tabBarCompact:T.tabBarRegular,f];return h.default.createElement(b.Animated.View,{style:[T.container,l?{transform:[{translateY:this.state.visible.interpolate({inputRange:[0,1],outputRange:[this.state.layout.height,0]})}],position:this.state.keyboard?'absolute':null}:null],pointerEvents:l&&this.state.keyboard?'none':'auto',onLayout:this._handleLayout},h.default.createElement(y.SafeAreaView,{style:S,forceInset:c},v.map(function(o,l){var c=l===n.state.index,b={route:o,focused:c},f=t.props.getAccessibilityLabel({route:o}),y=t.props.getAccessibilityRole({route:o}),v=t.props.getAccessibilityStates(b),L=t.props.getTestID({route:o}),S=c?k:C,w=t.props.getButtonComponent({route:o})||_;return h.default.createElement(w,{key:o.key,onPress:function(){return s({route:o})},onLongPress:function(){return u({route:o})},testID:L,accessibilityLabel:f,accessibilityRole:y,accessibilityStates:v,style:[T.tab,{backgroundColor:S},t._shouldUseHorizontalLabels()?T.tabLandscape:T.tabPortrait,p]},t._renderIcon(b),t._renderLabel(b))})))}}]),o})(h.default.Component);w.contextType=f.ThemeContext,w.defaultProps={keyboardHidesTabBar:!1,activeTintColor:{light:'#007AFF',dark:'#fff'},inactiveTintColor:{light:'#8e8e93',dark:'#7f7f7f'},activeBackgroundColor:'transparent',inactiveBackgroundColor:'transparent',showLabel:!0,showIcon:!0,allowFontScaling:!0,adaptive:C,safeAreaInset:{bottom:'always',top:'never'}};var T=b.StyleSheet.create({tabBar:{borderTopWidth:b.StyleSheet.hairlineWidth,flexDirection:'row'},tabBarLight:{backgroundColor:f.ThemeColors.light.header,borderTopColor:f.ThemeColors.light.headerBorder},tabBarDark:{backgroundColor:f.ThemeColors.dark.header,borderTopColor:f.ThemeColors.dark.headerBorder},container:{left:0,right:0,bottom:0,elevation:8},tabBarCompact:{height:29},tabBarRegular:{height:49},tab:{flex:1,alignItems:k?'center':'stretch'},tabPortrait:{justifyContent:'flex-end',flexDirection:'column'},tabLandscape:{justifyContent:'center',flexDirection:'row'},iconWithoutLabel:{flex:1},iconWithLabel:{flex:1},iconWithExplicitHeight:{height:b.Platform.isPad?49:29},label:{textAlign:'center',backgroundColor:'transparent'},labelBeneath:{fontSize:11,marginBottom:1.5},labelBeside:{fontSize:12,marginLeft:15}}),B=(0,v.default)(w);e.default=B},723,[7,15,28,29,36,39,42,53,8,637,679,724,725]);