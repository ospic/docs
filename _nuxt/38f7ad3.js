(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{521:function(e,t,n){"use strict";n.r(t);var o=n(15),c=n(18),r=(n(65),{layout:"blog",asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,r,l,d,f,h,w,m,v,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,n=e.error,c=e.$content,r=e.app,console.log(r.i18n.locale),t.prev=2,t.next=5,c("docs/".concat(r.i18n.locale),{deep:!0}).fetch();case 5:return l=t.sent,d=Object(o.a)(l,1),f=d[0],t.next=10,c("docs/".concat(r.i18n.locale)).only(["title","description","img","slug","author"]).sortBy("createdAt","asc").fetch();case 10:return h=t.sent,t.next=13,c("docs/".concat(r.i18n.locale)).only(["title","slug"]).sortBy("createdAt","asc").fetch();case 13:return w=t.sent,m=Object(o.a)(w,2),v=m[0],x=m[1],t.abrupt("return",{post:f,pages:h,prev:v,next:x});case 20:t.prev=20,t.t0=t.catch(2),n({statusCode:404,message:"Page could not be found"});case 23:case"end":return t.stop()}}),t,null,[[2,20]])})))()},mounted:function(){Prism.highlightAll()},computed:{screen:function(){return console.log(window.screen.height),window.screen.height-150}}}),l=n(24),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("blog-page",{attrs:{pages:e.pages,post:e.post,next:e.next}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlogPage:n(213).default})}}]);