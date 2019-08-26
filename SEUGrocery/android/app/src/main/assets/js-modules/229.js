__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),s=r(d[3]),l=r(d[4]),u=r(d[5]),c=r(d[6]);function f(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,s)}return o}function p(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?f(o,!0).forEach(function(n){c(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):f(o).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}r(d[7]);var h=r(d[8]),y=r(d[9]),C=r(d[10]),v=r(d[11]),b=r(d[12]),w=r(d[13]),_=p({},v.defaultProps,{numColumns:1,removeClippedSubviews:!0}),I=(function(c){function f(t){var l;return n(this,f),(l=o(this,s(f).call(this,t)))._virtualizedListPairs=[],l._captureRef=function(t){l._listRef=t},l._getItem=function(t,n){var o=l.props.numColumns;if(o>1){for(var s=[],u=0;u<o;u++){var c=t[n*o+u];null!=c&&s.push(c)}return s}return t[n]},l._getItemCount=function(t){return t?Math.ceil(t.length/l.props.numColumns):0},l._keyExtractor=function(t,n){var o=l.props,s=o.keyExtractor,u=o.numColumns;return u>1?(w(Array.isArray(t),"FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.",u),t.map(function(t,o){return s(t,n*u+o)}).join(':')):s(t,n)},l._renderItem=function(t){var n=l.props,o=n.renderItem,s=n.numColumns,u=n.columnWrapperStyle;if(s>1){var c=t.item,f=t.index;return w(Array.isArray(c),'Expected array of items with numColumns > 1'),y.createElement(C,{style:b.compose(k.row,u)},c.map(function(n,l){var u=o({item:n,index:f*s+l,separators:t.separators});return null!=u?y.createElement(y.Fragment,{key:l},u):null}))}return o(t)},l._checkProps(l.props),l.props.viewabilityConfigCallbackPairs?l._virtualizedListPairs=l.props.viewabilityConfigCallbackPairs.map(function(t){return{viewabilityConfig:t.viewabilityConfig,onViewableItemsChanged:l._createOnViewableItemsChanged(t.onViewableItemsChanged)}}):l.props.onViewableItemsChanged&&l._virtualizedListPairs.push({viewabilityConfig:l.props.viewabilityConfig,onViewableItemsChanged:l._createOnViewableItemsChanged(l.props.onViewableItemsChanged)}),l}return u(f,c),l(f,[{key:"scrollToEnd",value:function(t){this._listRef&&this._listRef.scrollToEnd(t)}},{key:"scrollToIndex",value:function(t){this._listRef&&this._listRef.scrollToIndex(t)}},{key:"scrollToItem",value:function(t){this._listRef&&this._listRef.scrollToItem(t)}},{key:"scrollToOffset",value:function(t){this._listRef&&this._listRef.scrollToOffset(t)}},{key:"recordInteraction",value:function(){this._listRef&&this._listRef.recordInteraction()}},{key:"flashScrollIndicators",value:function(){this._listRef&&this._listRef.flashScrollIndicators()}},{key:"getScrollResponder",value:function(){if(this._listRef)return this._listRef.getScrollResponder()}},{key:"getScrollableNode",value:function(){if(this._listRef)return this._listRef.getScrollableNode()}},{key:"setNativeProps",value:function(t){this._listRef&&this._listRef.setNativeProps(t)}}]),l(f,[{key:"componentDidUpdate",value:function(t){w(t.numColumns===this.props.numColumns,"Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component."),w(t.onViewableItemsChanged===this.props.onViewableItemsChanged,'Changing onViewableItemsChanged on the fly is not supported'),w(!h(t.viewabilityConfig,this.props.viewabilityConfig),'Changing viewabilityConfig on the fly is not supported'),w(t.viewabilityConfigCallbackPairs===this.props.viewabilityConfigCallbackPairs,'Changing viewabilityConfigCallbackPairs on the fly is not supported'),this._checkProps(this.props)}},{key:"_checkProps",value:function(t){var n=t.getItem,o=t.getItemCount,s=t.horizontal,l=t.numColumns,u=t.columnWrapperStyle,c=t.onViewableItemsChanged,f=t.viewabilityConfigCallbackPairs;w(!n&&!o,'FlatList does not support custom data formats.'),l>1?w(!s,'numColumns does not support horizontal.'):w(!u,'columnWrapperStyle not supported for single column lists'),w(!(c&&f),"FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.")}},{key:"_pushMultiColumnViewable",value:function(t,n){var o=this.props,s=o.numColumns,l=o.keyExtractor;n.item.forEach(function(o,u){w(null!=n.index,'Missing index!');var c=n.index*s+u;t.push(p({},n,{item:o,key:l(o,c),index:c}))})}},{key:"_createOnViewableItemsChanged",value:function(t){var n=this;return function(o){var s=n.props.numColumns;if(t)if(s>1){var l=[],u=[];o.viewableItems.forEach(function(t){return n._pushMultiColumnViewable(u,t)}),o.changed.forEach(function(t){return n._pushMultiColumnViewable(l,t)}),t({viewableItems:u,changed:l})}else t(o)}}},{key:"render",value:function(){return y.createElement(v,t({},this.props,{renderItem:this._renderItem,getItem:this._getItem,getItemCount:this._getItemCount,keyExtractor:this._keyExtractor,ref:this._captureRef,viewabilityConfigCallbackPairs:this._virtualizedListPairs}))}}]),f})(y.PureComponent);I.defaultProps=_;var k=b.create({row:{flexDirection:'row'}});m.exports=I},229,[17,28,36,39,29,42,52,49,147,53,79,230,56,9]);