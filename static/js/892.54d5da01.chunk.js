"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[892],{776:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(791),c=n(880),r=n(523),o=n(152),a=n(995),m=n(853),d="Comments_comments__TQP58",u=n(556),l="NewCommentForm_form__2vaVP",i="NewCommentForm_control__OyEFL",x="NewCommentForm_actions__Y3hGm",h=n(184),f=function(e){var t=(0,s.useState)(""),n=(0,o.Z)(t,2),c=n[0],r=n[1],d=(0,a.Z)(m.Ir),f=d.sendRequest,j=d.status,_=d.error,p=(0,s.useRef)(),N=e.onAddedComment;(0,s.useEffect)((function(){"completed"!==j||_||N()}),[j,_,N]);var C=function(t){t.preventDefault(),f({commentData:{text:c},quoteId:e.quoteId}),r("")};return(0,h.jsxs)("form",{className:l,onSubmit:C,children:["pending"===j&&(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(u.default,{})}),(0,h.jsxs)("div",{className:i,onSubmit:C,children:[(0,h.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,h.jsx)("textarea",{value:c,onChange:function(e){r(e.target.value)},id:"comment",rows:"5",ref:p})]}),(0,h.jsx)("div",{className:x,children:(0,h.jsx)("button",{className:"btn",children:"Add Comment"})})]})},j="CommentItem_item__FrLFx",_=function(e){return(0,h.jsx)("li",{className:j,children:(0,h.jsx)("p",{children:e.text})})},p="CommentsList_comments__Ky0Xl",N=function(e){return(0,h.jsx)("ul",{className:p,children:e.comments.map((function(e){return(0,h.jsx)(_,{text:e.text},e.id)}))})},C=function(e){var t=(0,c.UO)().quoteID,n=(0,s.useState)(!1),r=(0,o.Z)(n,2),l=r[0],i=r[1],x=(0,a.Z)(m.h_),j=x.sendRequest,_=x.status,p=x.data;(0,s.useEffect)((function(){j(t)}),[t,j]);var C,v=(0,s.useCallback)((function(){j(t)}),[j,t]);return"pending"===_&&(C=(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(u.default,{})})),"completed"===_&&p&&p.length>0&&(C=(0,h.jsx)(N,{comments:p})),"completed"!==_||p&&0!==p.length||(C=(0,h.jsx)("p",{className:"centered",children:"No Comments were added yet"})),(0,h.jsxs)("section",{className:d,children:[(0,h.jsx)("h2",{children:"User Comments"}),!l&&(0,h.jsx)("button",{className:"btn",onClick:function(){i(!0)},children:"Add a Comment"}),l&&(0,h.jsx)(f,{quoteId:t,onAddedComment:v}),C]})},v="HighlightedQuote_quote__KKV5L",g=function(e){return(0,h.jsxs)("figure",{className:v,children:[(0,h.jsx)("p",{children:e.text}),(0,h.jsx)("figcaption",{children:e.author})]})},b=function(){var e=(0,c.UO)(),t=(0,a.Z)(m.jR,!0),n=t.sendRequest,o=t.status,d=t.data,l=t.error,i=(0,c.$B)(),x=e.quoteID;return(0,s.useEffect)((function(){n(x)}),[n,x]),"pending"===o?(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(u.default,{})}):l?(0,h.jsx)("p",{className:"centered focused",children:l}):d?(0,h.jsxs)(s.Fragment,{children:[(0,h.jsx)(g,{text:d.text,author:d.author}),(0,h.jsx)(c.AW,{path:"".concat(i.url),exact:!0,children:(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(r.rU,{className:"btn--flat",to:"".concat(i.url,"/comments"),children:"Load Comments"})})}),(0,h.jsx)(c.AW,{path:"".concat(i.url,"/comments"),children:(0,h.jsx)(C,{quoteId:x})})]}):(0,h.jsx)("p",{children:"No Quotes Found"})}}}]);
//# sourceMappingURL=892.54d5da01.chunk.js.map