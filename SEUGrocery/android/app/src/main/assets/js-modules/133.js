__d(function(g,r,i,a,m,e,d){'use strict';var t={captureHeap:function(t){var p=null;try{g.nativeCaptureHeap(t),console.log('HeapCapture.captureHeap succeeded: '+t)}catch(t){console.log('HeapCapture.captureHeap error: '+t.toString()),p=t.toString()}r(d[0]).JSCHeapCapture.captureComplete(t,p)}};m.exports=t},133,[14]);