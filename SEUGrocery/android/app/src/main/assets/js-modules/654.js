__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(r(d[1])),o=t(r(d[2])),u=t(r(d[3])),f=t(r(d[4]));function l(t,o,u){return'function'==typeof t?(0,n.default)({},o,t((0,n.default)({},u,{navigationOptions:o}))):'object'==typeof t?(0,n.default)({},o,t):o}e.default=function(t,n){return function(v,c,s){var p=v.state;(0,o.default)(p.routeName&&'string'==typeof p.routeName,'Cannot get config because the route does not have a routeName.');var N=(0,u.default)(t,p.routeName),y=t[p.routeName],O=y===N?null:y.navigationOptions,_=N.navigationOptions,b={navigation:v,screenProps:c||{},theme:s},h=l(n,{},b);return h=l(O,h=l(_,h,b),b),(0,f.default)(h,p),h}}},654,[7,639,640,653,655]);