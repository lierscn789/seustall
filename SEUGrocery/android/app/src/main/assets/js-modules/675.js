__d(function(g,r,i,a,m,e,d){var n=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(r(d[1])),o=n(r(d[2])),u=n(r(d[3])),l=n(r(d[4])),c=n(r(d[5])),s=n(r(d[6])),f=n(r(d[7])),p={willFocus:'onWillFocus',didFocus:'onDidFocus',willBlur:'onWillBlur',didBlur:'onDidBlur'},v=Object.keys(p),h=(function(n){function s(){var n,o;(0,t.default)(this,s);for(var c=arguments.length,f=new Array(c),v=0;v<c;v++)f[v]=arguments[v];return(o=(0,u.default)(this,(n=(0,l.default)(s)).call.apply(n,[this].concat(f)))).getPropListener=function(n){return o.props[p[n]]},o}return(0,c.default)(s,n),(0,o.default)(s,[{key:"componentDidMount",value:function(){var n=this;this.subscriptions={},v.forEach(function(t){n.subscriptions[t]=n.props.navigation.addListener(t,function(){var o=n.getPropListener(t);return o&&o.apply(void 0,arguments)})})}},{key:"componentWillUnmount",value:function(){var n=this;v.forEach(function(t){n.subscriptions[t].remove()})}},{key:"render",value:function(){return null}}]),s})(s.default.Component),y=(0,f.default)(h);e.default=y},675,[7,28,29,36,39,42,53,676]);