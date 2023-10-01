"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[914],{9914:function(e,i,n){n.r(i),n.d(i,{default:function(){return B}});var t=n(7689),s=n(1582),r=n(5241),l=n(2791),a=n(4554),d=n(890),o=n(3400),x=n(9281),c=n(9836),h=n(3382),v=n(5855),u=n(3994),m=n(6775),j=n(7195),p=n(7047),g=n(4721),f=n(184),Z=function(){return(0,f.jsxs)(a.Z,{sx:{px:{md:3,xs:1}},children:[(0,f.jsx)(p.Z,{variant:"text",sx:{mx:"auto",width:"min(95%, 300px)",height:50,mb:1}}),(0,f.jsxs)(a.Z,{sx:{display:"flex",flexDirection:{md:"row",xs:"column"},gap:3,width:"100%"},children:[(0,f.jsx)(a.Z,{children:(0,f.jsx)(p.Z,{variant:"rounded",sx:{height:{md:"60vh",xs:"500px"},width:{md:"min(35vw, 400px)",xs:"min(100%, 400px)"},mx:"auto"}})}),(0,f.jsxs)(s.Z,{direction:"column",spacing:1,flexGrow:1,divider:(0,f.jsx)(g.Z,{}),children:[(0,f.jsx)(p.Z,{variant:"text",sx:{height:35,width:{md:"65%",xs:"80%"},alignSelf:{md:"start",xs:"center"}}}),(0,f.jsx)(p.Z,{variant:"text",sx:{height:35,width:{md:"50%",xs:"85%"},alignSelf:{md:"start",xs:"center"}}}),(0,f.jsx)(p.Z,{variant:"text",sx:{height:35,width:{md:"60%",xs:"90%"},alignSelf:{md:"start",xs:"center"}}}),(0,f.jsx)(p.Z,{variant:"text",sx:{height:35,width:{md:"55%",xs:"70%"},alignSelf:{md:"start",xs:"center"}}}),(0,f.jsx)(p.Z,{variant:"text",sx:{height:35,width:{md:"65%",xs:"80%"},alignSelf:{md:"start",xs:"center"}}}),(0,f.jsx)(p.Z,{variant:"text",sx:{height:35,width:{md:"50%",xs:"90%"},alignSelf:{md:"start",xs:"center"}}}),(0,f.jsx)(p.Z,{variant:"text",sx:{height:35,width:{md:"60%",xs:"60%"},alignSelf:{md:"start",xs:"center"}}})]})]}),(0,f.jsxs)(a.Z,{mt:2,children:[(0,f.jsx)(p.Z,{variant:"text",height:25}),(0,f.jsx)(p.Z,{variant:"text",height:25}),(0,f.jsx)(p.Z,{variant:"text",height:25,width:"60%"})]})]})},w=n(260),y={hidden:{scale:.95,opacity:0},visible:{scale:1,opacity:1}},b={hidden:{x:-30,opacity:0},visible:{x:0,opacity:1}},S={hidden:{x:30,opacity:0},visible:{x:0,opacity:1}},E={hidden:{x:-30,opacity:0},visible:{x:0,opacity:1}},I=(0,m.E)(a.Z),R=(0,m.E)(d.Z),C=function(e){var i=e.movieId,n=r.E.useGetByIdQuery(i,{}),s=n.currentData,p=n.isError,g=n.isSuccess,C=n.isFetching,A=(0,t.s0)(),T=[{name:"Released:",value:null===s||void 0===s?void 0:s.Released},{name:"Actors:",value:null===s||void 0===s?void 0:s.Actors},{name:"Language",value:null===s||void 0===s?void 0:s.Language},{name:"Genre",value:null===s||void 0===s?void 0:s.Genre},{name:"Awards",value:null===s||void 0===s?void 0:s.Awards},{name:"Rated",value:null===s||void 0===s?void 0:s.Rated},{name:"Ratings",value:null===s||void 0===s?void 0:s.Ratings.map((function(e){return e.Source+": "+e.Value})).join(", ")},{name:"Director",value:null===s||void 0===s?void 0:s.Director},{name:"Country",value:null===s||void 0===s?void 0:s.Country},{name:"Total seasons",value:null===s||void 0===s?void 0:s.totalSeasons},{name:"Writer",value:null===s||void 0===s?void 0:s.Writer},{name:"Metascore",value:null===s||void 0===s?void 0:s.Metascore}];return C?(0,f.jsx)(Z,{}):p?(0,f.jsx)(d.Z,{variant:"h4",align:"center",children:"Network error! Try later."}):g&&"False"===s.Response?(0,f.jsx)(d.Z,{variant:"h4",align:"center",children:"Movie date not found!"}):(0,f.jsx)(f.Fragment,{children:g&&"True"===s.Response&&(0,f.jsxs)(a.Z,{sx:{overflowX:"hidden"},children:[(0,f.jsxs)(I,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:y,sx:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:[(0,f.jsx)(j.S.Consumer,{children:function(e){var i=e.deviceType;return(0,f.jsx)(f.Fragment,{children:"PC"===i&&(0,f.jsx)(o.Z,{onClick:function(){return A(-1)},size:"large",children:(0,f.jsx)(w.Z,{})})})}}),(0,f.jsxs)(R,{variants:y,variant:"h4",sx:{flexGrow:1,textAlign:"center",fontSize:{md:"3rem",sm:"2rem",xs:"1.7rem"},mb:2},children:[(null===s||void 0===s?void 0:s.Title)||"Title"," (",(null===s||void 0===s?void 0:s.Year)||"year",")"]})]}),(0,f.jsxs)(a.Z,{sx:{display:"flex",flexDirection:{md:"row",xs:"column"},gap:2,mb:{sm:2,xs:0},flexGrow:1},children:[(0,f.jsx)(m.E.img,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:b,style:{width:"min(100%, 400px)",height:"fit-content",objectFit:"contain",borderRadius:"8px",margin:"0 auto"},src:null===s||void 0===s?void 0:s.Poster,alt:null===s||void 0===s?void 0:s.Title,loading:"lazy"}),(0,f.jsxs)(I,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:S,sx:{flexGrow:1},children:[(0,f.jsx)(d.Z,{variant:"h5",sx:{textAlign:{md:"start",xs:"center"},ml:{md:2,xs:0}},children:"About Film"}),(0,f.jsx)(x.Z,{children:(0,f.jsx)(c.Z,{"aria-label":"simple table",children:(0,f.jsx)(h.Z,{children:T.map((function(e,i){return(0,f.jsx)(l.Fragment,{children:e.value&&"N/A"!==e.value&&(0,f.jsxs)(v.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,f.jsx)(u.Z,{component:"th",scope:"row",children:e.name}),(0,f.jsx)(u.Z,{children:e.value})]},i)},i)}))})})})]})]}),(null===s||void 0===s?void 0:s.Plot)&&"N/A"!==s.Plot&&(0,f.jsx)(I,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-40px"},variants:E,children:(0,f.jsxs)(d.Z,{variant:"body1",children:["Storyline: ",s.Plot]})})]})})},A=n(9439),T=n(5527),W=n(8096),D=n(4925),G=n(9321),k=n(4638),z=n(3239),F=n(4984),P=function(){return(0,f.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",gap:2},children:[(0,f.jsxs)(W.Z,{fullWidth:!0,disabled:!0,sx:{width:"70%",maxWidth:"490px"},children:[(0,f.jsx)(D.Z,{children:"Season"}),(0,f.jsx)(G.Z,{value:1,label:"Season",children:(0,f.jsx)(k.Z,{value:1,children:"1"})})]}),(0,f.jsx)(d.Z,{children:"Ops. Error !!!"})]})},L={initial:{scale:1},hover:{scale:1.1,transition:{duration:.3}}},V=(0,m.E)(T.Z),M=function(e){var i=e.movieId,n=(0,l.useState)(1),s=(0,A.Z)(n,2),o=s[0],x=s[1],c=r.E.useGetSeasonQuery({movieId:i,season:o},{}),h=c.currentData,v=c.data,u=c.isLoading,m=c.isError,j=c.isFetching,g=c.isSuccess,Z=(0,t.s0)();return u?(0,f.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,f.jsx)(p.Z,{variant:"rounded",sx:{width:"70%",maxWidth:"490px",height:56}})}):m?(0,f.jsx)(P,{}):(0,f.jsxs)(a.Z,{children:[(0,f.jsxs)(a.Z,{sx:{position:"relative",display:"flex",justifyContent:"center"},children:[(0,f.jsxs)(W.Z,{fullWidth:!0,disabled:!h,sx:{width:"70%",maxWidth:"490px"},children:[(0,f.jsx)(D.Z,{children:"Season"}),(0,f.jsx)(G.Z,{value:o,label:"Season",onChange:function(e){x((function(){return+e.target.value}))},MenuProps:{disableScrollLock:!0},children:g&&v.Episodes&&v.Episodes.length>0?N(Number(null===v||void 0===v?void 0:v.totalSeasons)):(0,f.jsx)(k.Z,{value:1,children:"Seasons not found"})})]}),j&&(0,f.jsx)(z.Z,{size:24,sx:{position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]}),"True"===(null===v||void 0===v?void 0:v.Response)&&(0,f.jsx)(a.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:3,py:2},children:null===v||void 0===v?void 0:v.Episodes.map((function(e){return(0,f.jsxs)(V,{initial:"initial",whileHover:"hover",variants:L,sx:{boxSizing:"border-box",width:"40%",minWidth:130,maxWidth:200,p:2,cursor:"pointer"},onClick:function(){return n=e.imdbID,void Z(F.gw.path.replace(":id",i).replace(":episodeId",n));var n},elevation:5,children:[(0,f.jsxs)(d.Z,{sx:{fontSize:{sm:"1rem",xs:"0.75rem"},textAlign:"center"},children:[e.Episode,". ",e.Title]}),(0,f.jsxs)(d.Z,{sx:{fontSize:{sm:"1rem",xs:"0.75rem"},textAlign:"center"},children:["Released: ",e.Released]}),(0,f.jsxs)(d.Z,{sx:{fontSize:{sm:"1rem",xs:"0.75rem"},textAlign:"center"},children:["Rating: ",e.imdbRating]})]},e.Episode)}))})]})};function N(e){for(var i=[],n=1;n<=e;n++)i.push((0,f.jsx)(k.Z,{value:n,children:n},n));return i}var Q=n(9363),B=function(){var e=(0,t.UO)(),i=r.E.useGetByIdQuery(e.id||"",{}).currentData;return(0,f.jsx)(Q.Z,{children:(0,f.jsxs)(s.Z,{spacing:8,children:[(0,f.jsx)(C,{movieId:e.id||""}),"series"===(null===i||void 0===i?void 0:i.Type)&&(0,f.jsx)(M,{movieId:e.id||""})]})})}}}]);
//# sourceMappingURL=914.8e184237.chunk.js.map