__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),s=r(d[1]),f=r(d[2]),u=(function(){function f(s,u){t(this,f),this._anchorOffset=s,this._focusOffset=u,this._hasFocus=!1}return s(f,[{key:"update",value:function(t,s){this._anchorOffset===t&&this._focusOffset===s||(this._anchorOffset=t,this._focusOffset=s,this.emit('update'))}},{key:"constrainLength",value:function(t){this.update(Math.min(this._anchorOffset,t),Math.min(this._focusOffset,t))}},{key:"focus",value:function(){this._hasFocus||(this._hasFocus=!0,this.emit('focus'))}},{key:"blur",value:function(){this._hasFocus&&(this._hasFocus=!1,this.emit('blur'))}},{key:"hasFocus",value:function(){return this._hasFocus}},{key:"isCollapsed",value:function(){return this._anchorOffset===this._focusOffset}},{key:"isBackward",value:function(){return this._anchorOffset>this._focusOffset}},{key:"getAnchorOffset",value:function(){return this._hasFocus?this._anchorOffset:null}},{key:"getFocusOffset",value:function(){return this._hasFocus?this._focusOffset:null}},{key:"getStartOffset",value:function(){return this._hasFocus?Math.min(this._anchorOffset,this._focusOffset):null}},{key:"getEndOffset",value:function(){return this._hasFocus?Math.max(this._anchorOffset,this._focusOffset):null}},{key:"overlaps",value:function(t,s){return this.hasFocus()&&this.getStartOffset()<=s&&t<=this.getEndOffset()}}]),f})();f(u,{blur:!0,focus:!0,update:!0}),m.exports=u},294,[28,29,295]);