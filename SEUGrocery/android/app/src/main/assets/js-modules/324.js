__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=t(r(d[1])),u=t(r(d[2])),l=t(r(d[3])),f=t(r(d[4])),o=t(r(d[5])),s=t(r(d[6])),c=r(d[7]),v=r(d[8]),L=(r(d[9]),r(d[10])),R=(function(t){function v(){return(0,n.default)(this,v),(0,l.default)(this,(0,f.default)(v).call(this,s.default))}return(0,o.default)(v,t),(0,u.default)(v,[{key:"addEventListener",value:function(t,n){this.addListener(t,n)}},{key:"removeEventListener",value:function(t,n){this.removeListener(t,n)}},{key:"openURL",value:function(t){return this._validateURL(t),s.default.openURL(t)}},{key:"canOpenURL",value:function(t){return this._validateURL(t),s.default.canOpenURL(t)}},{key:"openSettings",value:function(){return s.default.openSettings()}},{key:"getInitialURL",value:function(){return c.runAfterInteractions().then(function(){return s.default.getInitialURL()})}},{key:"sendIntent",value:function(t,n){return s.default.sendIntent(t,n)}},{key:"_validateURL",value:function(t){L('string'==typeof t,'Invalid URL: should be a string. Was: '+t),L(t,'Invalid URL: cannot be empty')}}]),v})(v);m.exports=new R},324,[7,28,29,36,39,42,325,206,113,49,9]);