(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(103).concat([function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(354),n(26)),c=n(36),l=n.n(c),f=n(580),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:f.a})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r={props:{tags:{type:Array,default:function(){return[]}}}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"tags"},t._l(t.tags,(function(e){return n("span",{key:e,staticClass:"tag"},[n("nuxt-link",{staticClass:"link  lighten-2",attrs:{to:"/tags/"+e}},[t._v(t._s(e))]),t._v(" \n  ")],1)})),0)}),[],!1,null,null,null);e.default=component.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r={props:{src:{type:String,required:!0},alt:{type:String,required:!0,default:"Image"}},methods:{imgSrc:function(){try{this.$parent.post;return n(417)("./".concat(this.src))}catch(t){return null}}}},o=(n(487),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image"},[n("img",{attrs:{src:t.imgSrc(),alt:t.alt}})])}),[],!1,null,"3a6ff40e",null);e.default=component.exports},,,,,function(t,e,n){"use strict";n.r(e);var r={props:{post:{type:Object,default:null}}},o=n(26),c=n(36),l=n.n(c),f=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("p",{staticClass:"primary--text text-center lighten-2 text-uppercase font-weight-bold"},[t._v(" On this page")]),t._v(" "),n("v-divider"),t._v(" "),n("ul",t._l(t.post.toc,(function(link){return n("li",{key:link.id,class:{"py-2":2===link.depth,"ml-2 pb-1":3===link.depth},style:2===link.depth?"list-style-type: disc;":"list-style-type: circle;"},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))]),t._v(" "),2===link.depth?n("hr",{staticClass:"dashed"}):t._e()],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VDivider:f.a})},function(t,e,n){"use strict";n.r(e);var r={props:{pages:{type:Array,default:null}}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",t._l(t.pages,(function(e){return n("li",{key:e.slug,staticClass:"pa-2 font-weight-bold",staticStyle:{"list-style-type":"none"}},[n("NuxtLink",{staticClass:"font-weight-medium",attrs:{to:e.slug}},[t._v(t._s(e.title))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=n(26),c=n(36),l=n.n(c),f=n(586),d=n(229),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"white d-flex align-center justify-space-between flex-grow-1 "},[n("v-col",{attrs:{md:"4"}},[t.prev?n("NuxtLink",{staticClass:"text-primary font-weight-bold hover:underline",attrs:{to:t.prev.slug}},[n("v-icon",{staticClass:"mb-1",attrs:{color:"primary","x-small":""}},[t._v("mdi-arrow-left")]),t._v(" "+t._s(t.prev.title)+" \n    ")],1):t._e()],1),t._v(" "),n("v-col",{attrs:{md:"4"}},[n("a",{attrs:{href:"https://github.dev/ospic/docs",target:"_blank"}},[t._v("Edit this page on Github !")])]),t._v(" "),n("v-col",{staticClass:"d-flex flex-row-reverse ",attrs:{md:"4"}},[t.next?n("NuxtLink",{staticClass:" mt-auto font-weight-bold hover:underline",attrs:{"prepend-icon":"mdi-chevron-right",to:t.next.slug}},[t._v("\n      "+t._s(t.next.title)+" "),n("v-icon",{staticClass:"mb-1",attrs:{color:"primary","x-small":""}},[t._v("mdi-arrow-right")])],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VIcon:d.a})},,,,,,function(t,e,n){"use strict";var r=n(1),o=n(108);r.a.use(o.a),e.a=function(t){var e=new o.a({customVariables:["~/assets/variables.scss"],theme:{dark:!1,themes:{dark:{primary:"#00A756",accent:"#000000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#9D0000",default:"#354141",milky:"#01242F",dlue:"#1520A6"},light:{primary:"#00A756",accent:"#000000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#FF0000",default:"#FFFFFF",milky:"#FDFFF5",teal:"#00897B",whitish:"F5F5F5",dlue:"#1520A6"}}}});t.app.vuetify=e,t.$vuetify=e.framework}},function(t,e,n){"use strict";var r=n(182),o=n.n(r);n(402),n(404),n(405),n(407),n(408),n(410),n(411),n(413),n(414),n(415),n(416);o.a.languages.vue=o.a.languages.markup,e.a=o.a},function(t,e,n){"use strict";var r=n(1),o=n(228),c=n(184),l=n(233),f=n(234),d=n(245),m=n(313),v=n(235),h=n(314),x=n(315);r.a.mixin({components:{"c-image":o.default,VTags:c.default,VNav:l.default,"v-pages":f.default,"blog-page":d.default,"v-author":m.default,"prev-next":v.default,icon:h.default,rimg:x.default},data:function(){return{}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},computed:{isMdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp},domain:function(){return"localhost"===window.location.hostname},locales:function(){return this._i18n.locales},locale:function(){return this._i18n.localeProperties}}})},,function(t,e,n){"use strict";n.r(e);n(8),n(49);var r={props:["pages","post","prev","next"],components:{SheetFooter:{functional:!0,render:function(t,e){return t("v-sheet",{staticClass:"d-flex flex-row align-self-stretch",props:{color:"grey lighten-2",dark:!0,height:50}},e.children)}}},data:function(){return{clipped:!1,drawer:!1,fixed:!1,mini:!0,miniVariant:!1,right:!0,rightDrawer:!1,title:"Ospic"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.description}]}}},o=n(26),c=n(36),l=n.n(c),f=n(593),d=n(587),m=n(232),v=n(318),h=n(586),x=n(581),_=n(229),y=n(230),w=n(138),k=n(591),C=n(592),j=n(588),A=n(70),M=n(589),O=n(304),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white lighten-3 ma-0 pa-0",attrs:{fluid:""}},[n("v-app-bar",{staticClass:"white ma-0 pa-0",attrs:{flat:"",fixed:"",app:""}},[n("v-row",[n("v-col",{attrs:{sm:"1"}}),t._v(" "),n("v-col",{attrs:{sm:"10"}},[n("v-app-bar",{staticClass:"white",attrs:{flat:""}},[n("nuxt-link",{attrs:{to:"/welcome"}},[t.$vuetify.breakpoint.mdAndUp?n("v-toolbar-title",{staticClass:"mx-0 primary--text plain-link"},[t._v(t._s(t.$t("apptitle")))]):t._e()],1),t._v(" "),t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"primary accent-2 white--text",attrs:{medium:"",rounded:"",outlined:"",dark:"",color:"white",href:"https://opencollective.com/ospic",target:"_blank"}},[n("v-icon",[t._v("mdi-heart-outline")]),t._v(" \n     Sponsor")],1),t._v("  \n    "),t._v(" "),n("AppSearchInput"),t._v(" "),t.isMdAndUp?n("h5",{staticClass:"primary--text"},[t._v("Language:")]):t._e(),t._v(" "),t.isMdAndUp?n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticStyle:{"text-transform":"none"},attrs:{text:"",color:"primary",small:""}},"v-btn",o,!1),r),[t._v("\n            "+t._s(t.locale.name)+" "),n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-menu-down")])],1)]}}],null,!1,1566183269)},[t._v(" "),n("v-list",t._l(t.locales,(function(e,r){return n("v-list-item",{key:r},[n("nuxt-link",{staticClass:"primary--text",attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),1)],1)],1):t._e(),t._v(" "),n("a",{attrs:{href:"https://github.com/ospic/docs",target:"_blank"}},[n("v-btn",{attrs:{text:"",fab:"","x-small":"",target:"_blank"}},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-github")])],1)],1),t._v(" "),n("a",{attrs:{href:"https://app.ospicx.com/",target:"_blank"}},[n("v-btn",{attrs:{text:"",fab:"","x-small":""}},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-web")])],1)],1),t._v(" "),t.isMdAndUp?t._e():n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1),t._v(" "),n("v-col",{attrs:{sm:"1"}})],1)],1),t._v(" "),t.isMdAndUp?t._e():n("v-navigation-drawer",{staticClass:"pa-3",attrs:{"mini-variant.sync":"mini","overlay-color":"primary",app:"",right:"",height:"100%"},scopedSlots:t._u([{key:"append",fn:function(){return[n("h5",[t._v(t._s(t.$t("selectlanguage")))]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticStyle:{"text-transform":"none"},attrs:{text:"",color:"primary",small:"",block:""}},"v-btn",o,!1),r),[t._v("\n              "+t._s(t.locale.name)+" "),n("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!1,2235333447)},[t._v(" "),n("v-list",{attrs:{dense:""}},t._l(t.locales,(function(e,r){return n("v-list-item",{key:r,attrs:{dense:""}},[n("nuxt-link",{staticClass:"primary--text",attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),1)],1)],1)]},proxy:!0}],null,!1,3088080770),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("h2",{staticClass:"ml-2"},[t._v("Pages")]),t._v(" "),n("v-pages",{attrs:{pages:t.pages}})],1),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("v-row",[t.$vuetify.breakpoint.smAndUp?n("v-col",{attrs:{cols:"12",sm:1}}):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",lg:"10",md:"12"}},[n("v-row",[t.$vuetify.breakpoint.smAndUp?n("v-col",{attrs:{cols:"12",sm:(t.$vuetify.breakpoint.smOnly,"2")}},[n("v-pages",{attrs:{pages:t.pages}})],1):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",sm:t.post.toc.length>0?"7":"10"}},[n("v-sheet",{attrs:{tile:""}},[n("div",{staticClass:"pt-4"},[n("div",{staticClass:"post-header"},[n("h1",{staticClass:"h1 post-h1"},[t._v(t._s(t.post.title))]),t._v(" "),t.post.description?n("p",{staticClass:"excerpt"},[t._v("\n                "+t._s(t.post.description)+"\n              ")]):t._e(),t._v(" "),n("div",{staticClass:"post-tags d-flex justify-space-between"},[n("v-tags",{attrs:{tags:t.post.tags}}),t._v("\n                Last updated: "+t._s(t.formatDate(t.post.updatedAt))+"\n              ")],1),t._v(" "),n("hr")]),t._v(" "),t.post.image?n("c-image",{attrs:{src:t.post.image,alt:"Header image"}}):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.post}}),t._v(" "),t.post.author?n("v-author",{attrs:{author:t.post.author}}):t._e()],1),t._v(" "),n("sheet-footer",[n("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)],1)],1),t._v(" "),t.post.toc.length>0&&t.isMdAndUp?n("v-col",{attrs:{cols:"12",sm:"3"}},[n("v-sheet",{attrs:{rounded:"lg","min-height":"268"}},[n("v-nav",{attrs:{post:t.post}})],1)],1):t._e()],1)],1),t._v(" "),t.$vuetify.breakpoint.smAndUp?n("v-col",{attrs:{cols:"12",sm:1}}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{AppSearchInput:n(565).default,VPages:n(234).default,VTags:n(184).default,PrevNext:n(235).default,VNav:n(233).default}),l()(component,{VAppBar:f.a,VAppBarNavIcon:d.a,VAvatar:m.a,VBtn:v.a,VCol:h.a,VContainer:x.a,VIcon:_.a,VList:y.a,VListItem:w.a,VMenu:k.a,VNavigationDrawer:C.a,VRow:j.a,VSheet:A.a,VSpacer:M.a,VToolbarTitle:O.a})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7388ab72",content,!0,{sourceMap:!1})},,,,,,,,,,,,,,,,,,,,function(t,e,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5d0e0f92",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("62ba24b1",content,!0,{sourceMap:!1})},,,function(t,e,n){n(9),n(8),n(11),n(13),n(10),n(14),n(39),n(31),n(46),n(34),n(49),n(56),n(37);var r=n(555),o=n(323),c=n(558);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}n(27),n(3),n(24),n(55),n(145),n(75),n(50),n(98);var v={workboxURL:"https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.4/workbox/workbox-sw.js",importScripts:[],config:{debug:!1},cacheOptions:{cacheId:"docs-prod",directoryIndex:"/",revision:"msBvW2pNcGgs"},clientsClaim:!0,skipWaiting:!0,cleanupOutdatedCaches:!0,offlineAnalytics:!1,preCaching:[{revision:"msBvW2pNcGgs",url:"/docs/?standalone=true"}],runtimeCaching:[{urlPattern:"/docs/assets/",handler:"CacheFirst",method:"GET",strategyPlugins:[]},{urlPattern:"/docs/",handler:"NetworkFirst",method:"GET",strategyPlugins:[]}],offlinePage:null,pagesURLPattern:"/docs/",offlineStrategy:"NetworkFirst"};importScripts.apply(void 0,[v.workboxURL].concat(c(v.importScripts))),function(t,e){e.config&&t.setConfig(e.config);e.cacheNames&&t.core.setCacheNameDetails(e.cacheNames);e.clientsClaim&&t.core.clientsClaim();e.skipWaiting&&t.core.skipWaiting();e.cleanupOutdatedCaches&&t.precaching.cleanupOutdatedCaches();e.offlineAnalytics&&t.googleAnalytics.initialize()}(workbox,v),workbox,function(t,e){e.preCaching.length&&t.precaching.precacheAndRoute(e.preCaching,e.cacheOptions)}(workbox,v),workbox,function(t,e){var n,o={requestWillFetch:function(t){var e=t.request;return"only-if-cached"===e.cache&&"no-cors"===e.mode?new Request(e.url,m(m({},e),{},{cache:"default",mode:"no-cors"})):e},fetchDidFail:function(t){t.error.message="[workbox] Network request for "+t.request.url+" threw an error: "+t.error.message,console.error(t.error,"Details:",t)},handlerDidError:function(t){return t.error.message="[workbox] Network handler threw an error: "+t.error.message,console.error(t.error,"Details:",t),null}},f=l(e.runtimeCaching);try{for(f.s();!(n=f.n()).done;){var d=n.value,v=new RegExp(d.urlPattern),h=d.method||"GET",x=(d.strategyPlugins||[]).map((function(p){return r((e=t,p.use.split(".").reduce((function(p,t){return p[t]}),e)),c(p.config));var e}));x.unshift(o);var _=m(m({},d.strategyOptions),{},{plugins:x}),y=new t.strategies[d.handler](_);t.routing.registerRoute(v,y,h)}}catch(t){f.e(t)}finally{f.f()}}(workbox,v),function(t,e){e.offlinePage&&t.routing.registerRoute(new RegExp(e.pagesURLPattern),(function(n){var r=n.request,o=n.event;return(new t.strategies[e.offlineStrategy]).handle({request:r,event:o}).catch((function(){return caches.match(e.offlinePage)}))}))}(workbox,v),workbox},,,,,,,function(t,e,n){"use strict";var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"Ospic"}},computed:{domain:function(){return"localhost"===window.location.hostname}}},o=n(26),c=n(36),l=n.n(c),f=n(580),d=n(581),m=n(583),v=n(584),h=n(582),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app grey lighten-3 ",attrs:{oncontextmenu:t.domain?"return true":"return false",fluid:""}},[n("v-main",[n("v-container",{attrs:{fluid:""}},[n("nuxt")],1)],1),t._v(" "),n("v-footer",{staticClass:"primary",attrs:{fixed:"",absolute:!t.$vuetify.breakpoint.mdAndUp,padless:"",app:""}},[n("v-flex",{staticClass:"d-flex align-center justify-end  flex-column",attrs:{xs12:""}},[n("div",{staticClass:"white--text ml-3"},[t._v("\n        Made by\n        "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://github.com/ospic",target:"_blank"}},[t._v("Ospic\n        ")]),t._v("\n        as official documentation for\n        "),n("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://app.ospicx.com/",target:"_blank"}},[t._v("Ospic HMS")])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a,VContainer:d.a,VFlex:m.a,VFooter:v.a,VMain:h.a})},function(t,e,n){"use strict";n.r(e);var r={props:{author:{type:Object,default:function(){return null}}},data:function(){return{item:{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1">4</span>',subtitle:'<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.'}}}},o=n(26),c=n(36),l=n.n(c),f=n(568),d=n(181),m=n(138),v=n(231),h=n(48),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:" ma-2 pa-3",attrs:{dense:"",to:"/author/"+t.author.name,width:"400",outlined:"",flat:""}},[n("v-list-item",{key:t.item.title,attrs:{dense:""}},[n("v-list-item-avatar",{attrs:{size:"52",color:"primary"}},[n("v-img",{attrs:{src:t.author.image,alt:"Author"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(t.author.name)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.author.bio)}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:n(228).default}),l()(component,{VCard:f.a,VImg:d.a,VListItem:m.a,VListItemAvatar:v.a,VListItemContent:h.a,VListItemSubtitle:h.b,VListItemTitle:h.c})},function(t,e,n){"use strict";n.r(e);var r={props:{icon:{type:String,required:!0}}},o=n(26),c=n(36),l=n.n(c),f=n(318),d=n(229),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"primary ma-0 pa-0 mb-1",attrs:{elevation:"0","x-small":"",fab:""}},[n("v-icon",{staticClass:"icon",attrs:{small:"",color:"white"}},[t._v("mdi-"+t._s(t.icon))])],1)}),[],!1,null,"18149688",null);e.default=component.exports;l()(component,{VBtn:f.a,VIcon:d.a})},function(t,e,n){"use strict";n.r(e);var r={props:{src:{type:String,required:!0},alt:{type:String,required:!0,default:"Image"}},methods:{imgSrc:function(){try{this.$parent.post;return n(544)("./".concat(this.src))}catch(t){return null}}}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"round"},[n("img",{attrs:{src:t.imgSrc(),alt:t.alt}})])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";var r=n(26),o=n(36),c=n.n(o),l=n(581),f=n(582),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-main",{staticClass:"ma-0 pa-0 "},[e("v-container",{staticClass:" ma-0 pa-0",attrs:{fluid:""}},[e("nuxt",{staticClass:" ma-0 pa-0"})],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VContainer:l.a,VMain:f.a})},function(t,e,n){"use strict";var r=n(26),o=n(36),c=n.n(o),l=n(580),f=n(581),d=n(582),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("v-main",{staticClass:"ma-0 pa-0 "},[e("v-container",{staticClass:" ma-0 pa-0",attrs:{fluid:""}},[e("nuxt",{staticClass:" ma-0 pa-0"})],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:l.a,VContainer:f.a,VMain:d.a})},,,,,,,function(t,e,n){n(325),t.exports=n(326)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(281)},function(t,e,n){var r=n(15)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},,,,,function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("bc32c83c",content,!0,{sourceMap:!1})},function(t,e,n){var r=n(15),o=n(362),c=n(363),l=n(364),f=n(365),d=n(366),m=n(367),v=r(!1),h=o(c),x=o(l),_=o(f),y=o(d),w=o(m);v.push([t.i,'@font-face{font-family:"WolfFont";font-style:normal;font-weight:400;src:local("WolfFont"),url('+h+') format("woff2")}@font-face{font-family:"CodeFont";font-style:normal;font-weight:400;src:local("CodeFont"),url('+x+') format("woff2")}@font-face{font-family:"ActorV10";font-style:normal;font-weight:400;src:local("ActorV10"),url('+_+') format("woff2")}@font-face{font-family:"QuickSand";font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;src:local("QuickSand"),url('+y+')}#__nuxt .app{font-family:"ActorV10",sans-serif;color:#37474f;font-size:14px;font-smooth:always}#__nuxt .app h1,#__nuxt .app h2,#__nuxt .app h3,#__nuxt .app h4{color:#263238}.v-footer span{align-items:center;vertical-align:middle;line-height:90%}p>code{font-family:"CodeFont";color:#00f;font-weight:700}body{background-color:#00a756!important;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smooth:12em;zoom:82%}.post-tags{background-color:#fff;padding-left:5px;padding-right:5px}main{background-color:#00a756!important}.tag{box-shadow:-8px 15px 26px -14px #3dc21b}.tag a{background-color:#00a756;border-radius:4px;display:inline-block;cursor:pointer;margin-left:5px;font-size:12px;padding:1px 9px;-webkit-text-decoration-color:#fff;text-decoration-color:#fff;color:#fff}.tag a.link,.tag a.link.nuxt-link-exact-active.nuxt-link-active{color:#fff;text-decoration:none}.image img{background-color:#d1caca;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border:4px solid #d1caca;margin:15px 0 10px}.image.post-image{height:200px;width:200px;-o-object-fit:fill;object-fit:fill;border-radius:50%}.round img{width:50px;border-radius:50%;-o-object-fit:cover;object-fit:cover}a,a.v-card{text-decoration:none}a.v-card:hover,a:hover{text-decoration:underline}a.links{margin-left:1%;margin-right:1%;text-decoration:none!important;font-weight:400;color:#00a756!important}.icon.icon-link{background-image:url('+w+');display:none;width:20px;height:20px;background-size:20px 20px}strong{color:#006400}strong.button{box-shadow:0 0 0 0 #00a756;background:linear-gradient(180deg,#00a756 5%,#00a756);background-color:#00a756;border-radius:5px;display:inline-block;cursor:pointer;color:#fff;font-family:"WolfFont";font-size:11px;font-weight:700;padding:5px 12px;text-decoration:none;text-transform:uppercase}strong.button:hover{background:linear-gradient(180deg,#00a756 5%,#00a756);background-color:#04703c}strong.button:active{position:relative;top:1px}.v-toolbar__title{font-weight:bolder;font-size:x-large!important;color:#00a756!important}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.sheet .nuxt-content-container,.sheet .post-header{padding:20px}.markdown table{width:100%}hr{position:relative;top:10px;height:12px;background:transparent;margin-bottom:40px;border:none;border-top:1px solid #e5e2e2}hr.dotted{border:2px grey;border-bottom:2px dotted grey}hr.dashed,hr.dotted{top:0;margin-bottom:0;color:#fff;background-color:#fff}hr.dashed{border:.1px #4caf50;border-style:none none dashed;margin-top:7px;padding-bottom:7px}hr.v-divider{top:0;margin-bottom:0}button.v-btn.v-btn--outlined span.v-btn__content.colored{text-transform:none!important;color:#fff}.nuxt-content-container .nuxt-content h3{margin-top:16px}.nuxt-content-container .nuxt-content ul{width:90%;background-color:#efefef;margin:1%;padding-top:1%;padding-bottom:1%}.nuxt-content-container .nuxt-content ul code{background-color:transparent}',""]),t.exports=v},,function(t,e,n){t.exports=n.p+"fonts/content.9566aaa.woff2"},function(t,e,n){t.exports=n.p+"fonts/content-a.4b50ddc.woff2"},function(t,e,n){t.exports=n.p+"fonts/actor-v10-latin-regular.545137d.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand_medium.eb896a7.ttf"},function(t,e,n){t.exports=n.p+"img/link_variant.103f2fa.svg"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var map={"./add_measure_unit.png":418,"./admission-info.png":419,"./admission-visits.png":420,"./assign_staff.png":421,"./assigned-consultation.png":422,"./authentication_screen.png":423,"./beds.png":424,"./bills.png":425,"./blood_bank.png":426,"./calendar.png":427,"./categories.png":428,"./concultations.png":429,"./consultation.png":430,"./consultation_consts.png":431,"./consultations_chart.png":432,"./create-patient.png":433,"./create-self-service.png":434,"./create_event.png":435,"./create_service.png":436,"./create_user.png":437,"./create_ward.png":438,"./createdepartment.png":439,"./createrole.png":440,"./createuser.png":441,"./dashboard.png":442,"./delete_user.png":443,"./departments.png":444,"./diagnoses-list.png":445,"./diagnosis_form.png":446,"./drawer_button.png":447,"./edit-contact.png":448,"./finance_dashboard.png":449,"./laboratory_reports.png":450,"./md_service.png":451,"./medicines.png":452,"./medicines_tab.png":453,"./outstanding-bill.png":454,"./paid-bill.png":455,"./patients.png":456,"./paybill.png":457,"./pharmacy.png":458,"./profile-image-upload.png":459,"./profile.png":460,"./receipt.png":461,"./registration_frequency.png":462,"./report_print.png":463,"./reports.png":464,"./roles.png":465,"./selfservice-users.png":466,"./service-tab.png":467,"./staffs.png":468,"./statistical_pie_chart.png":469,"./tool_bar.png":470,"./totals.png":471,"./transaction.png":472,"./un-assigned-consultation.png":473,"./units.png":474,"./update_blood_bank.png":475,"./update_event.png":476,"./update_medicine.png":477,"./users.png":478,"./view-contact.png":479,"./view_admission.png":480,"./view_event.png":481,"./view_occupied_bed.png":482,"./view_report.png":483,"./view_ward.png":484,"./viewdepartment.png":485,"./wards_list.png":486};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=417},function(t,e,n){t.exports=n.p+"img/add_measure_unit.2139b58.png"},function(t,e,n){t.exports=n.p+"img/admission-info.2229143.png"},function(t,e,n){t.exports=n.p+"img/admission-visits.068cc86.png"},function(t,e,n){t.exports=n.p+"img/assign_staff.d078163.png"},function(t,e,n){t.exports=n.p+"img/assigned-consultation.74b8ac6.png"},function(t,e,n){t.exports=n.p+"img/authentication_screen.25f4a2d.png"},function(t,e,n){t.exports=n.p+"img/beds.9ac3f3a.png"},function(t,e,n){t.exports=n.p+"img/bills.c0d247a.png"},function(t,e,n){t.exports=n.p+"img/blood_bank.43cae99.png"},function(t,e,n){t.exports=n.p+"img/calendar.03ca1b3.png"},function(t,e,n){t.exports=n.p+"img/categories.cb9f1ea.png"},function(t,e,n){t.exports=n.p+"img/concultations.c572631.png"},function(t,e,n){t.exports=n.p+"img/consultation.59588ec.png"},function(t,e,n){t.exports=n.p+"img/consultation_consts.b3bf23d.png"},function(t,e,n){t.exports=n.p+"img/consultations_chart.dec2286.png"},function(t,e,n){t.exports=n.p+"img/create-patient.a956fbc.png"},function(t,e,n){t.exports=n.p+"img/create-self-service.964415c.png"},function(t,e,n){t.exports=n.p+"img/create_event.ff2dfed.png"},function(t,e,n){t.exports=n.p+"img/create_service.489a69e.png"},function(t,e,n){t.exports=n.p+"img/create_user.f48857e.png"},function(t,e,n){t.exports=n.p+"img/create_ward.9e81330.png"},function(t,e,n){t.exports=n.p+"img/createdepartment.15c7747.png"},function(t,e,n){t.exports=n.p+"img/createrole.c082904.png"},function(t,e,n){t.exports=n.p+"img/createuser.17cb2d2.png"},function(t,e,n){t.exports=n.p+"img/dashboard.3ba55dd.png"},function(t,e,n){t.exports=n.p+"img/delete_user.8115455.png"},function(t,e,n){t.exports=n.p+"img/departments.ef01a95.png"},function(t,e,n){t.exports=n.p+"img/diagnoses-list.50b71b1.png"},function(t,e,n){t.exports=n.p+"img/diagnosis_form.f377689.png"},function(t,e,n){t.exports=n.p+"img/drawer_button.5d22199.png"},function(t,e,n){t.exports=n.p+"img/edit-contact.4f9abe4.png"},function(t,e,n){t.exports=n.p+"img/finance_dashboard.0febfb1.png"},function(t,e,n){t.exports=n.p+"img/laboratory_reports.c14755e.png"},function(t,e,n){t.exports=n.p+"img/md_service.061d454.png"},function(t,e,n){t.exports=n.p+"img/medicines.bda421a.png"},function(t,e,n){t.exports=n.p+"img/medicines_tab.4f3c133.png"},function(t,e,n){t.exports=n.p+"img/outstanding-bill.ca9fb9c.png"},function(t,e,n){t.exports=n.p+"img/paid-bill.8ba3332.png"},function(t,e,n){t.exports=n.p+"img/patients.ffa85c6.png"},function(t,e,n){t.exports=n.p+"img/paybill.06b09c4.png"},function(t,e,n){t.exports=n.p+"img/pharmacy.82434bf.png"},function(t,e,n){t.exports=n.p+"img/profile-image-upload.2bcb188.png"},function(t,e,n){t.exports=n.p+"img/profile.55594f2.png"},function(t,e,n){t.exports=n.p+"img/receipt.24a8993.png"},function(t,e,n){t.exports=n.p+"img/registration_frequency.af3fa20.png"},function(t,e,n){t.exports=n.p+"img/report_print.2c703bc.png"},function(t,e,n){t.exports=n.p+"img/reports.cf7508f.png"},function(t,e,n){t.exports=n.p+"img/roles.2718353.png"},function(t,e,n){t.exports=n.p+"img/selfservice-users.6f9ca08.png"},function(t,e,n){t.exports=n.p+"img/service-tab.751a2e8.png"},function(t,e,n){t.exports=n.p+"img/staffs.4ce5109.png"},function(t,e,n){t.exports=n.p+"img/statistical_pie_chart.645fc19.png"},function(t,e,n){t.exports=n.p+"img/tool_bar.4d0ede5.png"},function(t,e,n){t.exports=n.p+"img/totals.e2ce64d.png"},function(t,e,n){t.exports=n.p+"img/transaction.d120c33.png"},function(t,e,n){t.exports=n.p+"img/un-assigned-consultation.db1ff35.png"},function(t,e,n){t.exports=n.p+"img/units.6fb7689.png"},function(t,e,n){t.exports=n.p+"img/update_blood_bank.ed5133d.png"},function(t,e,n){t.exports=n.p+"img/update_event.2f1146e.png"},function(t,e,n){t.exports=n.p+"img/update_medicine.ffbf759.png"},function(t,e,n){t.exports=n.p+"img/users.d451f63.png"},function(t,e,n){t.exports=n.p+"img/view-contact.b86e12a.png"},function(t,e,n){t.exports=n.p+"img/view_admission.bb0bc8c.png"},function(t,e,n){t.exports=n.p+"img/view_event.5d15d75.png"},function(t,e,n){t.exports=n.p+"img/view_occupied_bed.a38ea6f.png"},function(t,e,n){t.exports=n.p+"img/view_report.eb3031d.png"},function(t,e,n){t.exports=n.p+"img/view_ward.1cda26f.png"},function(t,e,n){t.exports=n.p+"img/viewdepartment.ca0c573.png"},function(t,e,n){t.exports=n.p+"img/wards_list.8b73829.png"},function(t,e,n){"use strict";n(301)},function(t,e,n){var r=n(15)(!1);r.push([t.i,".img[data-v-3a6ff40e]{border:0 solid #eee;border-radius:0;padding:0}img[data-v-3a6ff40e]{max-width:100%;width:100%;-o-object-fit:cover;object-fit:cover}",""]),t.exports=r},,,function(t,e,n){"use strict";n(302)},function(t,e,n){var r=n(15)(!1);r.push([t.i,"@media screen and (min-width:265px){.articles[data-v-44102542]{position:fixed;padding:.2% 4% .3% 2%;background-color:#424242}}ul li a[data-v-44102542]{display:inline-block}",""]),t.exports=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var map={"./README.md":545,"./cherry.png":546,"./favicon.ico":547,"./google914a0b4ff7d56312.html":548,"./icon.png":549,"./logo.png":550,"./ospic_logo.png":551,"./preview.png":552,"./sponsor-icon.jpg":553,"./sponsor.jpg":554,"./sw":305,"./sw.js":305,"./v.png":563,"./vuetify-logo.svg":564};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=544},function(t,e){throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> # STATIC\n| \n| **This directory is not required, you can delete it if you don't want to use it.**")},function(t,e,n){t.exports=n.p+"img/cherry.eacf5a1.png"},function(t,e){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},function(t,e){throw new Error("Module parse failed: Unexpected token (1:24)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> google-site-verification: google914a0b4ff7d56312.html")},function(t,e,n){t.exports=n.p+"img/icon.48b0ae1.png"},function(t,e,n){t.exports=n.p+"img/logo.cce8bf9.png"},function(t,e,n){t.exports=n.p+"img/ospic_logo.17bb66c.png"},function(t,e,n){t.exports=n.p+"img/preview.900c6ec.png"},function(t,e,n){t.exports=n.p+"img/sponsor-icon.6829723.jpg"},function(t,e,n){t.exports=n.p+"img/sponsor.234e74e.jpg"},,,,,,,,,function(t,e,n){t.exports=n.p+"img/v.134d708.png"},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ny41IDEwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxNjk3ZjY7fS5jbHMtMntmaWxsOiM3YmM2ZmY7fS5jbHMtM3tmaWxsOiMxODY3YzA7fS5jbHMtNHtmaWxsOiNhZWRkZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5BcnRib2FyZCA0NjwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0My43NSAwIDIzLjMxIDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNDMuNzUgNjIuNSA0My43NSAxMDAgMCAxNC41OCAyMi45MiAxNC41OCA0My43NSA2Mi41Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSI0My43NSAwIDY0LjE5IDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNjQuNTggMTQuNTggODcuNSAxNC41OCA0My43NSAxMDAgNDMuNzUgNjIuNSA2NC41OCAxNC41OCIvPjwvc3ZnPgo="},function(t,e,n){"use strict";n.r(e);var r=n(21),o=(n(72),n(24),n(208),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=3;break}return e.articles=[],n.abrupt("return");case 3:return n.next=5,e.$content("".concat(e.$i18n.locale)).limit(6).search(t).fetch();case 5:e.articles=n.sent;case 6:case"end":return n.stop()}}),n)})))()}}}),c=(n(491),n(26)),l=n(36),f=n.n(l),d=n(229),m=n(230),v=n(138),h=n(48),x=n(123),_=n(590),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-text-field",{staticClass:"shrink mr-4",attrs:{"hide-details":"",label:"Search",placeholder:"Search",filled:"",dense:"",flat:"",solo:"",rounded:"",light:"",clearable:"","single-line":"","background-color":"#EEEEEE","append-icon":"mdi-magnify"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1),t._v(" "),n("div",{staticClass:"mt-0"},[t.articles.length?n("v-list",{staticClass:"articles mt-1 pr-14",attrs:{dense:"",color:"primary"}},t._l(t.articles,(function(article){return n("v-list-item",{key:article.slug,staticClass:"ma-0 pa-0",attrs:{dense:""}},[n("v-list-item-icon",[n("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-magnify")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[n("NuxtLink",{staticStyle:{color:"white"},attrs:{to:article.slug}},[t._v("\n          "+t._s(article.title)+"\n        ")])],1)],1)],1)})),1):t._e()],1)])}),[],!1,null,"44102542",null);e.default=component.exports;f()(component,{VIcon:d.a,VList:m.a,VListItem:v.a,VListItemContent:h.a,VListItemIcon:x.a,VListItemTitle:h.c,VTextField:_.a})}]),[[324,8,1,9]]]);