__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),s=r(d[2]),v=(function(){function v(){t(this,v),this._heldEvents={},this._currentEventKey=null}return n(v,[{key:"holdEvent",value:function(t){this._heldEvents[t]=this._heldEvents[t]||[];for(var n=this._heldEvents[t],s={eventType:t,index:n.length},v=arguments.length,h=new Array(v>1?v-1:0),u=1;u<v;u++)h[u-1]=arguments[u];return n.push(h),s}},{key:"emitToListener",value:function(t,n,s){var v=this,h=this._heldEvents[t];if(h){var u=this._currentEventKey;h.forEach(function(h,u){h&&(v._currentEventKey={eventType:t,index:u},n.apply(s,h))}),this._currentEventKey=u}}},{key:"releaseCurrentEvent",value:function(){s(null!==this._currentEventKey,'Not in an emitting cycle; there is no current event'),this._currentEventKey&&this.releaseEvent(this._currentEventKey)}},{key:"releaseEvent",value:function(t){delete this._heldEvents[t.eventType][t.index]}},{key:"releaseEventType",value:function(t){this._heldEvents[t]=[]}}]),v})();m.exports=v},297,[28,29,9]);