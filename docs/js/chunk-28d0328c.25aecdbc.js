(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28d0328c"],{"450d":function(t,a,r){t.exports=r.p+"img/actor_6.0c7ba486.png"},"721d":function(t,a,r){},"85b3":function(t,a,r){t.exports=r.p+"img/actor_5.4685620e.png"},"8e48":function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loaded?e("div",{staticClass:"bottom-blank"},[e("Header"),e("div",{staticClass:"container"},[e("div",{class:0==t.isMobile?"actor_pc":"actor_mobile"},[e("img",{staticClass:"actor",attrs:{src:r("b09f")("./actor_"+this.$route.params.actorId+".png")}}),e("br"),e("br"),e("table",[e("thead",[e("tr",[e("th",{staticClass:"pale"},[t._v("名前")]),e("td",[t._v(t._s(t.actor.name))])]),e("tr",[e("th",{staticClass:"pale"},[t._v("リンク")]),e("td",t._l(t.actor.urls,(function(a,r){return e("li",{key:"actor-"+t.actor.name+"-url-"+r},[e("a",{staticClass:"url",attrs:{href:a,target:"_blank"}},[t._v(" "+t._s(a)+" ")])])})),0)]),e("tr",[e("th",{staticClass:"pale"},[t._v("コメント")]),e("td",[t._v(t._s(t.actor.comment))])])])])])]),e("br"),e("div",{staticClass:"container"},[e("div",{staticClass:"games"},[0==t.isMobile?e("GamesPCTable",{attrs:{filterParams:t.filterParams}}):e("GamesMobileTable",{attrs:{filterParams:t.filterParams}})],1)])],1):t._e()},n=[],s=r("1da1"),o=(r("96cf"),r("7db0"),r("b64b"),r("159b"),r("9898")),c=r("2051"),i=r("f703"),l=r("9ddc"),u=r("bd21"),d=r("8334"),f={name:"Actors",components:{Header:o["a"],GamesPCTable:c["a"],GamesMobileTable:i["a"]},data:function(){return{loaded:!1,actor:{},isMobile:l["a"].isMobile(),filterParams:{}}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].getActorsData();case 2:return a=t.sent,r=Object.keys(a).find((function(t){return t==n.$route.params.actorId})),this.actor=a[r],t.next=7,d["a"].getInitialFilterParams();case 7:e=t.sent,e.actors.forEach((function(t){t.id==n.$route.params.actorId&&(t.check=!0)})),this.filterParams=e,this.loaded=!0;case 11:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()},p=f,b=(r("f38b"),r("2877")),m=Object(b["a"])(p,e,n,!1,null,"264195ef",null);a["default"]=m.exports},"965f":function(t,a,r){t.exports=r.p+"img/actor_1.217fd45d.png"},a1bd:function(t,a,r){t.exports=r.p+"img/actor_3.d373e298.png"},a776:function(t,a,r){t.exports=r.p+"img/actor_4.457812ab.png"},b09f:function(t,a,r){var e={"./actor_1.png":"965f","./actor_2.png":"d4f5","./actor_3.png":"a1bd","./actor_4.png":"a776","./actor_5.png":"85b3","./actor_6.png":"450d"};function n(t){var a=s(t);return r(a)}function s(t){if(!r.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}n.keys=function(){return Object.keys(e)},n.resolve=s,t.exports=n,n.id="b09f"},d4f5:function(t,a,r){t.exports=r.p+"img/actor_2.c5331be1.png"},f38b:function(t,a,r){"use strict";r("721d")}}]);