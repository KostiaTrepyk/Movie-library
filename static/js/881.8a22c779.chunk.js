"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[881],{5344:function(r,e,n){n.d(e,{Z:function(){return m}});var t=n(4554),a=n(1648),i=n(2791),o=n(890),s=n(5519),l=n(1258),c=n(184),d=(0,i.forwardRef)((function(r,e){var n,a,i,d,u,f=r.movieData,m=r.onClick;return(0,c.jsxs)(t.Z,{sx:{boxSizing:"border-box",px:3,py:2,cursor:"pointer",width:"min(100%, 340px)"},onClick:function(){return m(f.id)},ref:e,children:[(0,c.jsx)("img",{src:f.primaryImage&&null!==(n=f.primaryImage)&&void 0!==n&&n.url&&(null===(a=f.primaryImage)||void 0===a?void 0:a.width)<1500?null===(i=f.primaryImage)||void 0===i?void 0:i.url:"https://thumbs.dreamstime.com/b/ikona-paska-filmu-film-programu-word-wyizolowany-na-bia%C5%82ym-tle-proste-logo-wektorowe-230410953.jpg",alt:null===(d=f.primaryImage)||void 0===d?void 0:d.caption.plainText,style:{backgroundColor:s.Z[800],width:"100%",borderRadius:"15px 15px 10px 10px",aspectRatio:9/14,objectFit:"cover",imageRendering:"crisp-edges"},decoding:"async",loading:"lazy"}),(0,c.jsxs)(t.Z,{sx:{display:"flex",textAlign:"center",pt:1,gap:2},children:[(0,c.jsxs)(o.Z,{flexGrow:1,children:[f.titleText.text," ",null===(u=f.releaseYear)||void 0===u?void 0:u.year]}),(0,c.jsx)(o.Z,{bgcolor:s.Z[800],color:l.Z[600],variant:"body2",sx:{py:.8,px:1,height:"min-content",borderRadius:2},children:f.titleType.text.toUpperCase()})]})]},f._id)})),u={hidden:{y:70,opacity:0},visible:{y:0,opacity:1},hover:{scale:.95,transition:{type:"spring"}}},f=(0,a.E)(d),m=function(r){var e=r.movies,n=r.onMovieClick;return(0,c.jsx)(t.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:{lg:2,xs:1}},children:e.map((function(r){return(0,c.jsx)(f,{movieData:r,onClick:n,initial:"hidden",whileInView:u.visible,whileHover:u.hover,variants:u,viewport:{once:!0}},r.id)}))})}},3441:function(r,e,n){n.r(e),n.d(e,{default:function(){return R}});var t=n(9439),a=n(2791),i=n(4554),o=n(890),s=n(7047),l=n(8096),c=n(4925),d=n(9321),u=n(4638),f=n(3239),m=n(3652),v=n(5344),b=n(2840),p=n(7689),g=n(184),x=function(){var r,e=(0,a.useState)(1),n=(0,t.Z)(e,2),x=n[0],h=(n[1],(0,a.useState)("Drama")),Z=(0,t.Z)(h,2),y=Z[0],j=Z[1],w=m.q.useGetUpcomingQuery({page:x,genre:y}),k=m.q.useGetAllGenresQuery(void 0),C=(0,p.s0)();return(0,g.jsxs)(i.Z,{sx:{color:"white",p:{md:4,xs:2},background:"linear-gradient(90deg, rgba(30,30,30,1) 0%, rgba(39,39,39,1) 50%, rgba(30,30,30,1) 100%)"},component:"section",children:[(0,g.jsxs)(i.Z,{display:"flex",justifyContent:"center",gap:2,alignItems:"center",children:[(0,g.jsx)(o.Z,{align:"center",variant:"h4",sx:{py:2},children:"Upcoming titles"}),k.isLoading&&(0,g.jsx)(s.Z,{variant:"rounded",width:100}),k.isSuccess&&(0,g.jsxs)(i.Z,{position:"relative",children:[(0,g.jsxs)(l.Z,{sx:{minWidth:150},disabled:w.isFetching,children:[(0,g.jsx)(c.Z,{children:"Genre"}),(0,g.jsx)(d.Z,{value:y,label:"Genre",onChange:function(r){j((function(){return r.target.value}))},children:null===(r=k.data)||void 0===r?void 0:r.results.map((function(r){return(0,g.jsx)(u.Z,{value:r,children:r},r)}))})]}),w.isFetching&&(0,g.jsx)(f.Z,{size:24,sx:{position:"absolute",top:"50%",left:"50%",mt:"-12px",ml:"-12px"}})]})]}),w.isLoading&&(0,g.jsx)(i.Z,{children:"Loading..."}),w.data&&(0,g.jsx)(v.Z,{movies:w.data.results,onMovieClick:function(r){C(b.uX.path.replace(":id",r))}})]})},h=n(1582),Z=n(7391),y=n(3400),j=n(1648),w=n(9723),k=n(7482),C=n(5519),S=n.p+"static/media/homepage_gackground.0288bc7a75d1723a59a0.webp",I=function(r){var e=r.children,n=r.loading,t=void 0!==n&&n;return(0,g.jsx)(i.Z,{sx:{bgcolor:C.Z[900]},children:(0,g.jsxs)(i.Z,{sx:{boxSizing:"border-box",minHeight:"100svh",paddingTop:"64px",bgcolor:"#0002",backgroundImage:"url(".concat(S,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPositionX:"35%",backgroundPositionY:"0%",backgroundAttachment:"fixed",backgroundBlendMode:"darken",objectFit:"cover",printColorAdjust:"exact"},children:[t&&(0,g.jsx)(k.Z,{}),e]})})},P=n(5403),z={hidden:{x:-100,opacity:0},visible:function(r){return{x:0,opacity:1,transition:{delay:.2*r}}}},B=(0,j.E)(i.Z),L=(0,j.E)(o.Z),M=function(){var r=(0,a.useState)(""),e=(0,t.Z)(r,2),n=e[0],i=e[1],o=(0,p.s0)();return(0,g.jsx)(I,{children:(0,g.jsx)(B,{initial:"hidden",whileInView:"visible",sx:{boxSizing:"border-box",mt:"15svh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:{sm:"73%",xs:"100%"},px:1},children:(0,g.jsxs)(h.Z,{direction:"column",sx:{color:"#ddd"},children:[(0,g.jsx)(L,{variants:z,custom:1,variant:"h1",sx:{fontSize:{lg:"5.5rem",md:"5rem",sm:"4rem",xs:"3rem"}},children:"Movie Library"}),(0,g.jsx)(L,{variants:z,custom:2,variant:"h4",sx:{fontSize:{lg:"2.1rem",md:"1.9rem",sm:"1.6rem",xs:"1.2rem"}},children:"Find new moives and series"}),(0,g.jsxs)(B,{sx:{display:"flex",alignItems:"center",gap:2,mt:{sm:2,xs:1}},component:"form",onSubmit:function(r){r.preventDefault();var e=(0,w.V)({title:n});o(b.k9.path+e)},variants:z,custom:3,children:[(0,g.jsx)(Z.Z,{label:"Title of the movie",sx:{width:"55%"},autoComplete:"off",value:n,onChange:function(r){return i((function(){return r.target.value}))},inputProps:{pattern:".{3,}"}}),(0,g.jsx)(y.Z,{size:"large",type:"submit",children:(0,g.jsx)(P.Z,{})})]})]})})})},R=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(M,{}),(0,g.jsx)(x,{})]})}},7482:function(r,e,n){n.d(e,{Z:function(){return A}});var t=n(168),a=n(3366),i=n(7462),o=n(2791),s=n(8182),l=n(4419),c=n(2554),d=n(2065),u=n(4036),f=n(3967),m=n(6934),v=n(1402),b=n(5878),p=n(1217);function g(r){return(0,p.Z)("MuiLinearProgress",r)}(0,b.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var x,h,Z,y,j,w,k,C,S,I,P,z,B=n(184),L=["className","color","value","valueBuffer","variant"],M=(0,c.F4)(k||(k=x||(x=(0,t.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),R=(0,c.F4)(C||(C=h||(h=(0,t.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),q=(0,c.F4)(S||(S=Z||(Z=(0,t.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),D=function(r,e){return"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress["".concat(e,"Bg")]:"light"===r.palette.mode?(0,d.$n)(r.palette[e].main,.62):(0,d._j)(r.palette[e].main,.5)},F=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(r,e){var n=r.ownerState;return[e.root,e["color".concat((0,u.Z)(n.color))],e[n.variant]]}})((function(r){var e=r.ownerState,n=r.theme;return(0,i.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:D(n,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})})),G=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(r,e){var n=r.ownerState;return[e.dashed,e["dashedColor".concat((0,u.Z)(n.color))]]}})((function(r){var e=r.ownerState,n=r.theme,t=D(n,e.color);return(0,i.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,c.iv)(I||(I=y||(y=(0,t.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),q)),N=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(r,e){var n=r.ownerState;return[e.bar,e["barColor".concat((0,u.Z)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&e.bar1Indeterminate,"determinate"===n.variant&&e.bar1Determinate,"buffer"===n.variant&&e.bar1Buffer]}})((function(r){var e=r.ownerState,n=r.theme;return(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(n.vars||n).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===e.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(r){var e=r.ownerState;return("indeterminate"===e.variant||"query"===e.variant)&&(0,c.iv)(P||(P=j||(j=(0,t.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),M)})),T=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(r,e){var n=r.ownerState;return[e.bar,e["barColor".concat((0,u.Z)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&e.bar2Indeterminate,"buffer"===n.variant&&e.bar2Buffer]}})((function(r){var e=r.ownerState,n=r.theme;return(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(n.vars||n).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:D(n,e.color),transition:"transform .".concat(4,"s linear")})}),(function(r){var e=r.ownerState;return("indeterminate"===e.variant||"query"===e.variant)&&(0,c.iv)(z||(z=w||(w=(0,t.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),R)})),A=o.forwardRef((function(r,e){var n=(0,v.Z)({props:r,name:"MuiLinearProgress"}),t=n.className,o=n.color,c=void 0===o?"primary":o,d=n.value,m=n.valueBuffer,b=n.variant,p=void 0===b?"indeterminate":b,x=(0,a.Z)(n,L),h=(0,i.Z)({},n,{color:c,variant:p}),Z=function(r){var e=r.classes,n=r.variant,t=r.color,a={root:["root","color".concat((0,u.Z)(t)),n],dashed:["dashed","dashedColor".concat((0,u.Z)(t))],bar1:["bar","barColor".concat((0,u.Z)(t)),("indeterminate"===n||"query"===n)&&"bar1Indeterminate","determinate"===n&&"bar1Determinate","buffer"===n&&"bar1Buffer"],bar2:["bar","buffer"!==n&&"barColor".concat((0,u.Z)(t)),"buffer"===n&&"color".concat((0,u.Z)(t)),("indeterminate"===n||"query"===n)&&"bar2Indeterminate","buffer"===n&&"bar2Buffer"]};return(0,l.Z)(a,g,e)}(h),y=(0,f.Z)(),j={},w={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==d){j["aria-valuenow"]=Math.round(d),j["aria-valuemin"]=0,j["aria-valuemax"]=100;var k=d-100;"rtl"===y.direction&&(k=-k),w.bar1.transform="translateX(".concat(k,"%)")}else 0;if("buffer"===p)if(void 0!==m){var C=(m||0)-100;"rtl"===y.direction&&(C=-C),w.bar2.transform="translateX(".concat(C,"%)")}else 0;return(0,B.jsxs)(F,(0,i.Z)({className:(0,s.Z)(Z.root,t),ownerState:h,role:"progressbar"},j,{ref:e},x,{children:["buffer"===p?(0,B.jsx)(G,{className:Z.dashed,ownerState:h}):null,(0,B.jsx)(N,{className:Z.bar1,ownerState:h,style:w.bar1}),"determinate"===p?null:(0,B.jsx)(T,{className:Z.bar2,ownerState:h,style:w.bar2})]}))}))}}]);
//# sourceMappingURL=881.8a22c779.chunk.js.map