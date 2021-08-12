(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{222:function(t,e,n){"use strict";var r=n(1),o=n(99);r.a.use(o.a),e.a=function(t){var e=new o.a({customVariables:["~/assets/variables.scss"],theme:{dark:!1,themes:{dark:{primary:"#00A756",accent:"#000000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#9D0000",default:"#354141",milky:"#01242F",dlue:"#1520A6"},light:{primary:"#2e4050",accent:"#000000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#FF0000",default:"#FFFFFF",milky:"#FDFFF5",teal:"#00897B",whitish:"F5F5F5",dlue:"#1520A6"}}}});t.app.vuetify=e,t.$vuetify=e.framework}},223:function(t,e,n){"use strict";var r=n(163),o=n.n(r);n(385),n(387),n(388),n(390),n(391),n(393),n(394),n(396),n(397),n(398),n(399);o.a.languages.vue=o.a.languages.markup,e.a=o.a},224:function(t,e,n){"use strict";var r=n(1),o=n(291),c=n(292),l=n(293),f=n(294),d=n(283),m=n(295),v=n(296),h=n(297),x=n(298);r.a.mixin({components:{"c-image":o.default,VTags:c.default,VNav:l.default,"v-pages":f.default,"blog-page":d.default,"v-author":m.default,"prev-next":v.default,icon:h.default,rimg:x.default},data:function(){return{}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},computed:{isMdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp},domain:function(){return"localhost"===window.location.hostname},locales:function(){return this._i18n.locales},locale:function(){return this._i18n.localeProperties}}})},260:function(t,e,n){var content=n(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7388ab72",content,!0,{sourceMap:!1})},279:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("5d0e0f92",content,!0,{sourceMap:!1})},281:function(t,e,n){n(6),n(5),n(9),n(12),n(7),n(13),n(38),n(18),n(27),n(44),n(29),n(40),n(51),n(32);var r=n(521),o=n(306),c=n(524);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}n(23),n(26),n(52),n(132),n(73),n(50),n(89);var v={workboxURL:"https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.4/workbox/workbox-sw.js",importScripts:[],config:{debug:!1},cacheOptions:{cacheId:"docs-prod",directoryIndex:"/",revision:"aZq2EH0AMy2J"},clientsClaim:!0,skipWaiting:!0,cleanupOutdatedCaches:!0,offlineAnalytics:!1,preCaching:[{revision:"aZq2EH0AMy2J",url:"/docs/?standalone=true"}],runtimeCaching:[{urlPattern:"/docs/assets/",handler:"CacheFirst",method:"GET",strategyPlugins:[]},{urlPattern:"/docs/",handler:"NetworkFirst",method:"GET",strategyPlugins:[]}],offlinePage:null,pagesURLPattern:"/docs/",offlineStrategy:"NetworkFirst"};importScripts.apply(void 0,[v.workboxURL].concat(c(v.importScripts))),function(t,e){e.config&&t.setConfig(e.config);e.cacheNames&&t.core.setCacheNameDetails(e.cacheNames);e.clientsClaim&&t.core.clientsClaim();e.skipWaiting&&t.core.skipWaiting();e.cleanupOutdatedCaches&&t.precaching.cleanupOutdatedCaches();e.offlineAnalytics&&t.googleAnalytics.initialize()}(workbox,v),workbox,function(t,e){e.preCaching.length&&t.precaching.precacheAndRoute(e.preCaching,e.cacheOptions)}(workbox,v),workbox,function(t,e){var n,o={requestWillFetch:function(t){var e=t.request;return"only-if-cached"===e.cache&&"no-cors"===e.mode?new Request(e.url,m(m({},e),{},{cache:"default",mode:"no-cors"})):e},fetchDidFail:function(t){t.error.message="[workbox] Network request for "+t.request.url+" threw an error: "+t.error.message,console.error(t.error,"Details:",t)},handlerDidError:function(t){return t.error.message="[workbox] Network handler threw an error: "+t.error.message,console.error(t.error,"Details:",t),null}},f=l(e.runtimeCaching);try{for(f.s();!(n=f.n()).done;){var d=n.value,v=new RegExp(d.urlPattern),h=d.method||"GET",x=(d.strategyPlugins||[]).map((function(p){return r((e=t,p.use.split(".").reduce((function(p,t){return p[t]}),e)),c(p.config));var e}));x.unshift(o);var _=m(m({},d.strategyOptions),{},{plugins:x}),y=new t.strategies[d.handler](_);t.routing.registerRoute(v,y,h)}}catch(t){f.e(t)}finally{f.f()}}(workbox,v),function(t,e){e.offlinePage&&t.routing.registerRoute(new RegExp(e.pagesURLPattern),(function(n){var r=n.request,o=n.event;return(new t.strategies[e.offlineStrategy]).handle({request:r,event:o}).catch((function(){return caches.match(e.offlinePage)}))}))}(workbox,v),workbox},283:function(t,e,n){"use strict";n.r(e);n(5),n(40);var r={props:["pages","post","prev","next"],components:{SheetFooter:{functional:!0,render:function(t,e){return t("v-sheet",{staticClass:"d-flex flex-row align-self-stretch",props:{color:"grey lighten-2",dark:!0,height:50}},e.children)}}},data:function(){return{clipped:!1,drawer:!1,fixed:!1,mini:!0,miniVariant:!1,right:!0,rightDrawer:!1,title:"Ospic"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.description}]}}},o=n(21),c=n(35),l=n.n(c),f=n(556),d=n(550),m=n(212),v=n(301),h=n(551),x=n(545),_=n(211),y=n(213),w=n(126),k=n(554),C=n(555),j=n(552),A=n(64),M=n(553),O=n(288),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white lighten-3 ma-0 pa-0",attrs:{fluid:""}},[n("v-app-bar",{staticClass:"white ma-0 pa-0",attrs:{flat:"",fixed:"",app:""}},[n("v-row",[n("v-col",{attrs:{sm:"1"}}),t._v(" "),n("v-col",{attrs:{sm:"10"}},[n("v-app-bar",{staticClass:"white",attrs:{flat:""}},[n("nuxt-link",{attrs:{to:"/welcome"}},[t.$vuetify.breakpoint.mdAndUp?n("v-toolbar-title",{staticClass:"mx-0 primary--text plain-link"},[t._v(t._s(t.$t("apptitle")))]):t._e()],1),t._v(" "),t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"primary accent-2 white--text",attrs:{medium:"",rounded:"",outlined:"",dark:"",color:"white",href:"https://opencollective.com/ospic",target:"_blank"}},[n("v-icon",[t._v("mdi-heart-outline")]),t._v(" \n     Sponsor")],1),t._v("  \n    "),t._v(" "),n("AppSearchInput"),t._v(" "),t.isMdAndUp?n("h5",{staticClass:"primary--text"},[t._v("Language:")]):t._e(),t._v(" "),t.isMdAndUp?n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticStyle:{"text-transform":"none"},attrs:{text:"",color:"primary",small:""}},"v-btn",o,!1),r),[t._v("\n            "+t._s(t.locale.name)+" "),n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-menu-down")])],1)]}}],null,!1,1566183269)},[t._v(" "),n("v-list",t._l(t.locales,(function(e,r){return n("v-list-item",{key:r},[n("nuxt-link",{staticClass:"primary--text",attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),1)],1)],1):t._e(),t._v(" "),n("a",{attrs:{href:"https://github.com/ospic/docs",target:"_blank"}},[n("v-btn",{attrs:{text:"",fab:"","x-small":"",target:"_blank"}},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-github")])],1)],1),t._v(" "),n("a",{attrs:{href:"https://app.ospicx.com/",target:"_blank"}},[n("v-btn",{attrs:{text:"",fab:"","x-small":""}},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-web")])],1)],1),t._v(" "),t.isMdAndUp?t._e():n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1),t._v(" "),n("v-col",{attrs:{sm:"1"}})],1)],1),t._v(" "),t.isMdAndUp?t._e():n("v-navigation-drawer",{staticClass:"pa-3",attrs:{"mini-variant.sync":"mini","overlay-color":"primary",app:"",right:"",height:"100%"},scopedSlots:t._u([{key:"append",fn:function(){return[n("h5",[t._v(t._s(t.$t("selectlanguage")))]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticStyle:{"text-transform":"none"},attrs:{text:"",color:"primary",small:"",block:""}},"v-btn",o,!1),r),[t._v("\n              "+t._s(t.locale.name)+" "),n("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!1,2235333447)},[t._v(" "),n("v-list",{attrs:{dense:""}},t._l(t.locales,(function(e,r){return n("v-list-item",{key:r,attrs:{dense:""}},[n("nuxt-link",{staticClass:"primary--text",attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),1)],1)],1)]},proxy:!0}],null,!1,3088080770),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("h2",{staticClass:"ml-2"},[t._v("Pages")]),t._v(" "),n("v-pages",{attrs:{pages:t.pages}})],1),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("v-row",[t.$vuetify.breakpoint.smAndUp?n("v-col",{attrs:{cols:"12",sm:1}}):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",lg:"10",md:"12"}},[n("v-row",[t.$vuetify.breakpoint.smAndUp?n("v-col",{attrs:{cols:"12",sm:(t.$vuetify.breakpoint.smOnly,"2")}},[n("v-pages",{attrs:{pages:t.pages}})],1):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",sm:t.post.toc.length>0?"7":"10"}},[n("v-sheet",{attrs:{tile:""}},[n("div",{staticClass:"pt-4"},[n("div",{staticClass:"post-header"},[n("h1",{staticClass:"h1 post-h1"},[t._v(t._s(t.post.title))]),t._v(" "),t.post.description?n("p",{staticClass:"excerpt"},[t._v("\n                "+t._s(t.post.description)+"\n              ")]):t._e(),t._v(" "),n("div",{staticClass:"post-tags d-flex justify-space-between"},[n("v-tags",{attrs:{tags:t.post.tags}}),t._v("\n                Last updated: "+t._s(t.formatDate(t.post.updatedAt))+"\n              ")],1)]),t._v(" "),t.post.image?n("c-image",{attrs:{src:t.post.image,alt:"Header image"}}):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.post}}),t._v(" "),t.post.author?n("v-author",{attrs:{author:t.post.author}}):t._e()],1),t._v(" "),n("sheet-footer",[n("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)],1)],1),t._v(" "),t.post.toc.length>0&&t.isMdAndUp?n("v-col",{attrs:{cols:"12",sm:"3"}},[n("v-sheet",{attrs:{rounded:"lg","min-height":"268"}},[n("v-nav",{attrs:{post:t.post}})],1)],1):t._e()],1)],1),t._v(" "),t.$vuetify.breakpoint.smAndUp?n("v-col",{attrs:{cols:"12",sm:1}}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{AppSearchInput:function(){return Promise.all([n.e(11),n.e(2)]).then(n.bind(null,594)).then((function(t){return t.default||t}))},VPages:function(){return Promise.resolve().then(n.bind(null,294)).then((function(t){return t.default||t}))},VTags:function(){return Promise.resolve().then(n.bind(null,292)).then((function(t){return t.default||t}))},PrevNext:function(){return Promise.resolve().then(n.bind(null,296)).then((function(t){return t.default||t}))},VNav:function(){return Promise.resolve().then(n.bind(null,293)).then((function(t){return t.default||t}))}}),l()(component,{VAppBar:f.a,VAppBarNavIcon:d.a,VAvatar:m.a,VBtn:v.a,VCol:h.a,VContainer:x.a,VIcon:_.a,VList:y.a,VListItem:w.a,VMenu:k.a,VNavigationDrawer:C.a,VRow:j.a,VSheet:A.a,VSpacer:M.a,VToolbarTitle:O.a})},290:function(t,e,n){"use strict";var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"Ospic"}},computed:{domain:function(){return"localhost"===window.location.hostname}}},o=n(21),c=n(35),l=n.n(c),f=n(544),d=n(545),m=n(547),v=n(548),h=n(546),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app grey lighten-3 ",attrs:{oncontextmenu:t.domain?"return true":"return false",fluid:""}},[n("v-main",[n("v-container",{attrs:{fluid:""}},[n("nuxt")],1)],1),t._v(" "),n("v-footer",{staticClass:"primary",attrs:{fixed:"",absolute:!t.$vuetify.breakpoint.mdAndUp,padless:"",app:""}},[n("v-flex",{staticClass:"d-flex align-center justify-end  flex-column",attrs:{xs12:""}},[n("div",{staticClass:"white--text ml-3"},[t._v("\n        Made by\n        "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://github.com/ospic",target:"_blank"}},[t._v("Ospic\n        ")]),t._v("\n        as official documentation for\n        "),n("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://app.ospicx.com/",target:"_blank"}},[t._v("Ospic HMS")])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a,VContainer:d.a,VFlex:m.a,VFooter:v.a,VMain:h.a})},291:function(t,e,n){"use strict";n.r(e);var r={props:{src:{type:String,required:!0},alt:{type:String,required:!0,default:"Image"}},methods:{imgSrc:function(){try{this.$parent.post;return n(400)("./".concat(this.src))}catch(t){return null}}}},o=(n(466),n(21)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image"},[n("img",{attrs:{src:t.imgSrc(),alt:t.alt}})])}),[],!1,null,"3a6ff40e",null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);var r={props:{tags:{type:Array,default:function(){return[]}}}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"tags"},t._l(t.tags,(function(e){return n("span",{key:e,staticClass:"tag"},[n("nuxt-link",{staticClass:"link  lighten-2",attrs:{to:"/tags/"+e}},[t._v(t._s(e))]),t._v(" \n  ")],1)})),0)}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,n){"use strict";n.r(e);var r={props:{post:{type:Object,default:null}}},o=n(21),c=n(35),l=n.n(c),f=n(549),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("p",{staticClass:"primary--text text-center lighten-2 text-uppercase font-weight-bold"},[t._v(" On this page")]),t._v(" "),n("v-divider"),t._v(" "),n("ul",t._l(t.post.toc,(function(link){return n("li",{key:link.id,class:{"py-2":2===link.depth,"ml-2 pb-1":3===link.depth},style:2===link.depth?"list-style-type: disc;":"list-style-type: circle;"},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))]),t._v(" "),2===link.depth?n("hr",{staticClass:"dashed"}):t._e()],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VDivider:f.a})},294:function(t,e,n){"use strict";n.r(e);var r={props:{pages:{type:Array,default:null}}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",t._l(t.pages,(function(e){return n("li",{key:e.slug,staticClass:"pa-2 font-weight-bold",staticStyle:{"list-style-type":"none"}},[n("NuxtLink",{attrs:{to:e.slug}},[t._v(t._s(e.title))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);var r={props:{author:{type:Object,default:function(){return null}}},data:function(){return{item:{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1">4</span>',subtitle:'<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.'}}}},o=n(21),c=n(35),l=n.n(c),f=n(533),d=n(162),m=n(126),v=n(215),h=n(75),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:" ma-2 pa-3",attrs:{dense:"",to:"/author/"+t.author.name,width:"400",outlined:"",flat:""}},[n("v-list-item",{key:t.item.title,attrs:{dense:""}},[n("v-list-item-avatar",{attrs:{size:"52",color:"primary"}},[n("v-img",{attrs:{src:t.author.image,alt:"Author"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(t.author.name)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.author.bio)}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:function(){return Promise.resolve().then(n.bind(null,291)).then((function(t){return t.default||t}))}}),l()(component,{VCard:f.a,VImg:d.a,VListItem:m.a,VListItemAvatar:v.a,VListItemContent:h.a,VListItemSubtitle:h.b,VListItemTitle:h.c})},296:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=n(21),c=n(35),l=n.n(c),f=n(551),d=n(211),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"white d-flex align-center justify-space-between flex-grow-1 "},[n("v-col",{attrs:{md:"4"}},[t.prev?n("NuxtLink",{staticClass:"text-primary font-weight-bold hover:underline",attrs:{to:t.prev.slug}},[n("v-icon",{staticClass:"mb-1",attrs:{color:"primary","x-small":""}},[t._v("mdi-arrow-left")]),t._v(" "+t._s(t.prev.title)+" \n    ")],1):t._e()],1),t._v(" "),n("v-col",{attrs:{md:"4"}},[n("a",{attrs:{href:"https://app.ospicx.com/",target:"_blank"}},[t._v("Edit this page on Github !")])]),t._v(" "),n("v-col",{staticClass:"d-flex flex-row-reverse ",attrs:{md:"4"}},[t.next?n("NuxtLink",{staticClass:" mt-auto font-weight-bold hover:underline",attrs:{"prepend-icon":"mdi-chevron-right",to:t.next.slug}},[t._v("\n      "+t._s(t.next.title)+" "),n("v-icon",{staticClass:"mb-1",attrs:{color:"primary","x-small":""}},[t._v("mdi-arrow-right")])],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VIcon:d.a})},297:function(t,e,n){"use strict";n.r(e);var r={props:{icon:{type:String,required:!0}}},o=n(21),c=n(35),l=n.n(c),f=n(301),d=n(211),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"primary ma-0 pa-0 mb-1",attrs:{elevation:"0","x-small":"",fab:""}},[n("v-icon",{staticClass:"icon",attrs:{small:"",color:"white"}},[t._v("mdi-"+t._s(t.icon))])],1)}),[],!1,null,"18149688",null);e.default=component.exports;l()(component,{VBtn:f.a,VIcon:d.a})},298:function(t,e,n){"use strict";n.r(e);var r={props:{src:{type:String,required:!0},alt:{type:String,required:!0,default:"Image"}},methods:{imgSrc:function(){try{this.$parent.post;return n(510)("./".concat(this.src))}catch(t){return null}}}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"round"},[n("img",{attrs:{src:t.imgSrc(),alt:t.alt}})])}),[],!1,null,null,null);e.default=component.exports},299:function(t,e,n){"use strict";var r=n(21),o=n(35),c=n.n(o),l=n(545),f=n(546),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-main",{staticClass:"ma-0 pa-0 "},[e("v-container",{staticClass:" ma-0 pa-0",attrs:{fluid:""}},[e("nuxt",{staticClass:" ma-0 pa-0"})],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VContainer:l.a,VMain:f.a})},300:function(t,e,n){"use strict";var r=n(21),o=n(35),c=n.n(o),l=n(544),f=n(545),d=n(546),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("v-main",{staticClass:"ma-0 pa-0 "},[e("v-container",{staticClass:" ma-0 pa-0",attrs:{fluid:""}},[e("nuxt",{staticClass:" ma-0 pa-0"})],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:l.a,VContainer:f.a,VMain:d.a})},308:function(t,e,n){n(309),t.exports=n(310)},337:function(t,e,n){"use strict";n(260)},338:function(t,e,n){var r=n(14)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},343:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("bc32c83c",content,!0,{sourceMap:!1})},344:function(t,e,n){var r=n(14),o=n(345),c=n(346),l=n(347),f=n(348),d=n(349),m=n(350),v=r(!1),h=o(c),x=o(l),_=o(f),y=o(d),w=o(m);v.push([t.i,'@font-face{font-family:"WolfFont";font-style:normal;font-weight:400;src:local("WolfFont"),url('+h+') format("woff2")}@font-face{font-family:"CodeFont";font-style:normal;font-weight:400;src:local("CodeFont"),url('+x+') format("woff2")}@font-face{font-family:"ActorV10";font-style:normal;font-weight:400;src:local("ActorV10"),url('+_+') format("woff2")}@font-face{font-family:"QuickSand";font-style:normal;src:local("QuickSand"),url('+y+')}#__nuxt .app{font-family:"QuickSand";color:#37474f;font-size:14px}#__nuxt .app h1,#__nuxt .app h2,#__nuxt .app h3,#__nuxt .app h4{color:#263238}.v-footer span{align-items:center;vertical-align:middle;line-height:90%}p>code{font-family:"CodeFont";color:#00f;font-weight:700}body{background-color:#eee;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;zoom:82%}.post-tags{background-color:#fff;padding-left:5px;padding-right:5px}.tag{box-shadow:-8px 15px 26px -14px #3dc21b}.tag a{background-color:#00a756;border-radius:4px;display:inline-block;cursor:pointer;margin-left:5px;font-size:12px;padding:1px 9px;-webkit-text-decoration-color:#fff;text-decoration-color:#fff;color:#fff}.tag a.link,.tag a.link.nuxt-link-exact-active.nuxt-link-active{color:#fff;text-decoration:none}.image img{background-color:#d1caca;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border:4px solid #d1caca;margin:15px 0 10px}.image.post-image{height:200px;width:200px;-o-object-fit:fill;object-fit:fill;border-radius:50%}.round img{width:50px;border-radius:50%;-o-object-fit:cover;object-fit:cover}a,a.v-card{text-decoration:none}a.v-card:hover,a:hover{text-decoration:underline}.icon.icon-link{background-image:url('+w+');display:none;width:20px;height:20px;background-size:20px 20px}strong{color:#006400}strong.button{box-shadow:0 0 0 0 #00a756;background:linear-gradient(180deg,#00a756 5%,#00a756);background-color:#00a756;border-radius:5px;display:inline-block;cursor:pointer;color:#fff;font-family:"WolfFont";font-size:11px;font-weight:700;padding:5px 12px;text-decoration:none;text-transform:uppercase}strong.button:hover{background:linear-gradient(180deg,#00a756 5%,#00a756);background-color:#04703c}strong.button:active{position:relative;top:1px}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.sheet .nuxt-content-container,.sheet .post-header{padding:20px}.markdown table{width:100%}hr{position:relative;top:10px;height:12px;background:transparent;margin-bottom:40px;border:none;border-top:1px solid #e5e2e2}hr.dotted{border:2px grey;border-bottom:2px dotted grey}hr.dashed,hr.dotted{top:0;margin-bottom:0;color:#fff;background-color:#fff}hr.dashed{border:.1px #4caf50;border-style:none none dashed;margin-top:7px;padding-bottom:7px}hr.v-divider{top:0;margin-bottom:0}.nuxt-content-container .nuxt-content h3{margin-top:16px}.nuxt-content-container .nuxt-content ul{width:90%;background-color:#efefef;margin:1%;padding-top:1%;padding-bottom:1%}.nuxt-content-container .nuxt-content ul code{background-color:transparent}',""]),t.exports=v},346:function(t,e,n){t.exports=n.p+"fonts/content.9566aaa.woff2"},347:function(t,e,n){t.exports=n.p+"fonts/content-a.4b50ddc.woff2"},348:function(t,e,n){t.exports=n.p+"fonts/actor-v10-latin-regular.545137d.woff2"},349:function(t,e,n){t.exports=n.p+"fonts/quicksand_medium.eb896a7.ttf"},350:function(t,e,n){t.exports=n.p+"img/link_variant.103f2fa.svg"},400:function(t,e,n){var map={"./add_measure_unit.png":401,"./admission-info.png":402,"./admission-visits.png":403,"./assign_staff.png":404,"./assigned-consultation.png":405,"./authentication_screen.png":406,"./beds.png":407,"./bills.png":408,"./blood_bank.png":409,"./categories.png":410,"./concultations.png":411,"./consultation.png":412,"./consultation_consts.png":413,"./consultations_chart.png":414,"./create-patient.png":415,"./create-self-service.png":416,"./create_service.png":417,"./create_user.png":418,"./create_ward.png":419,"./createdepartment.png":420,"./createrole.png":421,"./createuser.png":422,"./dashboard.png":423,"./delete_user.png":424,"./departments.png":425,"./diagnoses-list.png":426,"./diagnosis_form.png":427,"./drawer_button.png":428,"./edit-contact.png":429,"./finance_dashboard.png":430,"./laboratory_reports.png":431,"./md_service.png":432,"./medicines.png":433,"./medicines_tab.png":434,"./outstanding-bill.png":435,"./paid-bill.png":436,"./patients.png":437,"./paybill.png":438,"./pharmacy.png":439,"./profile-image-upload.png":440,"./profile.png":441,"./receipt.png":442,"./registration_frequency.png":443,"./report_print.png":444,"./reports.png":445,"./roles.png":446,"./selfservice-users.png":447,"./service-tab.png":448,"./staffs.png":449,"./statistical_pie_chart.png":450,"./tool_bar.png":451,"./totals.png":452,"./transaction.png":453,"./un-assigned-consultation.png":454,"./units.png":455,"./update_blood_bank.png":456,"./update_medicine.png":457,"./users.png":458,"./view-contact.png":459,"./view_admission.png":460,"./view_occupied_bed.png":461,"./view_report.png":462,"./view_ward.png":463,"./viewdepartment.png":464,"./wards_list.png":465};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=400},401:function(t,e,n){t.exports=n.p+"img/add_measure_unit.2139b58.png"},402:function(t,e,n){t.exports=n.p+"img/admission-info.2229143.png"},403:function(t,e,n){t.exports=n.p+"img/admission-visits.068cc86.png"},404:function(t,e,n){t.exports=n.p+"img/assign_staff.d078163.png"},405:function(t,e,n){t.exports=n.p+"img/assigned-consultation.74b8ac6.png"},406:function(t,e,n){t.exports=n.p+"img/authentication_screen.25f4a2d.png"},407:function(t,e,n){t.exports=n.p+"img/beds.9ac3f3a.png"},408:function(t,e,n){t.exports=n.p+"img/bills.c0d247a.png"},409:function(t,e,n){t.exports=n.p+"img/blood_bank.43cae99.png"},410:function(t,e,n){t.exports=n.p+"img/categories.cb9f1ea.png"},411:function(t,e,n){t.exports=n.p+"img/concultations.c572631.png"},412:function(t,e,n){t.exports=n.p+"img/consultation.59588ec.png"},413:function(t,e,n){t.exports=n.p+"img/consultation_consts.b3bf23d.png"},414:function(t,e,n){t.exports=n.p+"img/consultations_chart.dec2286.png"},415:function(t,e,n){t.exports=n.p+"img/create-patient.a956fbc.png"},416:function(t,e,n){t.exports=n.p+"img/create-self-service.964415c.png"},417:function(t,e,n){t.exports=n.p+"img/create_service.489a69e.png"},418:function(t,e,n){t.exports=n.p+"img/create_user.f48857e.png"},419:function(t,e,n){t.exports=n.p+"img/create_ward.9e81330.png"},420:function(t,e,n){t.exports=n.p+"img/createdepartment.15c7747.png"},421:function(t,e,n){t.exports=n.p+"img/createrole.c082904.png"},422:function(t,e,n){t.exports=n.p+"img/createuser.17cb2d2.png"},423:function(t,e,n){t.exports=n.p+"img/dashboard.3ba55dd.png"},424:function(t,e,n){t.exports=n.p+"img/delete_user.8115455.png"},425:function(t,e,n){t.exports=n.p+"img/departments.ef01a95.png"},426:function(t,e,n){t.exports=n.p+"img/diagnoses-list.50b71b1.png"},427:function(t,e,n){t.exports=n.p+"img/diagnosis_form.f377689.png"},428:function(t,e,n){t.exports=n.p+"img/drawer_button.5d22199.png"},429:function(t,e,n){t.exports=n.p+"img/edit-contact.4f9abe4.png"},430:function(t,e,n){t.exports=n.p+"img/finance_dashboard.0febfb1.png"},431:function(t,e,n){t.exports=n.p+"img/laboratory_reports.c14755e.png"},432:function(t,e,n){t.exports=n.p+"img/md_service.061d454.png"},433:function(t,e,n){t.exports=n.p+"img/medicines.bda421a.png"},434:function(t,e,n){t.exports=n.p+"img/medicines_tab.4f3c133.png"},435:function(t,e,n){t.exports=n.p+"img/outstanding-bill.ca9fb9c.png"},436:function(t,e,n){t.exports=n.p+"img/paid-bill.8ba3332.png"},437:function(t,e,n){t.exports=n.p+"img/patients.ffa85c6.png"},438:function(t,e,n){t.exports=n.p+"img/paybill.06b09c4.png"},439:function(t,e,n){t.exports=n.p+"img/pharmacy.82434bf.png"},440:function(t,e,n){t.exports=n.p+"img/profile-image-upload.2bcb188.png"},441:function(t,e,n){t.exports=n.p+"img/profile.55594f2.png"},442:function(t,e,n){t.exports=n.p+"img/receipt.24a8993.png"},443:function(t,e,n){t.exports=n.p+"img/registration_frequency.af3fa20.png"},444:function(t,e,n){t.exports=n.p+"img/report_print.2c703bc.png"},445:function(t,e,n){t.exports=n.p+"img/reports.cf7508f.png"},446:function(t,e,n){t.exports=n.p+"img/roles.2718353.png"},447:function(t,e,n){t.exports=n.p+"img/selfservice-users.6f9ca08.png"},448:function(t,e,n){t.exports=n.p+"img/service-tab.751a2e8.png"},449:function(t,e,n){t.exports=n.p+"img/staffs.4ce5109.png"},450:function(t,e,n){t.exports=n.p+"img/statistical_pie_chart.645fc19.png"},451:function(t,e,n){t.exports=n.p+"img/tool_bar.4d0ede5.png"},452:function(t,e,n){t.exports=n.p+"img/totals.e2ce64d.png"},453:function(t,e,n){t.exports=n.p+"img/transaction.d120c33.png"},454:function(t,e,n){t.exports=n.p+"img/un-assigned-consultation.db1ff35.png"},455:function(t,e,n){t.exports=n.p+"img/units.6fb7689.png"},456:function(t,e,n){t.exports=n.p+"img/update_blood_bank.ed5133d.png"},457:function(t,e,n){t.exports=n.p+"img/update_medicine.ffbf759.png"},458:function(t,e,n){t.exports=n.p+"img/users.d451f63.png"},459:function(t,e,n){t.exports=n.p+"img/view-contact.b86e12a.png"},460:function(t,e,n){t.exports=n.p+"img/view_admission.bb0bc8c.png"},461:function(t,e,n){t.exports=n.p+"img/view_occupied_bed.a38ea6f.png"},462:function(t,e,n){t.exports=n.p+"img/view_report.eb3031d.png"},463:function(t,e,n){t.exports=n.p+"img/view_ward.1cda26f.png"},464:function(t,e,n){t.exports=n.p+"img/viewdepartment.ca0c573.png"},465:function(t,e,n){t.exports=n.p+"img/wards_list.8b73829.png"},466:function(t,e,n){"use strict";n(279)},467:function(t,e,n){var r=n(14)(!1);r.push([t.i,".img[data-v-3a6ff40e]{border:0 solid #eee;border-radius:0;padding:0}img[data-v-3a6ff40e]{max-width:100%;width:100%;-o-object-fit:cover;object-fit:cover}",""]),t.exports=r},510:function(t,e,n){var map={"./README.md":511,"./cherry.png":512,"./favicon.ico":513,"./google914a0b4ff7d56312.html":514,"./icon.png":515,"./logo.png":516,"./ospic_logo.png":517,"./preview.png":518,"./sponsor-icon.jpg":519,"./sponsor.jpg":520,"./sw":281,"./sw.js":281,"./v.png":529,"./vuetify-logo.svg":530};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=510},511:function(t,e){throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> # STATIC\n| \n| **This directory is not required, you can delete it if you don't want to use it.**")},512:function(t,e,n){t.exports=n.p+"img/cherry.eacf5a1.png"},513:function(t,e){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},514:function(t,e){throw new Error("Module parse failed: Unexpected token (1:24)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> google-site-verification: google914a0b4ff7d56312.html")},515:function(t,e,n){t.exports=n.p+"img/icon.48b0ae1.png"},516:function(t,e,n){t.exports=n.p+"img/logo.cce8bf9.png"},517:function(t,e,n){t.exports=n.p+"img/ospic_logo.17bb66c.png"},518:function(t,e,n){t.exports=n.p+"img/preview.900c6ec.png"},519:function(t,e,n){t.exports=n.p+"img/sponsor-icon.6829723.jpg"},520:function(t,e,n){t.exports=n.p+"img/sponsor.234e74e.jpg"},529:function(t,e,n){t.exports=n.p+"img/v.134d708.png"},530:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ny41IDEwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxNjk3ZjY7fS5jbHMtMntmaWxsOiM3YmM2ZmY7fS5jbHMtM3tmaWxsOiMxODY3YzA7fS5jbHMtNHtmaWxsOiNhZWRkZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5BcnRib2FyZCA0NjwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0My43NSAwIDIzLjMxIDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNDMuNzUgNjIuNSA0My43NSAxMDAgMCAxNC41OCAyMi45MiAxNC41OCA0My43NSA2Mi41Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSI0My43NSAwIDY0LjE5IDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNjQuNTggMTQuNTggODcuNSAxNC41OCA0My43NSAxMDAgNDMuNzUgNjIuNSA2NC41OCAxNC41OCIvPjwvc3ZnPgo="},92:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(337),n(21)),c=n(35),l=n.n(c),f=n(544),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[308,9,1,10]]]);