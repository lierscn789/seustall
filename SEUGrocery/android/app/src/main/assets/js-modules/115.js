__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]);m.exports=function(f){if(f instanceof ArrayBuffer&&(f=new Uint8Array(f)),f instanceof Uint8Array)return t.fromByteArray(f);if(!ArrayBuffer.isView(f))throw new Error('data must be ArrayBuffer or typed array');var n=f,y=n.buffer,o=n.byteOffset,u=n.byteLength;return t.fromByteArray(new Uint8Array(y,o,u))}},115,[116]);