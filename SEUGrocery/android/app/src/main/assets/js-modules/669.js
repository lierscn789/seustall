__d(function(g,r,i,a,m,e,d){var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.completeTransition=e.replace=e.reset=e.push=e.popToTop=e.pop=e.COMPLETE_TRANSITION=e.REPLACE=e.RESET=e.PUSH=e.POP_TO_TOP=e.POP=void 0;var n=t(r(d[1])),o='Navigation/POP';e.POP=o;e.POP_TO_TOP="Navigation/POP_TO_TOP";var P='Navigation/PUSH';e.PUSH=P;var T='Navigation/RESET';e.RESET=T;e.REPLACE="Navigation/REPLACE";e.COMPLETE_TRANSITION="Navigation/COMPLETE_TRANSITION";e.pop=function(t){return(0,n.default)({type:o},t)};e.popToTop=function(t){return(0,n.default)({type:"Navigation/POP_TO_TOP"},t)};e.push=function(t){return(0,n.default)({type:P},t)};e.reset=function(t){return(0,n.default)({type:T,key:null},t)};e.replace=function(t){return(0,n.default)({type:"Navigation/REPLACE"},t)};e.completeTransition=function(t){return(0,n.default)({type:"Navigation/COMPLETE_TRANSITION",preserveFocus:!0},t)}},669,[7,639]);