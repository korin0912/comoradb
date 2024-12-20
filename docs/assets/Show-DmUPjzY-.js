import{H as D,c as I}from"./Common-PJ1VgMNT.js";import{bO as $,bR as c,aK as s,u as l,v as e,F as h,aV as g,I as f,bH as k,b9 as i,t as v,aX as b,H as M,at as y,bP as L,bS as S}from"./index-CB5KiW4e.js";const G={name:"MovieTable",props:["movieIds"],data:function(){let t=c.getMoviesData(),a=c.getActorsData();return{movies:this.movieIds.map(m=>({id:m,data:t[String(m)]})),actorsData:a}}},w={class:"text-center"},H=["href"],U={class:"text-center"},C={class:"text-center"},R=["title"],T={class:"text-center"},V={key:0,class:"icon check"};function N(t,a,u,m,_,p){const d=b("router-link");return s(),l("div",null,[e("table",null,[a[0]||(a[0]=e("thead",null,[e("tr",null,[e("th",{class:"dark id"},"#"),e("th",{class:"dark name"},"タイトル"),e("th",{class:"dark releaseDate"},"公開日"),e("th",{class:"dark actors"},"出演者"),e("th",{class:"dark chat"},"雑談")])],-1)),e("tbody",null,[(s(!0),l(h,null,g(t.movies,(n,o)=>(s(),l("tr",{key:"movie-"+o},[e("td",w,[f(d,{to:{name:"MovieShow",params:{movieId:n.id}}},{default:k(()=>[M(i(n.id),1)]),_:2},1032,["to"])]),e("td",null,[e("a",{href:n.data.url,target:"_blank"},i(n.data.name),9,H)]),e("td",U,i(n.data.releaseDate),1),e("td",C,[(s(!0),l(h,null,g(n.data.actorIds,r=>(s(),l("div",{key:`actor-${r}`,class:"actoricon"},[f(d,{to:{name:"ActorShow",params:{actorId:r}}},{default:k(()=>[e("i",{title:t.actorsData[r].name,class:y(`icon actor-${r}`)},null,10,R)]),_:2},1032,["to"])]))),128))]),e("td",T,[n.data.chat?(s(),l("i",V)):v("",!0)])]))),128))])])])}const B=$(G,[["render",N],["__scopeId","data-v-cdf8fdcb"]]),E={name:"GameShow",components:{Header:D,MovieTable:B},data:function(){let t=S(),a=I.isMobile(),u=t.params.gameId,m=c.getGamesData(),_=c.getGameGenresData(),p=[],d=c.getMoviesData();return Object.keys(d).forEach(n=>{d[n].gameIds.findIndex(o=>o==u)!=-1&&p.push(n)}),{router:L(),isLocal:!1,isMobile:a,gameId:u,game:m[String(u)],gameGenresData:_,movieIds:p}},mounted:async function(){await c.execute()}},A={class:"container"},F=["href"],O={key:0},j=["href"],z={key:0,style:{height:"21px",margin:"10px 0 10px 0"}},K={style:{margin:"10px 0 60px 0"}};function P(t,a,u,m,_,p){const d=b("Header"),n=b("MovieTable");return s(),l("div",null,[f(d),e("div",A,[e("div",{class:y(t.isMobile==!1?"pc":"mobile")},[e("h2",null,i(t.game.name),1),e("table",null,[e("thead",null,[e("tr",null,[a[1]||(a[1]=e("th",{class:"pale"},"URL",-1)),e("td",null,[e("ul",null,[(s(!0),l(h,null,g(t.game.urls,(o,r)=>(s(),l("li",{key:"url-"+r},[e("a",{href:o,target:"_blank",class:"url"},i(o),9,F)]))),128))])])]),e("tr",null,[a[2]||(a[2]=e("th",{class:"pale"},"再生リストURL",-1)),e("td",null,[e("ul",null,["playListUrl"in t.game&&t.game.playListUrl?(s(),l("li",O,[e("a",{href:t.game.playListUrl,target:"_blank",class:"url"},i(t.game.playListUrl),9,j)])):v("",!0)])])]),e("tr",null,[a[3]||(a[3]=e("th",{class:"pale"},"ジャンル",-1)),e("td",null,[e("ul",null,[(s(!0),l(h,null,g(t.game.genreIds,(o,r)=>(s(),l("li",{key:"genre-"+r},i(t.gameGenresData[o]),1))),128))])])]),e("tr",null,[a[4]||(a[4]=e("th",{class:"pale"},"コメント",-1)),e("td",null,i(t.game.comment),1)])])]),t.isLocal&&!t.isMobile?(s(),l("div",z,[e("button",{onClick:a[0]||(a[0]=o=>t.router.push({name:"GameEdit",params:{gameId:t.gameId}})),class:"edit",style:{float:"right"}})])):v("",!0),e("div",K,[f(n,{movieIds:t.movieIds},null,8,["movieIds"])])],2)])])}const x=$(E,[["render",P],["__scopeId","data-v-6f2acea9"]]);export{x as default};