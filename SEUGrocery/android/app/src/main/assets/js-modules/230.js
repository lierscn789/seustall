__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),s=r(d[1]),o=r(d[2]),n=r(d[3]),l=r(d[4]),h=r(d[5]),c=r(d[6]),p=r(d[7]);function u(t,s){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);s&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),o.push.apply(o,n)}return o}function f(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?u(n,!0).forEach(function(o){s(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}var _=r(d[8]),y=r(d[9]),v=r(d[10]),C=r(d[11]),L=r(d[12]),b=r(d[13]),S=r(d[14]),M=r(d[15]),x=(r(d[16]),r(d[17])),k=r(d[18]),R=(r(d[19]),r(d[20])),I=r(d[21]),E=(r(d[22]),r(d[23]).computeWindowedRenderLimits),w=!1,T='',O=(function(u){function v(s,c){var p;o(this,v),(p=n(this,l(v).call(this,s,c)))._getScrollMetrics=function(){return p._scrollMetrics},p._getOutermostParentListRef=function(){return p._isNestedWithSameOrientation()?p.context.virtualizedList.getOutermostParentListRef():h(p)},p._getNestedChildState=function(t){var s=p._nestedChildLists.get(t);return s&&s.state},p._registerAsNestedChild=function(t){var s=p._cellKeysToChildListKeys.get(t.cellKey)||new Set;s.add(t.key),p._cellKeysToChildListKeys.set(t.cellKey,s);var o=p._nestedChildLists.get(t.key);o&&null!==o.ref&&console.error("A VirtualizedList contains a cell which itself contains more than one VirtualizedList of the same orientation as the parent list. You must pass a unique listKey prop to each sibling list."),p._nestedChildLists.set(t.key,{ref:t.ref,state:null}),p._hasInteracted&&t.ref.recordInteraction()},p._unregisterAsNestedChild=function(t){p._nestedChildLists.set(t.key,{ref:null,state:t.state})},p._onUpdateSeparators=function(t,s){t.forEach(function(t){var o=null!=t&&p._cellRefs[t];o&&o.updateSeparatorProps(s)})},p._averageCellLength=0,p._cellKeysToChildListKeys=new Map,p._cellRefs={},p._frames={},p._footerLength=0,p._hasDataChangedSinceEndReached=!0,p._hasDoneInitialScroll=!1,p._hasInteracted=!1,p._hasMore=!1,p._hasWarned={},p._headerLength=0,p._hiPriInProgress=!1,p._highestMeasuredFrameIndex=0,p._indicesToKeys=new Map,p._nestedChildLists=new Map,p._offsetFromParentVirtualizedList=0,p._prevParentOffset=0,p._scrollMetrics={contentLength:0,dOffset:0,dt:10,offset:0,timestamp:0,velocity:0,visibleLength:0},p._scrollRef=null,p._sentEndForContentLength=0,p._totalCellLength=0,p._totalCellsMeasured=0,p._viewabilityTuples=[],p._captureScrollRef=function(t){p._scrollRef=t},p._defaultRenderScrollComponent=function(s){var o=s.onRefresh;return p._isNestedWithSameOrientation()?C.createElement(x,s):o?(I('boolean'==typeof s.refreshing,'`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `'+JSON.stringify(s.refreshing)+'`'),C.createElement(S,t({},s,{refreshControl:null==s.refreshControl?C.createElement(b,{refreshing:s.refreshing,onRefresh:o,progressViewOffset:s.progressViewOffset}):s.refreshControl}))):C.createElement(S,s)},p._onCellUnmount=function(t){var s=p._frames[t];s&&(p._frames[t]=f({},s,{inLayout:!1}))},p._onLayout=function(t){p._isNestedWithSameOrientation()?p.measureLayoutRelativeToContainingList():p._scrollMetrics.visibleLength=p._selectLength(t.nativeEvent.layout),p.props.onLayout&&p.props.onLayout(t),p._scheduleCellsToRenderUpdate(),p._maybeCallOnEndReached()},p._onLayoutEmpty=function(t){p.props.onLayout&&p.props.onLayout(t)},p._onLayoutFooter=function(t){p._footerLength=p._selectLength(t.nativeEvent.layout)},p._onLayoutHeader=function(t){p._headerLength=p._selectLength(t.nativeEvent.layout)},p._onContentSizeChange=function(t,s){t>0&&s>0&&null!=p.props.initialScrollIndex&&p.props.initialScrollIndex>0&&!p._hasDoneInitialScroll&&(p.scrollToIndex({animated:!1,index:p.props.initialScrollIndex}),p._hasDoneInitialScroll=!0),p.props.onContentSizeChange&&p.props.onContentSizeChange(t,s),p._scrollMetrics.contentLength=p._selectLength({height:s,width:t}),p._scheduleCellsToRenderUpdate(),p._maybeCallOnEndReached()},p._convertParentScrollMetrics=function(t){var s=t.offset-p._offsetFromParentVirtualizedList,o=t.visibleLength,n=s-p._scrollMetrics.offset;return{visibleLength:o,contentLength:p._scrollMetrics.contentLength,offset:s,dOffset:n}},p._onScroll=function(t){p._nestedChildLists.forEach(function(s){s.ref&&s.ref._onScroll(t)}),p.props.onScroll&&p.props.onScroll(t);var s=t.timeStamp,o=p._selectLength(t.nativeEvent.layoutMeasurement),n=p._selectLength(t.nativeEvent.contentSize),l=p._selectOffset(t.nativeEvent.contentOffset),h=l-p._scrollMetrics.offset;if(p._isNestedWithSameOrientation()){if(0===p._scrollMetrics.contentLength)return;var c=p._convertParentScrollMetrics({visibleLength:o,offset:l});o=c.visibleLength,n=c.contentLength,l=c.offset,h=c.dOffset}var u=p._scrollMetrics.timestamp?Math.max(1,s-p._scrollMetrics.timestamp):1,f=h/u;u>500&&p._scrollMetrics.dt>500&&n>5*o&&!p._hasWarned.perf&&(R("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.",{dt:u,prevDt:p._scrollMetrics.dt,contentLength:n}),p._hasWarned.perf=!0),p._scrollMetrics={contentLength:n,dt:u,dOffset:h,offset:l,timestamp:s,velocity:f,visibleLength:o},p._updateViewableItems(p.props.data),p.props&&(p._maybeCallOnEndReached(),0!==f&&p._fillRateHelper.activate(),p._computeBlankness(),p._scheduleCellsToRenderUpdate())},p._onScrollBeginDrag=function(t){p._nestedChildLists.forEach(function(s){s.ref&&s.ref._onScrollBeginDrag(t)}),p._viewabilityTuples.forEach(function(t){t.viewabilityHelper.recordInteraction()}),p._hasInteracted=!0,p.props.onScrollBeginDrag&&p.props.onScrollBeginDrag(t)},p._onScrollEndDrag=function(t){var s=t.nativeEvent.velocity;s&&(p._scrollMetrics.velocity=p._selectOffset(s)),p._computeBlankness(),p.props.onScrollEndDrag&&p.props.onScrollEndDrag(t)},p._onMomentumScrollEnd=function(t){p._scrollMetrics.velocity=0,p._computeBlankness(),p.props.onMomentumScrollEnd&&p.props.onMomentumScrollEnd(t)},p._updateCellsToRender=function(){var t=p.props,s=t.data,o=t.getItemCount,n=t.onEndReachedThreshold,l=p._isVirtualizationDisabled();p._updateViewableItems(s),s&&p.setState(function(t){var h;if(l){var c=p._scrollMetrics,u=c.contentLength,f=c.offset,_=c.visibleLength,y=u-_-f<n*_?p.props.maxToRenderPerBatch:0;h={first:0,last:Math.min(t.last+y,o(s)-1)}}else p._scrollMetrics.visibleLength&&(p.props.initialScrollIndex&&!p._scrollMetrics.offset||(h=E(p.props,t,p._getFrameMetricsApprox,p._scrollMetrics)));if(h&&p._nestedChildLists.size>0)for(var v=h.first,C=h.last,L=v;L<=C;L++){var b=p._indicesToKeys.get(L),S=b&&p._cellKeysToChildListKeys.get(b);if(S){var M=!1,x=S,k=Array.isArray(x),R=0;for(x=k?x:x["function"==typeof Symbol&&"function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var I;if(k){if(R>=x.length)break;I=x[R++]}else{if((R=x.next()).done)break;I=R.value}var w=I,T=p._nestedChildLists.get(w);if(T&&T.ref&&T.ref.hasMore()){M=!0;break}}if(M){h.last=L;break}}}return h})},p._createViewToken=function(t,s){var o=p.props,n=o.data,l=o.getItem,h=o.keyExtractor,c=l(n,t);return{index:t,item:c,key:h(c,t),isViewable:s}},p._getFrameMetricsApprox=function(t){var s=p._getFrameMetrics(t);if(s&&s.index===t)return s;var o=p.props.getItemLayout;return I(!o,'Should not have to estimate frames when a measurement metrics function is provided'),{length:p._averageCellLength,offset:p._averageCellLength*t}},p._getFrameMetrics=function(t){var s=p.props,o=s.data,n=s.getItem,l=s.getItemCount,h=s.getItemLayout,c=s.keyExtractor;I(l(o)>t,'Tried to get frame for out of range index '+t);var u=n(o,t),f=u&&p._frames[c(u,t)];return f&&f.index===t||h&&(f=h(o,t)),f},I(!s.onScroll||!s.onScroll.__isNative,"Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver"),I(s.windowSize>0,'VirtualizedList: The windowSize prop must be present and set to a value greater than 0.'),p._fillRateHelper=new y(p._getFrameMetrics),p._updateCellsToRenderBatcher=new _(p._updateCellsToRender,p.props.updateCellsBatchingPeriod),p.props.viewabilityConfigCallbackPairs?p._viewabilityTuples=p.props.viewabilityConfigCallbackPairs.map(function(t){return{viewabilityHelper:new k(t.viewabilityConfig),onViewableItemsChanged:t.onViewableItemsChanged}}):p.props.onViewableItemsChanged&&p._viewabilityTuples.push({viewabilityHelper:new k(p.props.viewabilityConfig),onViewableItemsChanged:p.props.onViewableItemsChanged});var u={first:p.props.initialScrollIndex||0,last:Math.min(p.props.getItemCount(p.props.data),(p.props.initialScrollIndex||0)+p.props.initialNumToRender)-1};if(p._isNestedWithSameOrientation()){var L=p.context.virtualizedList.getNestedChildState(p.props.listKey||p._getCellKey());L&&(u=L,p.state=L,p._frames=L.frames)}return p.state=u,p}return p(v,u),c(v,[{key:"scrollToEnd",value:function(t){var s=!t||t.animated,o=this.props.getItemCount(this.props.data)-1,n=this._getFrameMetricsApprox(o),l=Math.max(0,n.offset+n.length+this._footerLength-this._scrollMetrics.visibleLength);this._scrollRef.scrollTo(this.props.horizontal?{x:l,animated:s}:{y:l,animated:s})}},{key:"scrollToIndex",value:function(t){var s=this.props,o=s.data,n=s.horizontal,l=s.getItemCount,h=s.getItemLayout,c=s.onScrollToIndexFailed,p=t.animated,u=t.index,f=t.viewOffset,_=t.viewPosition;if(I(u>=0&&u<l(o),"scrollToIndex out of range: "+u+" vs "+(l(o)-1)),!h&&u>this._highestMeasuredFrameIndex)return I(!!c,"scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures."),void c({averageItemLength:this._averageCellLength,highestMeasuredFrameIndex:this._highestMeasuredFrameIndex,index:u});var y=this._getFrameMetricsApprox(u),v=Math.max(0,y.offset-(_||0)*(this._scrollMetrics.visibleLength-y.length))-(f||0);this._scrollRef.scrollTo(n?{x:v,animated:p}:{y:v,animated:p})}},{key:"scrollToItem",value:function(t){for(var s=t.item,o=this.props,n=o.data,l=o.getItem,h=(0,o.getItemCount)(n),c=0;c<h;c++)if(l(n,c)===s){this.scrollToIndex(f({},t,{index:c}));break}}},{key:"scrollToOffset",value:function(t){var s=t.animated,o=t.offset;this._scrollRef.scrollTo(this.props.horizontal?{x:o,animated:s}:{y:o,animated:s})}},{key:"recordInteraction",value:function(){this._nestedChildLists.forEach(function(t){t.ref&&t.ref.recordInteraction()}),this._viewabilityTuples.forEach(function(t){t.viewabilityHelper.recordInteraction()}),this._updateViewableItems(this.props.data)}},{key:"flashScrollIndicators",value:function(){this._scrollRef.flashScrollIndicators()}},{key:"getScrollResponder",value:function(){if(this._scrollRef&&this._scrollRef.getScrollResponder)return this._scrollRef.getScrollResponder()}},{key:"getScrollableNode",value:function(){return this._scrollRef&&this._scrollRef.getScrollableNode?this._scrollRef.getScrollableNode():L.findNodeHandle(this._scrollRef)}},{key:"getScrollRef",value:function(){return this._scrollRef&&this._scrollRef.getScrollRef?this._scrollRef.getScrollRef():this._scrollRef}},{key:"setNativeProps",value:function(t){this._scrollRef&&this._scrollRef.setNativeProps(t)}},{key:"getChildContext",value:function(){return{virtualizedList:{getScrollMetrics:this._getScrollMetrics,horizontal:this.props.horizontal,getOutermostParentListRef:this._getOutermostParentListRef,getNestedChildState:this._getNestedChildState,registerAsNestedChild:this._registerAsNestedChild,unregisterAsNestedChild:this._unregisterAsNestedChild}}}},{key:"_getCellKey",value:function(){return this.context.virtualizedCell&&this.context.virtualizedCell.cellKey||'rootList'}},{key:"hasMore",value:function(){return this._hasMore}}]),c(v,[{key:"componentDidMount",value:function(){this._isNestedWithSameOrientation()&&this.context.virtualizedList.registerAsNestedChild({cellKey:this._getCellKey(),key:this.props.listKey||this._getCellKey(),ref:this})}},{key:"componentWillUnmount",value:function(){this._isNestedWithSameOrientation()&&this.context.virtualizedList.unregisterAsNestedChild({key:this.props.listKey||this._getCellKey(),state:{first:this.state.first,last:this.state.last,frames:this._frames}}),this._updateViewableItems(null),this._updateCellsToRenderBatcher.dispose({abort:!0}),this._viewabilityTuples.forEach(function(t){t.viewabilityHelper.dispose()}),this._fillRateHelper.deactivateAndFlush()}},{key:"_pushCells",value:function(t,s,o,n,l,h){var c,p=this,u=this.props,f=u.CellRendererComponent,_=u.ItemSeparatorComponent,y=u.data,v=u.getItem,L=u.getItemCount,b=u.horizontal,S=u.keyExtractor,M=this.props.ListHeaderComponent?1:0,x=L(y)-1;l=Math.min(x,l);for(var k=function(n){var l=v(y,n),u=S(l,n);p._indicesToKeys.set(n,u),o.has(n+M)&&s.push(t.length),t.push(C.createElement(z,{CellRendererComponent:f,ItemSeparatorComponent:n<x?_:void 0,cellKey:u,fillRateHelper:p._fillRateHelper,horizontal:b,index:n,inversionStyle:h,item:l,key:u,prevCellKey:c,onUpdateSeparators:p._onUpdateSeparators,onLayout:function(t){return p._onCellLayout(t,u,n)},onUnmount:p._onCellUnmount,parentProps:p.props,ref:function(t){p._cellRefs[u]=t}})),c=u},R=n;R<=l;R++)k(R)}},{key:"_isVirtualizationDisabled",value:function(){return this.props.disableVirtualization||!1}},{key:"_isNestedWithSameOrientation",value:function(){var t=this.context.virtualizedList;return!(!t||!!t.horizontal!=!!this.props.horizontal)}},{key:"render",value:function(){var t=this,o=this.props,n=o.ListEmptyComponent,l=o.ListFooterComponent,h=o.ListHeaderComponent,c=this.props,p=c.data,u=c.horizontal,_=this._isVirtualizationDisabled(),y=this.props.inverted?this.props.horizontal?F.horizontallyInverted:F.verticallyInverted:null,v=[],L=new Set(this.props.stickyHeaderIndices),b=[];if(h){L.has(0)&&b.push(0);var S=C.isValidElement(h)?h:C.createElement(h,null);v.push(C.createElement(P,{cellKey:this._getCellKey()+'-header',key:"$header"},C.createElement(x,{onLayout:this._onLayoutHeader,style:M.compose(y,this.props.ListHeaderComponentStyle)},S)))}var k=this.props.getItemCount(p);if(k>0){w=!1,T='';var R=u?'width':'height',I=this.props.initialScrollIndex?-1:this.props.initialNumToRender-1,E=this.state,O=E.first,z=E.last;this._pushCells(v,b,L,0,I,y);var K=Math.max(I+1,O);if(!_&&O>I+1){var N=!1;if(L.size>0)for(var V=h?1:0,A=K-1;A>I;A--)if(L.has(A+V)){var D=this._getFrameMetricsApprox(I),B=this._getFrameMetricsApprox(A),H=B.offset-D.offset-(this.props.initialScrollIndex?0:D.length);v.push(C.createElement(x,{key:"$sticky_lead",style:s({},R,H)})),this._pushCells(v,b,L,A,A,y);var U=this._getFrameMetricsApprox(O).offset-(B.offset+B.length);v.push(C.createElement(x,{key:"$sticky_trail",style:s({},R,U)})),N=!0;break}if(!N){var W=this._getFrameMetricsApprox(I),j=this._getFrameMetricsApprox(O).offset-(W.offset+W.length);v.push(C.createElement(x,{key:"$lead_spacer",style:s({},R,j)}))}}if(this._pushCells(v,b,L,K,z,y),!this._hasWarned.keys&&w&&(console.warn("VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.",T),this._hasWarned.keys=!0),!_&&z<k-1){var $=this._getFrameMetricsApprox(z),Y=this.props.getItemLayout?k-1:Math.min(k-1,this._highestMeasuredFrameIndex),q=this._getFrameMetricsApprox(Y),J=q.offset+q.length-($.offset+$.length);v.push(C.createElement(x,{key:"$tail_spacer",style:s({},R,J)}))}}else if(n){var X=C.isValidElement(n)?n:C.createElement(n,null);v.push(C.cloneElement(X,{key:'$empty',onLayout:function(s){t._onLayoutEmpty(s),X.props.onLayout&&X.props.onLayout(s)},style:M.compose(y,X.props.style)}))}if(l){var G=C.isValidElement(l)?l:C.createElement(l,null);v.push(C.createElement(P,{cellKey:this._getCellKey()+'-footer',key:"$footer"},C.createElement(x,{onLayout:this._onLayoutFooter,style:M.compose(y,this.props.ListFooterComponentStyle)},G)))}var Q=f({},this.props,{onContentSizeChange:this._onContentSizeChange,onLayout:this._onLayout,onScroll:this._onScroll,onScrollBeginDrag:this._onScrollBeginDrag,onScrollEndDrag:this._onScrollEndDrag,onMomentumScrollEnd:this._onMomentumScrollEnd,scrollEventThrottle:this.props.scrollEventThrottle,invertStickyHeaders:void 0!==this.props.invertStickyHeaders?this.props.invertStickyHeaders:this.props.inverted,stickyHeaderIndices:b});y&&(Q.style=[y,this.props.style]),this._hasMore=this.state.last<this.props.getItemCount(this.props.data)-1;var Z=C.cloneElement((this.props.renderScrollComponent||this._defaultRenderScrollComponent)(Q),{ref:this._captureScrollRef},v);return this.props.debug?C.createElement(x,{style:F.debug},Z,this._renderDebugOverlay()):Z}},{key:"componentDidUpdate",value:function(t){var s=this.props,o=s.data,n=s.extraData;o===t.data&&n===t.extraData||(this._hasDataChangedSinceEndReached=!0,this._viewabilityTuples.forEach(function(t){t.viewabilityHelper.resetViewableIndices()}));var l=this._hiPriInProgress;this._scheduleCellsToRenderUpdate(),l&&(this._hiPriInProgress=!1)}},{key:"_computeBlankness",value:function(){this._fillRateHelper.computeBlankness(this.props,this.state,this._scrollMetrics)}},{key:"_onCellLayout",value:function(t,s,o){var n=t.nativeEvent.layout,l={offset:this._selectOffset(n),length:this._selectLength(n),index:o,inLayout:!0},h=this._frames[s];h&&l.offset===h.offset&&l.length===h.length&&o===h.index?this._frames[s].inLayout=!0:(this._totalCellLength+=l.length-(h?h.length:0),this._totalCellsMeasured+=h?0:1,this._averageCellLength=this._totalCellLength/this._totalCellsMeasured,this._frames[s]=l,this._highestMeasuredFrameIndex=Math.max(this._highestMeasuredFrameIndex,o),this._scheduleCellsToRenderUpdate());var c=this._cellKeysToChildListKeys.get(s);if(c){var p=c,u=Array.isArray(p),f=0;for(p=u?p:p["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var _;if(u){if(f>=p.length)break;_=p[f++]}else{if((f=p.next()).done)break;_=f.value}var y=_,v=this._nestedChildLists.get(y);v&&v.ref&&v.ref.measureLayoutRelativeToContainingList()}}this._computeBlankness(),this._updateViewableItems(this.props.data)}},{key:"measureLayoutRelativeToContainingList",value:function(){var t=this;try{if(!this._scrollRef)return;this._scrollRef.measureLayout(this.context.virtualizedList.getOutermostParentListRef().getScrollRef().getNativeScrollRef(),function(s,o,n,l){t._offsetFromParentVirtualizedList=t._selectOffset({x:s,y:o}),t._scrollMetrics.contentLength=t._selectLength({width:n,height:l});var h=t._convertParentScrollMetrics(t.context.virtualizedList.getScrollMetrics());t._scrollMetrics.visibleLength=h.visibleLength,t._scrollMetrics.offset=h.offset},function(t){console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.")})}catch(t){console.warn('measureLayoutRelativeToContainingList threw an error',t.stack)}}},{key:"_renderDebugOverlay",value:function(){for(var t=this._scrollMetrics.visibleLength/(this._scrollMetrics.contentLength||1),s=[],o=this.props.getItemCount(this.props.data),n=0;n<o;n++){var l=this._getFrameMetricsApprox(n);l.inLayout&&s.push(l)}var h=this._getFrameMetricsApprox(this.state.first).offset,c=this._getFrameMetricsApprox(this.state.last),p=c.offset+c.length-h,u=this._scrollMetrics.offset,f=this._scrollMetrics.visibleLength;return C.createElement(x,{style:[F.debugOverlayBase,F.debugOverlay]},s.map(function(s,o){return C.createElement(x,{key:'f'+o,style:[F.debugOverlayBase,F.debugOverlayFrame,{top:s.offset*t,height:s.length*t}]})}),C.createElement(x,{style:[F.debugOverlayBase,F.debugOverlayFrameLast,{top:h*t,height:p*t}]}),C.createElement(x,{style:[F.debugOverlayBase,F.debugOverlayFrameVis,{top:u*t,height:f*t}]}))}},{key:"_selectLength",value:function(t){return this.props.horizontal?t.width:t.height}},{key:"_selectOffset",value:function(t){return this.props.horizontal?t.x:t.y}},{key:"_maybeCallOnEndReached",value:function(){var t=this.props,s=t.data,o=t.getItemCount,n=t.onEndReached,l=t.onEndReachedThreshold,h=this._scrollMetrics,c=h.contentLength,p=h.visibleLength,u=c-p-h.offset;n&&this.state.last===o(s)-1&&u<l*p&&(this._hasDataChangedSinceEndReached||this._scrollMetrics.contentLength!==this._sentEndForContentLength)&&(this._hasDataChangedSinceEndReached=!1,this._sentEndForContentLength=this._scrollMetrics.contentLength,n({distanceFromEnd:u}))}},{key:"_scheduleCellsToRenderUpdate",value:function(){var t=this.state,s=t.first,o=t.last,n=this._scrollMetrics,l=n.offset,h=n.visibleLength,c=n.velocity,p=this.props.getItemCount(this.props.data),u=!1,f=this.props.onEndReachedThreshold*h/2;if(s>0){var _=l-this._getFrameMetricsApprox(s).offset;u=u||_<0||c<-2&&_<f}if(o<p-1){var y=this._getFrameMetricsApprox(o).offset-(l+h);u=u||y<0||c>2&&y<f}if(u&&(this._averageCellLength||this.props.getItemLayout)&&!this._hiPriInProgress)return this._hiPriInProgress=!0,this._updateCellsToRenderBatcher.dispose({abort:!0}),void this._updateCellsToRender();this._updateCellsToRenderBatcher.schedule()}},{key:"_updateViewableItems",value:function(t){var s=this,o=this.props.getItemCount;this._viewabilityTuples.forEach(function(n){n.viewabilityHelper.onUpdate(o(t),s._scrollMetrics.offset,s._scrollMetrics.visibleLength,s._getFrameMetrics,s._createViewToken,n.onViewableItemsChanged,s.state)})}}],[{key:"getDerivedStateFromProps",value:function(t,s){var o=t.data,n=t.getItemCount,l=t.maxToRenderPerBatch;return{first:Math.max(0,Math.min(s.first,n(o)-1-l)),last:Math.max(0,Math.min(s.last,n(o)-1))}}}]),v})(C.PureComponent);O.defaultProps={disableVirtualization:!1,horizontal:!1,initialNumToRender:10,keyExtractor:function(t,s){return null!=t.key?t.key:null!=t.id?t.id:(w=!0,t.type&&t.type.displayName&&(T=t.type.displayName),String(s))},maxToRenderPerBatch:10,onEndReachedThreshold:2,scrollEventThrottle:50,updateCellsBatchingPeriod:50,windowSize:21},O.contextTypes={virtualizedCell:v.shape({cellKey:v.string}),virtualizedList:v.shape({getScrollMetrics:v.func,horizontal:v.bool,getOutermostParentListRef:v.func,getNestedChildState:v.func,registerAsNestedChild:v.func,unregisterAsNestedChild:v.func})},O.childContextTypes={virtualizedList:v.shape({getScrollMetrics:v.func,horizontal:v.bool,getOutermostParentListRef:v.func,getNestedChildState:v.func,registerAsNestedChild:v.func,unregisterAsNestedChild:v.func})};var z=(function(s){function h(){var t,s;o(this,h);for(var c=arguments.length,p=new Array(c),u=0;u<c;u++)p[u]=arguments[u];return(s=n(this,(t=l(h)).call.apply(t,[this].concat(p)))).state={separatorProps:{highlighted:!1,leadingItem:s.props.item}},s._separators={highlight:function(){var t=s.props,o=t.cellKey,n=t.prevCellKey;s.props.onUpdateSeparators([o,n],{highlighted:!0})},unhighlight:function(){var t=s.props,o=t.cellKey,n=t.prevCellKey;s.props.onUpdateSeparators([o,n],{highlighted:!1})},updateProps:function(t,o){var n=s.props,l=n.cellKey,h=n.prevCellKey;s.props.onUpdateSeparators(['leading'===t?h:l],o)}},s}return p(h,s),c(h,[{key:"getChildContext",value:function(){return{virtualizedCell:{cellKey:this.props.cellKey}}}},{key:"updateSeparatorProps",value:function(t){this.setState(function(s){return{separatorProps:f({},s.separatorProps,{},t)}})}},{key:"componentWillUnmount",value:function(){this.props.onUnmount(this.props.cellKey)}},{key:"render",value:function(){var s=this.props,o=s.CellRendererComponent,n=s.ItemSeparatorComponent,l=s.fillRateHelper,h=s.horizontal,c=s.item,p=s.index,u=s.inversionStyle,f=s.parentProps,_=f.renderItem,y=f.getItemLayout;I(_,'no renderItem!');var v=_({item:c,index:p,separators:this._separators}),L=!y||f.debug||l.enabled()?this.props.onLayout:void 0,b=n&&C.createElement(n,this.state.separatorProps),S=u?h?[{flexDirection:'row-reverse'},u]:[{flexDirection:'column-reverse'},u]:h?[{flexDirection:'row'},u]:u;return o?C.createElement(o,t({},this.props,{style:S,onLayout:L}),v,b):C.createElement(x,{style:S,onLayout:L},v,b)}}]),h})(C.Component);z.childContextTypes={virtualizedCell:v.shape({cellKey:v.string})};var P=(function(t){function s(){return o(this,s),n(this,l(s).apply(this,arguments))}return p(s,t),c(s,[{key:"getChildContext",value:function(){return{virtualizedCell:{cellKey:this.props.cellKey}}}},{key:"render",value:function(){return this.props.children}}]),s})(C.Component);P.childContextTypes={virtualizedCell:v.shape({cellKey:v.string})};var F=M.create({verticallyInverted:{transform:[{scaleY:-1}]},horizontallyInverted:{transform:[{scaleX:-1}]},debug:{flex:1},debugOverlayBase:{position:'absolute',top:0,right:0},debugOverlay:{bottom:0,width:20,borderColor:'blue',borderWidth:1},debugOverlayFrame:{left:0,backgroundColor:'orange'},debugOverlayFrameLast:{left:0,borderColor:'green',borderWidth:2},debugOverlayFrameVis:{left:0,borderColor:'red',borderWidth:2}});m.exports=O},230,[17,52,28,36,39,38,29,42,231,232,65,53,81,233,236,56,48,79,245,78,139,9,11,246]);