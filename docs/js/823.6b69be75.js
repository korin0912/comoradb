"use strict";(self["webpackChunkcomoradb"]=self["webpackChunkcomoradb"]||[]).push([[823],{1294:function(t,e,a){a.d(e,{Z:function(){return l}});var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("a",{attrs:{href:"https://www.youtube.com/channel/UC5fwtXKwDpgboOud4DbjQTg",target:"_blank"}},[n("img",{attrs:{alt:"comoradb logo",src:a(4427)}})]),n("span",[t._v("『コモラとチャンチョのゲーム部屋』ゲーム一覧")])])}],i={name:"Header"},r=i,o=a(1001),c=(0,o.Z)(r,n,s,!1,null,"2b7abbff",null),l=c.exports},4823:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("div",{staticClass:"container"},[a("div",{class:0==t.isMobile?"pc":"mobile"},[a("h2",[t._v(t._s(t.movie.name))]),a("table",[a("thead",[a("tr",[a("th",{staticClass:"pale"},[t._v("URL")]),a("td",[a("a",{staticClass:"url",attrs:{href:t.movie.url,target:"_blank"}},[t._v(t._s(t.movie.url))])])]),a("tr",[a("th",{staticClass:"pale"},[t._v("公開日")]),a("td",[t._v(t._s(t.movie.releaseDate))])]),a("tr",[a("th",{staticClass:"pale"},[t._v("出演者")]),a("td",[a("ul",t._l(t.movie.actorIds,(function(e,n){return a("li",{key:"actor-"+n},[a("router-link",{attrs:{to:{name:"ActorShow",params:{actorId:e}}}},[t._v(t._s(t.actorsData[e].name))])],1)})),0)])]),a("tr",[a("th",{staticClass:"pale"},[t._v("雑談")]),a("td",[t.movie.chat?a("i",{staticClass:"icon check"}):t._e()])]),a("tr",[a("th",{staticClass:"pale"},[t._v("コメント")]),a("td",[t._v(t._s(t.movie.comment))])])])]),t.isLocal&&!t.isMobile?a("div",{staticStyle:{height:"21px",margin:"10px 0 10px 0"}},[a("button",{staticClass:"edit",on:{click:function(e){return t.$router.push({name:"MovieEdit",params:{movieId:t.movieId}})}}})]):t._e(),t.gameIds.length>0?a("div",{staticStyle:{margin:"10px 0 60px 0"}},[a("GameTable",{attrs:{gameIds:t.gameIds}})],1):t._e()])])],1)},s=[],i=a(1294),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",[t._m(0),a("tbody",t._l(t.games,(function(e,n){return a("tr",{key:"game-"+n},[a("td",{staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"GameShow",params:{gameId:e.id}}}},[t._v(t._s(e.id))])],1),a("td",[t._v(t._s(e.data.name))]),a("td",t._l(e.data.urls,(function(e,n){return a("div",{key:"url-"+n,staticClass:"urlicon"},[a("a",{class:"icon "+t.common.getUrlIconClass(e),attrs:{href:e,target:"_blank"}})])})),0),a("td",t._l(e.data.genreIds,(function(e){return a("span",{key:"genre-"+e,staticClass:"genre"},[t._v(t._s(t.gameGenresData[e]))])})),0)])})),0)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"dark id"},[t._v("#")]),a("th",{staticClass:"dark name"},[t._v("タイトル")]),a("th",{staticClass:"dark urls"},[t._v("URL")]),a("th",{staticClass:"dark genres"},[t._v("ジャンル")])])])}],c=a(8661),l=a(787),m={name:"GameTable",props:["gameIds"],data:function(){let t=l.Z.getGamesData(),e=l.Z.getGameGenresData(),a=this.gameIds.map((e=>({id:e,data:t[String(e)]})));return{games:a,gameGenresData:e,common:c.Z}}},d=m,u=a(1001),f=(0,u.Z)(d,r,o,!1,null,"113a137c",null),p=f.exports,v={name:"MovieShow",components:{Header:i.Z,GameTable:p},data:function(){let t=!1,e=c.Z.isMobile(),a=this.$route.params.movieId,n=l.Z.getMoviesData(),s=l.Z.getGamesData(),i=l.Z.getActorsData(),r=n[String(a)],o=[];return r.gameIds.forEach((t=>{99999!=t&&o.push(t)})),{isLocal:t,isMobile:e,movieId:a,movie:r,gamesData:s,actorsData:i,gameIds:o}},mounted:async function(){await l.Z.execute()}},_=v,h=(0,u.Z)(_,n,s,!1,null,"1caefab7",null),g=h.exports},8661:function(t,e){function a(t){return-1!=t.indexOf("store.steampowered.com")?"steam":-1!=t.indexOf("twitter.com")?"twitter":-1!=t.indexOf("www.facebook.com")?"facebook":-1!=t.indexOf("www.youtube.com")?"youtube":-1!=t.indexOf("www.twitch.tv")?"twitch":-1!=t.indexOf("apps.apple.com")?"appstore":-1!=t.indexOf("play.google.com")?"gplay":-1!=t.indexOf("www.nintendo.co.jp")||-1!=t.indexOf(".nintendo.com")?"nintendo":-1!=t.indexOf("www.ea.com")?"EA":-1!=t.indexOf("www.capcom.co.jp")?"capcom":-1!=t.indexOf(".playstation.com")?"playstation":"home"}function n(){return!(!window.matchMedia||!window.matchMedia("(max-device-width: 640px)").matches)}function s(t){return JSON.parse(JSON.stringify(t))}e["Z"]={getUrlIconClass:a,isMobile:n,copyDeep:s}},4427:function(t,e,a){t.exports=a.p+"img/logo.7e852d16.png"}}]);