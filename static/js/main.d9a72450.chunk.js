(this["webpackJsonpreact-learn"]=this["webpackJsonpreact-learn"]||[]).push([[0],{23:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(17),i=n.n(s),a=(n(23),n(8)),j=n(2),u=n(0),o=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{style:{marginTop:0},children:"Hey! My name is Roman, i'm JavaScript Senior Software Developer from Saint-Petersburg."}),Object(u.jsx)("p",{children:"This is my react.js training project"})]})},l=n(4);function b(){var e=Object(c.useState)(new Date),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){r(new Date)}),1e3);return function(){return clearTimeout(e)}})),Object(u.jsx)("div",{style:{marginTop:"10px"},children:n.toLocaleTimeString()})}var d=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],s=function(){return Object(u.jsxs)("button",{onClick:function(){r(!n)},children:[n?"Hide":"Show"," clock"]})};return Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("legend",{children:"Current time"}),Object(u.jsx)(s,{}),n&&Object(u.jsx)(b,{})]})},x=n(11),O=n.n(x),h=n(14);function f(e){return Object(u.jsx)("div",{style:{marginBottom:"20px"},children:Object.keys(e.user).map((function(t,n){return Object(u.jsxs)("div",{children:[t,": ",(c=e.user[t],"object"===typeof c?JSON.stringify(c):c)]},n);var c}))})}function p(e){return Object(u.jsx)("div",{children:e.users.map((function(e){return Object(u.jsx)(f,{user:e},e.id)}))})}var m=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),a=i[0],j=i[1],o=function(){var e=Object(h.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://jsonplaceholder.typicode.com/users");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(h.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.t0=r,e.next=4,o();case 4:e.t1=e.sent,(0,e.t0)(e.t1),j(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("legend",{children:"Users async fetch"}),!n.length&&!a&&Object(u.jsx)("button",{onClick:b,disabled:a,children:"Get users"}),a&&Object(u.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),Object(u.jsx)(p,{users:n})]})},v={lemon:{icon:"\ud83c\udf4b"},coconut:{icon:"\ud83e\udd65"},banana:{icon:"\ud83c\udf4c"},strawberry:{icon:"\ud83c\udf53"},kiwi:{icon:"\ud83e\udd5d"}};var g=function(){var e=Object(c.useState)("Roman"),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)("Est duis magna do nisi et labore magna cupidatat cillum laborum."),i=Object(l.a)(s,2),a=i[0],j=i[1],o=Object(c.useState)("banana"),b=Object(l.a)(o,2),d=b[0],x=b[1];return Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("legend",{children:"Form"}),Object(u.jsxs)("div",{style:{margin:"0 0 5px"},children:["Entered name:  ",n||"unknown"]}),Object(u.jsx)("input",{name:"firstName",type:"text",value:n,onInput:function(e){r(e.target.value)}}),Object(u.jsxs)("div",{style:{margin:"10px 0 5px"},children:["Edit text:  ",a||"unknown"]}),Object(u.jsx)("textarea",{name:"text",value:a,onInput:function(e){j(e.target.value)}}),Object(u.jsxs)("div",{style:{margin:"8px 0 5px"},children:["Choose fruit:  ",v[d].icon||"unknown"]}),Object(u.jsx)("select",{name:"fruit",value:d,onChange:function(e){x(e.target.value)},children:Object.keys(v).map((function(e){return Object(u.jsxs)("option",{value:e,children:[v[e].icon," ",(t=e,"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1))]});var t}))})]})},y={c:"celsius",f:"fahrenheit"};function S(e){return 5*(e-32)/9}function w(e){return 9*e/5+32}function k(e,t){var n=parseFloat(e);if(Number.isNaN(n))return"";var c=t(n);return(Math.round(1e3*c)/1e3).toString()}function C(e){return e.celsius>=100?Object(u.jsx)("div",{children:"hubble-bubble \ud83d\udca6"}):Object(u.jsx)("div",{children:"will not boil"})}function E(e){return Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("legend",{children:y[e.scale]}),Object(u.jsx)("input",{value:e.temperature,onChange:function(t){e.onTemperatureChange(t.target.value)}})]})}var T=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)("c"),a=Object(l.a)(i,2),j=a[0],o=a[1],b="f"===j?k(r,S):r,d="c"===j?k(r,w):r;return Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("legend",{children:"Enter degrees on the scale"}),Object(u.jsx)(E,{scale:"c",temperature:b,onTemperatureChange:function(e){s(e),o("c")}}),Object(u.jsx)(E,{scale:"f",temperature:d,onTemperatureChange:function(e){s(e),o("f")}}),Object(u.jsx)(C,{celsius:parseFloat(b)})]})};function N(){return Object(u.jsx)("div",{children:"Block1, yo!"})}function B(){return Object(u.jsx)("div",{children:"Block2, yo!"})}function J(e){return Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("legend",{children:"Composition"}),e.firstEl,e.secondEl]})}var M=function(){return Object(u.jsx)(J,{firstEl:Object(u.jsx)(N,{}),secondEl:Object(u.jsx)(B,{})})},R=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{}),Object(u.jsx)(m,{}),Object(u.jsx)(g,{}),Object(u.jsx)(T,{}),Object(u.jsx)(M,{})]})},D=function(){return Object(u.jsx)("div",{children:"\u042d\u0442\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"})},F=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)(a.b,{to:"/",exact:!0,children:"Home"}),Object(u.jsx)(a.b,{to:"/results",exact:!0,children:"Results"}),Object(u.jsx)(a.b,{to:"/contacts",exact:!0,children:"Contacts"})]})},H=function(){return Object(u.jsxs)("footer",{children:[Object(u.jsx)("span",{children:"Made by "}),Object(u.jsx)(a.b,{to:"/",exact:!0,style:{padding:"0 4px"},children:"Roman"}),Object(u.jsx)("span",{children:" with \u2764\ufe0f"})]})};var I=function(){return Object(u.jsxs)(a.a,{children:[Object(u.jsx)(F,{}),Object(u.jsx)("main",{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/",component:o}),Object(u.jsx)(j.a,{exact:!0,path:"/results",component:R}),Object(u.jsx)(j.a,{exact:!0,path:"/contacts",component:D})]})}),Object(u.jsx)(H,{})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d9a72450.chunk.js.map