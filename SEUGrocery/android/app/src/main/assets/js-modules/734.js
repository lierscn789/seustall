__d(function(g,r,i,a,m,e,d){var t=r(d[0]),n=r(d[1]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(d[2])),s=n(r(d[3])),p=n(r(d[4])),l=n(r(d[5])),u=n(r(d[6])),c=t(r(d[7])),h=r(d[8]),v=r(d[9]),S=(function(t){function n(t){var s;return(0,o.default)(this,n),(s=(0,p.default)(this,(0,l.default)(n).call(this,t)))._isIdle=!0,s._currentIndex=0,s._getPageIndex=function(t){return h.I18nManager.isRTL?s.props.navigationState.routes.length-(t+1):t},s._setPage=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=s._viewPager;if(o){var p=s._getPageIndex(t);!1===s.props.animationEnabled||!1===n?o.setPageWithoutAnimation(p):o.setPage(p)}},s._handlePageChange=function(t,n){s._isIdle&&s._currentIndex!==t&&(s._setPage(t,n),s._currentIndex=t)},s._handlePageScroll=function(t){s.props.offsetX.setValue(s._getPageIndex(t.nativeEvent.position)*s.props.layout.width*-1),s.props.panX.setValue(t.nativeEvent.offset*s.props.layout.width*(h.I18nManager.isRTL?1:-1))},s._handlePageScrollStateChanged=function(t){s._isIdle='string'!=typeof t&&t.nativeEvent?'idle'===t.nativeEvent.pageScrollState:'idle'===t;var n=s._currentIndex,o=s.props.navigationState.routes[n];switch(s.props.canJumpToTab({route:o})?s.props.jumpTo(o.key):(s._setPage(s.props.navigationState.index),s._currentIndex=s.props.navigationState.index),t){case'dragging':s.props.onSwipeStart&&s.props.onSwipeStart();break;case'settling':s.props.onSwipeEnd&&s.props.onSwipeEnd();break;case'idle':s.props.onAnimationEnd&&s.props.onAnimationEnd()}},s._handlePageSelected=function(t){var n=s._getPageIndex(t.nativeEvent.position);s._currentIndex=n},s._currentIndex=s.props.navigationState.index,s}return(0,u.default)(n,t),(0,s.default)(n,[{key:"componentDidUpdate",value:function(t){t.navigationState.routes.length!==this.props.navigationState.routes.length||t.layout.width!==this.props.layout.width?this._handlePageChange(this.props.navigationState.index,!1):t.navigationState.index!==this.props.navigationState.index&&this._handlePageChange(this.props.navigationState.index)}},{key:"render",value:function(){var t=this,n=this.props,o=n.navigationState,s=n.swipeEnabled,p=n.keyboardDismissMode,l=(h.I18nManager.isRTL?c.Children.toArray(this.props.children).reverse():c.Children.toArray(this.props.children)).map(function(n,s){var p=o.routes[s],l=s===o.index;return c.createElement(h.View,{key:p.key,testID:t.props.getTestID({route:p}),accessibilityElementsHidden:!l,importantForAccessibility:l?'auto':'no-hide-descendants',style:_.page},n)}),u=this._getPageIndex(o.index);return c.createElement(h.ViewPagerAndroid,{key:o.routes.length,keyboardDismissMode:p,initialPage:u,scrollEnabled:!1!==s,onPageScroll:this._handlePageScroll,onPageScrollStateChanged:this._handlePageScrollStateChanged,onPageSelected:this._handlePageSelected,style:_.container,ref:function(n){return t._viewPager=n}},l)}}]),n})(c.Component);e.default=S,S.propTypes=v.PagerRendererPropType,S.defaultProps={canJumpToTab:function(){return!0},keyboardDismissMode:'on-drag'};var _=h.StyleSheet.create({container:{flexGrow:1},page:{overflow:'hidden'}})},734,[143,7,28,29,36,39,42,53,8,732]);