(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{357:function(e,t,n){"use strict";n.r(t);var o=n(12),r=n.n(o),c=n(9),l=n.n(c),h=n(3),d=n.n(h),f={layout:"blog",asyncData:function(e){e.params;var t=e.error,n=e.$content,o=e.app;return l()(d.a.mark((function e(){var c,l,h,f,w,m,v,x;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(o.i18n.locale),e.prev=1,e.next=4,n("".concat(o.i18n.locale),{deep:!0}).fetch();case 4:return c=e.sent,l=r()(c,1),h=l[0],e.next=9,n("".concat(o.i18n.locale)).only(["title","description","img","slug","author"]).sortBy("createdAt","asc").fetch();case 9:return f=e.sent,e.next=12,n("".concat(o.i18n.locale)).only(["title","slug"]).sortBy("createdAt","asc").fetch();case 12:return w=e.sent,m=r()(w,2),v=m[0],x=m[1],e.abrupt("return",{post:h,pages:f,prev:v,next:x});case 19:e.prev=19,e.t0=e.catch(1),t({statusCode:404,message:"Page could not be found"});case 22:case"end":return e.stop()}}),e,null,[[1,19]])})))()},mounted:function(){Prism.highlightAll()},computed:{screen:function(){return console.log(window.screen.height),window.screen.height-150}}},w=n(13),component=Object(w.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("blog-page",{attrs:{pages:this.pages,post:this.post,next:this.next}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlogPage:n(88).default})}}]);