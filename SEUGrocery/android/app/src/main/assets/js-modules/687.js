__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=t(r(d[1])),n=t(r(d[2])),u=t(r(d[3])),o=t(r(d[4])),s=t(r(d[5])),c=t(r(d[6])),f=t(r(d[7])),v=t(r(d[8])),p=r(d[9]),h=r(d[10]),w=(function(t){function w(t){var l;return(0,u.default)(this,w),(l=(0,o.default)(this,(0,s.default)(w).call(this)))._mustAlwaysBeVisible=function(){return l.props.animationEnabled||l.props.swipeEnabled},l.state={awake:!t.lazy||t.isFocused},l}return(0,f.default)(w,t),(0,c.default)(w,null,[{key:"getDerivedStateFromProps",value:function(t,l){return t.isFocused&&!l.awake?{awake:!0}:null}}]),(0,c.default)(w,[{key:"render",value:function(){var t=this.state.awake,u=this.props,o=u.isFocused,s=u.childNavigation,c=u.removeClippedSubviews,f=(0,n.default)(u,["isFocused","childNavigation","removeClippedSubviews"]);return v.default.createElement(p.View,{style:b.container,collapsable:!1,removeClippedSubviews:'android'===p.Platform.OS?c:!o&&c},v.default.createElement(p.View,{style:this._mustAlwaysBeVisible()||o?b.innerAttached:b.innerDetached},t?v.default.createElement(h.SceneView,(0,l.default)({},f,{navigation:s})):null))}}]),w})(v.default.PureComponent),b=p.StyleSheet.create({container:{flex:1,overflow:'hidden'},innerAttached:{flex:1},innerDetached:{flex:1,top:3e3}}),y=w;e.default=y},687,[7,17,15,28,36,39,29,42,53,8,637]);