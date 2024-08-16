"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4902],{83162:(r,a,e)=>{e.d(a,{A:()=>b});var t=e(83673),o=e(6614),s=e(7552),n=e(93878),l=e(70799),i=e(51148),c=e(4785),u=e(74893),d=e(69500);const p=(0,u.A)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var v=e(28375),m=e(43045);const A=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],g=(0,i.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[e.variant],e.colorDefault&&a.colorDefault]}})((({theme:r})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(r.vars||r).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,o.A)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:(0,o.A)({backgroundColor:r.palette.grey[400]},r.applyStyles("dark",{backgroundColor:r.palette.grey[600]})))}]}))),f=(0,i.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(r,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),h=(0,i.Ay)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(r,a)=>a.fallback})({width:"75%",height:"75%"}),b=s.forwardRef((function(r,a){const e=(0,c.b)({props:r,name:"MuiAvatar"}),{alt:i,children:u,className:p,component:b="div",slots:y={},slotProps:w={},imgProps:x,sizes:k,src:S,srcSet:M,variant:P="circular"}=e,R=(0,t.A)(e,A);let N=null;const j=function({crossOrigin:r,referrerPolicy:a,src:e,srcSet:t}){const[o,n]=s.useState(!1);return s.useEffect((()=>{if(!e&&!t)return;n(!1);let o=!0;const s=new Image;return s.onload=()=>{o&&n("loaded")},s.onerror=()=>{o&&n("error")},s.crossOrigin=r,s.referrerPolicy=a,s.src=e,t&&(s.srcset=t),()=>{o=!1}}),[r,a,e,t]),o}((0,o.A)({},x,{src:S,srcSet:M})),C=S||M,D=C&&"error"!==j,z=(0,o.A)({},e,{colorDefault:!D,component:b,variant:P}),G=(r=>{const{classes:a,variant:e,colorDefault:t}=r,o={root:["root",e,t&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.A)(o,v.k,a)})(z),[F,I]=(0,m.A)("img",{className:G.img,elementType:f,externalForwardedProps:{slots:y,slotProps:{img:(0,o.A)({},x,w.img)}},additionalProps:{alt:i,src:S,srcSet:M,sizes:k},ownerState:z});return N=D?(0,d.jsx)(F,(0,o.A)({},I)):u||0===u?u:C&&i?i[0]:(0,d.jsx)(h,{ownerState:z,className:G.fallback}),(0,d.jsx)(g,(0,o.A)({as:b,ownerState:z,className:(0,n.A)(G.root,p),ref:a},R,{children:N}))}))},28375:(r,a,e)=>{e.d(a,{A:()=>n,k:()=>s});var t=e(33761),o=e(85693);function s(r){return(0,o.Ay)("MuiAvatar",r)}const n=(0,t.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},34902:(r,a,e)=>{e.r(a),e.d(a,{avatarGroupClasses:()=>A,default:()=>y,getAvatarGroupUtilityClass:()=>m});var t=e(83673),o=e(6614),s=e(7552),n=(e(19487),e(93878)),l=e(70799),i=e(51148),c=e(4785),u=e(28375),d=e(83162),p=e(33761),v=e(85693);function m(r){return(0,v.Ay)("MuiAvatarGroup",r)}const A=(0,p.A)("MuiAvatarGroup",["root","avatar"]);var g=e(69500);const f=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],h={small:-16,medium:null},b=(0,i.Ay)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(r,a)=>(0,o.A)({[`& .${A.avatar}`]:a.avatar},a.root)})((({theme:r,ownerState:a})=>{const e=a.spacing&&void 0!==h[a.spacing]?h[a.spacing]:-a.spacing;return{[`& .${u.A.root}`]:{border:`2px solid ${(r.vars||r).palette.background.default}`,boxSizing:"content-box",marginLeft:null!=e?e:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}})),y=s.forwardRef((function(r,a){var e;const i=(0,c.b)({props:r,name:"MuiAvatarGroup"}),{children:u,className:p,component:v="div",componentsProps:A={},max:h=5,renderSurplus:y,slotProps:w={},spacing:x="medium",total:k,variant:S="circular"}=i,M=(0,t.A)(i,f);let P=h<2?2:h;const R=(0,o.A)({},i,{max:h,spacing:x,component:v,variant:S}),N=(r=>{const{classes:a}=r;return(0,l.A)({root:["root"],avatar:["avatar"]},m,a)})(R),j=s.Children.toArray(u).filter((r=>s.isValidElement(r))),C=k||j.length;C===P&&(P+=1),P=Math.min(C+1,P);const D=Math.min(j.length,P-1),z=Math.max(C-P,C-D,0),G=y?y(z):`+${z}`,F=null!=(e=w.additionalAvatar)?e:A.additionalAvatar;return(0,g.jsxs)(b,(0,o.A)({as:v,ownerState:R,className:(0,n.A)(N.root,p),ref:a},M,{children:[z?(0,g.jsx)(d.A,(0,o.A)({variant:S},F,{className:(0,n.A)(N.avatar,null==F?void 0:F.className),children:G})):null,j.slice(0,D).reverse().map((r=>s.cloneElement(r,{className:(0,n.A)(r.props.className,N.avatar),variant:r.props.variant||S})))]}))}))}}]);
//# sourceMappingURL=4902.48a43bd5.chunk.js.map