__d(function(g,r,i,a,m,e,d){var t=r(d[0]),n=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(d[2])),u=n(r(d[3])),s=t(r(d[4])),f=t(r(d[5])),l=n(r(d[6])),y=n(r(d[7])),p=n(r(d[8])),c=n(r(d[9])),v=n(r(d[10])),k=r(d[11]),N=r(d[12]);function A(t){return t.type===s.NAVIGATE||t.type===f.PUSH}var S=function(){return{}};function P(t){return t.type===f.RESET&&null===t.key}e.default=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,c.default)(t);var h={},T=Object.keys(t);T.forEach(function(n){var o=t[n],u=o&&o.screen?o.screen:o;u&&u.router?h[n]=u.router:h[n]=null});var x=n.initialRouteParams,b=n.getCustomActionCreators||S,F=n.initialRouteName||T[0],R=h[F];function E(o){var f={},l=h[o.routeName];if(A(o)&&void 0!==l){var y={};if(null!==l){var p=o.action||s.init({params:o.params});y=l.getStateForAction(p)}return{key:'StackRouterRoot',isTransitioning:!1,index:0,routes:[(0,u.default)({params:o.params},y,{key:o.key||(0,k.generateKey)(),routeName:o.routeName})]}}R&&(f=R.getStateForAction(s.navigate({routeName:F,params:x})));var c=(t[F].params||f.params||o.params||x)&&(0,u.default)({},t[F].params||{},f.params||{},o.params||{},x||{}),v=n.initialRouteKey;return{key:'StackRouterRoot',isTransitioning:!1,index:0,routes:[f=(0,u.default)({},f,c?{params:c}:{},{routeName:F,key:o.key||v||(0,k.generateKey)()})]}}function O(n,o){var s=t[n];return s&&s.params?(0,u.default)({},s.params,o.params):o.params}var C=(0,N.createPathParser)(h,t,n),K=C.getPathAndParamsForRoute,_=C.getActionForPathAndParams;return{childRouters:h,getComponentForState:function(n){var o=n.routes[n.index],u=o.routeName;return h[u]?h[u].getComponentForState(o):(0,y.default)(t,u)},getComponentForRouteName:function(n){return(0,y.default)(t,n)},getActionCreators:function(t,n){return(0,u.default)({},b(t,n),{pop:function(t,n){return f.pop((0,u.default)({n:t},n))},popToTop:function(t){return f.popToTop(t)},push:function(t,n,o){return f.push({routeName:t,params:n,action:o})},replace:function(n,o,u,s){return'string'==typeof n?f.replace({routeName:n,params:o,action:u,key:t.key,newKey:s}):((0,v.default)('object'==typeof n,'Must replaceWith an object or a string'),(0,v.default)(null==o,'Params must not be provided to .replace() when specifying an object'),(0,v.default)(null==u,'Child action must not be provided to .replace() when specifying an object'),(0,v.default)(null==s,'Child action must not be provided to .replace() when specifying an object'),f.replace(n))},reset:function(t,o){return f.reset({actions:t,index:null==o?t.length-1:o,key:n})},dismiss:function(){return s.back({key:n})}})},getStateForAction:function(t,n){if(!n)return E(t);var l,y=n.routes[n.index];if(P(t)||t.type===s.NAVIGATE){if(t.type===s.NAVIGATE){var c=n.routes.slice().reverse(),N=Array.isArray(c),S=0;for(c=N?c:c["function"==typeof Symbol&&"function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var T;if(N){if(S>=c.length)break;T=c[S++]}else{if((S=c.next()).done)break;T=S.value}var x=T,b=h[x.routeName],F=t.routeName===x.routeName&&t.action?t.action:t;if(b){var R=b.getStateForAction(F,x);if(null===R||R!==x){var C=p.default.replaceAndPrune(n,R?R.key:x.key,R||x);return(0,u.default)({},C,{isTransitioning:n.index!==C.index?!0!==t.immediate:n.isTransitioning})}}}}}else{var K=h[y.routeName];if(K){var _=K.getStateForAction(t,y);if(null!==_&&_!==y)return p.default.replaceAt(n,y.key,_,t.type===s.SET_PARAMS)}}if(A(t)&&void 0!==h[t.routeName]){var j,I=h[t.routeName];(0,v.default)(t.type!==f.PUSH||null==t.key,'StackRouter does not support key on the push action');var M=n.routes.findIndex(function(n){return t.key?n.key===t.key:n.routeName===t.routeName});if(t.type!==f.PUSH&&-1!==M){if(n.index===M&&!t.params)return null;var w=n.routes.slice(0,M+1);if(t.params){var H=n.routes[M];w[M]=(0,u.default)({},H,{params:(0,u.default)({},H.params,t.params)})}return(0,u.default)({},n,{isTransitioning:n.index!==M?!0!==t.immediate:n.isTransitioning,index:M,routes:w})}if(I){var U=t.action||s.init({params:O(t.routeName,t)});j=(0,u.default)({params:O(t.routeName,t)},I.getStateForAction(U),{routeName:t.routeName,key:t.key||(0,k.generateKey)()})}else j={params:O(t.routeName,t),routeName:t.routeName,key:t.key||(0,k.generateKey)()};return(0,u.default)({},p.default.push(n,j),{isTransitioning:!0!==t.immediate})}if(t.type===f.PUSH&&void 0===h[t.routeName])return n;if(A(t))for(var G=Object.keys(h),V=0;V<G.length;V++){var L=G[V],W=h[L];if(W){var B=W.getStateForAction(s.init()),D=W.getStateForAction(t,B),q=null;if(null===D?q=B:D!==B&&(q=D),q){var z=(0,u.default)({},q,{routeName:L,key:t.key||(0,k.generateKey)()});return(0,u.default)({},p.default.push(n,z),{isTransitioning:!0!==t.immediate})}}}if(t.type===f.POP_TO_TOP)return t.key&&n.key!==t.key?n:n.index>0?(0,u.default)({},n,{isTransitioning:!0!==t.immediate,index:0,routes:[n.routes[0]]}):n;if(t.type===f.REPLACE&&-1!==(l=void 0===t.key&&n.routes.length?n.routes.length-1:n.routes.findIndex(function(n){return n.key===t.key}))){var J=h[t.routeName],Q={};if(J){var X=t.action||s.init({params:O(t.routeName,t)});Q=J.getStateForAction(X)}var Y=(0,o.default)(n.routes);return Y[l]=(0,u.default)({params:O(t.routeName,t)},Q,{routeName:t.routeName,key:t.newKey||(0,k.generateKey)()}),(0,u.default)({},n,{routes:Y})}if(t.type===f.COMPLETE_TRANSITION&&(null==t.key||t.key===n.key)&&t.toChildKey===n.routes[n.index].key&&n.isTransitioning)return(0,u.default)({},n,{isTransitioning:!1});if(t.type===s.SET_PARAMS){var Z=t.key,$=n.routes.find(function(t){return t.key===Z});if($){var ee=(0,u.default)({},$.params,t.params),te=(0,o.default)(n.routes);return te[n.routes.indexOf($)]=(0,u.default)({},$,{params:ee}),(0,u.default)({},n,{routes:te})}}if(t.type===f.RESET){if(null!=t.key&&t.key!=n.key)return n;var re=t.actions;return(0,u.default)({},n,{routes:re.map(function(t){var n=h[t.routeName],o={};if(n){var f=t.action||s.init({params:O(t.routeName,t)});o=n.getStateForAction(f)}return(0,u.default)({params:O(t.routeName,t)},o,{routeName:t.routeName,key:t.key||(0,k.generateKey)()})}),index:t.index})}if(t.type===s.BACK||t.type===f.POP){var ae=t.key,ne=t.n,ie=t.immediate,oe=n.index;if(t.type===f.POP&&null!=ne)oe=Math.max(1,n.index-ne+1);else if(ae){var ue=n.routes.find(function(t){return t.key===ae});oe=n.routes.indexOf(ue)}if(oe>0)return(0,u.default)({},n,{routes:n.routes.slice(0,oe),index:oe-1,isTransitioning:!0!==ie})}var se=t.key?p.default.indexOf(n,t.key):-1,fe=n.routes.slice().reverse(),le=Array.isArray(fe),de=0;for(fe=le?fe:fe["function"==typeof Symbol&&"function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var me;if(le){if(de>=fe.length)break;me=fe[de++]}else{if((de=fe.next()).done)break;me=de.value}var ye=me;if(ye.key!==y.key&&!(se>=0&&ye.key!==t.key)){var pe=h[ye.routeName];if(pe){var ce=pe.getStateForAction(t,ye);if(null===ce)return n;if(ce&&ce!==ye)return p.default.replaceAt(n,ye.key,ce,t.preserveFocus||t.type.includes('DRAWER'))}}}return n},getPathAndParamsForState:function(t){var n=t.routes[t.index];return K(n)},getActionForPathAndParams:function(t,n){return _(t,n)},getScreenOptions:(0,l.default)(t,n.defaultNavigationOptions)}}},670,[143,7,24,639,643,669,654,653,638,657,640,671,658]);