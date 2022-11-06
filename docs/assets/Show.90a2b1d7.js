import{H as h,c as f}from"./Common.ece0a3ce.js";import{P as I,M as P,t as v}from"./MobileTable.1504c670.js";import{bq as k,bv as y,bu as M,aG as l,ay as t,W as n,a2 as S,X as a,A as T,D as i,I as B,aE as C,U as _,aB as w,az as D}from"./index.760459ba.js";const H="/comoradb/assets/actor_1.a1db2bc8.png",$="/comoradb/assets/actor_2.12d6518e.png",A="/comoradb/assets/actor_3.50730c16.png",E="/comoradb/assets/actor_4.8beec490.png",z="/comoradb/assets/actor_5.6bcb5143.png",F="/comoradb/assets/actor_6.b9c6cd8b.png",N="/comoradb/assets/actor_7.518a816b.png",V="/comoradb/assets/actor_8.3e2ba90c.png";const j={name:"ActorShow",components:{Header:h,PCTable:I,MobileTable:P},data:function(){let e=y(),r=M.getActorsData(),d=Object.keys(r).find(o=>o==e.params.actorId),c=v.getInitialFilterParams();return c.actors.forEach(o=>{o.id==e.params.actorId&&(o.check=!0)}),{route:e,actorImages:[H,$,A,E,z,F,N,V],actor:r[d],isMobile:f.isMobile(),filterParams:c}}},s=e=>(w("data-v-b19a4e2e"),e=e(),D(),e),q={class:"bottom-blank"},G={class:"container"},L=["src"],O=s(()=>a("br",null,null,-1)),R=s(()=>a("br",null,null,-1)),U=s(()=>a("th",{class:"pale"},"\u540D\u524D",-1)),W=s(()=>a("th",{class:"pale"},"\u30EA\u30F3\u30AF",-1)),X=["href"],J=s(()=>a("th",{class:"pale"},"\u30B3\u30E1\u30F3\u30C8",-1)),K=s(()=>a("br",null,null,-1)),Q={class:"container"},Y={class:"games"};function Z(e,r,d,c,o,x){const b=l("Header"),u=l("PCTable"),p=l("MobileTable");return t(),n("div",q,[S(b),a("div",G,[a("div",{class:T(e.isMobile==!1?"pc":"mobile")},[a("img",{src:e.actorImages[e.route.params.actorId-1],class:"actor"},null,8,L),O,R,a("table",null,[a("thead",null,[a("tr",null,[U,a("td",null,i(e.actor.name),1)]),a("tr",null,[W,a("td",null,[a("ul",null,[(t(!0),n(B,null,C(e.actor.urls,(m,g)=>(t(),n("li",{key:"actor-"+e.actor.name+"-url-"+g},[a("a",{href:m,target:"_blank",class:"url"},i(m),9,X)]))),128))])])]),a("tr",null,[J,a("td",null,i(e.actor.comment),1)])])])],2)]),K,a("div",Q,[a("div",Y,[e.isMobile==!1?(t(),_(u,{key:0,filterParams:e.filterParams},null,8,["filterParams"])):(t(),_(p,{key:1,filterParams:e.filterParams},null,8,["filterParams"]))])])])}const oa=k(j,[["render",Z],["__scopeId","data-v-b19a4e2e"]]);export{oa as default};