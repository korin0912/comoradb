import{H as f,c as I}from"./Common-PJ1VgMNT.js";import{P as _,M as P,t as k}from"./MobileTable-C_zawnHD.js";import{bO as C,bR as M,u as l,I as v,v as a,at as B,b9 as n,F as h,aV as y,s as d,bS as D,aX as c,aK as r}from"./index-CB5KiW4e.js";const T="/comoradb/assets/actor_1-Ch01Ox8a.png",S="/comoradb/assets/actor_2-BCCIZdB1.png",X="/comoradb/assets/actor_3-yxdYXn7y.png",H="/comoradb/assets/actor_4-CdY46p9h.png",V="/comoradb/assets/actor_5-BmBGo3DA.png",$="/comoradb/assets/actor_6-Dv-if2-M.png",A="/comoradb/assets/actor_7-CPzVquen.png",F="/comoradb/assets/actor_8-Cq7dXMxU.png",N="/comoradb/assets/actor_9-BDXI3NX6.png",O="/comoradb/assets/actor_10-DkZu0-1S.png",q={name:"ActorShow",components:{Header:f,PCTable:_,MobileTable:P},data:function(){let s=D(),o=M.getActorsData(),m=Object.keys(o).find(t=>t==s.params.actorId),e=k.getInitialFilterParams();return e.actors.forEach(t=>{t.id==s.params.actorId&&(t.check=!0)}),{route:s,actorImages:[T,S,X,H,V,$,A,F,N,O],actor:o[m],isMobile:I.isMobile(),filterParams:e}}},w={class:"bottom-blank"},z={class:"container"},E=["src"],R=["href"],Y={class:"container"},Z={class:"games"};function j(s,o,m,e,t,G){const u=c("Header"),b=c("PCTable"),p=c("MobileTable");return r(),l("div",w,[v(u),a("div",z,[a("div",{class:B(s.isMobile==!1?"pc":"mobile")},[a("img",{src:s.actorImages[s.route.params.actorId-1],class:"actor"},null,8,E),o[3]||(o[3]=a("br",null,null,-1)),o[4]||(o[4]=a("br",null,null,-1)),a("table",null,[a("thead",null,[a("tr",null,[o[0]||(o[0]=a("th",{class:"pale"},"名前",-1)),a("td",null,n(s.actor.name),1)]),a("tr",null,[o[1]||(o[1]=a("th",{class:"pale"},"リンク",-1)),a("td",null,[a("ul",null,[(r(!0),l(h,null,y(s.actor.urls,(i,g)=>(r(),l("li",{key:"actor-"+s.actor.name+"-url-"+g},[a("a",{href:i,target:"_blank",class:"url"},n(i),9,R)]))),128))])])]),a("tr",null,[o[2]||(o[2]=a("th",{class:"pale"},"コメント",-1)),a("td",null,n(s.actor.comment),1)])])])],2)]),o[5]||(o[5]=a("br",null,null,-1)),a("div",Y,[a("div",Z,[s.isMobile==!1?(r(),d(b,{key:0,filterParams:s.filterParams},null,8,["filterParams"])):(r(),d(p,{key:1,filterParams:s.filterParams},null,8,["filterParams"]))])])])}const J=C(q,[["render",j],["__scopeId","data-v-42d660ef"]]);export{J as default};