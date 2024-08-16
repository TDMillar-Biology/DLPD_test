"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2885],{92885:(e,n,o)=>{o.r(n),o.d(n,{default:()=>$,getRatingUtilityClass:()=>C,ratingClasses:()=>V});var t=o(83673),i=o(6614),l=o(7552),a=o(93878),s=o(93801),c=o(25649),r=o(70799),u=o(23456),d=o(15622),p=o(89456),m=o(77259),v=o(9527),y=o(51584),h=o(74893),A=o(69500);const g=(0,h.A)((0,A.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),b=(0,h.A)((0,A.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");var f=o(4785),x=o(51148),F=o(36674),S=o(33761),w=o(85693);function C(e){return(0,w.Ay)("MuiRating",e)}const V=(0,S.A)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),R=["value"],M=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function L(e,n){if(null==e)return e;const o=Math.round(e/n)*n;return Number(o.toFixed(function(e){const n=e.toString().split(".")[1];return n?n.length:0}(n)))}const j=(0,x.Ay)("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[{[`& .${V.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${(0,d.A)(o.size)}`],o.readOnly&&n.readOnly]}})((({theme:e,ownerState:n})=>(0,i.A)({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${V.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${V.focusVisible} .${V.iconActive}`]:{outline:"1px solid #999"},[`& .${V.visuallyHidden}`]:c.A},"small"===n.size&&{fontSize:e.typography.pxToRem(18)},"large"===n.size&&{fontSize:e.typography.pxToRem(30)},n.readOnly&&{pointerEvents:"none"}))),z=(0,x.Ay)("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},n)=>[n.label,e.emptyValueFocused&&n.labelEmptyValueActive]})((({ownerState:e})=>(0,i.A)({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}))),H=(0,x.Ay)("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})((({theme:e,ownerState:n})=>(0,i.A)({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},n.iconActive&&{transform:"scale(1.2)"},n.iconEmpty&&{color:(e.vars||e).palette.action.disabled}))),E=(0,x.Ay)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>(0,F.A)(e)&&"iconActive"!==e,overridesResolver:(e,n)=>{const{iconActive:o}=e;return[n.decimal,o&&n.iconActive]}})((({iconActive:e})=>(0,i.A)({position:"relative"},e&&{transform:"scale(1.2)"})));function O(e){const n=(0,t.A)(e,R);return(0,A.jsx)("span",(0,i.A)({},n))}function T(e){const{classes:n,disabled:o,emptyIcon:t,focus:s,getLabelText:c,highlightSelectedOnly:r,hover:u,icon:d,IconContainerComponent:m,isActive:v,itemValue:y,labelProps:h,name:g,onBlur:b,onChange:f,onClick:x,onFocus:F,readOnly:S,ownerState:w,ratingValue:C,ratingValueRounded:V}=e,R=r?y===C:y<=C,M=y<=u,L=y<=s,j=y===V,E=(0,p.A)(),O=(0,A.jsx)(H,{as:m,value:y,className:(0,a.A)(n.icon,R?n.iconFilled:n.iconEmpty,M&&n.iconHover,L&&n.iconFocus,v&&n.iconActive),ownerState:(0,i.A)({},w,{iconEmpty:!R,iconFilled:R,iconHover:M,iconFocus:L,iconActive:v}),children:t&&!R?t:d});return S?(0,A.jsx)("span",(0,i.A)({},h,{children:O})):(0,A.jsxs)(l.Fragment,{children:[(0,A.jsxs)(z,(0,i.A)({ownerState:(0,i.A)({},w,{emptyValueFocused:void 0}),htmlFor:E},h,{children:[O,(0,A.jsx)("span",{className:n.visuallyHidden,children:c(y)})]})),(0,A.jsx)("input",{className:n.visuallyHidden,onFocus:F,onBlur:b,onChange:f,onClick:x,disabled:o,value:y,id:E,type:"radio",name:g,checked:j})]})}const I=(0,A.jsx)(g,{fontSize:"inherit"}),N=(0,A.jsx)(b,{fontSize:"inherit"});function k(e){return`${e} Star${1!==e?"s":""}`}const $=l.forwardRef((function(e,n){const o=(0,f.b)({name:"MuiRating",props:e}),{className:c,defaultValue:h=null,disabled:g=!1,emptyIcon:b=N,emptyLabelText:x="Empty",getLabelText:F=k,highlightSelectedOnly:S=!1,icon:w=I,IconContainerComponent:V=O,max:R=5,name:H,onChange:$,onChangeActive:B,onMouseLeave:_,onMouseMove:P,precision:X=1,readOnly:D=!1,size:U="medium",value:W}=o,Y=(0,t.A)(o,M),q=(0,p.A)(H),[G,J]=(0,m.A)({controlled:W,default:h,name:"Rating"}),K=L(G,X),Q=(0,u.I)(),[{hover:Z,focus:ee},ne]=l.useState({hover:-1,focus:-1});let oe=K;-1!==Z&&(oe=Z),-1!==ee&&(oe=ee);const{isFocusVisibleRef:te,onBlur:ie,onFocus:le,ref:ae}=(0,v.A)(),[se,ce]=l.useState(!1),re=l.useRef(),ue=(0,y.A)(ae,re,n),de=e=>{let n=""===e.target.value?null:parseFloat(e.target.value);-1!==Z&&(n=Z),J(n),$&&$(e,n)},pe=e=>{0===e.clientX&&0===e.clientY||(ne({hover:-1,focus:-1}),J(null),$&&parseFloat(e.target.value)===K&&$(e,null))},me=e=>{le(e),!0===te.current&&ce(!0);const n=parseFloat(e.target.value);ne((e=>({hover:e.hover,focus:n})))},ve=e=>{-1===Z&&(ie(e),!1===te.current&&ce(!1),ne((e=>({hover:e.hover,focus:-1}))))},[ye,he]=l.useState(!1),Ae=(0,i.A)({},o,{defaultValue:h,disabled:g,emptyIcon:b,emptyLabelText:x,emptyValueFocused:ye,focusVisible:se,getLabelText:F,icon:w,IconContainerComponent:V,max:R,precision:X,readOnly:D,size:U}),ge=(e=>{const{classes:n,size:o,readOnly:t,disabled:i,emptyValueFocused:l,focusVisible:a}=e,s={root:["root",`size${(0,d.A)(o)}`,i&&"disabled",a&&"focusVisible",t&&"readOnly"],label:["label","pristine"],labelEmptyValue:[l&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,r.A)(s,C,n)})(Ae);return(0,A.jsxs)(j,(0,i.A)({ref:ue,onMouseMove:e=>{P&&P(e);const n=re.current,{right:o,left:t,width:i}=n.getBoundingClientRect();let l;l=Q?(o-e.clientX)/i:(e.clientX-t)/i;let a=L(R*l+X/2,X);a=(0,s.A)(a,X,R),ne((e=>e.hover===a&&e.focus===a?e:{hover:a,focus:a})),ce(!1),B&&Z!==a&&B(e,a)},onMouseLeave:e=>{_&&_(e),ne({hover:-1,focus:-1}),B&&-1!==Z&&B(e,-1)},className:(0,a.A)(ge.root,c,D&&"MuiRating-readOnly"),ownerState:Ae,role:D?"img":null,"aria-label":D?F(oe):null},Y,{children:[Array.from(new Array(R)).map(((e,n)=>{const o=n+1,t={classes:ge,disabled:g,emptyIcon:b,focus:ee,getLabelText:F,highlightSelectedOnly:S,hover:Z,icon:w,IconContainerComponent:V,name:q,onBlur:ve,onChange:de,onClick:pe,onFocus:me,ratingValue:oe,ratingValueRounded:K,readOnly:D,ownerState:Ae},l=o===Math.ceil(oe)&&(-1!==Z||-1!==ee);if(X<1){const e=Array.from(new Array(1/X));return(0,A.jsx)(E,{className:(0,a.A)(ge.decimal,l&&ge.iconActive),ownerState:Ae,iconActive:l,children:e.map(((n,l)=>{const a=L(o-1+(l+1)*X,X);return(0,A.jsx)(T,(0,i.A)({},t,{isActive:!1,itemValue:a,labelProps:{style:e.length-1===l?{}:{width:a===oe?(l+1)*X*100+"%":"0%",overflow:"hidden",position:"absolute"}}}),a)}))},o)}return(0,A.jsx)(T,(0,i.A)({},t,{isActive:l,itemValue:o}),o)})),!D&&!g&&(0,A.jsxs)(z,{className:(0,a.A)(ge.label,ge.labelEmptyValue),ownerState:Ae,children:[(0,A.jsx)("input",{className:ge.visuallyHidden,value:"",id:`${q}-empty`,type:"radio",name:q,checked:null==K,onFocus:()=>he(!0),onBlur:()=>he(!1),onChange:de}),(0,A.jsx)("span",{className:ge.visuallyHidden,children:x})]})]}))}))}}]);
//# sourceMappingURL=2885.97b89a37.chunk.js.map