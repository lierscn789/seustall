__d(function(g,r,i,a,m,e,d){var t=r(d[0]),l=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=l(r(d[2])),s=l(r(d[3])),n=l(r(d[4])),u=l(r(d[5])),p=l(r(d[6])),c=l(r(d[7])),f=l(r(d[8])),h=t(r(d[9])),b=r(d[10]),_=l(r(d[11])),v="/Users/brentvatne/coding/react-navigation-stack/src/views/TouchableItem.tsx",N=(function(t){function l(){return(0,n.default)(this,l),(0,p.default)(this,(0,c.default)(l).apply(this,arguments))}return(0,f.default)(l,t),(0,u.default)(l,[{key:"render",value:function(){if('android'===b.Platform.OS&&b.Platform.Version>=21){var t=this.props,l=t.style,n=(0,s.default)(t,["style"]);return h.createElement(b.TouchableNativeFeedback,(0,o.default)({},n,{style:null,background:b.TouchableNativeFeedback.Ripple(this.props.pressColor,this.props.borderless),__source:{fileName:v,lineNumber:52}}),h.createElement(b.View,{style:l,__source:{fileName:v,lineNumber:60}},h.Children.only(this.props.children)))}return'ios'===b.Platform.OS?h.createElement(_.default,(0,o.default)({hitSlop:{top:10,bottom:10,right:10,left:10},disallowInterruption:!0,enabled:!this.props.disabled},this.props,{__source:{fileName:v,lineNumber:65}}),this.props.children):h.createElement(b.TouchableOpacity,(0,o.default)({},this.props,{__source:{fileName:v,lineNumber:76}}),this.props.children)}}]),l})(h.Component);e.default=N,N.defaultProps={borderless:!1,pressColor:'rgba(0, 0, 0, .32)'}},704,[143,7,17,15,28,29,36,39,42,53,8,705]);