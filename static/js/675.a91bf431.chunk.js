"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[675],{884:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(791),s=n(152),u="Card_card__fySgr",o=n(184),a=function(e){return(0,o.jsx)("div",{className:u,children:e.children})},c=n(556),i="QuoteForm_form__VaxU5",l="QuoteForm_loading__b3x6i",d="QuoteForm_control__QZbLY",f="QuoteForm_actions__oGr0R",x=n(880),h=function(e){var t=(0,r.useState)(!1),n=(0,s.Z)(t,2),u=n[0],h=n[1],m=(0,r.useRef)(),_=(0,r.useRef)();return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(x.NL,{when:u,message:function(e){return"Are you sure to leave ??"}}),(0,o.jsx)(a,{children:(0,o.jsxs)("form",{onFocus:function(){h(!0)},className:i,onSubmit:function(t){t.preventDefault();var n=m.current.value,r=_.current.value;e.onAddQuote({author:n,text:r})},children:[e.isLoading&&(0,o.jsx)("div",{className:l,children:(0,o.jsx)(c.default,{})}),(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("label",{htmlFor:"author",children:"Author"}),(0,o.jsx)("input",{type:"text",id:"author",ref:m})]}),(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("label",{htmlFor:"text",children:"Text"}),(0,o.jsx)("textarea",{id:"text",rows:"5",ref:_})]}),(0,o.jsx)("div",{className:f,children:(0,o.jsx)("button",{onClick:function(){h(!1)},className:"btn",children:"Add Quote"})})]})})]})},m=n(995),_=n(853),j=function(){var e=(0,m.Z)(_.KP),t=e.sendRequest,n=e.status,s=(0,x.k6)();(0,r.useEffect)((function(){"completed"===n&&s.push("/quotes")}),[n,s]);return(0,o.jsx)(h,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=675.a91bf431.chunk.js.map