(self["webpackChunkcomoradb"]=self["webpackChunkcomoradb"]||[]).push([[390],{4362:function(e,t,n){var a=n(1589),r=Math.floor,o=function(e,t){var n=e.length,l=r(n/2);return n<8?i(e,t):s(e,o(a(e,0,l),t),o(a(e,l),t),t)},i=function(e,t){var n,a,r=e.length,o=1;while(o<r){a=o,n=e[o];while(a&&t(e[a-1],n)>0)e[a]=e[--a];a!==o++&&(e[a]=n)}return e},s=function(e,t,n,a){var r=t.length,o=n.length,i=0,s=0;while(i<r||s<o)e[i+s]=i<r&&s<o?a(t[i],n[s])<=0?t[i++]:n[s++]:i<r?t[i++]:n[s++];return e};e.exports=o},5117:function(e,t,n){"use strict";var a=n(6330),r=TypeError;e.exports=function(e,t){if(!delete e[t])throw r("Cannot delete property "+a(t)+" of "+a(e))}},8886:function(e,t,n){var a=n(8113),r=a.match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},256:function(e,t,n){var a=n(8113);e.exports=/MSIE|Trident/.test(a)},8008:function(e,t,n){var a=n(8113),r=a.match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},9587:function(e,t,n){var a=n(614),r=n(111),o=n(7674);e.exports=function(e,t,n){var i,s;return o&&a(i=t.constructor)&&i!==n&&r(s=i.prototype)&&s!==n.prototype&&o(e,s),e}},3111:function(e,t,n){var a=n(1702),r=n(4488),o=n(1340),i=n(1361),s=a("".replace),l="["+i+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),m=function(e){return function(t){var n=o(r(t));return 1&e&&(n=s(n,c,"")),2&e&&(n=s(n,u,"")),n}};e.exports={start:m(1),end:m(2),trim:m(3)}},863:function(e,t,n){var a=n(1702);e.exports=a(1..valueOf)},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7327:function(e,t,n){"use strict";var a=n(2109),r=n(2092).filter,o=n(1194),i=o("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},4553:function(e,t,n){"use strict";var a=n(2109),r=n(2092).findIndex,o=n(1223),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(i)},9826:function(e,t,n){"use strict";var a=n(2109),r=n(2092).find,o=n(1223),i="find",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(i)},1249:function(e,t,n){"use strict";var a=n(2109),r=n(2092).map,o=n(1194),i=o("map");a({target:"Array",proto:!0,forced:!i},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},2707:function(e,t,n){"use strict";var a=n(2109),r=n(1702),o=n(9662),i=n(7908),s=n(6244),l=n(5117),c=n(1340),u=n(7293),m=n(4362),f=n(9341),g=n(8886),d=n(256),p=n(7392),v=n(8008),w=[],h=r(w.sort),k=r(w.push),_=u((function(){w.sort(void 0)})),y=u((function(){w.sort(null)})),D=f("sort"),b=!u((function(){if(p)return p<70;if(!(g&&g>3)){if(d)return!0;if(v)return v<603;var e,t,n,a,r="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(a=0;a<47;a++)w.push({k:t+a,v:n})}for(w.sort((function(e,t){return t.v-e.v})),a=0;a<w.length;a++)t=w[a].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}})),I=_||!y||!D||!b,x=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:c(t)>c(n)?1:-1}};a({target:"Array",proto:!0,forced:I},{sort:function(e){void 0!==e&&o(e);var t=i(this);if(b)return void 0===e?h(t):h(t,e);var n,a,r=[],c=s(t);for(a=0;a<c;a++)a in t&&k(r,t[a]);m(r,x(e)),n=r.length,a=0;while(a<n)t[a]=r[a++];while(a<c)l(t,a++);return t}})},9653:function(e,t,n){"use strict";var a=n(9781),r=n(7854),o=n(1702),i=n(4705),s=n(8052),l=n(2597),c=n(9587),u=n(7976),m=n(2190),f=n(7593),g=n(7293),d=n(8006).f,p=n(1236).f,v=n(3070).f,w=n(863),h=n(3111).trim,k="Number",_=r[k],y=_.prototype,D=r.TypeError,b=o("".slice),I=o("".charCodeAt),x=function(e){var t=f(e,"number");return"bigint"==typeof t?t:C(t)},C=function(e){var t,n,a,r,o,i,s,l,c=f(e,"number");if(m(c))throw D("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=h(c),t=I(c,0),43===t||45===t){if(n=I(c,2),88===n||120===n)return NaN}else if(48===t){switch(I(c,1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+c}for(o=b(c,2),i=o.length,s=0;s<i;s++)if(l=I(o,s),l<48||l>r)return NaN;return parseInt(o,a)}return+c};if(i(k,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var R,A=function(e){var t=arguments.length<1?0:_(x(e)),n=this;return u(y,n)&&g((function(){w(n)}))?c(Object(t),n,A):t},E=a?d(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),Z=0;E.length>Z;Z++)l(_,R=E[Z])&&!l(A,R)&&v(A,R,p(_,R));A.prototype=y,y.constructor=A,s(r,k,A,{constructor:!0})}},3474:function(e,t,n){"use strict";n(1539),n(4747),n(2707),n(7941),n(9653),n(8309),n(1249),n(9826),n(4916),n(3123),n(7042),n(5306),n(8757),n(7327),n(4553);var a=n(5125),r=n(8907),o=null;function i(){if(null==o){var e=r.Z.getGamesData(),t=r.Z.getGameGenresData(),n=r.Z.getMoviesData(),i=r.Z.getActorsData();o=[],Object.keys(e).sort((function(e,t){return Number(e)-Number(t)})).forEach((function(a){var r=e[a],s={id:a,name:r.name,urls:r.urls,playListUrl:"playListUrl"in r?r.playListUrl:"",genres:r.genreIds.map((function(e){return{id:e,key:"genre-"+e,name:t[e]}}))},l=!1;Object.keys(n).forEach((function(e){var t=n[e];if(null!=t.gameIds.find((function(e){return a==e}))){var r=t.releaseDate.split("/"),c={id:e,releaseDate:r[0]+"/"+("0"+r[1]).slice(-2)+"/"+("0"+r[2]).slice(-2),name:t.name,url:t.url,actors:t.actorIds.map((function(e){return{id:e,name:i[e].name}})),chat:t.chat};o.push({key:"games-"+o.length,gameRow:1,game:s,nogame:!1,movieRow:1,movie:c}),l=!0}})),l||o.push({gameRow:1,game:s,movieRow:1,movie:{id:"",releaseDate:"",name:"",url:"",actors:[],chat:!1}})})),Object.keys(n).forEach((function(e){var t=n[e];if(99999==t.gameIds[0]){var a=t.releaseDate.split("/"),r={id:e,releaseDate:a[0]+"/"+("0"+a[1]).slice(-2)+"/"+("0"+a[2]).slice(-2),name:t.name,url:t.url,actors:t.actorIds.map((function(e){return{id:e,name:i[e].name}})),chat:t.chat};o.push({key:"games-"+o.length,gameRow:1,game:null,nogame:!0,movieRow:1,movie:r})}}))}return a.Z.copyDeep(o)}function s(e,t){var n=null;null!=t.text&&""!=t.text&&(n=t.text.toLowerCase());var a=null;t.releaseDates.from&&(a=t.releaseDates.from.replaceAll("-","/"));var r=null;t.releaseDates.to&&(r=t.releaseDates.to.replaceAll("-","/"));var o=t.actors.filter((function(e){return e.check})).map((function(e){return e.id})),i=t.genres.filter((function(e){return e.check})).map((function(e){return e.id})),s=t.chat;return e.map((function(e){var t=!1;return null!=n&&null!=e.game&&e.game.name.toLowerCase().indexOf(n)<=-1&&e.movie.name.toLowerCase().indexOf(n)<=-1&&(t=!0),null!=o&&o.length>0&&null!=e.movie&&e.movie.actors.filter((function(e){return o.some((function(t){return t==e.id}))})).length<=0&&(t=!0),a&&null!=e.movie&&e.movie.releaseDate<a&&(t=!0),r&&null!=e.movie&&e.movie.releaseDate>r&&(t=!0),null!=i&&i.length>0&&null!=e.game&&e.game.genres.filter((function(e){return i.some((function(t){return t==e.id}))})).length<=0&&(t=!0),s&&null!=e.movie&&(e.movie.chat||(t=!0)),t&&(e.game=null,e.movie=null),e}))}function l(e){var t=r.Z.getGamesData(),n=r.Z.getGameGenresData(),a=r.Z.getMoviesData(),o=r.Z.getActorsData(),l=i(t,n,a,o);l=s(l,e);var c=0,u=0,m=null,f=-1,g=[];l.forEach((function(e){null!=e.game&&(e.game.id!=f?(m=e,f=e.game.id,-1==g.findIndex((function(t){return t==e.game.id}))&&(g.push(e.game.id),c++)):(m.gameRow++,e.game=null))})),m=null,f=-1;var d=[];return l.forEach((function(e){null!=e.movie&&(e.movie.id!=f?(m=e,f=e.movie.id,-1==d.findIndex((function(t){return t==e.movie.id}))&&(d.push(e.movie.id),u++)):(m.movieRow++,e.movie=null))})),{items:l,gameCount:c,movieCount:u}}var c=null;function u(){var e="",t=[],n=r.Z.getActorsData();Object.keys(n).forEach((function(e){t.push({id:e,name:n[e].name,check:!1})}));var o={from:"",to:""},i=[],s=r.Z.getGameGenresData();Object.keys(s).forEach((function(e){i.push({id:e,name:s[e],check:!1})}));var l=!1;return c={text:e,actors:t,releaseDates:o,genres:i,chat:l},a.Z.copyDeep(c)}function m(e){return c.text=e.text,c.actors=f(c.actors,e.actors),c.releaseDates.from=e.releaseDates.from,c.releaseDates.to=e.releaseDates.to,c.genres=f(c.genres,e.genres),c.chat=e.chat,a.Z.copyDeep(c)}function f(e,t){for(var n=0;n<e.length;n++)e[n].check=t[n].check;return e}function g(e,t){return"text"==t&&(e.text=""),"releaseDateFrom"==t&&(e.releaseDates.from=""),"releaseDateTo"==t&&(e.releaseDates.to=""),m(e)}t["Z"]={getTableItems:l,getInitialFilterParams:u,updateFilterParams:m,resetFilterParamsInput:g}},9067:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});n(8309),n(2222);var a=n(6252),r=n(3577),o=function(e){return(0,a.dD)("data-v-06de13a5"),e=e(),(0,a.Cn)(),e},i={class:"sticky-table"},s={colspan:"2",class:"pale"},l={colspan:"2",class:"dark"},c=o((function(){return(0,a._)("tr",null,[(0,a._)("th",{class:"pale game-id"},"#"),(0,a._)("th",{class:"pale game-name"},"タイトル"),(0,a._)("th",{class:"dark movie-id"},"#"),(0,a._)("th",{class:"dark movie-name"},"タイトル")],-1)})),u=["rowspan"],m=["rowspan"],f=["href"],g=["href"],d=["rowspan"],p=["rowspan"],v=["rowspan"],w=["rowspan"],h=["href"];function k(e,t,n,o,k,_){var y=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("table",i,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",s,(0,r.zw)("ゲーム ("+e.gameCount+")"),1),(0,a._)("th",l,(0,r.zw)("動画 ("+e.movieCount+")"),1)]),c]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.items,(function(t){return(0,a.wg)(),(0,a.iD)(a.HY,null,[null!=t.game||null!=t.movie?((0,a.wg)(),(0,a.iD)("tr",{key:t.key,class:"text-upper"},[null!=t.game?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("td",{rowspan:t.gameRow,class:"text-center"},[(0,a.Wm)(y,{to:{name:"GameShow",params:{gameId:t.game.id}}},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(t.game.id),1)]})),_:2},1032,["to"])],8,u),(0,a._)("td",{rowspan:t.gameRow},[(0,a.Uk)((0,r.zw)(t.game.name)+" ",1),"playListUrl"in t.game&&t.game.playListUrl?((0,a.wg)(),(0,a.iD)("a",{key:0,href:t.game.playListUrl,target:"_blank",class:"icon playlist"},null,8,f)):(0,a.kq)("",!0),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.game.urls,(function(n,o){return(0,a.wg)(),(0,a.iD)("div",{key:"url-".concat(t.game.id,"-").concat(o),class:"urlicon"},[(0,a._)("a",{href:n,target:"_blank",class:(0,r.C_)("icon "+e.common.getUrlIconClass(n))},null,10,g)])})),128))])],8,m)],64)):t.nogame?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("td",{rowspan:t.gameRow,class:"text-center nogame"},null,8,d),(0,a._)("td",{rowspan:t.gameRow,class:"nogame"},null,8,p)],64)):(0,a.kq)("",!0),null!=t.movie?((0,a.wg)(),(0,a.iD)(a.HY,{key:2},[(0,a._)("td",{rowspan:t.movieRow,class:(0,r.C_)("text-center ".concat(null==t.game?"border-left-none":""))},[t.movie.id?((0,a.wg)(),(0,a.j4)(y,{key:0,to:{name:"MovieShow",params:{movieId:t.movie.id}}},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(t.movie.id),1)]})),_:2},1032,["to"])):(0,a.kq)("",!0)],10,v),(0,a._)("td",{rowspan:t.movieRow,class:"movie"},[(0,a._)("a",{href:t.movie.url,target:"_blank"},(0,r.zw)(t.movie.name),9,h)],8,w)],64)):(0,a.kq)("",!0)])):(0,a.kq)("",!0)],64)})),256))])])}var _=n(5125),y=n(3474),D={name:"TopMobileTable",props:["filterParams"],data:function(){var e=y.Z.getTableItems(this.filterParams);return{common:_.Z,items:e.items,gameCount:e.gameCount,movieCount:e.movieCount}}},b=n(3744);const I=(0,b.Z)(D,[["render",k],["__scopeId","data-v-06de13a5"]]);var x=I},1384:function(e,t,n){"use strict";n.d(t,{Z:function(){return Y}});n(8309),n(2222);var a=n(6252),r=n(3577),o=function(e){return(0,a.dD)("data-v-12acc119"),e=e(),(0,a.Cn)(),e},i={class:"sticky-table"},s={colspan:"4",class:"pale"},l={colspan:"5",class:"dark"},c=o((function(){return(0,a._)("tr",null,[(0,a._)("th",{class:"pale game-id"},"#"),(0,a._)("th",{class:"pale game-name",colspan:"2"},"タイトル"),(0,a._)("th",{class:"pale game-genres"},"ジャンル"),(0,a._)("th",{class:"dark movie-id"},"#"),(0,a._)("th",{class:"dark movie-name"},"タイトル"),(0,a._)("th",{class:"dark movie-date"},"公開日"),(0,a._)("th",{class:"dark movie-actors"},"出演"),(0,a._)("th",{class:"dark movie-chat"},"雑談")],-1)})),u=["rowspan"],m=["rowspan"],f=["href"],g=["rowspan"],d=["href"],p=["rowspan"],v=["rowspan"],w=["rowspan"],h=["rowspan"],k=["rowspan"],_=["rowspan"],y=["rowspan"],D=["href"],b=["rowspan"],I=["rowspan"],x=["title"],C=["rowspan"],R={key:0,class:"icon check"};function A(e,t,n,o,A,E){var Z=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("table",i,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",s,(0,r.zw)("ゲーム ("+e.gameCount+")"),1),(0,a._)("th",l,(0,r.zw)("動画 ("+e.movieCount+")"),1)]),c]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.items,(function(t){return(0,a.wg)(),(0,a.iD)(a.HY,null,[null!=t.game||null!=t.movie?((0,a.wg)(),(0,a.iD)("tr",{key:t.key,class:"text-upper"},[null!=t.game?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("td",{rowspan:t.gameRow,class:"text-center"},[(0,a.Wm)(Z,{to:{name:"GameShow",params:{gameId:t.game.id}}},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(t.game.id),1)]})),_:2},1032,["to"])],8,u),(0,a._)("td",{rowspan:t.gameRow},[(0,a.Uk)((0,r.zw)(t.game.name)+" ",1),"playListUrl"in t.game&&t.game.playListUrl?((0,a.wg)(),(0,a.iD)("a",{key:0,href:t.game.playListUrl,target:"_blank",class:"icon playlist"},null,8,f)):(0,a.kq)("",!0)],8,m),(0,a._)("td",{rowspan:t.gameRow,class:"text-center links"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.game.urls,(function(n,o){return(0,a.wg)(),(0,a.iD)("div",{key:"url-".concat(t.game.id,"-").concat(o),class:"urlicon"},[(0,a._)("a",{href:n,target:"_blank",class:(0,r.C_)("icon "+e.common.getUrlIconClass(n))},null,10,d)])})),128))],8,g),(0,a._)("td",{rowspan:t.gameRow},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.game.genres,(function(e){return(0,a.wg)(),(0,a.iD)("span",{key:e.key,class:"genre"},(0,r.zw)(e.name),1)})),128))],8,p)],64)):t.nogame?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("td",{rowspan:t.gameRow,class:"text-center nogame"},null,8,v),(0,a._)("td",{rowspan:t.gameRow,class:"nogame"},null,8,w),(0,a._)("td",{rowspan:t.gameRow,class:"text-center links nogame"},null,8,h),(0,a._)("td",{rowspan:t.gameRow,class:"nogame"},null,8,k)],64)):(0,a.kq)("",!0),null!=t.movie?((0,a.wg)(),(0,a.iD)(a.HY,{key:2},[(0,a._)("td",{rowspan:t.movieRow,class:(0,r.C_)("text-center ".concat(null==t.game?"border-left-none":""))},[t.movie.id?((0,a.wg)(),(0,a.j4)(Z,{key:0,to:{name:"MovieShow",params:{movieId:t.movie.id}}},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(t.movie.id),1)]})),_:2},1032,["to"])):(0,a.kq)("",!0)],10,_),(0,a._)("td",{rowspan:t.movieRow,class:"movie"},[(0,a._)("a",{href:t.movie.url,target:"_blank"},(0,r.zw)(t.movie.name),9,D)],8,y),(0,a._)("td",{rowspan:t.movieRow,class:"text-center"},(0,r.zw)(t.movie.releaseDate),9,b),(0,a._)("td",{rowspan:t.movieRow,class:"text-center"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.movie.actors,(function(e){return(0,a.wg)(),(0,a.iD)("div",{key:"actor-".concat(e.id),class:"actoricon"},[(0,a.Wm)(Z,{to:{name:"ActorShow",params:{actorId:e.id}}},{default:(0,a.w5)((function(){return[(0,a._)("i",{title:e.name,class:(0,r.C_)("icon actor-".concat(e.id))},null,10,x)]})),_:2},1032,["to"])])})),128))],8,I),(0,a._)("td",{rowspan:t.movieRow,class:"text-center"},[t.movie.chat?((0,a.wg)(),(0,a.iD)("i",R)):(0,a.kq)("",!0)],8,C)],64)):(0,a.kq)("",!0)])):(0,a.kq)("",!0)],64)})),256))])])}var E=n(5125),Z=n(3474),N={name:"TopPCTable",props:["filterParams"],data:function(){var e=Z.Z.getTableItems(this.filterParams);return{common:E.Z,items:e.items,gameCount:e.gameCount,movieCount:e.movieCount}}},U=n(3744);const T=(0,U.Z)(N,[["render",A],["__scopeId","data-v-12acc119"]]);var Y=T}}]);