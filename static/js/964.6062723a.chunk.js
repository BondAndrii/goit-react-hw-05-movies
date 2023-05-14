"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{398:function(e,t,r){r.d(t,{Z:function(){return o}});r(791);var n=r(87),a=r(689),c="Maper_Maper__4zIDv",s="Maper_MaperItem__v8LOy",u=r(184),o=function(e){var t=e.data,r=(0,a.TH)();return(0,u.jsx)("ul",{className:c,children:t.map((function(e){var t=e.id,a=e.title,c=e.name;return(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{className:s,to:"/movies/".concat(t),state:{from:r},children:a||c})},t)}))})}},964:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),o=r(87),i=r(689),p=r(705),l=r(184),h=function(e){var t=e.onSubmit;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.J9,{initialValues:{query:" "},onSubmit:function(e,r){var n=r.resetForm;t(e.query.trim()),n()},children:(0,l.jsxs)(p.l0,{children:[(0,l.jsx)(p.gN,{as:"input",autoComplete:"off",placeholder:"Search movie...",name:"query",autoFocus:!0}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})})},v=r(398),f=r(390),d=function(){var e=(0,u.useState)(!1),t=(0,a.Z)(e,2),r=t[0],c=t[1],p=(0,u.useState)(null),d=(0,a.Z)(p,2),m=d[0],w=d[1],g=(0,u.useState)([]),y=(0,a.Z)(g,2),x=y[0],b=y[1],k=(0,o.lr)(),Z=(0,a.Z)(k,2),_=Z[0],j=Z[1],S=_.get("query")||"";console.log(S);var q=(0,i.TH)();(0,u.useEffect)((function(){(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==S){e.next=3;break}return e.abrupt("return");case 3:return c(!0),w(null),e.next=7,f.Z.fetchMovie(S);case 7:if(0!==(t=e.sent).total_results){e.next=11;break}return alert("Sorry, there are no images matching your search query '".concat(S,"'. Please try again.")),e.abrupt("return","");case 11:b(t.results),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0.message);case 17:return e.prev=17,c(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})))()}),[S,q.search]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{onSubmit:function(e){""!==e?(j({query:e}),b([])):j({})}}),r&&(0,l.jsx)("div",{children:"Loading..."}),m&&!r&&(0,l.jsx)("h2",{style:{textAlign:"center"},children:"Try again. Something went wrong!"}),!m&&!r&&x.length>0&&(0,l.jsx)(v.Z,{data:x,state:{from:q}})]})}},390:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),s=r(243),u="278bf75944205bdb0a6474cdc0be106c";function o(){return(o=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any movies");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US&page=1&per_page=12&include_adult=false"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any movies");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return r=e.sent,n=r.data,console.log("fetchDetails",n),e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Oops, we don`t have any movies");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u));case 3:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u));case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var v={fetchMovie:function(e){return i.apply(this,arguments)},fetchDetails:function(e){return p.apply(this,arguments)},fetchCast:function(e){return l.apply(this,arguments)},fetchReviews:function(e){return h.apply(this,arguments)},fetchTrend:function(){return o.apply(this,arguments)}};t.Z=v}}]);
//# sourceMappingURL=964.6062723a.chunk.js.map