(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=n(24),c=n(31),l=n.n(c),f=n(518),d=n(202),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-center justify-space-between flex-grow-1 "},[n("v-col",{attrs:{md:"4"}},[t.prev?n("NuxtLink",{staticClass:"text-primary font-weight-bold hover:underline",attrs:{to:t.prev.slug}},[n("v-icon",{staticClass:"mb-1",attrs:{color:"primary","x-small":""}},[t._v("mdi-arrow-left")]),t._v(" "+t._s(t.prev.title)+" \n    ")],1):t._e()],1),t._v(" "),n("v-col",{attrs:{md:"4"}},[n("a",{attrs:{href:"https://app.ospicx.com/",target:"_blank"}},[t._v("Edit this page on Github !")])]),t._v(" "),n("v-col",{staticClass:"d-flex flex-row-reverse ",attrs:{md:"4"}},[t.next?n("NuxtLink",{staticClass:" mt-auto font-weight-bold hover:underline",attrs:{"prepend-icon":"mdi-chevron-right",to:t.next.slug}},[t._v("\n      "+t._s(t.next.title)+" "),n("v-icon",{staticClass:"mb-1",attrs:{color:"primary","x-small":""}},[t._v("mdi-arrow-right")])],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VIcon:d.a})},211:function(t,e,n){"use strict";var r=n(1),o=n(99);r.a.use(o.a),e.a=function(t){var e=new o.a({customVariables:["~/assets/variables.scss"],theme:{dark:!1,themes:{dark:{primary:"#00A756",accent:"#000000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#9D0000",default:"#354141",milky:"#01242F",dlue:"#1520A6"},light:{primary:"#00A756",accent:"#000000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#FF0000",default:"#FFFFFF",milky:"#FDFFF5",teal:"#00897B",whitish:"F5F5F5",dlue:"#1520A6"}}}});t.app.vuetify=e,t.$vuetify=e.framework}},212:function(t,e,n){"use strict";var r=n(158),o=n.n(r);n(362),n(364),n(365),n(367),n(368),n(370),n(371),n(373),n(375),n(376),n(377);o.a.languages.vue=o.a.languages.markup,e.a=o.a},213:function(t,e,n){"use strict";var r=n(1),o=n(281),c=n(282),l=n(283),f=n(284),d=n(214),m=n(285),v=n(206),x=n(286);r.a.mixin({components:{"c-image":o.default,VTags:c.default,VNav:l.default,"v-pages":f.default,"blog-page":d.default,"v-author":m.default,"prev-next":v.default,icon:x.default},data:function(){return{}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},computed:{isMdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp},domain:function(){return"localhost"===window.location.hostname},locales:function(){return this._i18n.locales},locale:function(){return this._i18n.localeProperties}}})},214:function(t,e,n){"use strict";n.r(e);n(6),n(47);var r={props:["pages","post","prev","next"],components:{SheetFooter:{functional:!0,render:function(t,e){return t("v-sheet",{staticClass:"d-flex flex-row align-self-stretch",props:{color:"grey lighten-2",dark:!0,height:50}},e.children)}}},data:function(){return{clipped:!1,drawer:!1,fixed:!1,mini:!0,miniVariant:!1,right:!0,rightDrawer:!1,title:"Ospic documentation"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.description}]}}},o=n(24),c=n(31),l=n.n(c),f=n(525),d=n(519),m=n(203),v=n(289),x=n(518),_=n(513),h=n(202),y=n(204),w=n(122),k=n(523),C=n(524),V=n(520),F=n(62),A=n(521),E=n(278),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"grey lighten-3",attrs:{fluid:""}},[r("v-app-bar",{staticClass:"primary",attrs:{flat:"",dark:"",dense:"",fixed:"",app:""}},[r("img",{attrs:{src:n(443),alt:"Vuetify.js",height:"100%"}}),t._v(" "),r("nuxt-link",{attrs:{to:"/welcome"}},[t.$vuetify.breakpoint.mdAndUp?r("v-toolbar-title",{staticClass:"mx-0 title white--text plain-link"},[t._v(t._s(t.$t("apptitle")))]):t._e()],1),t._v(" "),r("v-avatar",[r("img",{attrs:{src:"https://library.kissclipart.com/20181003/szw/kissclipart-free-corner-ribbon-png-clipart-logo-f2cbd51c4ca46d94.png",alt:"John"}})]),t._v(" "),r("v-spacer"),t._v(" "),r("AppSearchInput"),t._v(" "),t.isMdAndUp?r("h5",[t._v("Language:")]):t._e(),t._v(" "),t.isMdAndUp?r("div",{staticClass:"text-center"},[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticStyle:{"text-transform":"none"},attrs:{text:"",dark:"",small:""}},"v-btn",o,!1),n),[t._v("\n            "+t._s(t.locale.name)+" "),r("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!1,128684533)},[t._v(" "),r("v-list",t._l(t.locales,(function(e,n){return r("v-list-item",{key:n},[r("nuxt-link",{staticClass:"primary--text",attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),1)],1)],1):t._e(),t._v(" "),r("a",{attrs:{href:"https://github.com/ospic/docs",target:"_blank"}},[r("v-btn",{attrs:{text:"",fab:"","x-small":"",target:"_blank"}},[r("v-icon",[t._v("mdi-github")])],1)],1),t._v(" "),r("a",{attrs:{href:"https://app.ospicx.com/",target:"_blank"}},[r("v-btn",{attrs:{text:"",fab:"","x-small":""}},[r("v-icon",[t._v("mdi-web")])],1)],1),t._v(" "),t.isMdAndUp?t._e():r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),t._v(" "),t.isMdAndUp?t._e():r("v-navigation-drawer",{staticClass:"pa-3",attrs:{"mini-variant.sync":"mini","overlay-color":"primary",app:"",right:"",height:"100%"},scopedSlots:t._u([{key:"append",fn:function(){return[r("h5",[t._v(t._s(t.$t("selectlanguage")))]),t._v(" "),r("div",{staticClass:"text-center"},[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticStyle:{"text-transform":"none"},attrs:{text:"",color:"primary",small:"",block:""}},"v-btn",o,!1),n),[t._v("\n              "+t._s(t.locale.name)+" "),r("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!1,2235333447)},[t._v(" "),r("v-list",{attrs:{dense:""}},t._l(t.locales,(function(e,n){return r("v-list-item",{key:n,attrs:{dense:""}},[r("nuxt-link",{staticClass:"primary--text",attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),1)],1)],1)]},proxy:!0}],null,!1,3088080770),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("h2",{staticClass:"pa-2"},[t._v("Pages")]),t._v(" "),r("v-pages",{attrs:{pages:t.pages}})],1),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",[t.$vuetify.breakpoint.smAndUp?r("v-col",{attrs:{cols:"12",sm:t.$vuetify.breakpoint.smOnly?"4":"2"}},[r("v-sheet",{staticClass:"pa-5",attrs:{rounded:"lg","min-height":"268"}},[r("v-pages",{attrs:{pages:t.pages}})],1)],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"12",sm:t.post.toc.length>0?"8":"10"}},[r("v-sheet",{attrs:{tile:""}},[r("div",{staticClass:"pa-4"},[r("div",{staticClass:"post-header"},[r("h1",{staticClass:"h1 post-h1"},[t._v(t._s(t.post.title))]),t._v(" "),t.post.description?r("p",{staticClass:"excerpt"},[t._v("\n                "+t._s(t.post.description)+"\n              ")]):t._e(),t._v(" "),r("div",{staticClass:"post-tags d-flex justify-space-between"},[r("v-tags",{attrs:{tags:t.post.tags}}),t._v("\n                Last updated: "+t._s(t.formatDate(t.post.updatedAt))+"\n              ")],1)]),t._v(" "),t.post.image?r("c-image",{attrs:{src:t.post.image,alt:"Header image"}}):t._e(),t._v(" "),r("nuxt-content",{attrs:{document:t.post}}),t._v(" "),t.post.author?r("v-author",{attrs:{author:t.post.author}}):t._e()],1),t._v(" "),r("sheet-footer",[r("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)],1)],1),t._v(" "),t.post.toc.length>0&&t.isMdAndUp?r("v-col",{attrs:{cols:"12",sm:"2"}},[r("v-sheet",{staticClass:"pa-3",attrs:{rounded:"lg","min-height":"268"}},[r("v-nav",{attrs:{post:t.post}})],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{AppSearchInput:n(497).default,PrevNext:n(206).default}),l()(component,{VAppBar:f.a,VAppBarNavIcon:d.a,VAvatar:m.a,VBtn:v.a,VCol:x.a,VContainer:_.a,VIcon:h.a,VList:y.a,VListItem:w.a,VMenu:k.a,VNavigationDrawer:C.a,VRow:V.a,VSheet:F.a,VSpacer:A.a,VToolbarTitle:E.a})},253:function(t,e,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("7388ab72",content,!0,{sourceMap:!1})},271:function(t,e,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("66885a2d",content,!0,{sourceMap:!1})},272:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("1794a3b3",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"Ospic documentation"}},computed:{domain:function(){return"localhost"===window.location.hostname}}},o=n(24),c=n(31),l=n.n(c),f=n(512),d=n(513),m=n(515),v=n(516),x=n(514),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app grey lighten-3 ",attrs:{oncontextmenu:t.domain?"return true":"return false",fluid:""}},[n("v-main",{staticStyle:{"background-color":"#EEEEEE"}},[n("v-container",{staticClass:"pa-0 ma-0",staticStyle:{"background-color":"#EEEEEE"},attrs:{fluid:""}},[n("nuxt")],1)],1),t._v(" "),n("v-footer",{staticClass:"primary",attrs:{rounded:"",fixed:"",absolute:!t.$vuetify.breakpoint.mdAndUp,padless:"",app:""}},[n("v-flex",{staticClass:"d-flex align-center justify-end  flex-column",attrs:{xs12:""}},[n("div",{staticStyle:{color:"white"}},[t._v("\n        Copyright © "+t._s((new Date).getFullYear())+" The Apache Software\n        Foundation, Licensed under the\n        "),n("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank"}},[t._v("\n          Apache License, Version 2.0.")])]),t._v(" "),n("div",{staticClass:"white--text ml-3"},[t._v("\n        Made by\n        "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://github.com/ospic",target:"_blank"}},[t._v("Ospic\n        ")]),t._v("\n        as official documentation for\n        "),n("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://app.ospicx.com/",target:"_blank"}},[t._v("Ospic HMS")])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a,VContainer:d.a,VFlex:m.a,VFooter:v.a,VMain:x.a})},281:function(t,e,n){"use strict";n.r(e);var r={props:{src:{type:String,required:!0},alt:{type:String,required:!0}},methods:{imgSrc:function(){try{this.$parent.post;return n(378)("./".concat(this.src))}catch(t){return null}}}},o=(n(439),n(24)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image"},[n("img",{attrs:{src:t.imgSrc(),alt:t.alt}})])}),[],!1,null,"45423d9e",null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r={props:{tags:{type:Array,default:function(){return[]}}}},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"tags"},t._l(t.tags,(function(e){return n("span",{key:e,staticClass:"tag"},[n("nuxt-link",{staticClass:"link primary lighten-2",attrs:{to:"/tags/"+e}},[t._v(t._s(e))]),t._v(" \n  ")],1)})),0)}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var r={props:{post:{type:Object,default:null}}},o=n(24),c=n(31),l=n.n(c),f=n(517),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("p",{staticClass:"gray--text lighten-2 text-uppercase"},[t._v("In this page")]),t._v(" "),n("v-divider"),t._v(" "),n("ul",t._l(t.post.toc,(function(link){return n("li",{key:link.id,class:{"py-2":2===link.depth,"ml-2 pb-1":3===link.depth}},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VDivider:f.a})},284:function(t,e,n){"use strict";n.r(e);var r={props:{pages:{type:Array,default:null}}},o=n(24),c=n(31),l=n.n(c),f=n(517),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("p",{staticClass:"gray--text lighten-2 text-uppercase"},[t._v("Pages")]),t._v(" "),n("v-divider"),t._v(" "),n("ul",t._l(t.pages,(function(e){return n("li",{key:e.slug,staticClass:"pa-2",staticStyle:{"list-style-type":"square"}},[n("NuxtLink",{attrs:{to:e.slug}},[t._v(t._s(e.title))]),t._v(" "),n("hr",{staticClass:"dotted"})],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VDivider:f.a})},285:function(t,e,n){"use strict";n.r(e);var r={props:{author:{type:Object,default:function(){return null}}},data:function(){return{item:{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1">4</span>',subtitle:'<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.'}}}},o=n(24),c=n(31),l=n.n(c),f=n(499),d=n(157),m=n(122),v=n(205),x=n(74),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:" ma-2 pa-3",attrs:{dense:"",to:"/author/"+t.author.name,width:"400",outlined:"",flat:""}},[n("v-list-item",{key:t.item.title,attrs:{dense:""}},[n("v-list-item-avatar",{attrs:{size:"52",color:"primary"}},[n("v-img",{attrs:{src:t.author.image}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(t.author.name)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.author.bio)}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:f.a,VImg:d.a,VListItem:m.a,VListItemAvatar:v.a,VListItemContent:x.a,VListItemSubtitle:x.b,VListItemTitle:x.c})},286:function(t,e,n){"use strict";n.r(e);var r={props:{icon:{type:String,required:!0}}},o=n(24),c=n(31),l=n.n(c),f=n(289),d=n(202),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"primary ma-0 pa-0 mb-1",attrs:{elevation:"0","x-small":"",fab:""}},[n("v-icon",{staticClass:"icon",attrs:{small:"",color:"white"}},[t._v("mdi-"+t._s(t.icon))])],1)}),[],!1,null,"18149688",null);e.default=component.exports;l()(component,{VBtn:f.a,VIcon:d.a})},287:function(t,e,n){"use strict";var r=n(24),o=n(31),c=n.n(o),l=n(513),f=n(514),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-main",{staticClass:"ma-0 pa-0 "},[e("v-container",{staticClass:" ma-0 pa-0",attrs:{fluid:""}},[e("nuxt",{staticClass:" ma-0 pa-0"})],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VContainer:l.a,VMain:f.a})},288:function(t,e,n){"use strict";var r=n(24),o=n(31),c=n.n(o),l=n(512),f=n(513),d=n(514),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("v-main",{staticClass:"ma-0 pa-0 "},[e("v-container",{staticClass:" ma-0 pa-0",attrs:{fluid:""}},[e("nuxt",{staticClass:" ma-0 pa-0"})],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:l.a,VContainer:f.a,VMain:d.a})},295:function(t,e,n){n(296),t.exports=n(297)},319:function(t,e,n){"use strict";n(253)},320:function(t,e,n){var r=n(13)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},325:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("bc32c83c",content,!0,{sourceMap:!1})},326:function(t,e,n){var r=n(13),o=n(327),c=n(328),l=n(329),f=n(330),d=n(331),m=r(!1),v=o(c),x=o(l),_=o(f),h=o(d);m.push([t.i,'@font-face{font-family:"WolfFont";font-style:normal;font-weight:400;src:local("WolfFont"),url('+v+') format("woff2")}@font-face{font-family:"CodeFont";font-style:normal;font-weight:400;src:local("CodeFont"),url('+x+') format("woff2")}@font-face{font-family:"ActorV10";font-style:normal;font-weight:400;src:local("ActorV10"),url('+_+') format("woff2")}#__nuxt .app{font-family:"WolfFont";color:#37474f;font-size:14px}#__nuxt .app h1,#__nuxt .app h2,#__nuxt .app h3,#__nuxt .app h4{color:#263238}.v-footer span{align-items:center;vertical-align:middle;line-height:90%}p>code{font-family:"CodeFont";color:#00f;font-weight:700}body{background-color:#eee;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;zoom:82%}.post-tags{background-color:#fff;padding-left:5px;padding-right:5px}.tag{box-shadow:-8px 15px 26px -14px #3dc21b}.tag a{background-color:#00a756;border-radius:4px;display:inline-block;cursor:pointer;margin-left:5px;text-decoration:none;font-family:Arial;font-size:12px;padding:1px 9px;-webkit-text-decoration-color:#fff;text-decoration-color:#fff;color:#fff}.tag a.link{color:#2196f3;text-decoration:none}.tag a.link.nuxt-link-exact-active.nuxt-link-active{color:#fff;text-decoration:none}.image img{border-radius:.1%}.image.post-image{height:200px;width:200px;border-radius:50%}a,a.v-card{text-decoration:none}a.v-card:hover,a:hover{text-decoration:underline}.icon.icon-link{background-image:url('+h+');display:none;width:20px;height:20px;background-size:20px 20px}strong{color:#006400}strong.button{box-shadow:0 0 0 0 #00a756;background:linear-gradient(180deg,#00a756 5%,#00a756);background-color:#00a756;border-radius:5px;display:inline-block;cursor:pointer;color:#fff;font-family:"WolfFont";font-size:11px;font-weight:700;padding:5px 12px;text-decoration:none;text-transform:uppercase}strong.button:hover{background:linear-gradient(180deg,#00a756 5%,#00a756);background-color:#04703c}strong.button:active{position:relative;top:1px}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.sheet .nuxt-content-container,.sheet .post-header{padding:20px}.markdown table{width:100%}hr{position:relative;top:10px;height:12px;background:transparent;margin-bottom:40px;border:none;border-top:1px solid #e5e2e2}hr.dotted{border:2px grey;border-bottom:2px dotted grey;color:#fff;background-color:#fff}hr.dotted,hr.v-divider{top:0;margin-bottom:0}.nuxt-content-container .nuxt-content h3{margin-top:16px}.nuxt-content-container .nuxt-content ul{width:50%;background-color:#efefef}.nuxt-content-container .nuxt-content ul code{background-color:transparent}',""]),t.exports=m},328:function(t,e,n){t.exports=n.p+"fonts/content.9566aaa.woff2"},329:function(t,e,n){t.exports=n.p+"fonts/content-a.4b50ddc.woff2"},330:function(t,e,n){t.exports=n.p+"fonts/actor-v10-latin-regular.545137d.woff2"},331:function(t,e,n){t.exports=n.p+"img/link_variant.103f2fa.svg"},378:function(t,e,n){var map={"./add_measure_unit.png":379,"./admission-info.png":380,"./admission-visits.png":381,"./assign_staff.png":382,"./assigned-consultation.png":383,"./authentication_screen.png":384,"./beds.png":385,"./bills.png":386,"./blood_bank.png":387,"./concultations.png":388,"./consultation.png":389,"./consultation_consts.png":390,"./consultations_chart.png":391,"./create-patient.png":392,"./create-self-service.png":393,"./create_lab-service.png":394,"./create_user.png":395,"./create_ward.png":396,"./createdepartment.png":397,"./createrole.png":398,"./createuser.png":399,"./dashboard.png":400,"./delete_user.png":401,"./departments.png":402,"./diagnoses-list.png":403,"./diagnosis_form.png":404,"./edit-contact.png":405,"./finance_dashboard.png":406,"./laboratory.png":407,"./laboratory_reports.png":408,"./medicines.png":409,"./outstanding-bill.png":410,"./paid-bill.png":411,"./patients.png":412,"./paybill.png":413,"./pharmacy.png":414,"./profile-image-upload.png":415,"./profile.png":416,"./radiology.png":417,"./receipt.png":418,"./registration_frequency.png":419,"./roles.png":420,"./selfservice-users.png":421,"./service-tab.png":422,"./staffs.png":423,"./statistical_pie_chart.png":424,"./tool_bar.png":425,"./totals.png":426,"./transaction.png":427,"./un-assigned-consultation.png":428,"./units.png":429,"./update_blood_bank.png":430,"./users.png":431,"./view-contact.png":432,"./view_admission.png":433,"./view_occupied_bed.png":434,"./view_report.png":435,"./view_ward.png":436,"./viewdepartment.png":437,"./wards_list.png":438};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=378},379:function(t,e,n){t.exports=n.p+"img/add_measure_unit.2139b58.png"},380:function(t,e,n){t.exports=n.p+"img/admission-info.2229143.png"},381:function(t,e,n){t.exports=n.p+"img/admission-visits.068cc86.png"},382:function(t,e,n){t.exports=n.p+"img/assign_staff.d078163.png"},383:function(t,e,n){t.exports=n.p+"img/assigned-consultation.74b8ac6.png"},384:function(t,e,n){t.exports=n.p+"img/authentication_screen.25f4a2d.png"},385:function(t,e,n){t.exports=n.p+"img/beds.9ac3f3a.png"},386:function(t,e,n){t.exports=n.p+"img/bills.c0d247a.png"},387:function(t,e,n){t.exports=n.p+"img/blood_bank.43cae99.png"},388:function(t,e,n){t.exports=n.p+"img/concultations.c572631.png"},389:function(t,e,n){t.exports=n.p+"img/consultation.59588ec.png"},390:function(t,e,n){t.exports=n.p+"img/consultation_consts.b3bf23d.png"},391:function(t,e,n){t.exports=n.p+"img/consultations_chart.dec2286.png"},392:function(t,e,n){t.exports=n.p+"img/create-patient.a956fbc.png"},393:function(t,e,n){t.exports=n.p+"img/create-self-service.964415c.png"},394:function(t,e,n){t.exports=n.p+"img/create_lab-service.97be923.png"},395:function(t,e,n){t.exports=n.p+"img/create_user.f48857e.png"},396:function(t,e,n){t.exports=n.p+"img/create_ward.9e81330.png"},397:function(t,e,n){t.exports=n.p+"img/createdepartment.15c7747.png"},398:function(t,e,n){t.exports=n.p+"img/createrole.c082904.png"},399:function(t,e,n){t.exports=n.p+"img/createuser.17cb2d2.png"},400:function(t,e,n){t.exports=n.p+"img/dashboard.6f578ea.png"},401:function(t,e,n){t.exports=n.p+"img/delete_user.8115455.png"},402:function(t,e,n){t.exports=n.p+"img/departments.ef01a95.png"},403:function(t,e,n){t.exports=n.p+"img/diagnoses-list.50b71b1.png"},404:function(t,e,n){t.exports=n.p+"img/diagnosis_form.f377689.png"},405:function(t,e,n){t.exports=n.p+"img/edit-contact.4f9abe4.png"},406:function(t,e,n){t.exports=n.p+"img/finance_dashboard.d75e70c.png"},407:function(t,e,n){t.exports=n.p+"img/laboratory.578855c.png"},408:function(t,e,n){t.exports=n.p+"img/laboratory_reports.c14755e.png"},409:function(t,e,n){t.exports=n.p+"img/medicines.7693130.png"},410:function(t,e,n){t.exports=n.p+"img/outstanding-bill.ca9fb9c.png"},411:function(t,e,n){t.exports=n.p+"img/paid-bill.8ba3332.png"},412:function(t,e,n){t.exports=n.p+"img/patients.ffa85c6.png"},413:function(t,e,n){t.exports=n.p+"img/paybill.06b09c4.png"},414:function(t,e,n){t.exports=n.p+"img/pharmacy.82434bf.png"},415:function(t,e,n){t.exports=n.p+"img/profile-image-upload.2bcb188.png"},416:function(t,e,n){t.exports=n.p+"img/profile.6ed4594.png"},417:function(t,e,n){t.exports=n.p+"img/radiology.2971813.png"},418:function(t,e,n){t.exports=n.p+"img/receipt.24a8993.png"},419:function(t,e,n){t.exports=n.p+"img/registration_frequency.af3fa20.png"},420:function(t,e,n){t.exports=n.p+"img/roles.2718353.png"},421:function(t,e,n){t.exports=n.p+"img/selfservice-users.6f9ca08.png"},422:function(t,e,n){t.exports=n.p+"img/service-tab.751a2e8.png"},423:function(t,e,n){t.exports=n.p+"img/staffs.4ce5109.png"},424:function(t,e,n){t.exports=n.p+"img/statistical_pie_chart.8303777.png"},425:function(t,e,n){t.exports=n.p+"img/tool_bar.4d0ede5.png"},426:function(t,e,n){t.exports=n.p+"img/totals.bc923e2.png"},427:function(t,e,n){t.exports=n.p+"img/transaction.d120c33.png"},428:function(t,e,n){t.exports=n.p+"img/un-assigned-consultation.db1ff35.png"},429:function(t,e,n){t.exports=n.p+"img/units.6fb7689.png"},430:function(t,e,n){t.exports=n.p+"img/update_blood_bank.ed5133d.png"},431:function(t,e,n){t.exports=n.p+"img/users.d451f63.png"},432:function(t,e,n){t.exports=n.p+"img/view-contact.b86e12a.png"},433:function(t,e,n){t.exports=n.p+"img/view_admission.bb0bc8c.png"},434:function(t,e,n){t.exports=n.p+"img/view_occupied_bed.a38ea6f.png"},435:function(t,e,n){t.exports=n.p+"img/view_report.09213cb.png"},436:function(t,e,n){t.exports=n.p+"img/view_ward.1cda26f.png"},437:function(t,e,n){t.exports=n.p+"img/viewdepartment.ca0c573.png"},438:function(t,e,n){t.exports=n.p+"img/wards_list.8b73829.png"},439:function(t,e,n){"use strict";n(271)},440:function(t,e,n){var r=n(13)(!1);r.push([t.i,".img[data-v-45423d9e]{border:0 solid #eee;border-radius:0;padding:0}img[data-v-45423d9e]{max-width:100%;width:100%;-o-object-fit:cover;object-fit:cover}",""]),t.exports=r},443:function(t,e,n){t.exports=n.p+"img/logo.4cd9e95.png"},444:function(t,e,n){"use strict";n(272)},445:function(t,e,n){var r=n(13)(!1);r.push([t.i,"@media screen and (min-width:265px){.articles[data-v-33abccbc]{position:fixed;padding:.2% 4% .3% 2%;background-color:#424242}}ul li a[data-v-33abccbc]{display:inline-block}",""]),t.exports=r},497:function(t,e,n){"use strict";n.r(e);var r=n(17),o=(n(55),n(182),n(27),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=3;break}return e.articles=[],n.abrupt("return");case 3:return n.next=5,e.$content("".concat(e.$i18n.locale)).limit(6).search(t).fetch();case 5:e.articles=n.sent;case 6:case"end":return n.stop()}}),n)})))()}}}),c=(n(444),n(24)),l=n(31),f=n.n(l),d=n(522),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-text-field",{staticClass:"shrink mr-3",attrs:{"hide-details":"",label:"Search",placeholder:"Search",filled:"",dense:"",flat:"",solo:"",light:"",clearable:"","single-line":"","append-icon":"mdi-magnify"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1),t._v(" "),n("div",{staticClass:"mt-0"},[t.articles.length?n("ul",{staticClass:"articles"},t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("NuxtLink",{attrs:{to:article.slug}},[t._v("\n          "+t._s(article.title)+"\n        ")])],1)})),0):t._e()])])}),[],!1,null,"33abccbc",null);e.default=component.exports;f()(component,{VTextField:d.a})},92:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(319),n(24)),c=n(31),l=n.n(c),f=n(512),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[295,8,1,9]]]);