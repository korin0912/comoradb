(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ed99177"],{"0b42":function(t,e,a){var n=a("da84"),r=a("e8b5"),i=a("68ee"),o=a("861d"),s=a("b622"),c=s("species"),u=n.Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===u||r(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"159b":function(t,e,a){var n=a("da84"),r=a("fdbc"),i=a("785a"),o=a("17c2"),s=a("9112"),c=function(t){if(t&&t.forEach!==o)try{s(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in r)r[u]&&c(n[u]&&n[u].prototype);c(i)},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,r=a("a640"),i=r("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,a){var n=a("d039"),r=a("b622"),i=a("2d00"),o=r("species");t.exports=function(t){return i>=51||!n((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"207b":function(t,e,a){},"22e5":function(t,e,a){"use strict";a("655b")},"38b5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("div",{staticClass:"container"},[a("div",{class:0==t.isMobile?"pc":"mobile"},[a("h2",[t._v(t._s(t.movie.name))]),a("table",[a("thead",[a("tr",[a("th",{staticClass:"pale"},[t._v("URL")]),a("td",[a("a",{staticClass:"url",attrs:{href:t.movie.url,target:"_blank"}},[t._v(t._s(t.movie.url))])])]),a("tr",[a("th",{staticClass:"pale"},[t._v("公開日")]),a("td",[t._v(t._s(t.movie.releaseDate))])]),a("tr",[a("th",{staticClass:"pale"},[t._v("出演者")]),a("td",[a("ul",t._l(t.movie.actorIds,(function(e,n){return a("li",{key:"actor-"+n},[a("router-link",{attrs:{to:{name:"ActorShow",params:{actorId:e}}}},[t._v(t._s(t.actorsData[e].name))])],1)})),0)])]),a("tr",[a("th",{staticClass:"pale"},[t._v("雑談")]),a("td",[t.movie.chat?a("i",{staticClass:"icon check"}):t._e()])]),a("tr",[a("th",{staticClass:"pale"},[t._v("コメント")]),a("td",[t._v(t._s(t.movie.comment))])])])]),t.isLocal&&!t.isMobile?a("div",{staticStyle:{height:"21px",margin:"10px 0 10px 0"}},[a("button",{staticClass:"edit",on:{click:function(e){return t.$router.push({name:"MovieEdit",params:{movieId:t.movieId}})}}})]):t._e(),a("div",{staticStyle:{margin:"10px 0 60px 0"}},[a("GameTable",{attrs:{gameIds:t.gameIds}})],1)])])],1)},r=[],i=a("1da1"),o=(a("96cf"),a("159b"),a("9898")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",[t._m(0),a("tbody",t._l(t.games,(function(e,n){return a("tr",{key:"game-"+n},[a("td",{staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"GameShow",params:{gameId:e.id}}}},[t._v(t._s(e.id))])],1),a("td",[t._v(t._s(e.data.name))]),a("td",t._l(e.data.urls,(function(e,n){return a("div",{key:"url-"+n,staticClass:"urlicon"},[a("a",{class:"icon "+t.common.getUrlIconClass(e),attrs:{href:e,target:"_blank"}})])})),0),a("td",t._l(e.data.genreIds,(function(e){return a("span",{key:"genre-"+e,staticClass:"genre"},[t._v(t._s(t.gameGenresData[e]))])})),0)])})),0)])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"dark id"},[t._v("#")]),a("th",{staticClass:"dark name"},[t._v("タイトル")]),a("th",{staticClass:"dark urls"},[t._v("URL")]),a("th",{staticClass:"dark genres"},[t._v("ジャンル")])])])}],u=(a("d81d"),a("9ddc")),d=a("bd21"),l={name:"GameTable",props:["gameIds"],data:function(){var t=d["a"].getGamesData(),e=d["a"].getGameGenresData(),a=this.gameIds.map((function(e){return{id:e,data:t[String(e)]}}));return{games:a,gameGenresData:e,common:u["a"]}}},f=l,m=(a("22e5"),a("2877")),p=Object(m["a"])(f,s,c,!1,null,"113a137c",null),v=p.exports,h={name:"MovieShow",components:{Header:o["a"],GameTable:v},data:function(){var t=!1,e=u["a"].isMobile(),a=this.$route.params.movieId,n=d["a"].getMoviesData(),r=d["a"].getGamesData(),i=d["a"].getActorsData(),o=n[String(a)],s=[];return o.gameIds.forEach((function(t){s.push(t)})),{isLocal:t,isMobile:e,movieId:a,movie:o,gamesData:r,actorsData:i,gameIds:s}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].execute();case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},b=h,w=(a("a6bb"),Object(m["a"])(b,n,r,!1,null,"5d101dd4",null));e["default"]=w.exports},"655b":function(t,e,a){},"65f0":function(t,e,a){var n=a("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},9898:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("a",{attrs:{href:"https://www.youtube.com/channel/UC5fwtXKwDpgboOud4DbjQTg",target:"_blank"}},[n("img",{attrs:{alt:"comoradb logo",src:a("9d64")}})]),n("span",[t._v("『コモラとチャンチョのゲーム部屋』ゲーム一覧")])])}],i={name:"Header"},o=i,s=(a("e094"),a("2877")),c=Object(s["a"])(o,n,r,!1,null,"2b7abbff",null);e["a"]=c.exports},"9d64":function(t,e,a){t.exports=a.p+"img/logo.a6876aeb.png"},"9ddc":function(t,e,a){"use strict";function n(t){return-1!=t.indexOf("store.steampowered.com")?"steam":-1!=t.indexOf("twitter.com")?"twitter":-1!=t.indexOf("www.facebook.com")?"facebook":-1!=t.indexOf("www.youtube.com")?"youtube":-1!=t.indexOf("www.twitch.tv")?"twitch":-1!=t.indexOf("apps.apple.com")?"appstore":-1!=t.indexOf("www.nintendo.co.jp")||-1!=t.indexOf(".nintendo.com")?"nintendo":-1!=t.indexOf("www.ea.com")?"EA":-1!=t.indexOf("www.capcom.co.jp")?"capcom":-1!=t.indexOf(".playstation.com")?"playstation":"home"}function r(){return!(!window.matchMedia||!window.matchMedia("(max-device-width: 640px)").matches)}function i(t){return JSON.parse(JSON.stringify(t))}e["a"]={getUrlIconClass:n,isMobile:r,copyDeep:i}},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},a6bb:function(t,e,a){"use strict";a("207b")},b727:function(t,e,a){var n=a("0366"),r=a("e330"),i=a("44ad"),o=a("7b0b"),s=a("07fa"),c=a("65f0"),u=r([].push),d=function(t){var e=1==t,a=2==t,r=3==t,d=4==t,l=6==t,f=7==t,m=5==t||l;return function(p,v,h,b){for(var w,_,g=o(p),x=i(g),y=n(v,h),k=s(x),C=0,O=b||c,I=e?O(p,k):a||f?O(p,0):void 0;k>C;C++)if((m||C in x)&&(w=x[C],_=y(w,C,g),t))if(e)I[C]=_;else if(_)switch(t){case 3:return!0;case 5:return w;case 6:return C;case 2:u(I,w)}else switch(t){case 4:return!1;case 7:u(I,w)}return l?-1:r||d?d:I}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterReject:d(7)}},c3d6:function(t,e,a){},d81d:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").map,i=a("1dde"),o=i("map");n({target:"Array",proto:!0,forced:!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e094:function(t,e,a){"use strict";a("c3d6")},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);