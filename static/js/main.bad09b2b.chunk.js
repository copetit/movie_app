(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),s=a.n(c),o=a(7),i=a(1),m=a(15),l=a.n(m),u=a(30),p=a(10),v=a(11),d=a(13),E=a(12),f=a(31),y=a.n(f);a(57);var g=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,s=e.poster,i=e.genres;return r.a.createElement(o.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:c,poster:s,genres:i}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__tilte"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"}," ",i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))," "),r.a.createElement("p",{className:"movie__summary"},c.slice(0,180),"..."))))},h=(a(63),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var _=function(){return r.a.createElement("div",{className:"container center"},r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{className:"img-profile",src:"".concat("/movie_app","/redpanda.jpg"),alt:"redpanda"})),r.a.createElement("div",{className:"ms-box"},r.a.createElement("span",null," Redpanda is not RED ")))},b=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);a(64);var N=function(){return r.a.createElement("div",{className:"navi"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};var j=function(){return r.a.createElement(o.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:h}),r.a.createElement(i.a,{path:"/about",component:_}),r.a.createElement(i.a,{path:"/movie/:id",component:b}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.bad09b2b.chunk.js.map