(self["webpackChunkcomoradb"]=self["webpackChunkcomoradb"]||[]).push([[70],{2922:function(t,a,r){"use strict";r.r(a),r.d(a,{default:function(){return d}});var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-blank"},[e("Header"),e("div",{staticClass:"container"},[e("div",{class:0==t.isMobile?"pc":"mobile"},[e("img",{staticClass:"actor",attrs:{src:r(9118)("./actor_"+this.$route.params.actorId+".png")}}),e("br"),e("br"),e("table",[e("thead",[e("tr",[e("th",{staticClass:"pale"},[t._v("名前")]),e("td",[t._v(t._s(t.actor.name))])]),e("tr",[e("th",{staticClass:"pale"},[t._v("リンク")]),e("td",[e("ul",t._l(t.actor.urls,(function(a,r){return e("li",{key:"actor-"+t.actor.name+"-url-"+r},[e("a",{staticClass:"url",attrs:{href:a,target:"_blank"}},[t._v(" "+t._s(a)+" ")])])})),0)])]),e("tr",[e("th",{staticClass:"pale"},[t._v("コメント")]),e("td",[t._v(t._s(t.actor.comment))])])])])])]),e("br"),e("div",{staticClass:"container"},[e("div",{staticClass:"games"},[0==t.isMobile?e("PCTable",{attrs:{filterParams:t.filterParams}}):e("MobileTable",{attrs:{filterParams:t.filterParams}})],1)])],1)},s=[],c=r(1294),o=r(2208),i=r(4790),n=r(8661),l=r(787),u=r(6633),p={name:"ActorShow",components:{Header:c.Z,PCTable:o.Z,MobileTable:i.Z},data:function(){let t=l.Z.getActorsData(),a=Object.keys(t).find((t=>t==this.$route.params.actorId)),r=u.Z.getInitialFilterParams();return r.actors.forEach((t=>{t.id==this.$route.params.actorId&&(t.check=!0)})),{actor:t[a],isMobile:n.Z.isMobile(),filterParams:r}}},f=p,m=r(1001),_=(0,m.Z)(f,e,s,!1,null,"e180f74a",null),d=_.exports},9118:function(t,a,r){var e={"./actor_1.png":1726,"./actor_2.png":393,"./actor_3.png":2956,"./actor_4.png":6405,"./actor_5.png":7113,"./actor_6.png":3932,"./actor_7.png":3891};function s(t){var a=c(t);return r(a)}function c(t){if(!r.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}s.keys=function(){return Object.keys(e)},s.resolve=c,t.exports=s,s.id=9118},1726:function(t,a,r){"use strict";t.exports=r.p+"img/actor_1.1cea675a.png"},393:function(t,a,r){"use strict";t.exports=r.p+"img/actor_2.5cce7c15.png"},2956:function(t,a,r){"use strict";t.exports=r.p+"img/actor_3.0d1ce269.png"},6405:function(t,a,r){"use strict";t.exports=r.p+"img/actor_4.59000347.png"},7113:function(t,a,r){"use strict";t.exports=r.p+"img/actor_5.a35ca4eb.png"},3932:function(t,a,r){"use strict";t.exports=r.p+"img/actor_6.ea09e218.png"},3891:function(t,a,r){"use strict";t.exports=r.p+"img/actor_7.15c45d40.png"}}]);