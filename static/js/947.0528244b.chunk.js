"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{947:function(e,t,n){n.r(t);var r=n(861),a=n(439),i=n(757),o=n.n(i),s=n(791),c=n(689),l=n(87),u=n(390),p=n(732),v=n(184);t.default=function(){var e,t,n,i,d,h=(0,s.useState)(!1),f=(0,a.Z)(h,2),g=f[0],m=f[1],w=(0,s.useState)(null),x=(0,a.Z)(w,2),j=x[0],y=x[1],b=(0,s.useState)([]),k=(0,a.Z)(b,2),Z=k[0],_=k[1],O=(0,c.UO)().movieId;console.log((0,c.UO)()),console.log("in movieDetails",O);var S=(0,c.TH)(),E=(0,s.useRef)(null!==(e=null===(t=S.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,s.useEffect)((function(){(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),y(null),e.next=5,u.Z.fetchDetails(O);case 5:t=e.sent,console.log(t),_(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:return e.prev=13,m(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()}),[O]);var U=Math.round(10*(null===Z||void 0===Z?void 0:Z.vote_average)),C=null===Z||void 0===Z||null===(n=Z.genres)||void 0===n?void 0:n.map((function(e){return e.name})).join(", ");return(0,v.jsxs)(v.Fragment,{children:[g&&(0,v.jsx)("div",{children:"Loading..."}),j&&!g&&(0,v.jsx)("h2",{style:{textAlign:"center"},children:"Try again. Something went wrong!"}),!j&&!g&&Z&&(0,v.jsxs)("div",{children:[(0,v.jsx)(l.rU,{to:E.current,children:" Go Back "}),(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:null!==Z&&void 0!==Z&&Z.poster_path?"https://image.tmdb.org/t/p/original".concat(null===Z||void 0===Z?void 0:Z.poster_path):p,alt:(null===Z||void 0===Z?void 0:Z.title)||(null===Z||void 0===Z?void 0:Z.original_title),width:"200"})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:(null===Z||void 0===Z?void 0:Z.title)||(null===Z||void 0===Z?void 0:Z.original_title)}),(0,v.jsxs)("p",{children:["User score: ",U]}),(null===Z||void 0===Z||null===(i=Z.overview)||void 0===i?void 0:i.length)>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:null===Z||void 0===Z?void 0:Z.overview})]}),(null===Z||void 0===Z||null===(d=Z.genres)||void 0===d?void 0:d.length)>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("p",{children:C})]})]})]}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{children:"Additional information"}),(0,v.jsxs)("nav",{children:[(0,v.jsx)(l.OL,{to:"cast",state:{from:S},children:"Cast"}),(0,v.jsx)(l.OL,{to:"reviews",state:{from:S},children:"Reviews"})]})]}),(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(c.j3,{})})]})}},390:function(e,t,n){var r=n(861),a=n(757),i=n.n(a),o=n(243),s="278bf75944205bdb0a6474cdc0be106c";function c(){return(c=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(s));case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any movies");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&per_page=12&include_adult=false"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any movies");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,r=n.data,console.log("fetchDetails",r),e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Oops, we don`t have any movies");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var d={fetchMovie:function(e){return l.apply(this,arguments)},fetchDetails:function(e){return u.apply(this,arguments)},fetchCast:function(e){return p.apply(this,arguments)},fetchReviews:function(e){return v.apply(this,arguments)},fetchTrend:function(){return c.apply(this,arguments)}};t.Z=d},732:function(e,t,n){e.exports=n.p+"static/media/NoPoster.8c29f9b71a6a964cf022.png"}}]);
//# sourceMappingURL=947.0528244b.chunk.js.map