"use strict";(self["webpackChunkcomoradb"]=self["webpackChunkcomoradb"]||[]).push([[73],{3436:function(e,t){function a(e){return-1!=e.indexOf("store.steampowered.com")?"steam":-1!=e.indexOf("twitter.com")?"twitter":-1!=e.indexOf("www.facebook.com")?"facebook":-1!=e.indexOf("www.youtube.com")?"youtube":-1!=e.indexOf("www.twitch.tv")?"twitch":-1!=e.indexOf("apps.apple.com")?"appstore":-1!=e.indexOf("play.google.com")?"gplay":-1!=e.indexOf("www.nintendo.co.jp")||-1!=e.indexOf(".nintendo.com")?"nintendo":-1!=e.indexOf("www.ea.com")?"EA":-1!=e.indexOf("www.capcom.co.jp")?"capcom":-1!=e.indexOf(".playstation.com")?"playstation":"home"}function s(){return!(!window.matchMedia||!window.matchMedia("(max-device-width: 640px)").matches)}function n(e){return JSON.parse(JSON.stringify(e))}t["Z"]={getUrlIconClass:a,isMobile:s,copyDeep:n}},3670:function(e,t,a){var s=a(3436),n=a(3278);let r=null;function o(){if(null==r){let e=n.Z.getGamesData(),t=n.Z.getGameGenresData(),a=n.Z.getMoviesData(),s=n.Z.getActorsData();r=[],Object.keys(e).sort((function(e,t){return Number(e)-Number(t)})).forEach((n=>{let o=e[n],l={id:n,name:o.name,urls:o.urls,genres:o.genreIds.map((e=>({id:e,key:"genre-"+e,name:t[e]})))},i=!1;Object.keys(a).forEach((e=>{let t=a[e];if(null==t.gameIds.find((e=>n==e)))return;let o=t.releaseDate.split("/"),m={id:e,releaseDate:o[0]+"/"+("0"+o[1]).slice(-2)+"/"+("0"+o[2]).slice(-2),name:t.name,url:t.url,actors:t.actorIds.map((e=>({id:e,name:s[e].name}))),chat:t.chat};r.push({key:"games-"+r.length,gameRow:1,game:l,nogame:!1,movieRow:1,movie:m}),i=!0})),i||r.push({gameRow:1,game:l,movieRow:1,movie:{id:"",releaseDate:"",name:"",url:"",actors:[],chat:!1}})})),Object.keys(a).forEach((e=>{let t=a[e];if(99999!=t.gameIds[0])return;let n=t.releaseDate.split("/"),o={id:e,releaseDate:n[0]+"/"+("0"+n[1]).slice(-2)+"/"+("0"+n[2]).slice(-2),name:t.name,url:t.url,actors:t.actorIds.map((e=>({id:e,name:s[e].name}))),chat:t.chat};r.push({key:"games-"+r.length,gameRow:1,game:null,nogame:!0,movieRow:1,movie:o})}))}return s.Z.copyDeep(r)}function l(e,t){let a=null;null!=t.text&&""!=t.text&&(a=t.text.toLowerCase());let s=null;t.releaseDates.from&&(s=t.releaseDates.from.replaceAll("-","/"));let n=null;t.releaseDates.to&&(n=t.releaseDates.to.replaceAll("-","/"));let r=t.actors.filter((e=>e.check)).map((e=>e.id)),o=t.genres.filter((e=>e.check)).map((e=>e.id)),l=t.chat;return e.map((e=>{let t=!1;return null!=a&&e.game.name.toLowerCase().indexOf(a)<=-1&&e.movie.name.toLowerCase().indexOf(a)<=-1&&(t=!0),null!=r&&r.length>0&&e.movie.actors.filter((e=>r.some((t=>t==e.id)))).length<=0&&(t=!0),s&&e.movie.releaseDate<s&&(t=!0),n&&e.movie.releaseDate>n&&(t=!0),null!=o&&o.length>0&&e.game.genres.filter((e=>o.some((t=>t==e.id)))).length<=0&&(t=!0),l&&(e.movie.chat||(t=!0)),t&&(e.game=null,e.movie=null),e}))}function i(e){let t=n.Z.getGamesData(),a=n.Z.getGameGenresData(),s=n.Z.getMoviesData(),r=n.Z.getActorsData(),i=o(t,a,s,r);i=l(i,e);let m=0,c=0,u=null,d=-1,g=[];i.forEach((e=>{null!=e.game&&(e.game.id!=d?(u=e,d=e.game.id,-1==g.findIndex((t=>t==e.game.id))&&(g.push(e.game.id),m++)):(u.gameRow++,e.game=null))})),u=null,d=-1;let v=[];return i.forEach((e=>{null!=e.movie&&(e.movie.id!=d?(u=e,d=e.movie.id,-1==v.findIndex((t=>t==e.movie.id))&&(v.push(e.movie.id),c++)):(u.movieRow++,e.movie=null))})),{items:i,gameCount:m,movieCount:c}}let m=null;function c(){let e="",t=[],a=n.Z.getActorsData();Object.keys(a).forEach((e=>{t.push({id:e,name:a[e].name,check:!1})}));let r={from:"",to:""},o=[],l=n.Z.getGameGenresData();Object.keys(l).forEach((e=>{o.push({id:e,name:l[e],check:!1})}));let i=!1;return m={text:e,actors:t,releaseDates:r,genres:o,chat:i},s.Z.copyDeep(m)}function u(e){return m.text=e.text,m.actors=d(m.actors,e.actors),m.releaseDates.from=e.releaseDates.from,m.releaseDates.to=e.releaseDates.to,m.genres=d(m.genres,e.genres),m.chat=e.chat,s.Z.copyDeep(m)}function d(e,t){for(let a=0;a<e.length;a++)e[a].check=t[a].check;return e}function g(e,t){return"text"==t&&(e.text=""),"releaseDateFrom"==t&&(e.releaseDates.from=""),"releaseDateTo"==t&&(e.releaseDates.to=""),u(e)}t["Z"]={getTableItems:i,getInitialFilterParams:c,updateFilterParams:u,resetFilterParamsInput:g}},2337:function(e,t,a){a.d(t,{Z:function(){return m}});var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("a",{attrs:{href:"https://www.youtube.com/channel/UC5fwtXKwDpgboOud4DbjQTg",target:"_blank"}},[s("img",{attrs:{alt:"comoradb logo",src:a(4427)}})]),s("span",[e._v("『コモラとチャンチョのゲーム部屋』ゲーム一覧")])])}],r={name:"Header"},o=r,l=a(1001),i=(0,l.Z)(o,s,n,!1,null,"2b7abbff",null),m=i.exports},6702:function(e,t,a){a.d(t,{Z:function(){return u}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"sticky-table"},[a("thead",[a("tr",[a("th",{staticClass:"pale",attrs:{colspan:"2"}},[e._v(" "+e._s("ゲーム ("+e.gameCount+")")+" ")]),a("th",{staticClass:"dark",attrs:{colspan:"2"}},[e._v(" "+e._s("動画 ("+e.movieCount+")")+" ")])]),e._m(0)]),a("tbody",[e._l(e.items,(function(t){return[null!=t.game||null!=t.movie?a("tr",{key:t.key,staticClass:"text-upper"},[null!=t.game?[a("td",{staticClass:"text-center",attrs:{rowspan:t.gameRow}},[a("router-link",{attrs:{to:{name:"GameShow",params:{gameId:t.game.id}}}},[e._v(e._s(t.game.id))])],1),a("td",{attrs:{rowspan:t.gameRow}},[e._v(" "+e._s(t.game.name)+" "),a("div",e._l(t.game.urls,(function(s,n){return a("div",{key:"url-"+t.game.id+"-"+n,staticClass:"urlicon"},[a("a",{class:"icon "+e.common.getUrlIconClass(s),attrs:{href:s,target:"_blank"}})])})),0)])]:t.nogame?[a("td",{staticClass:"text-center nogame",attrs:{rowspan:t.gameRow}}),a("td",{staticClass:"nogame",attrs:{rowspan:t.gameRow}})]:e._e(),null!=t.movie?[a("td",{class:"text-center "+(null==t.game?"border-left-none":""),attrs:{rowspan:t.movieRow}},[t.movie.id?a("router-link",{attrs:{to:{name:"MovieShow",params:{movieId:t.movie.id}}}},[e._v(e._s(t.movie.id))]):e._e()],1),a("td",{staticClass:"movie",attrs:{rowspan:t.movieRow}},[a("a",{attrs:{href:t.movie.url,target:"_blank"}},[e._v(e._s(t.movie.name))])])]:e._e()],2):e._e()]}))],2)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",{staticClass:"pale game-id"},[e._v("#")]),a("th",{staticClass:"pale game-name"},[e._v("タイトル")]),a("th",{staticClass:"dark movie-id"},[e._v("#")]),a("th",{staticClass:"dark movie-name"},[e._v("タイトル")])])}],r=a(3436),o=a(3670),l={name:"TopMobileTable",props:["filterParams"],data:function(){let e=o.Z.getTableItems(this.filterParams);return{common:r.Z,items:e.items,gameCount:e.gameCount,movieCount:e.movieCount}}},i=l,m=a(1001),c=(0,m.Z)(i,s,n,!1,null,"ae406936",null),u=c.exports},6651:function(e,t,a){a.d(t,{Z:function(){return u}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"sticky-table"},[a("thead",[a("tr",[a("th",{staticClass:"pale",attrs:{colspan:"4"}},[e._v(e._s("ゲーム ("+e.gameCount+")"))]),a("th",{staticClass:"dark",attrs:{colspan:"5"}},[e._v(e._s("動画 ("+e.movieCount+")"))])]),e._m(0)]),a("tbody",[e._l(e.items,(function(t){return[null!=t.game||null!=t.movie?a("tr",{key:t.key,staticClass:"text-upper"},[null!=t.game?[a("td",{staticClass:"text-center",attrs:{rowspan:t.gameRow}},[a("router-link",{attrs:{to:{name:"GameShow",params:{gameId:t.game.id}}}},[e._v(e._s(t.game.id))])],1),a("td",{attrs:{rowspan:t.gameRow}},[e._v(" "+e._s(t.game.name)+" ")]),a("td",{staticClass:"text-center links",attrs:{rowspan:t.gameRow}},e._l(t.game.urls,(function(s,n){return a("div",{key:"url-"+t.game.id+"-"+n,staticClass:"urlicon"},[a("a",{class:"icon "+e.common.getUrlIconClass(s),attrs:{href:s,target:"_blank"}})])})),0),a("td",{attrs:{rowspan:t.gameRow}},e._l(t.game.genres,(function(t){return a("span",{key:t.key,staticClass:"genre"},[e._v(" "+e._s(t.name)+" ")])})),0)]:t.nogame?[a("td",{staticClass:"text-center nogame",attrs:{rowspan:t.gameRow}}),a("td",{staticClass:"nogame",attrs:{rowspan:t.gameRow}}),a("td",{staticClass:"text-center links nogame",attrs:{rowspan:t.gameRow}}),a("td",{staticClass:"nogame",attrs:{rowspan:t.gameRow}})]:e._e(),null!=t.movie?[a("td",{class:"text-center "+(null==t.game?"border-left-none":""),attrs:{rowspan:t.movieRow}},[t.movie.id?a("router-link",{attrs:{to:{name:"MovieShow",params:{movieId:t.movie.id}}}},[e._v(e._s(t.movie.id))]):e._e()],1),a("td",{staticClass:"movie",attrs:{rowspan:t.movieRow}},[a("a",{attrs:{href:t.movie.url,target:"_blank"}},[e._v(e._s(t.movie.name))])]),a("td",{staticClass:"text-center",attrs:{rowspan:t.movieRow}},[e._v(" "+e._s(t.movie.releaseDate)+" ")]),a("td",{staticClass:"text-center",attrs:{rowspan:t.movieRow}},e._l(t.movie.actors,(function(e){return a("div",{key:"actor-"+e.id,staticClass:"actoricon"},[a("router-link",{attrs:{to:{name:"ActorShow",params:{actorId:e.id}}}},[a("i",{class:"icon actor-"+e.id,attrs:{title:e.name}})])],1)})),0),a("td",{staticClass:"text-center",attrs:{rowspan:t.movieRow}},[t.movie.chat?a("i",{staticClass:"icon check"}):e._e()])]:e._e()],2):e._e()]}))],2)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",{staticClass:"pale game-id"},[e._v("#")]),a("th",{staticClass:"pale game-name",attrs:{colspan:"2"}},[e._v("タイトル")]),a("th",{staticClass:"pale game-genres"},[e._v("ジャンル")]),a("th",{staticClass:"dark movie-id"},[e._v("#")]),a("th",{staticClass:"dark movie-name"},[e._v("タイトル")]),a("th",{staticClass:"dark movie-date"},[e._v("公開日")]),a("th",{staticClass:"dark movie-actors"},[e._v("出演")]),a("th",{staticClass:"dark movie-chat"},[e._v("雑談")])])}],r=a(3436),o=a(3670),l={name:"TopPCTable",props:["filterParams"],data:function(){let e=o.Z.getTableItems(this.filterParams);return{common:r.Z,items:e.items,gameCount:e.gameCount,movieCount:e.movieCount}}},i=l,m=a(1001),c=(0,m.Z)(i,s,n,!1,null,"3aac096d",null),u=c.exports},4427:function(e,t,a){e.exports=a.p+"img/logo.7e852d16.png"}}]);