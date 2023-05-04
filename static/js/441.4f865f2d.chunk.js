"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[441],{441:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var a=n(1413),r=n(2791),o=n(9439),i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},l="CardForm_label__03vuY",s=n(9931),u=n(184);function c(e){var t=e.onSubmit,n=(0,r.useState)(""),a=(0,o.Z)(n,2),c=a[0],v=a[1],d=(0,r.useState)(""),m=(0,o.Z)(d,2),f=m[0],p=m[1],h=i(),b=i(),x={name:c,number:f},Z=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":v(a);break;case"number":p(a);break;default:return}},C=function(){v(""),p("")};return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(x),C()},children:[(0,u.jsx)("label",{htmlFor:h,className:l,children:"Name"}),(0,u.jsx)("input",{type:"text",id:h,name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:Z}),(0,u.jsx)("label",{htmlFor:b,className:l,children:"Number"}),(0,u.jsx)("input",{type:"tel",id:b,name:"number",value:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:Z}),(0,u.jsx)(s.Z,{variant:"contained",type:"submit",children:"Add contact"})]})}var v="CardList_user__zAbyi",d="CardList_name__HfBjA",m=function(e){var t=e.contacts,n=e.onDeleteContact;return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,u.jsxs)("li",{className:v,children:[(0,u.jsxs)("p",{className:d,children:[a,": ",r]}),(0,u.jsx)(s.Z,{variant:"outlined",type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},f="Filter_filter__FHK1H",p=i(),h=function(e){var t=e.filter,n=e.onChangeFilter;return(0,u.jsxs)("div",{className:f,children:[(0,u.jsx)("label",{htmlFor:p,children:"Find contacts by name"}),(0,u.jsx)("input",{type:"text",id:p,value:t,onChange:n})]})},b=n(9434),x=n(1819),Z=n(6052),C=function(e){return e.contacts.items},j=n(7462),g=n(3366),w=n(8182),y=n(4419),_=n(7288),k=n(8688),F=n(2065),N=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},S=n(5878),M=n(7225);function q(e){return(0,M.Z)("MuiPaper",e)}(0,S.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var A=["className","component","elevation","square","variant"],R=(0,_.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,j.Z)({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!a.square&&{borderRadius:n.shape.borderRadius},"outlined"===a.variant&&{border:"1px solid ".concat((n.vars||n).palette.divider)},"elevation"===a.variant&&(0,j.Z)({boxShadow:(n.vars||n).shadows[a.elevation]},!n.vars&&"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,F.Fq)("#fff",N(a.elevation)),", ").concat((0,F.Fq)("#fff",N(a.elevation)),")")},n.vars&&{backgroundImage:null==(t=n.vars.overlays)?void 0:t[a.elevation]}))})),P=r.forwardRef((function(e,t){var n=(0,k.Z)({props:e,name:"MuiPaper"}),a=n.className,r=n.component,o=void 0===r?"div":r,i=n.elevation,l=void 0===i?1:i,s=n.square,c=void 0!==s&&s,v=n.variant,d=void 0===v?"elevation":v,m=(0,g.Z)(n,A),f=(0,j.Z)({},n,{component:o,elevation:l,square:c,variant:d}),p=function(e){var t=e.square,n=e.elevation,a=e.variant,r=e.classes,o={root:["root",a,!t&&"rounded","elevation"===a&&"elevation".concat(n)]};return(0,y.Z)(o,q,r)}(f);return(0,u.jsx)(R,(0,j.Z)({as:o,ownerState:f,className:(0,w.Z)(p.root,a),ref:t},m))}));function z(e){return(0,M.Z)("MuiCard",e)}(0,S.Z)("MuiCard",["root"]);var D=["className","raised"],I=(0,_.ZP)(P,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),L=r.forwardRef((function(e,t){var n=(0,k.Z)({props:e,name:"MuiCard"}),a=n.className,r=n.raised,o=void 0!==r&&r,i=(0,g.Z)(n,D),l=(0,j.Z)({},n,{raised:o}),s=function(e){var t=e.classes;return(0,y.Z)({root:["root"]},z,t)}(l);return(0,u.jsx)(I,(0,j.Z)({className:(0,w.Z)(s.root,a),elevation:o?8:void 0,ref:t,ownerState:l},i))}));function H(){var e=(0,b.I0)(),t=(0,b.v9)(C),n=(0,b.v9)((function(e){return e.filter}));(0,r.useEffect)((function(){e(Z.yF())}),[e]);var o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:40,color:"#010101"},children:[(0,u.jsx)(L,{variant:"outlined",children:(0,u.jsx)(c,{onSubmit:function(n){var r=(0,a.Z)({id:i()},n);if(t.find((function(e){return e.name===r.name})))return alert("".concat(n.name," is already in contacts"));e(Z.uK(r))}})}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(h,{filter:n,onChangeFilter:function(t){var n=t.target.value;e((0,x.Tv)(n))}}),(0,u.jsx)(m,{contacts:o,onDeleteContact:function(t){e(Z.GK(t))}})]})}}}]);
//# sourceMappingURL=441.4f865f2d.chunk.js.map