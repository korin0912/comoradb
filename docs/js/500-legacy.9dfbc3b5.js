(self["webpackChunkcomoradb"]=self["webpackChunkcomoradb"]||[]).push([[500],{3436:function(t,n,e){"use strict";e(8862);function r(t){return-1!=t.indexOf("store.steampowered.com")?"steam":-1!=t.indexOf("twitter.com")?"twitter":-1!=t.indexOf("www.facebook.com")?"facebook":-1!=t.indexOf("www.youtube.com")?"youtube":-1!=t.indexOf("www.twitch.tv")?"twitch":-1!=t.indexOf("apps.apple.com")?"appstore":-1!=t.indexOf("play.google.com")?"gplay":-1!=t.indexOf("www.nintendo.co.jp")||-1!=t.indexOf(".nintendo.com")?"nintendo":-1!=t.indexOf("www.ea.com")?"EA":-1!=t.indexOf("www.capcom.co.jp")?"capcom":-1!=t.indexOf(".playstation.com")?"playstation":"home"}function i(){return!(!window.matchMedia||!window.matchMedia("(max-device-width: 640px)").matches)}function o(t){return JSON.parse(JSON.stringify(t))}n["Z"]={getUrlIconClass:r,isMobile:i,copyDeep:o}},2337:function(t,n,e){"use strict";e.d(n,{Z:function(){return s}});var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("h1",[r("a",{attrs:{href:"https://www.youtube.com/channel/UC5fwtXKwDpgboOud4DbjQTg",target:"_blank"}},[r("img",{attrs:{alt:"comoradb logo",src:e(4427)}})]),r("span",[t._v("『コモラとチャンチョのゲーム部屋』ゲーム一覧")])])}],o={name:"Header"},c=o,u=e(1001),a=(0,u.Z)(c,r,i,!1,null,"2b7abbff",null),s=a.exports},8533:function(t,n,e){"use strict";var r=e(2092).forEach,i=e(9341),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},2092:function(t,n,e){var r=e(9974),i=e(1702),o=e(8361),c=e(7908),u=e(6244),a=e(5417),s=i([].push),f=function(t){var n=1==t,e=2==t,i=3==t,f=4==t,l=6==t,p=7==t,h=5==t||l;return function(d,v,g,w){for(var x,m,b=c(d),y=o(b),O=r(v,g),E=u(y),k=0,A=w||a,I=n?A(d,E):e||p?A(d,0):void 0;E>k;k++)if((h||k in y)&&(x=y[k],m=O(x,k,b),t))if(n)I[k]=m;else if(m)switch(t){case 3:return!0;case 5:return x;case 6:return k;case 2:s(I,x)}else switch(t){case 4:return!1;case 7:s(I,x)}return l?-1:i||f?f:I}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},1194:function(t,n,e){var r=e(7293),i=e(5112),o=e(7392),c=i("species");t.exports=function(t){return o>=51||!r((function(){var n=[],e=n.constructor={};return e[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},9341:function(t,n,e){"use strict";var r=e(7293);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},1589:function(t,n,e){var r=e(7854),i=e(1400),o=e(6244),c=e(6135),u=r.Array,a=Math.max;t.exports=function(t,n,e){for(var r=o(t),s=i(n,r),f=i(void 0===e?r:e,r),l=u(a(f-s,0)),p=0;s<f;s++,p++)c(l,p,t[s]);return l.length=p,l}},7475:function(t,n,e){var r=e(7854),i=e(3157),o=e(4411),c=e(111),u=e(5112),a=u("species"),s=r.Array;t.exports=function(t){var n;return i(t)&&(n=t.constructor,o(n)&&(n===s||i(n.prototype))?n=void 0:c(n)&&(n=n[a],null===n&&(n=void 0))),void 0===n?s:n}},5417:function(t,n,e){var r=e(7475);t.exports=function(t,n){return new(r(t))(0===n?0:n)}},6135:function(t,n,e){"use strict";var r=e(4948),i=e(3070),o=e(9114);t.exports=function(t,n,e){var c=r(n);c in t?i.f(t,c,o(0,e)):t[c]=e}},3157:function(t,n,e){var r=e(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},7042:function(t,n,e){"use strict";var r=e(2109),i=e(7854),o=e(3157),c=e(4411),u=e(111),a=e(1400),s=e(6244),f=e(5656),l=e(6135),p=e(5112),h=e(1194),d=e(206),v=h("slice"),g=p("species"),w=i.Array,x=Math.max;r({target:"Array",proto:!0,forced:!v},{slice:function(t,n){var e,r,i,p=f(this),h=s(p),v=a(t,h),m=a(void 0===n?h:n,h);if(o(p)&&(e=p.constructor,c(e)&&(e===w||o(e.prototype))?e=void 0:u(e)&&(e=e[g],null===e&&(e=void 0)),e===w||void 0===e))return d(p,v,m);for(r=new(void 0===e?w:e)(x(m-v,0)),i=0;v<m;v++,i++)v in p&&l(r,i,p[v]);return r.length=i,r}})},8309:function(t,n,e){var r=e(9781),i=e(6530).EXISTS,o=e(1702),c=e(3070).f,u=Function.prototype,a=o(u.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=o(s.exec),l="name";r&&!i&&c(u,l,{configurable:!0,get:function(){try{return f(s,a(this))[1]}catch(t){return""}}})},7941:function(t,n,e){var r=e(2109),i=e(7908),o=e(1956),c=e(7293),u=c((function(){o(1)}));r({target:"Object",stat:!0,forced:u},{keys:function(t){return o(i(t))}})},3123:function(t,n,e){"use strict";var r=e(2104),i=e(6916),o=e(1702),c=e(7007),u=e(7850),a=e(9670),s=e(4488),f=e(6707),l=e(1530),p=e(7466),h=e(1340),d=e(8173),v=e(1589),g=e(7651),w=e(2261),x=e(2999),m=e(7293),b=x.UNSUPPORTED_Y,y=4294967295,O=Math.min,E=[].push,k=o(/./.exec),A=o(E),I=o("".slice),_=!m((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));c("split",(function(t,n,e){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var o=h(s(this)),c=void 0===e?y:e>>>0;if(0===c)return[];if(void 0===t)return[o];if(!u(t))return i(n,o,t,c);var a,f,l,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,x=new RegExp(t.source,d+"g");while(a=i(w,x,o)){if(f=x.lastIndex,f>g&&(A(p,I(o,g,a.index)),a.length>1&&a.index<o.length&&r(E,p,v(a,1)),l=a[0].length,g=f,p.length>=c))break;x.lastIndex===a.index&&x.lastIndex++}return g===o.length?!l&&k(x,"")||A(p,""):A(p,I(o,g)),p.length>c?v(p,0,c):p}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:i(n,this,t,e)}:n,[function(n,e){var r=s(this),c=void 0==n?void 0:d(n,t);return c?i(c,n,r,e):i(o,h(r),n,e)},function(t,r){var i=a(this),c=h(t),u=e(o,i,c,r,o!==n);if(u.done)return u.value;var s=f(i,RegExp),d=i.unicode,v=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(b?"g":"y"),w=new s(b?"^(?:"+i.source+")":i,v),x=void 0===r?y:r>>>0;if(0===x)return[];if(0===c.length)return null===g(w,c)?[c]:[];var m=0,E=0,k=[];while(E<c.length){w.lastIndex=b?0:E;var _,S=g(w,b?I(c,E):c);if(null===S||(_=O(p(w.lastIndex+(b?E:0)),c.length))===m)E=l(c,E,d);else{if(A(k,I(c,m,E)),k.length===x)return k;for(var C=1;C<=S.length-1;C++)if(A(k,S[C]),k.length===x)return k;E=m=_}}return A(k,I(c,m)),k}]}),!_,b)},4747:function(t,n,e){var r=e(7854),i=e(8324),o=e(8509),c=e(8533),u=e(8880),a=function(t){if(t&&t.forEach!==c)try{u(t,"forEach",c)}catch(n){t.forEach=c}};for(var s in i)i[s]&&a(r[s]&&r[s].prototype);a(o)},4427:function(t,n,e){"use strict";t.exports=e.p+"img/logo.7e852d16.png"}}]);