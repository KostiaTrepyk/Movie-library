"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[853],{7853:function(e,i,t){t.r(i),t.d(i,{default:function(){return C}});var n=t(7689),s=t(1582),r=t(5241),l=t(890),a=t(4554),d=t(9281),x=t(9836),o=t(3382),c=t(5855),h=t(3994),u=t(2791),v=t(7047),m=t(4721),j=t(184),Z=function(){return(0,j.jsxs)(a.Z,{sx:{px:{md:3,xs:1}},children:[(0,j.jsx)(v.Z,{variant:"text",sx:{mx:"auto",width:"min(95%, 300px)",height:50,mb:1}}),(0,j.jsxs)(a.Z,{sx:{display:"flex",flexDirection:{md:"row",xs:"column"},gap:3,width:"100%"},children:[(0,j.jsx)(a.Z,{children:(0,j.jsx)(v.Z,{variant:"rounded",sx:{height:{md:"60vh",xs:"500px"},width:{md:"min(35vw, 400px)",xs:"min(100%, 400px)"},mx:"auto"}})}),(0,j.jsxs)(s.Z,{direction:"column",spacing:1,flexGrow:1,divider:(0,j.jsx)(m.Z,{}),children:[(0,j.jsx)(v.Z,{variant:"text",sx:{height:35,width:{md:"65%",xs:"80%"},alignSelf:{md:"start",xs:"center"}}}),(0,j.jsx)(v.Z,{variant:"text",sx:{height:35,width:{md:"50%",xs:"85%"},alignSelf:{md:"start",xs:"center"}}}),(0,j.jsx)(v.Z,{variant:"text",sx:{height:35,width:{md:"60%",xs:"90%"},alignSelf:{md:"start",xs:"center"}}}),(0,j.jsx)(v.Z,{variant:"text",sx:{height:35,width:{md:"55%",xs:"70%"},alignSelf:{md:"start",xs:"center"}}}),(0,j.jsx)(v.Z,{variant:"text",sx:{height:35,width:{md:"65%",xs:"80%"},alignSelf:{md:"start",xs:"center"}}}),(0,j.jsx)(v.Z,{variant:"text",sx:{height:35,width:{md:"50%",xs:"90%"},alignSelf:{md:"start",xs:"center"}}}),(0,j.jsx)(v.Z,{variant:"text",sx:{height:35,width:{md:"60%",xs:"60%"},alignSelf:{md:"start",xs:"center"}}})]})]}),(0,j.jsxs)(a.Z,{mt:2,children:[(0,j.jsx)(v.Z,{variant:"text",height:25}),(0,j.jsx)(v.Z,{variant:"text",height:25}),(0,j.jsx)(v.Z,{variant:"text",height:25,width:"60%"})]})]})},p=function(e){var i=e.movieId,t=r.E.useGetByIdQuery(i,{}),n=t.data,s=t.isError,v=t.isSuccess,m=t.isFetching,p=[{name:"Released:",value:null===n||void 0===n?void 0:n.Released},{name:"Actors:",value:null===n||void 0===n?void 0:n.Actors},{name:"Language",value:null===n||void 0===n?void 0:n.Language},{name:"Genre",value:null===n||void 0===n?void 0:n.Genre},{name:"Awards",value:null===n||void 0===n?void 0:n.Awards},{name:"Rated",value:null===n||void 0===n?void 0:n.Rated},{name:"Director",value:null===n||void 0===n?void 0:n.Director},{name:"Country",value:null===n||void 0===n?void 0:n.Country},{name:"Total seasons",value:null===n||void 0===n?void 0:n.totalSeasons},{name:"Writer",value:null===n||void 0===n?void 0:n.Writer}];return m?(0,j.jsx)(Z,{}):s?(0,j.jsx)(l.Z,{variant:"h4",align:"center",children:"Network error! Try later."}):v&&"False"===n.Response?(0,j.jsx)(l.Z,{variant:"h4",align:"center",children:"Movie date not found!"}):(0,j.jsx)(j.Fragment,{children:"True"===(null===n||void 0===n?void 0:n.Response)&&(0,j.jsxs)(a.Z,{children:[(0,j.jsxs)(l.Z,{variant:"h4",sx:{textAlign:"center",fontSize:{md:"3rem",sm:"2rem",xs:"1.7rem"},mb:2},children:[(null===n||void 0===n?void 0:n.Title)||"Title"," (",(null===n||void 0===n?void 0:n.Year)||"year",")"]}),(0,j.jsxs)(a.Z,{sx:{display:"flex",flexDirection:{md:"row",xs:"column"},gap:2,mb:{sm:2,xs:0},flexGrow:1},children:[(0,j.jsx)("img",{style:{width:"min(100%, 400px)",height:"fit-content",objectFit:"contain",borderRadius:"8px",margin:"0 auto"},src:null===n||void 0===n?void 0:n.Poster,alt:null===n||void 0===n?void 0:n.Title,loading:"lazy"}),(0,j.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,j.jsx)(l.Z,{variant:"h5",sx:{textAlign:{md:"start",xs:"center"},ml:{md:2,xs:0}},children:"About Film"}),(0,j.jsx)(d.Z,{children:(0,j.jsx)(x.Z,{"aria-label":"simple table",children:(0,j.jsx)(o.Z,{children:p.map((function(e,i){return(0,j.jsx)(u.Fragment,{children:e.value&&"N/A"!==e.value&&(0,j.jsxs)(c.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,j.jsx)(h.Z,{component:"th",scope:"row",children:e.name}),(0,j.jsx)(h.Z,{children:e.value})]},i)},i)}))})})})]})]}),(null===n||void 0===n?void 0:n.Plot)&&"N/A"!==n.Plot&&(0,j.jsx)(a.Z,{children:(0,j.jsxs)(l.Z,{variant:"body1",children:["Storyline: ",n.Plot]})})]})})},g=t(9439),f=t(8096),w=t(4925),b=t(9321),y=t(4638),S=t(3239),A=t(5527),R=t(2840),E=function(){return(0,j.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",gap:2},children:[(0,j.jsxs)(f.Z,{fullWidth:!0,disabled:!0,sx:{width:"70%",maxWidth:"490px"},children:[(0,j.jsx)(w.Z,{children:"Season"}),(0,j.jsx)(b.Z,{value:1,label:"Season",children:(0,j.jsx)(y.Z,{value:1,children:"1"})})]}),(0,j.jsx)(l.Z,{children:"Ops. Error !!!"})]})},I=function(e){var i=e.movieId,t=(0,u.useState)(1),s=(0,g.Z)(t,2),d=s[0],x=s[1],o=r.E.useGetSeasonQuery({movieId:i,season:d},{}),c=o.currentData,h=o.data,v=o.isError,m=(0,n.s0)();return v?(0,j.jsx)(E,{}):(0,j.jsxs)(a.Z,{children:[(0,j.jsxs)(a.Z,{sx:{position:"relative",display:"flex",justifyContent:"center"},children:[(0,j.jsxs)(f.Z,{fullWidth:!0,disabled:!c,sx:{width:"70%",maxWidth:"490px"},children:[(0,j.jsx)(w.Z,{children:"Season"}),(0,j.jsx)(b.Z,{value:d,label:"Season",onChange:function(e){x((function(){return+e.target.value}))},children:null!==h&&void 0!==h&&h.Episodes&&h.Episodes.length>0?T(Number(null===h||void 0===h?void 0:h.totalSeasons)):(0,j.jsx)(y.Z,{value:1,children:"1"})})]}),!c&&(0,j.jsx)(S.Z,{size:24,sx:{position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]}),"True"===(null===h||void 0===h?void 0:h.Response)&&(0,j.jsx)(a.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:3,py:2},children:null===h||void 0===h?void 0:h.Episodes.map((function(e){return(0,j.jsxs)(A.Z,{sx:{boxSizing:"border-box",width:"40%",minWidth:130,maxWidth:200,p:2,transition:"0.3s transform",":hover":{transform:"scale(105%)"},cursor:"pointer"},onClick:function(){return t=e.imdbID,void m(R.gw.path.replace(":id",i).replace(":episodeId",t));var t},elevation:5,children:[(0,j.jsxs)(l.Z,{sx:{fontSize:{sm:"1rem",xs:"0.75rem"},textAlign:"center"},children:[e.Episode,". ",e.Title]}),(0,j.jsxs)(l.Z,{sx:{fontSize:{sm:"1rem",xs:"0.75rem"},textAlign:"center"},children:["Released: ",e.Released]}),(0,j.jsxs)(l.Z,{sx:{fontSize:{sm:"1rem",xs:"0.75rem"},textAlign:"center"},children:["Rating: ",e.imdbRating]})]},e.Episode)}))})]})};function T(e){for(var i=[],t=1;t<=e;t++)i.push((0,j.jsx)(y.Z,{value:t,children:t},t));return i}var W=t(9835),C=function(){var e=(0,n.UO)(),i=r.E.useGetByIdQuery(e.id||"",{}).data;return(0,j.jsx)(W.Z,{children:(0,j.jsxs)(s.Z,{spacing:8,children:[(0,j.jsx)(p,{movieId:e.id||""}),"series"===(null===i||void 0===i?void 0:i.Type)&&(0,j.jsx)(I,{movieId:e.id||""})]})})}}}]);
//# sourceMappingURL=853.3484ac19.chunk.js.map