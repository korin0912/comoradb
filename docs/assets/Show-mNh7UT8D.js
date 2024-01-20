import{c as D,H as C}from"./Common-adgQKusb.js";import{bE as $,bH as c,aE as t,u as s,v as e,F as h,aP as _,I as g,bx as y,b3 as n,ao as G,aR as v,H as S,aI as w,aF as M,bI as H,bF as E,t as I}from"./index-qbg-TQrD.js";const L={name:"GameTable",props:["gameIds"],data:function(){let a=c.getGamesData(),r=c.getGameGenresData();return{games:this.gameIds.map(d=>({id:d,data:a[String(d)]})),gameGenresData:r,common:D}}},R=a=>(w("data-v-d510d690"),a=a(),M(),a),T=R(()=>e("thead",null,[e("tr",null,[e("th",{class:"dark id"},"#"),e("th",{class:"dark name"},"タイトル"),e("th",{class:"dark urls"},"URL"),e("th",{class:"dark genres"},"ジャンル")])],-1)),F={class:"text-center"},N=["href"];function V(a,r,m,d,f,b){const i=v("router-link");return t(),s("div",null,[e("table",null,[T,e("tbody",null,[(t(!0),s(h,null,_(a.games,(o,u)=>(t(),s("tr",{key:"game-"+u},[e("td",F,[g(i,{to:{name:"GameShow",params:{gameId:o.id}}},{default:y(()=>[S(n(o.id),1)]),_:2},1032,["to"])]),e("td",null,n(o.data.name),1),e("td",null,[(t(!0),s(h,null,_(o.data.urls,(l,k)=>(t(),s("div",{key:"url-"+k,class:"urlicon"},[e("a",{href:l,target:"_blank",class:G("icon "+a.common.getUrlIconClass(l))},null,10,N)]))),128))]),e("td",null,[(t(!0),s(h,null,_(o.data.genreIds,l=>(t(),s("span",{key:"genre-"+l,class:"genre"},n(a.gameGenresData[l]),1))),128))])]))),128))])])])}const B=$(L,[["render",V],["__scopeId","data-v-d510d690"]]),U={name:"MovieShow",components:{Header:C,GameTable:B},data:function(){let a=H(),r=D.isMobile(),m=a.params.movieId,d=c.getMoviesData(),f=c.getGamesData(),b=c.getActorsData(),i=d[String(m)],o=[];return i.gameIds.forEach(u=>{u!=99999&&o.push(u)}),{router:E(),isLocal:!1,isMobile:r,movieId:m,movie:i,gamesData:f,actorsData:b,gameIds:o}},mounted:async function(){await c.execute()}},p=a=>(w("data-v-de721838"),a=a(),M(),a),A={class:"container"},z=p(()=>e("th",{class:"pale"},"URL",-1)),P=["href"],j=p(()=>e("th",{class:"pale"},"公開日",-1)),q=p(()=>e("th",{class:"pale"},"出演者",-1)),J=p(()=>e("th",{class:"pale"},"雑談",-1)),K={key:0,class:"icon check"},O=p(()=>e("th",{class:"pale"},"コメント",-1)),Q={key:0,style:{height:"21px",margin:"10px 0 10px 0"}},W={key:1,style:{margin:"10px 0 60px 0"}};function X(a,r,m,d,f,b){const i=v("Header"),o=v("router-link"),u=v("GameTable");return t(),s("div",null,[g(i),e("div",A,[e("div",{class:G(a.isMobile==!1?"pc":"mobile")},[e("h2",null,n(a.movie.name),1),e("table",null,[e("thead",null,[e("tr",null,[z,e("td",null,[e("a",{href:a.movie.url,target:"_blank",class:"url"},n(a.movie.url),9,P)])]),e("tr",null,[j,e("td",null,n(a.movie.releaseDate),1)]),e("tr",null,[q,e("td",null,[e("ul",null,[(t(!0),s(h,null,_(a.movie.actorIds,(l,k)=>(t(),s("li",{key:"actor-"+k},[g(o,{to:{name:"ActorShow",params:{actorId:l}}},{default:y(()=>[S(n(a.actorsData[l].name),1)]),_:2},1032,["to"])]))),128))])])]),e("tr",null,[J,e("td",null,[a.movie.chat?(t(),s("i",K)):I("",!0)])]),e("tr",null,[O,e("td",null,n(a.movie.comment),1)])])]),a.isLocal&&!a.isMobile?(t(),s("div",Q,[e("button",{onClick:r[0]||(r[0]=l=>a.router.push({name:"MovieEdit",params:{movieId:a.movieId}})),class:"edit"})])):I("",!0),a.gameIds.length>0?(t(),s("div",W,[g(u,{gameIds:a.gameIds},null,8,["gameIds"])])):I("",!0)],2)])])}const x=$(U,[["render",X],["__scopeId","data-v-de721838"]]);export{x as default};
