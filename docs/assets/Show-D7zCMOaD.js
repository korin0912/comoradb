import{H as V,c as I}from"./Common-PJ1VgMNT.js";import{bO as $,aK as a,u as l,v as s,F as p,aV as y,at as P,b9 as m,t as W,H as v,bR as b,I as B,s as C,bS as H,aX as _}from"./index-CB5KiW4e.js";const N={name:"CalendarPCTable",props:["weeks"]},S={style:{width:"95%",margin:"auto"}},E={key:0,class:"day"},R={key:0,class:"date holydays"},F={key:1,class:"date"},L={key:0,class:"thumbnail"},q={key:0,class:"icon check"},z=["href"],G=["src","alt","title"],K={key:1},U=["href"];function X(e,t,d,u,n,h){return a(),l("table",S,[t[1]||(t[1]=s("thead",null,[s("tr",null,[s("th",{class:"dark"},"日"),s("th",{class:"pale"},"月"),s("th",{class:"pale"},"火"),s("th",{class:"pale"},"水"),s("th",{class:"pale"},"木"),s("th",{class:"pale"},"金"),s("th",{class:"dark"},"土")])],-1)),s("tbody",null,[(a(!0),l(p,null,y(d.weeks,(o,c)=>(a(),l("tr",{key:`week-${c}`},[(a(!0),l(p,null,y(o,(r,f)=>(a(),l("td",{key:`day-${c}-${f}`,class:P(r.date!=-1?"":"hide")},[r.date!=-1?(a(),l("div",E,[f==0||f==6?(a(),l("div",R,m(r.date)+"日 ",1)):(a(),l("div",F,m(r.date)+"日 ",1)),(a(!0),l(p,null,y(r.movies,i=>(a(),l("div",{key:`movie-${i.id}`,class:"movie"},[i.thumbnail?(a(),l("div",L,[i.chat?(a(),l("i",q)):W("",!0),s("a",{href:i.url,target:"_blank"},[s("img",{src:i.thumbnail,alt:i.name,title:`${i.gameTitle?i.gameTitle+`
`:""}${i.name}`},null,8,G)],8,z)])):(a(),l("div",K,[t[0]||(t[0]=v(" ・")),s("a",{href:i.url,target:"_blank"},m(i.name),9,U)]))]))),128))])):W("",!0)],2))),128))]))),128))])])}const A=$(N,[["render",X],["__scopeId","data-v-225def5d"]]),J={name:"CalendarPCTable",props:["days"],data:function(){return{dayOfWeeks:["日","月","火","水","木","金","土"]}}},Q={key:0,class:"date holydays"},Y={key:1,class:"date"},Z={class:"day"},x=["href"];function ee(e,t,d,u,n,h){return a(),l("table",null,[s("tbody",null,[(a(!0),l(p,null,y(d.days,(o,c)=>(a(),l("tr",{key:`day-${c}`},[o.dayOfWeek==0||o.dayOfWeek==6?(a(),l("th",Q,m(o.date)+"日",1)):(a(),l("th",Y,m(o.date)+"日",1)),s("th",{class:P((o.dayOfWeek==0||o.dayOfWeek==6?"dark":"pale")+" day-of-week")},m(e.dayOfWeeks[o.dayOfWeek]),3),s("td",null,[s("div",Z,[(a(!0),l(p,null,y(o.movies,r=>(a(),l("div",{key:`movie-${r.id}`,class:"movie"},[t[0]||(t[0]=v(" ・")),s("a",{href:r.url},m(r.name),9,x)]))),128))])])]))),128))])])}const te=$(J,[["render",ee],["__scopeId","data-v-264bd645"]]),se={name:"CalendarShow",components:{Header:V,PCTable:A,MobileTable:te},data:function(){let t=H().params.calendarMonth,d=parseInt(t.split("-")[0]),u=parseInt(t.split("-")[1]),n=T(d,u),h=M(n);return{isMobile:I.isMobile(),year:d,month:u,days:n,weeks:h}},methods:{moveMonth:function(e){this.month=parseInt(this.month)+parseInt(e),this.month<=0&&(this.year=parseInt(this.year)-1,this.month=12),this.month>12&&(this.year=parseInt(this.year)+1,this.month=1),this.days=T(this.year,this.month),this.weeks=M(this.days)}},mounted:async function(){await b.execute()}};function T(e,t){let d=[],u=b.getMoviesData(),n=b.getGamesData(),h=new Date(e,t-1,1),o=new Date(e,t,0);for(let c=1;c<=o.getDate();c++){let r={date:c,dayOfWeek:(h.getDay()+c-1)%7,movies:[]},f=e+"/"+("0"+t).slice(-2)+"/"+("0"+c).slice(-2);Object.keys(u).forEach(i=>{let k=u[i];if(k.releaseDate==f){let w="";if(k.url.indexOf("https://www.youtube.com/watch")==0){var j=new URL(k.url),g=j.searchParams.get("v");g&&(w="http://img.youtube.com/vi/"+g+"/mqdefault.jpg")}let O=[];k.gameIds.forEach(D=>{D!=99999&&O.push(n[D].name)}),r.movies.push({id:i,name:k.name,url:k.url,chat:k.chat,gameTitle:O.join(`
`),thumbnail:w})}}),d.push(r)}return d}function M(e){e=I.copyDeep(e);let t=e[0].dayOfWeek;for(let n=0;n<t;n++)e.unshift({date:-1,dayOfWeek:n,movies:[]});let d=e[e.length-1].dayOfWeek;for(let n=d+1;n<7;n++)e.push({date:-1,dayOfWeek:n,movies:[]});let u=[];for(let n=0;n<e.length/7;n++){let h=[];for(let o=0;o<7;o++)h.push(e[n*7+o]);u.push(h)}return u}const ae={class:"subject"};function le(e,t,d,u,n,h){const o=_("Header"),c=_("PCTable"),r=_("MobileTable");return a(),l("div",null,[B(o),s("h3",null,[s("div",ae,[s("button",{onClick:t[0]||(t[0]=f=>h.moveMonth(-1)),class:"move-month"},t[2]||(t[2]=[s("i",{class:"icon left"},null,-1)])),v(" "+m(e.year)+"年"+m(("0"+e.month).slice(-2))+"月 ",1),s("button",{onClick:t[1]||(t[1]=f=>h.moveMonth(1)),class:"move-month"},t[3]||(t[3]=[s("i",{class:"icon right"},null,-1)]))])]),e.isMobile==!1?(a(),C(c,{key:0,weeks:e.weeks},null,8,["weeks"])):(a(),C(r,{key:1,days:e.days},null,8,["days"]))])}const re=$(se,[["render",le],["__scopeId","data-v-c6b7e23c"]]);export{re as default};
