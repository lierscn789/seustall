__d(function(g,r,i,a,m,e,d){'use strict';var t,n=r(d[0]),o=r(d[1]),s=r(d[2]),p=r(d[3]),l=r(d[4]),u=r(d[5]),c=(r(d[6]),r(d[7])),h=(r(d[8]),r(d[9]),r(d[10]),r(d[11])),v=r(d[12]),f=r(d[13]),y=r(d[14]),S=r(d[15]),_=0,C=(function(t){function n(t){var s;return o(this,n),s=p(this,l(n).call(this,t)),n._confirmProps(t),s._identifier=_++,s}return u(n,t),s(n,[{key:"getChildContext",value:function(){return{virtualizedList:null}}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this._eventSubscription&&this._eventSubscription.remove()}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){n._confirmProps(t)}},{key:"render",value:function(){if(!0!==this.props.visible)return null;var t={backgroundColor:this.props.transparent?'transparent':'white'},n=this.props.animationType;n||(n='none',this.props.animated&&(n='slide'));var o=this.props.presentationStyle;o||(o='fullScreen',this.props.transparent&&(o='overFullScreen'));var s=this.props.children;return h.createElement(S,{animationType:n,presentationStyle:o,transparent:this.props.transparent,hardwareAccelerated:this.props.hardwareAccelerated,onRequestClose:this.props.onRequestClose,onShow:this.props.onShow,identifier:this._identifier,style:k.modal,onStartShouldSetResponder:this._shouldSetResponder,supportedOrientations:this.props.supportedOrientations,onOrientationChange:this.props.onOrientationChange},h.createElement(y,{style:[k.container,t]},s))}},{key:"_shouldSetResponder",value:function(){return!0}}],[{key:"_confirmProps",value:function(t){t.presentationStyle&&'overFullScreen'!==t.presentationStyle&&t.transparent&&console.warn("Modal with '"+t.presentationStyle+"' presentation style and 'transparent' value is not supported.")}}]),n})(h.Component);C.defaultProps={visible:!0,hardwareAccelerated:!1},C.contextTypes={rootTag:v.number},C.childContextTypes={virtualizedList:v.object};var b=c.isRTL?'right':'left',k=f.create({modal:{position:'absolute'},container:(t={},n(t,b,0),n(t,"top",0),n(t,"flex",1),t)});m.exports=C},277,[52,28,29,36,39,42,278,279,113,14,49,53,65,56,79,280]);