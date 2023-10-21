import{H as N,c as I}from"./Common-2d183e6a.js";import{bz as v,az as a,q as s,r as t,F as p,aK as k,aj as S,a_ as _,p as W,y as $,aD as P,aA as j,bD as V,bC as b,aM as y,z as E,o as C}from"./index-5970a202.js";const H={name:"CalendarPCTable",props:["weeks"]},q=e=>(P("data-v-1efa1097"),e=e(),j(),e),x=q(()=>t("thead",null,[t("tr",null,[t("th",{class:"dark"},"日"),t("th",{class:"pale"},"月"),t("th",{class:"pale"},"火"),t("th",{class:"pale"},"水"),t("th",{class:"pale"},"木"),t("th",{class:"pale"},"金"),t("th",{class:"dark"},"土")])],-1)),F={key:0,class:"day"},L={key:0,class:"date holydays"},R={key:1,class:"date"},A={key:0,class:"thumbnail"},G={key:0,class:"icon check"},K=["href"],U=["src","alt","title"],J={key:1},Q=["href"];function X(e,o,i,h,n,u){return a(),s("table",null,[x,t("tbody",null,[(a(!0),s(p,null,k(i.weeks,(l,d)=>(a(),s("tr",{key:`week-${d}`},[(a(!0),s(p,null,k(l,(r,f)=>(a(),s("td",{key:`day-${d}-${f}`,class:S(r.date!=-1?"":"hide")},[r.date!=-1?(a(),s("div",F,[f==0||f==6?(a(),s("div",L,_(r.date)+"日 ",1)):(a(),s("div",R,_(r.date)+"日 ",1)),(a(!0),s(p,null,k(r.movies,c=>(a(),s("div",{key:`movie-${c.id}`,class:"movie"},[c.thumbnail?(a(),s("div",A,[c.chat?(a(),s("i",G)):W("",!0),t("a",{href:c.url,target:"_blank"},[t("img",{src:c.thumbnail,alt:c.name,title:`${c.gameTitle?c.gameTitle+`
`:""}${c.name}`},null,8,U)],8,K)])):(a(),s("div",J,[$(" ・"),t("a",{href:c.url,target:"_blank"},_(c.name),9,Q)]))]))),128))])):W("",!0)],2))),128))]))),128))])])}const Y=v(H,[["render",X],["__scopeId","data-v-1efa1097"]]);const Z={name:"CalendarPCTable",props:["days"],data:function(){return{dayOfWeeks:["日","月","火","水","木","金","土"]}}},ee={key:0,class:"date holydays"},te={key:1,class:"date"},ae={class:"day"},se=["href"];function ne(e,o,i,h,n,u){return a(),s("table",null,[t("tbody",null,[(a(!0),s(p,null,k(i.days,(l,d)=>(a(),s("tr",{key:`day-${d}`},[l.dayOfWeek==0||l.dayOfWeek==6?(a(),s("th",ee,_(l.date)+"日",1)):(a(),s("th",te,_(l.date)+"日",1)),t("th",{class:S((l.dayOfWeek==0||l.dayOfWeek==6?"dark":"pale")+" day-of-week")},_(e.dayOfWeeks[l.dayOfWeek]),3),t("td",null,[t("div",ae,[(a(!0),s(p,null,k(l.movies,r=>(a(),s("div",{key:`movie-${r.id}`,class:"movie"},[$(" ・"),t("a",{href:r.url},_(r.name),9,se)]))),128))])])]))),128))])])}const le=v(Z,[["render",ne],["__scopeId","data-v-d0da87ff"]]);const oe={name:"CalendarShow",components:{Header:N,PCTable:Y,MobileTable:le},data:function(){let o=V().params.calendarMonth,i=parseInt(o.split("-")[0]),h=parseInt(o.split("-")[1]),n=T(i,h),u=M(n);return{isMobile:I.isMobile(),year:i,month:h,days:n,weeks:u}},methods:{moveMonth:function(e){this.month=parseInt(this.month)+parseInt(e),this.month<=0&&(this.year=parseInt(this.year)-1,this.month=12),this.month>12&&(this.year=parseInt(this.year)+1,this.month=1),this.days=T(this.year,this.month),this.weeks=M(this.days)}},mounted:async function(){await b.execute()}};function T(e,o){let i=[],h=b.getMoviesData(),n=b.getGamesData(),u=new Date(e,o-1,1),l=new Date(e,o,0);for(let d=1;d<=l.getDate();d++){let r={date:d,dayOfWeek:(u.getDay()+d-1)%7,movies:[]},f=e+"/"+("0"+o).slice(-2)+"/"+("0"+d).slice(-2);Object.keys(h).forEach(c=>{let m=h[c];if(m.releaseDate==f){let w="";if(m.url.indexOf("https://www.youtube.com/watch")==0){var B=new URL(m.url),g=B.searchParams.get("v");g&&(w="http://img.youtube.com/vi/"+g+"/mqdefault.jpg")}let D=[];m.gameIds.forEach(O=>{O!=99999&&D.push(n[O].name)}),r.movies.push({id:c,name:m.name,url:m.url,chat:m.chat,gameTitle:D.join(`
`),thumbnail:w})}}),i.push(r)}return i}function M(e){e=I.copyDeep(e);let o=e[0].dayOfWeek;for(let n=0;n<o;n++)e.unshift({date:-1,dayOfWeek:n,movies:[]});let i=e[e.length-1].dayOfWeek;for(let n=i+1;n<7;n++)e.push({date:-1,dayOfWeek:n,movies:[]});let h=[];for(let n=0;n<e.length/7;n++){let u=[];for(let l=0;l<7;l++)u.push(e[n*7+l]);h.push(u)}return h}const z=e=>(P("data-v-77ac4a3b"),e=e(),j(),e),re={class:"subject"},ce=z(()=>t("i",{class:"icon left"},null,-1)),ie=[ce],de=z(()=>t("i",{class:"icon right"},null,-1)),he=[de];function ue(e,o,i,h,n,u){const l=y("Header"),d=y("PCTable"),r=y("MobileTable");return a(),s("div",null,[E(l),t("h3",null,[t("div",re,[t("button",{onClick:o[0]||(o[0]=f=>u.moveMonth(-1)),class:"move-month"},ie),$(" "+_(e.year)+"年"+_(("0"+e.month).slice(-2))+"月 ",1),t("button",{onClick:o[1]||(o[1]=f=>u.moveMonth(1)),class:"move-month"},he)])]),e.isMobile==!1?(a(),C(d,{key:0,weeks:e.weeks},null,8,["weeks"])):(a(),C(r,{key:1,days:e.days},null,8,["days"]))])}const me=v(oe,[["render",ue],["__scopeId","data-v-77ac4a3b"]]);export{me as default};
