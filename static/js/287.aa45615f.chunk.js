"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[287],{287:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(413),r=n(791),i=n(439),s=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},o="CardForm_button__hfQy2",c="CardForm_label__03vuY",l=n(184);function u(e){var t=e.onSubmit,n=(0,r.useState)(""),a=(0,i.Z)(n,2),u=a[0],d=a[1],m=(0,r.useState)(""),f=(0,i.Z)(m,2),h=f[0],p=f[1],b=s(),v=s(),x={name:u,number:h},C=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":d(a);break;case"number":p(a);break;default:return}},_=function(){d(""),p("")};return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(x),_()},children:[(0,l.jsx)("label",{htmlFor:b,className:c,children:"Name"}),(0,l.jsx)("input",{type:"text",id:b,name:"name",value:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:C}),(0,l.jsx)("label",{htmlFor:v,className:c,children:"Number"}),(0,l.jsx)("input",{type:"tel",id:v,name:"number",value:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:C}),(0,l.jsx)("button",{type:"submit",className:o,children:"Add contact"})]})}var d="CardList_user__zAbyi",m="CardList_delete__LFslH",f=function(e){var t=e.contacts,n=e.onDeleteContact;return(0,l.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,l.jsxs)("li",{className:d,children:[(0,l.jsxs)("p",{children:[a,": ",r]}),(0,l.jsx)("button",{type:"button",className:m,onClick:function(){return n(t)},children:"Delete"})]},t)}))})},h="Filter_filter__FHK1H",p=s(),b=function(e){var t=e.filter,n=e.onChangeFilter;return(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("label",{htmlFor:p,children:"Find contacts by name"}),(0,l.jsx)("input",{type:"text",id:p,value:t,onChange:n})]})},v=n(434),x=n(819),C=n(52),_=function(e){return e.contacts.items};function j(){var e=(0,v.I0)(),t=(0,v.v9)(_),n=(0,v.v9)((function(e){return e.filter}));(0,r.useEffect)((function(){e(C.yF())}),[e]);var i=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:40,color:"#010101"},children:[(0,l.jsx)(u,{onSubmit:function(n){var r=(0,a.Z)({id:s()},n);if(t.find((function(e){return e.name===r.name})))return alert("".concat(n.name," is already in contacts"));e(C.uK(r))}}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(b,{filter:n,onChangeFilter:function(t){var n=t.target.value;e((0,x.Tv)(n))}}),(0,l.jsx)(f,{contacts:i,onDeleteContact:function(t){e(C.GK(t))}})]})}}}]);
//# sourceMappingURL=287.aa45615f.chunk.js.map