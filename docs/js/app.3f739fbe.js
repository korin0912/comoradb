(function(e){function t(t){for(var r,o,u=t[0],s=t[1],i=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-610992cf":"41bd96f0","chunk-28d0328c":"25aecdbc","chunk-3e93d05e":"aa4a7e71"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-610992cf":1,"chunk-28d0328c":1,"chunk-3e93d05e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-610992cf":"988ed708","chunk-28d0328c":"03262be1","chunk-3e93d05e":"fbe4aa26"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/comoradb/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1910:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("2b0e"),o=n("342d"),a=n.n(o),c=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={name:"App",head:{title:{inner:"コモラDB",separator:"|",complement:"ゲーム一覧"},link:[{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"},{rel:"preconnect",href:"https://fonts.gstatic.com"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Noto+Sans+JP:wght@100;300"},{rel:"stylesheet",href:n("e164")},{rel:"stylesheet",href:n("1910")},{rel:"stylesheet",href:n("ad0d")},{rel:"stylesheet",href:n("de21")}]}},l=i,f=(n("034f"),n("2877")),d=Object(f["a"])(l,u,s,!1,null,null,null),h=d.exports;r["a"].config.productionTip=!1,r["a"].use(a.a),r["a"].use(c["a"]);var p=[{path:"/",name:"Games",component:function(){return Promise.all([n.e("chunk-610992cf"),n.e("chunk-3e93d05e")]).then(n.bind(null,"bb5f"))}},{path:"/actors/:actorId",name:"Actors",component:function(){return Promise.all([n.e("chunk-610992cf"),n.e("chunk-28d0328c")]).then(n.bind(null,"8e48"))}}];var m=new c["a"]({mode:"hash",base:"/comoradb/",routes:p});new r["a"]({router:m,render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,n){},ad0d:function(e,t,n){},de21:function(e,t,n){},e164:function(e,t,n){}});