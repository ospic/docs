(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{522:function(t,e,r){"use strict";r.r(e);var n=r(18),o=(r(65),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=t.app,e.next=3,r("".concat(o.i18n.locale),n.slug).where({"author.name":{$regex:[n.author,"i"]}}).without("body").sortBy("createdAt","asc").fetch();case 3:return c=e.sent,e.abrupt("return",{articles:c});case 5:case"end":return e.stop()}}),e)})))()}}),c=r(24),l=r(31),v=r.n(l),_=r(495),d=r(490),h=r(494),m=r(497),f=r(60),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"2"}}),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-sheet",{staticClass:"pa-5",attrs:{"min-height":"120vh"}},[r("h1",[t._v("Author: "+t._s(t.articles[0].author.name))]),t._v(" "),r("p",[t._v("Bio: "+t._s(t.articles[0].author.bio))]),t._v(" "),r("h3",[t._v("Here are a list of articles by "+t._s(t.articles[0].author.name)+":")]),t._v(" "),r("v-divider"),t._v(" "),t._l(t.articles,(function(e,n){return r("div",{key:e.dir},[r("h1",{staticClass:"h1 post-h1"},[r("nuxt-link",{attrs:{to:e.slug}},[t._v("\n              "+t._s(n)+". "+t._s(e.title))])],1),t._v(" "),e.description?r("p",{staticClass:"excerpt"},[t._v("\n            "+t._s(e.description)+"\n          ")]):t._e(),t._v(" "),r("div",{staticClass:"post-details"},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[t._v("Last updated: "+t._s(t.formatDate(e.updatedAt)))]),t._v(" "),r("v-col",{staticClass:"d-flex flex-row-reverse",attrs:{cols:"12",md:"6",sm:"12"}},[r("v-tags",{attrs:{tags:e.tags}})],1)],1)],1),t._v(" "),r("v-divider")],1)}))],2)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"2"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:_.a,VContainer:d.a,VDivider:h.a,VRow:m.a,VSheet:f.a})}}]);