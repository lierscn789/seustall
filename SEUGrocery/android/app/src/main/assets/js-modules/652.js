__d(function(g,r,i,a,m,e,d){var t=r(d[0]),n=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(r(d[2])),o=n(r(d[3])),f=n(r(d[4])),s=n(r(d[5])),l=n(r(d[6])),v=t(r(d[7])),c=t(r(d[8])),p=n(r(d[9])),y=r(d[10]),x=function(){return{}};e.default=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,p.default)(t);var h=n.order||Object.keys(t),A=n.getCustomActionCreators||x,N=n.initialRouteParams,k=n.initialRouteName||h[0],P=n.backBehavior||'none',F=!n.hasOwnProperty('resetOnBlur')||n.resetOnBlur,S=h.indexOf(k);if(-1===S)throw new Error("Invalid initialRouteName '"+k+"'.Should be one of "+h.map(function(t){return"\""+t+"\""}).join(', '));var O={};function C(n,u){var f=t[n];return f&&f.params?(0,o.default)({},f.params,u):u}h.forEach(function(n){O[n]=null;var u=(0,s.default)(t,n);u.router&&(O[n]=u.router)});var K=(0,y.createPathParser)(O,t,n),R=K.getPathAndParamsForRoute,T=K.getActionForPathAndParams;function w(t){var n=C(t,t===k?N:void 0),u=O[t];if(u){var f=v.init();return(0,o.default)({},u.getStateForAction(f),{key:t,routeName:t,params:n})}return{key:t,routeName:t,params:n}}function b(t,n,f){var s=f;if(n&&n.index!==f.index&&F){var l=n.routes[n.index].routeName,c=(0,u.default)(f.routes);c[n.index]=w(l),s=(0,o.default)({},f,{routes:c})}return(function(f){if('history'!==P)return f;var s=n?n.routeKeyHistory:[];if(t.type===v.NAVIGATE){s=(0,u.default)(s);var l=f.routes[f.index].key;(s=s.filter(function(t){return t!==l})).push(l)}else t.type===v.BACK&&(s=(0,u.default)(s)).pop();return(0,o.default)({},f,{routeKeyHistory:s})})(s)}function E(){var t=h.map(w),n={routes:t,index:S,isTransitioning:!1};if('history'===P){var u=t[S].key;n.routeKeyHistory=[u]}return n}return{childRouters:O,getActionCreators:function(t,n){return A(t,n)},getStateForAction:function(t,n){var f=n?(0,o.default)({},n):n,s=n||E(),l=s.index;if(t.type===v.INIT){var p=t.params;p&&(s.routes=s.routes.map(function(t){return(0,o.default)({},t,{params:(0,o.default)({},t.params,p,t.routeName===k?N:null)})}))}if(t.type===c.JUMP_TO&&(null==t.key||t.key===s.key)){var y=t.params,x=s.routes.findIndex(function(n){return n.routeName===t.routeName});if(-1===x)throw new Error("There is no route named '"+t.routeName+"' in the navigator with the key '"+t.key+"'.\nMust be one of: "+s.routes.map(function(t){return"'"+t.routeName+"'"}).join(','));return b(t,f,(0,o.default)({},s,{routes:s.routes.map(function(t,n){return n===x?(0,o.default)({},t,{params:(0,o.default)({},t.params,y)}):t}),index:x}))}var A=s.routes[s.index],F=O[h[s.index]];if(F){var C=F.getStateForAction(t,A);if(!C&&n)return null;if(C&&C!==A){var K=(0,u.default)(s.routes);return K[s.index]=C,b(t,f,(0,o.default)({},s,{routes:K}))}}var R=null==t.key||t.key===A.key;if(t.type===v.BACK)if(R&&'initialRoute'===P)l=S;else if(R&&'order'===P)l=Math.max(0,l-1);else{if(!(R&&'history'===P&&s.routeKeyHistory.length>1))return s;var T=s.routeKeyHistory[s.routeKeyHistory.length-2];l=h.indexOf(T)}var w=!1;if(t.type===v.NAVIGATE&&(w=!!h.find(function(n,u){return n===t.routeName&&(l=u,!0)}))){var H=s.routes[l],I=O[t.routeName],_=H;if(t.action&&I){var B=I.getStateForAction(t.action,H);B&&(_=B)}if(t.params&&(_=(0,o.default)({},_,{params:(0,o.default)({},_.params||{},t.params)})),_!==H){var M=(0,u.default)(s.routes);M[l]=_;var j=(0,o.default)({},s,{routes:M,index:l});return b(t,f,j)}if(_===H&&s.index===l&&f)return null}if(t.type===v.SET_PARAMS){var G=t.key,V=s.routes.find(function(t){return t.key===G});if(V){var J=(0,o.default)({},V.params,t.params),U=(0,u.default)(s.routes);return U[s.routes.indexOf(V)]=(0,o.default)({},V,{params:J}),b(t,f,(0,o.default)({},s,{routes:U}))}}if(l!==s.index)return b(t,f,(0,o.default)({},s,{index:l}));if(w&&!n)return s;if(w)return(0,o.default)({},s);var q=s.index,z=s.routes;return h.find(function(n,o){var f=O[n];if(o===q)return!1;var s=z[o];return f&&(s=f.getStateForAction(t,s)),s?s!==z[o]&&((z=(0,u.default)(z))[o]=s,q=o,!0):(q=o,!0)}),t.preserveFocus&&(q=s.index),q!==s.index||z!==s.routes?b(t,f,(0,o.default)({},s,{index:q,routes:z})):s},getComponentForState:function(n){var u=n.routes[n.index].routeName;(0,f.default)(u,"There is no route defined for index "+n.index+". Check that\n        that you passed in a navigation state with a valid tab/screen index.");var o=O[u];return o?o.getComponentForState(n.routes[n.index]):(0,s.default)(t,u)},getComponentForRouteName:function(n){return(0,s.default)(t,n)},getPathAndParamsForState:function(t){var n=t.routes[t.index];return R(n)},getActionForPathAndParams:function(t,n){return T(t,n)},getScreenOptions:(0,l.default)(t,n.defaultNavigationOptions)}}},652,[143,7,24,639,640,653,654,643,656,657,658]);