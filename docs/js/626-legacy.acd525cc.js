(self["webpackChunkcomoradb"]=self["webpackChunkcomoradb"]||[]).push([[626],{3879:function(t,r,a){"use strict";a.r(r),a.d(r,{default:function(){return d}});var e=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"bottom-blank"},[e("Header"),e("div",{staticClass:"container"},[e("div",{class:0==t.isMobile?"pc":"mobile"},[e("img",{staticClass:"actor",attrs:{src:a(9118)("./actor_"+this.$route.params.actorId+".png")}}),e("br"),e("br"),e("table",[e("thead",[e("tr",[e("th",{staticClass:"pale"},[t._v("名前")]),e("td",[t._v(t._s(t.actor.name))])]),e("tr",[e("th",{staticClass:"pale"},[t._v("リンク")]),e("td",[e("ul",t._l(t.actor.urls,(function(r,a){return e("li",{key:"actor-"+t.actor.name+"-url-"+a},[e("a",{staticClass:"url",attrs:{href:r,target:"_blank"}},[t._v(" "+t._s(r)+" ")])])})),0)])]),e("tr",[e("th",{staticClass:"pale"},[t._v("コメント")]),e("td",[t._v(t._s(t.actor.comment))])])])])])]),e("br"),e("div",{staticClass:"container"},[e("div",{staticClass:"games"},[0==t.isMobile?e("PCTable",{attrs:{filterParams:t.filterParams}}):e("MobileTable",{attrs:{filterParams:t.filterParams}})],1)])],1)},s=[],c=(a(9826),a(1539),a(7941),a(4747),a(2337)),o=a(624),n=a(7121),i=a(3436),l=a(3278),u=a(3670),p={name:"ActorShow",components:{Header:c.Z,PCTable:o.Z,MobileTable:n.Z},data:function(){var t=this,r=l.Z.getActorsData(),a=Object.keys(r).find((function(r){return r==t.$route.params.actorId})),e=u.Z.getInitialFilterParams();return e.actors.forEach((function(r){r.id==t.$route.params.actorId&&(r.check=!0)})),{actor:r[a],isMobile:i.Z.isMobile(),filterParams:e}}},f=p,m=a(1001),_=(0,m.Z)(f,e,s,!1,null,"e180f74a",null),d=_.exports},9118:function(t,r,a){var e={"./actor_1.png":1726,"./actor_2.png":393,"./actor_3.png":2956,"./actor_4.png":6405,"./actor_5.png":7113,"./actor_6.png":3932,"./actor_7.png":3891};function s(t){var r=c(t);return a(r)}function c(t){if(!a.o(e,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e[t]}s.keys=function(){return Object.keys(e)},s.resolve=c,t.exports=s,s.id=9118},1726:function(t,r,a){"use strict";t.exports=a.p+"img/actor_1.1cea675a.png"},393:function(t,r,a){"use strict";t.exports=a.p+"img/actor_2.5cce7c15.png"},2956:function(t,r,a){"use strict";t.exports=a.p+"img/actor_3.0d1ce269.png"},6405:function(t,r,a){"use strict";t.exports=a.p+"img/actor_4.59000347.png"},7113:function(t,r,a){"use strict";t.exports=a.p+"img/actor_5.a35ca4eb.png"},3932:function(t,r,a){"use strict";t.exports=a.p+"img/actor_6.ea09e218.png"},3891:function(t,r,a){"use strict";t.exports=a.p+"img/actor_7.15c45d40.png"}}]);