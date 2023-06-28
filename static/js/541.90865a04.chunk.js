"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[541],{541:function(e,r,n){n.r(r),n.d(r,{default:function(){return D}});var i=n(2791),t=n(7689),o=n(890),a=n(9164),s=n(6314),l=n(5138),c=n(4554),d=n(9281),u=n(9836),v=n(3382),m=n(5855),x=n(3994),h=n(184),f=function(e){var r=e.movieId,n=l.g.useGetMovieByIdQuery(r,{}),t=n.data,a=n.isError,s=[{name:"Released:",value:null===t||void 0===t?void 0:t.Released},{name:"Actors:",value:null===t||void 0===t?void 0:t.Actors},{name:"Language",value:null===t||void 0===t?void 0:t.Language},{name:"Genre",value:null===t||void 0===t?void 0:t.Genre},{name:"Awards",value:null===t||void 0===t?void 0:t.Awards},{name:"Rated",value:null===t||void 0===t?void 0:t.Rated},{name:"Director",value:null===t||void 0===t?void 0:t.Director},{name:"Country",value:null===t||void 0===t?void 0:t.Country},{name:"Total seasons",value:null===t||void 0===t?void 0:t.totalSeasons},{name:"Writer",value:null===t||void 0===t?void 0:t.Writer}];return(0,h.jsxs)(h.Fragment,{children:["True"===(null===t||void 0===t?void 0:t.Response)&&(0,h.jsxs)(c.Z,{children:[(0,h.jsxs)(o.Z,{variant:"h4",sx:{textAlign:"center",fontSize:{md:"3rem",sm:"2rem",xs:"1.7rem"},mb:2},children:[(null===t||void 0===t?void 0:t.Title)||"Title"," (",(null===t||void 0===t?void 0:t.Year)||"year",")"]}),(0,h.jsxs)(c.Z,{sx:{display:"flex",flexDirection:{md:"row",xs:"column"},gap:2,mb:{sm:2,xs:0},flexGrow:1},children:[(0,h.jsx)("img",{style:{width:"min(100%, 400px)",height:"fit-content",objectFit:"contain",borderRadius:"8px",margin:"0 auto"},src:null===t||void 0===t?void 0:t.Poster,alt:null===t||void 0===t?void 0:t.Title,loading:"lazy"}),(0,h.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,h.jsx)(o.Z,{variant:"h5",sx:{textAlign:{sm:"start",xs:"center"},ml:{sm:2,xs:0}},children:"About Film"}),(0,h.jsx)(d.Z,{children:(0,h.jsx)(u.Z,{"aria-label":"simple table",children:(0,h.jsx)(v.Z,{children:s.map((function(e,r){return(0,h.jsx)(i.Fragment,{children:e.value&&"N/A"!==e.value&&(0,h.jsxs)(m.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,h.jsx)(x.Z,{component:"th",scope:"row",children:e.name}),(0,h.jsx)(x.Z,{children:e.value})]},r)},r)}))})})})]})]}),(null===t||void 0===t?void 0:t.Plot)&&"N/A"!==t.Plot&&(0,h.jsx)(c.Z,{children:(0,h.jsxs)(o.Z,{variant:"body1",children:["Storyline: ",t.Plot]})})]}),a&&(0,h.jsx)(h.Fragment,{children:"Error"})]})},p=n(9439),Z=n(8096),g=n(4925),j=n(9321),y=n(4638),b=n(3239),k=n(5527),S=n(1570),w=function(){return(0,h.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",gap:2},children:[(0,h.jsxs)(Z.Z,{fullWidth:!0,disabled:!0,sx:{width:"70%",maxWidth:"490px"},children:[(0,h.jsx)(g.Z,{children:"Season"}),(0,h.jsx)(j.Z,{value:1,label:"Season",children:(0,h.jsx)(y.Z,{value:1,children:"1"})})]}),(0,h.jsx)(o.Z,{children:"Ops. Error !!!"})]})},R=function(e){var r=e.movieId,n=(0,i.useState)(1),a=(0,p.Z)(n,2),s=a[0],d=a[1],u=l.g.useGetSeasonQuery({movieId:r,season:s},{}),v=u.currentData,m=u.data,x=u.isError,f=(0,t.s0)();return x?(0,h.jsx)(w,{}):(0,h.jsxs)(c.Z,{children:[(0,h.jsxs)(c.Z,{sx:{position:"relative",display:"flex",justifyContent:"center"},children:[(0,h.jsxs)(Z.Z,{fullWidth:!0,disabled:!v,sx:{width:"70%",maxWidth:"490px"},children:[(0,h.jsx)(g.Z,{children:"Season"}),(0,h.jsx)(j.Z,{value:s,label:"Season",onChange:function(e){d((function(){return+e.target.value}))},children:null!==m&&void 0!==m&&m.Episodes&&m.Episodes.length>0?P(Number(null===m||void 0===m?void 0:m.totalSeasons)):(0,h.jsx)(y.Z,{value:1,children:"1"})})]}),!v&&(0,h.jsx)(b.Z,{size:24,sx:{position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]}),"True"===(null===m||void 0===m?void 0:m.Response)&&(0,h.jsx)(c.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:3,py:2},children:null===m||void 0===m?void 0:m.Episodes.map((function(e){return(0,h.jsxs)(k.Z,{sx:{boxSizing:"border-box",width:"40%",minWidth:130,maxWidth:200,p:2,transition:"0.3s transform",":hover":{transform:"scale(105%)"},cursor:"pointer"},onClick:function(){return n=e.imdbID,void f(S.gw.path.replace(":id",r).replace(":episodeId",n));var n},elevation:5,children:[(0,h.jsxs)(o.Z,{sx:{fontSize:{sm:"1rem",xs:"0.75rem"},textAlign:"center"},children:[e.Episode,". ",e.Title]}),(0,h.jsxs)(o.Z,{sx:{fontSize:{sm:"1rem",xs:"0.75rem"},textAlign:"center"},children:["Released: ",e.Released]}),(0,h.jsxs)(o.Z,{sx:{fontSize:{sm:"1rem",xs:"0.75rem"},textAlign:"center"},children:["Rating: ",e.imdbRating]})]},e.Episode)}))})]})};function P(e){for(var r=[],n=1;n<=e;n++)r.push((0,h.jsx)(y.Z,{value:n,children:n},n));return r}var C=n(3789),D=function(){var e,r=(0,t.UO)(),n=l.g.useGetMovieByIdQuery(r.id||"",{});return(0,i.useLayoutEffect)((function(){window.scrollTo({top:0})}),[]),n.isError?(0,h.jsx)(o.Z,{align:"center",children:"Error!"}):n.currentData?(0,h.jsx)(C.Z,{children:(0,h.jsx)(a.Z,{maxWidth:"xl",sx:{px:{md:2,sm:1,xs:2},pt:2,pb:3},disableGutters:!0,children:(0,h.jsxs)(s.Z,{spacing:8,children:[(0,h.jsx)(f,{movieId:r.id||""}),"series"===(null===(e=n.currentData)||void 0===e?void 0:e.Type)&&(0,h.jsx)(R,{movieId:r.id||""})]})})}):(0,h.jsx)(C.Z,{loading:!0})}},3239:function(e,r,n){n.d(r,{Z:function(){return E}});var i=n(168),t=n(3366),o=n(7462),a=n(2791),s=n(8182),l=n(4419),c=n(2554),d=n(4036),u=n(1402),v=n(6934),m=n(5878),x=n(1217);function h(e){return(0,x.Z)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f,p,Z,g,j,y,b,k,S=n(184),w=["className","color","disableShrink","size","style","thickness","value","variant"],R=44,P=(0,c.F4)(j||(j=f||(f=(0,i.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),C=(0,c.F4)(y||(y=p||(p=(0,i.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),D=(0,v.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r[n.variant],r["color".concat((0,d.Z)(n.color))]]}})((function(e){var r=e.ownerState,n=e.theme;return(0,o.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:n.transitions.create("transform")},"inherit"!==r.color&&{color:(n.vars||n).palette[r.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,c.iv)(b||(b=Z||(Z=(0,i.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),P)})),A=(0,v.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,r){return r.svg}})({display:"block"}),M=(0,v.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,r){var n=e.ownerState;return[r.circle,r["circle".concat((0,d.Z)(n.variant))],n.disableShrink&&r.circleDisableShrink]}})((function(e){var r=e.ownerState,n=e.theme;return(0,o.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var r=e.ownerState;return"indeterminate"===r.variant&&!r.disableShrink&&(0,c.iv)(k||(k=g||(g=(0,i.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),C)})),E=a.forwardRef((function(e,r){var n=(0,u.Z)({props:e,name:"MuiCircularProgress"}),i=n.className,a=n.color,c=void 0===a?"primary":a,v=n.disableShrink,m=void 0!==v&&v,x=n.size,f=void 0===x?40:x,p=n.style,Z=n.thickness,g=void 0===Z?3.6:Z,j=n.value,y=void 0===j?0:j,b=n.variant,k=void 0===b?"indeterminate":b,P=(0,t.Z)(n,w),C=(0,o.Z)({},n,{color:c,disableShrink:m,size:f,thickness:g,value:y,variant:k}),E=function(e){var r=e.classes,n=e.variant,i=e.color,t=e.disableShrink,o={root:["root",n,"color".concat((0,d.Z)(i))],svg:["svg"],circle:["circle","circle".concat((0,d.Z)(n)),t&&"circleDisableShrink"]};return(0,l.Z)(o,h,r)}(C),N={},T={},F={};if("determinate"===k){var G=2*Math.PI*((R-g)/2);N.strokeDasharray=G.toFixed(3),F["aria-valuenow"]=Math.round(y),N.strokeDashoffset="".concat(((100-y)/100*G).toFixed(3),"px"),T.transform="rotate(-90deg)"}return(0,S.jsx)(D,(0,o.Z)({className:(0,s.Z)(E.root,i),style:(0,o.Z)({width:f,height:f},T,p),ownerState:C,ref:r,role:"progressbar"},F,P,{children:(0,S.jsx)(A,{className:E.svg,ownerState:C,viewBox:"".concat(22," ").concat(22," ").concat(R," ").concat(R),children:(0,S.jsx)(M,{className:E.circle,style:N,ownerState:C,cx:R,cy:R,r:(R-g)/2,fill:"none",strokeWidth:g})})}))}))},6314:function(e,r,n){n.d(r,{Z:function(){return P}});var i=n(4942),t=n(3366),o=n(7462),a=n(2791),s=n(8182),l=n(2466),c=n(4419),d=n(1217),u=n(3457),v=n(7078),m=n(8519),x=n(5080),h=n(1184),f=n(5682),p=n(184),Z=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,x.Z)(),j=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return r.root}});function y(e){return(0,v.Z)({props:e,name:"MuiStack",defaultTheme:g})}function b(e,r){var n=a.Children.toArray(e).filter(Boolean);return n.reduce((function(e,i,t){return e.push(i),t<n.length-1&&e.push(a.cloneElement(r,{key:"separator-".concat(t)})),e}),[])}var k=function(e){var r=e.ownerState,n=e.theme,t=(0,o.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:n},(0,h.P$)({values:r.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(r.spacing){var a=(0,f.hB)(n),s=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof r.spacing&&null!=r.spacing[n]||"object"===typeof r.direction&&null!=r.direction[n])&&(e[n]=!0),e}),{}),c=(0,h.P$)({values:r.direction,base:s}),d=(0,h.P$)({values:r.spacing,base:s});"object"===typeof c&&Object.keys(c).forEach((function(e,r,n){if(!c[e]){var i=r>0?c[n[r-1]]:"column";c[e]=i}}));t=(0,l.Z)(t,(0,h.k9)({theme:n},d,(function(e,n){return r.useFlexGap?{gap:(0,f.NA)(a,e)}:{"& > :not(style) + :not(style)":(0,i.Z)({margin:0},"margin".concat((t=n?c[n]:r.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[t])),(0,f.NA)(a,e))};var t})))}return t=(0,h.dt)(n.breakpoints,t)};var S=n(6934),w=n(1402),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.createStyledComponent,n=void 0===r?j:r,i=e.useThemeProps,l=void 0===i?y:i,u=e.componentName,v=void 0===u?"MuiStack":u,x=n(k),h=a.forwardRef((function(e,r){var n=l(e),i=(0,m.Z)(n),a=i.component,u=void 0===a?"div":a,h=i.direction,f=void 0===h?"column":h,g=i.spacing,j=void 0===g?0:g,y=i.divider,k=i.children,S=i.className,w=i.useFlexGap,R=void 0!==w&&w,P=(0,t.Z)(i,Z),C={direction:f,spacing:j,useFlexGap:R},D=(0,c.Z)({root:["root"]},(function(e){return(0,d.Z)(v,e)}),{});return(0,p.jsx)(x,(0,o.Z)({as:u,ownerState:C,ref:r,className:(0,s.Z)(D.root,S)},P,{children:y?b(k,y):k}))}));return h}({createStyledComponent:(0,S.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return r.root}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiStack"})}}),P=R}}]);
//# sourceMappingURL=541.90865a04.chunk.js.map