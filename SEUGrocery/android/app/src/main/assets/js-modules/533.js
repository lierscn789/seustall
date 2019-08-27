__d(function(g,r,i,a,m,e,d){var t=r(d[0]),o=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,o){var c,h;return h=c=(function(t){function c(){var t,o;(0,s.default)(this,c);for(var n=arguments.length,u=new Array(n),l=0;l<n;l++)u[l]=arguments[l];return(o=(0,f.default)(this,(t=(0,p.default)(c)).call.apply(t,[this].concat(u)))).state={logo:void 0,navIcon:void 0,overflowIcon:void 0,actions:void 0},o}return(0,v.default)(c,t),(0,l.default)(c,[{key:"componentDidMount",value:function(){this.updateLogoIconSource(),this.updateNavIconSource(),this.updateOverflowIconSource(),this.updateActionIconSources()}},{key:"componentDidUpdate",value:function(t){z(t,this.props)||this.updateLogoIconSource(),D(t,this.props)||this.updateNavIconSource(),T(t,this.props)||this.updateOverflowIconSource(),A(t,this.props)||this.updateActionIconSources()}},{key:"updateLogoIconSource",value:function(){var t,n,c,s,l,f;return u.default.async(function(p){for(;;)switch(p.prev=p.next){case 0:if(t=this.props,n=t.logoName,c=t.iconSize,s=t.iconColor,l=t.titleColor,!n){p.next=8;break}return p.next=4,u.default.awrap(o(n,c,s||l));case 4:f=p.sent,this.setState({logo:f}),p.next=9;break;case 8:this.state.logo&&this.setState({logo:void 0});case 9:case"end":return p.stop()}},null,this)}},{key:"updateNavIconSource",value:function(){var t,n,c,s,l,f;return u.default.async(function(p){for(;;)switch(p.prev=p.next){case 0:if(t=this.props,n=t.navIconName,c=t.iconSize,s=t.iconColor,l=t.titleColor,!n){p.next=8;break}return p.next=4,u.default.awrap(o(n,c,s||l));case 4:f=p.sent,this.setState({navIcon:f}),p.next=9;break;case 8:this.state.navIcon&&this.setState({navIcon:void 0});case 9:case"end":return p.stop()}},null,this)}},{key:"updateOverflowIconSource",value:function(){var t,n,c,s,l,f;return u.default.async(function(p){for(;;)switch(p.prev=p.next){case 0:if(t=this.props,n=t.overflowIconName,c=t.iconSize,s=t.iconColor,l=t.titleColor,!n){p.next=8;break}return p.next=4,u.default.awrap(o(n,c,s||l));case 4:f=p.sent,this.setState({overflowIcon:f}),p.next=9;break;case 8:this.state.overflowIcon&&this.setState({overflowIcon:void 0});case 9:case"end":return p.stop()}},null,this)}},{key:"updateActionIconSources",value:function(){var t,n,c,s,l,f;return u.default.async(function(p){for(;;)switch(p.prev=p.next){case 0:return t=this.props,n=t.actions,c=t.iconSize,s=t.iconColor,l=t.titleColor,p.next=3,u.default.awrap(Promise.all((n||[]).map(function(t){return t.iconName?o(t.iconName,t.iconSize||c,t.iconColor||s||l).then(function(o){return O({},t,{icon:o})}):Promise.resolve(t)})));case 3:f=p.sent,this.setState({actions:f});case 5:case"end":return p.stop()}},null,this)}},{key:"render",value:function(){return S.default.createElement(b.ToolbarAndroid,(0,n.default)({},this.props,this.state))}}]),c})(S.PureComponent),c.propTypes={logoName:t,navIconName:t,overflowIconName:t,actions:w.default.arrayOf(w.default.shape({title:w.default.string.isRequired,iconName:t,iconSize:w.default.number,iconColor:w.default.oneOfType([w.default.string,w.default.number]),show:w.default.oneOf(['always','ifRoom','never']),showWithText:w.default.bool})),iconSize:w.default.number,iconColor:w.default.oneOfType([w.default.string,w.default.number]),titleColor:w.default.oneOfType([w.default.string,w.default.number])},c.defaultProps={iconSize:24},h};var n=o(r(d[2])),c=o(r(d[3])),u=o(r(d[4])),s=o(r(d[5])),l=o(r(d[6])),f=o(r(d[7])),p=o(r(d[8])),v=o(r(d[9])),h=o(r(d[10])),y=o(r(d[11])),S=t(r(d[12])),w=o(r(d[13])),b=r(d[14]);function I(t,o){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);o&&(c=c.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,c)}return n}function O(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?I(n,!0).forEach(function(o){(0,c.default)(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}var x=['iconSize','iconColor','titleColor'],C=[].concat(x,['logoName']),N=[].concat(x,['navIconName']),k=[].concat(x,['overflowIconName']),P=[].concat(x,['actions']),j=function(t){return function(o,n){return(0,h.default)((0,y.default)(o,t),(0,y.default)(n,t))}},z=j(C),D=j(N),T=j(k),A=j(P)},533,[143,7,17,52,249,28,29,36,39,42,520,512,53,65,372]);