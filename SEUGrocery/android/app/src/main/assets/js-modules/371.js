__d(function(g,r,i,a,m,e,d){var t=r(d[0]),o=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,o,C,_){var S=C?C.replace(/\.(otf|ttf)$/,''):o,T=y.Platform.select({windows:"/Assets/"+C+"#"+o,android:S,web:S,default:o}),E=h.default.oneOf(Object.keys(t)),A=(function(o){function n(){var t,o;(0,u.default)(this,n);for(var l=arguments.length,f=new Array(l),v=0;v<l;v++)f[v]=arguments[v];return(o=(0,s.default)(this,(t=(0,c.default)(n)).call.apply(t,[this].concat(f)))).root=null,o.handleRef=function(t){o.root=t},o}return(0,v.default)(n,o),(0,f.default)(n,[{key:"setNativeProps",value:function(t){this.root&&this.root.setNativeProps(t)}},{key:"render",value:function(){var o=this.props,n=o.name,u=o.size,f=o.color,s=o.style,c=o.children,v=(0,l.default)(o,["name","size","color","style","children"]),h=n?t[n]||'?':'';'number'==typeof h&&(h=String.fromCharCode(h));var I={fontSize:u,color:f},b={fontFamily:T,fontWeight:'normal',fontStyle:'normal'};return v.style=[I,s,b,_||{}],v.ref=this.handleRef,p.default.createElement(y.Text,v,h,c)}}]),n})(p.PureComponent);A.propTypes={allowFontScaling:h.default.bool,name:E,size:h.default.number,color:h.default.oneOfType([h.default.string,h.default.number]),children:h.default.node,style:h.default.any},A.defaultProps={size:N,allowFontScaling:!1};var R={};function L(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;(0,I.default)();var u=t[o]||'?';'number'==typeof u&&(u=String.fromCharCode(u));var f=(0,y.processColor)(l),s=u+":"+n+":"+f,c=y.PixelRatio.get();return new Promise(function(t,o){var l=R[s];void 0!==l?!l||l instanceof Error?o(l):t({uri:l,scale:c}):P.getImageForFont(T,u,n,f,function(n,l){var u='string'==typeof n?new Error(n):n;R[s]=l||u||!1,!u&&l?t({uri:l,scale:c}):o(u)})})}return A.Button=(0,b.default)(A),A.TabBarItem=(0,O.default)(E,L),A.TabBarItemIOS=A.TabBarItem,A.ToolbarAndroid=(0,F.default)(E,L),A.getImageSource=L,A.loadFont=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return'ios'===y.Platform.OS?((0,I.default)(),t?P.loadFontWithFileName.apply(P,(0,n.default)(t.split('.'))):Promise.reject(new Error('Unable to load font, because no file was specified. '))):Promise.resolve()},A.hasIcon=function(o){return Object.prototype.hasOwnProperty.call(t,o)},A.getRawGlyphMap=function(){return t},A.getFontFamily=function(){return T},A},e.DEFAULT_ICON_COLOR=e.DEFAULT_ICON_SIZE=e.NativeIconAPI=void 0;var n=o(r(d[2])),l=o(r(d[3])),u=o(r(d[4])),f=o(r(d[5])),s=o(r(d[6])),c=o(r(d[7])),v=o(r(d[8])),p=t(r(d[9])),h=o(r(d[10])),y=r(d[11]),I=o(r(d[12])),b=o(r(d[13])),O=o(r(d[14])),F=o(r(d[15])),P=y.NativeModules.RNVectorIconsManager||y.NativeModules.RNVectorIconsModule;e.NativeIconAPI=P;var N=12;e.DEFAULT_ICON_SIZE=N;var w='black';e.DEFAULT_ICON_COLOR=w},371,[143,7,24,15,28,29,36,39,42,53,65,372,373,374,519,533]);