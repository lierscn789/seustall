__d(function(g,r,i,a,m,e,d){'use strict';var n=r(d[0]),t=r(d[1]),o=r(d[2]),s=n.AccessibilityInfo,c=new Map,u={isBoldTextEnabled:function(){return Promise.resolve(!1)},isGrayscaleEnabled:function(){return Promise.resolve(!1)},isInvertColorsEnabled:function(){return Promise.resolve(!1)},isReduceMotionEnabled:function(){return new Promise(function(n,t){s.isReduceMotionEnabled(n)})},isReduceTransparencyEnabled:function(){return Promise.resolve(!1)},isScreenReaderEnabled:function(){return new Promise(function(n,t){s.isTouchExplorationEnabled(n)})},get fetch(){return this.isScreenReaderEnabled},addEventListener:function(n,o){var s;'change'===n||'screenReaderChanged'===n?s=t.addListener("touchExplorationDidChange",function(n){o(n)}):'reduceMotionChanged'===n&&(s=t.addListener("reduceMotionDidChange",function(n){o(n)})),c.set(o,s)},removeEventListener:function(n,t){var o=c.get(t);o&&(o.remove(),c.delete(t))},setAccessibilityFocus:function(n){o.sendAccessibilityEvent(n,o.AccessibilityEventTypes.typeViewFocused)},announceForAccessibility:function(n){s.announceForAccessibility(n)}};m.exports=u},13,[14,35,48]);