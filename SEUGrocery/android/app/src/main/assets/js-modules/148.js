__d(function(g,r,i,a,m,e,d){'use strict';r(d[0]);var n=r(d[1]),t=null,u=new Set;m.exports={currentlyFocusedField:function(){return t},focusTextInput:function(u){t!==u&&null!==u&&(t=u,n.dispatchViewManagerCommand(u,n.getViewManagerConfig('AndroidTextInput').Commands.focusTextInput,null))},blurTextInput:function(u){t===u&&null!==u&&(t=null,n.dispatchViewManagerCommand(u,n.getViewManagerConfig('AndroidTextInput').Commands.blurTextInput,null))},registerInput:function(n){u.add(n)},unregisterInput:function(n){u.delete(n)},isTextInput:function(n){return u.has(n)}}},148,[49,48]);