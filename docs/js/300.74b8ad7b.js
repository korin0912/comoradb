"use strict";(self["webpackChunkcomoradb"]=self["webpackChunkcomoradb"]||[]).push([[300],{5125:function(e,a){function t(e){return-1!=e.indexOf("store.steampowered.com")?"steam":-1!=e.indexOf("twitter.com")?"twitter":-1!=e.indexOf("www.facebook.com")?"facebook":-1!=e.indexOf("www.youtube.com")?"youtube":-1!=e.indexOf("www.twitch.tv")?"twitch":-1!=e.indexOf("apps.apple.com")?"appstore":-1!=e.indexOf("play.google.com")?"gplay":-1!=e.indexOf("www.nintendo.co.jp")||-1!=e.indexOf(".nintendo.com")?"nintendo":-1!=e.indexOf("www.ea.com")?"EA":-1!=e.indexOf("www.capcom.co.jp")?"capcom":-1!=e.indexOf(".playstation.com")?"playstation":-1!=e.indexOf(".xbox.com")?"xbox":"home"}function n(){return!(!window.matchMedia||!window.matchMedia("(max-device-width: 640px)").matches)}function l(e){return JSON.parse(JSON.stringify(e))}a["Z"]={getUrlIconClass:t,isMobile:n,copyDeep:l}},7006:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(6252),l=t.p+"img/logo.7e852d16.png";const o=e=>((0,n.dD)("data-v-2b7abbff"),e=e(),(0,n.Cn)(),e),i=o((()=>(0,n._)("a",{href:"https://www.youtube.com/channel/UC5fwtXKwDpgboOud4DbjQTg",target:"_blank"},[(0,n._)("img",{alt:"comoradb logo",src:l})],-1))),s=o((()=>(0,n._)("span",null,"『コモラとチャンチョのゲーム部屋』ゲーム一覧",-1))),r=[i,s];function c(e,a,t,l,o,i){return(0,n.wg)(),(0,n.iD)("h1",null,r)}var d={name:"Header"},u=t(3744);const m=(0,u.Z)(d,[["render",c],["__scopeId","data-v-2b7abbff"]]);var w=m},1887:function(e,a,t){t.r(a),t.d(a,{default:function(){return K}});var n=t(6252),l=t(3577);const o=e=>((0,n.dD)("data-v-ef79ab00"),e=e(),(0,n.Cn)(),e),i={class:"container"},s=o((()=>(0,n._)("th",{class:"pale"},"URL",-1))),r=["href"],c=o((()=>(0,n._)("th",{class:"pale"},"再生リストURL",-1))),d={key:0},u=["href"],m=o((()=>(0,n._)("th",{class:"pale"},"ジャンル",-1))),w=o((()=>(0,n._)("th",{class:"pale"},"コメント",-1))),g={key:0,style:{height:"21px",margin:"10px 0 10px 0"}},p={style:{margin:"10px 0 60px 0"}};function _(e,a,t,o,_,f){const h=(0,n.up)("Header"),b=(0,n.up)("MovieTable");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(h),(0,n._)("div",i,[(0,n._)("div",{class:(0,l.C_)(0==e.isMobile?"pc":"mobile")},[(0,n._)("h2",null,(0,l.zw)(e.game.name),1),(0,n._)("table",null,[(0,n._)("thead",null,[(0,n._)("tr",null,[s,(0,n._)("td",null,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.game.urls,((e,a)=>((0,n.wg)(),(0,n.iD)("li",{key:"url-"+a},[(0,n._)("a",{href:e,target:"_blank",class:"url"},(0,l.zw)(e),9,r)])))),128))])])]),(0,n._)("tr",null,[c,(0,n._)("td",null,[(0,n._)("ul",null,["playListUrl"in e.game&&e.game.playListUrl?((0,n.wg)(),(0,n.iD)("li",d,[(0,n._)("a",{href:e.game.playListUrl,target:"_blank",class:"url"},(0,l.zw)(e.game.playListUrl),9,u)])):(0,n.kq)("",!0)])])]),(0,n._)("tr",null,[m,(0,n._)("td",null,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.game.genreIds,((a,t)=>((0,n.wg)(),(0,n.iD)("li",{key:"genre-"+t},(0,l.zw)(e.gameGenresData[a]),1)))),128))])])]),(0,n._)("tr",null,[w,(0,n._)("td",null,(0,l.zw)(e.game.comment),1)])])]),e.isLocal&&!e.isMobile?((0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("button",{onClick:a[0]||(a[0]=a=>e.router.push({name:"GameEdit",params:{gameId:e.gameId}})),class:"edit",style:{float:"right"}})])):(0,n.kq)("",!0),(0,n._)("div",p,[(0,n.Wm)(b,{movieIds:e.movieIds},null,8,["movieIds"])])],2)])])}var f=t(7006);const h=e=>((0,n.dD)("data-v-f25db19c"),e=e(),(0,n.Cn)(),e),b=h((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{class:"dark id"},"#"),(0,n._)("th",{class:"dark name"},"タイトル"),(0,n._)("th",{class:"dark releaseDate"},"公開日"),(0,n._)("th",{class:"dark actors"},"出演者"),(0,n._)("th",{class:"dark chat"},"雑談")])],-1))),v={class:"text-center"},D=["href"],k={class:"text-center"},x={class:"text-center"},y=["title"],I={class:"text-center"},O={key:0,class:"icon check"};function M(e,a,t,o,i,s){const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("table",null,[b,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.movies,((a,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:"movie-"+t},[(0,n._)("td",v,[(0,n.Wm)(r,{to:{name:"MovieShow",params:{movieId:a.id}}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(a.id),1)])),_:2},1032,["to"])]),(0,n._)("td",null,[(0,n._)("a",{href:a.data.url,target:"_blank"},(0,l.zw)(a.data.name),9,D)]),(0,n._)("td",k,(0,l.zw)(a.data.releaseDate),1),(0,n._)("td",x,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.data.actorIds,(a=>((0,n.wg)(),(0,n.iD)("div",{key:`actor-${a}`,class:"actoricon"},[(0,n.Wm)(r,{to:{name:"ActorShow",params:{actorId:a}}},{default:(0,n.w5)((()=>[(0,n._)("i",{title:e.actorsData[a].name,class:(0,l.C_)(`icon actor-${a}`)},null,10,y)])),_:2},1032,["to"])])))),128))]),(0,n._)("td",I,[a.data.chat?((0,n.wg)(),(0,n.iD)("i",O)):(0,n.kq)("",!0)])])))),128))])])])}var Z=t(8907),C={name:"MovieTable",props:["movieIds"],data:function(){let e=Z.Z.getMoviesData(),a=Z.Z.getActorsData(),t=this.movieIds.map((a=>({id:a,data:e[String(a)]})));return{movies:t,actorsData:a}}},U=t(3744);const z=(0,U.Z)(C,[["render",M],["__scopeId","data-v-f25db19c"]]);var L=z,G=t(2201),H=t(5125),S={name:"GameShow",components:{Header:f.Z,MovieTable:L},data:function(){let e=(0,G.yj)(),a=!1,t=H.Z.isMobile(),n=e.params.gameId,l=Z.Z.getGamesData(),o=Z.Z.getGameGenresData(),i=[],s=Z.Z.getMoviesData();return Object.keys(s).forEach((e=>{-1!=s[e].gameIds.findIndex((e=>e==n))&&i.push(e)})),{router:(0,G.tv)(),isLocal:a,isMobile:t,gameId:n,game:l[String(n)],gameGenresData:o,movieIds:i}},mounted:async function(){await Z.Z.execute()}};const j=(0,U.Z)(S,[["render",_],["__scopeId","data-v-ef79ab00"]]);var K=j}}]);