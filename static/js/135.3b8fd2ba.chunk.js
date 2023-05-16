"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{7135:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(5861),a=n(9439),i=n(7757),s=n.n(i),o=n(2791),c=n(1087),u=n(7689),l=n(4390),p="MovieDetails_GoBack__yiz0d",v="MovieDetails_Banner__DKSTa",d="MovieDetails_StandartInform__m2-OU",h="MovieDetails_Inform__XDs3z",f="MovieDetails_Navigation__WwkDP",m=n(4732),w=n(6673),x=n(184),g=function(){var e,t,n,i,g,_=(0,o.useState)(!1),j=(0,a.Z)(_,2),y=j[0],k=j[1],b=(0,o.useState)(null),Z=(0,a.Z)(b,2),D=Z[0],O=Z[1],S=(0,o.useState)([]),U=(0,a.Z)(S,2),M=U[0],N=U[1],E=(0,u.UO)().movieId,C=(0,u.TH)(),F=(0,o.useRef)(null!==(e=null===(t=C.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,o.useEffect)((function(){(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),O(null),e.next=5,l.Z.fetchDetails(E);case 5:t=e.sent,N(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),O(!0);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}),[E]);var B=Math.round(10*(null===M||void 0===M?void 0:M.vote_average)),G=null===M||void 0===M||null===(n=M.genres)||void 0===n?void 0:n.map((function(e){return e.name})).join(", ");return(0,x.jsxs)(x.Fragment,{children:[y&&(0,x.jsx)(w.Z,{}),D&&!y&&(0,x.jsx)("h2",{style:{textAlign:"center"},children:"\u0421\u043e\u0440\u044f\u043d, \u043f\u0440\u043e\u0456\u0437\u043e\u0448\u043e\u043b \u043e\u0442\u0440\u0456\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u0438\u0439 \u043f\u043e\u0456\u0441\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437"}),!D&&!y&&M&&(0,x.jsxs)("div",{children:[(0,x.jsx)(c.rU,{className:p,to:F.current,children:" Go Back "}),(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("img",{className:v,src:null!==M&&void 0!==M&&M.poster_path?"https://image.tmdb.org/t/p/original".concat(null===M||void 0===M?void 0:M.poster_path):m,alt:(null===M||void 0===M?void 0:M.title)||(null===M||void 0===M?void 0:M.original_title)}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("h2",{children:(null===M||void 0===M?void 0:M.title)||(null===M||void 0===M?void 0:M.original_title)}),(0,x.jsxs)("p",{children:["User score: ",B]}),(null===M||void 0===M||null===(i=M.overview)||void 0===i?void 0:i.length)>0&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:null===M||void 0===M?void 0:M.overview})]}),(null===M||void 0===M||null===(g=M.genres)||void 0===g?void 0:g.length)>0&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h4",{children:"Genres"}),(0,x.jsx)("p",{children:G})]})]})]})]}),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("nav",{className:f,children:[(0,x.jsx)("h2",{children:"Additional information"}),(0,x.jsx)(c.rU,{to:"cast",children:"Cast"}),(0,x.jsx)(c.rU,{to:"reviews",children:"Reviews"})]})}),(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)(w.Z,{}),children:(0,x.jsx)(u.j3,{})})]})}},4390:function(e,t,n){var r=n(5861),a=n(7757),i=n.n(a),s=n(1243),o="278bf75944205bdb0a6474cdc0be106c";function c(){return(c=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any movies");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&per_page=12&include_adult=false"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any movies");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any movies");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var d={fetchTop:function(){return c.apply(this,arguments)},fetchMovie:function(e){return u.apply(this,arguments)},fetchDetails:function(e){return l.apply(this,arguments)},fetchCast:function(e){return p.apply(this,arguments)},fetchReviews:function(e){return v.apply(this,arguments)}};t.Z=d},4732:function(e,t,n){e.exports=n.p+"static/media/NoPoster.8c29f9b71a6a964cf022.png"}}]);
//# sourceMappingURL=135.3b8fd2ba.chunk.js.map