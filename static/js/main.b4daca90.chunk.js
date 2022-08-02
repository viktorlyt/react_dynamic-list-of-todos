(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(9),l=c(2),o=c(1),i=(c(14),c(15),c(8)),d=c.n(i),r=c(0),j=function(e){var t=e.query,c=e.onReset,s=e.onApplyQuery,a=e.onHandleInputQuery,n=e.onHandleFilterType;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return n(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){a(e.target.value),s(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(),a("")}})})]})]})})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(18);var b,h=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},O=c(6),m=c.n(O),x=function(e){var t=e.todos,c=e.todoSelectedId,s=e.onTodoSelect,a=e.onMixTodos;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:Object(r.jsx)("button",{type:"button",className:"button",onClick:function(){return a(t)},children:"Mix Todos"})})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:m()({"has-background-info-light":e.id===c}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:m()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:c===e.id?Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(null)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye-slash"})})}):Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},f=function(e){var t=e.todo,c=e.onClose,s=Object(o.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1],d=Object(o.useState)(!1),j=Object(l.a)(d,2),b=j[0],O=j[1];return Object(o.useEffect)((function(){var e;(e=t.userId,u("/users/".concat(e))).then((function(e){i(e),O(!0)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),b?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){O(!1),c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(r.jsx)(h,{})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(b||(b={}));var p=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(null),i=Object(l.a)(a,2),O=i[0],m=i[1],p=Object(o.useState)(!1),N=Object(l.a)(p,2),v=N[0],y=N[1],g=Object(o.useState)(c),k=Object(l.a)(g,2),C=k[0],S=k[1],T=Object(o.useState)(""),L=Object(l.a)(T,2),E=L[0],w=L[1],A=Object(o.useState)(""),I=Object(l.a)(A,2),M=I[0],_=I[1],B=Object(o.useState)(b.ALL),F=Object(l.a)(B,2),H=F[0],P=F[1];Object(o.useEffect)((function(){u("/todos").then(s).finally((function(){return y(!0)}))}),[]),Object(o.useEffect)((function(){switch(H){case b.ALL:S(c);break;case b.ACTIVE:S(c.filter((function(e){return!1===e.completed})));break;case b.COMPLETED:S(c.filter((function(e){return!0===e.completed})))}var e=M.toLowerCase();S((function(t){return t.filter((function(t){return t.title.toLowerCase().includes(e)}))}))}),[H,M,c]);var Q=Object(o.useCallback)(d()(_,1e3),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(j,{query:E,onReset:function(){return w("")},onApplyQuery:Q,onHandleInputQuery:function(e){w(e)},onHandleFilterType:function(e){P(e)}})}),Object(r.jsx)("div",{className:"block",children:v?Object(r.jsx)(x,{todos:C,todoSelectedId:(null===O||void 0===O?void 0:O.id)||0,onTodoSelect:function(e){m(e)},onMixTodos:function(e){S(Object(n.a)(e).sort((function(){return Math.random()-.5})))}}):Object(r.jsx)(h,{})})]})})}),O&&Object(r.jsx)(f,{todo:O,onClose:m})]})};a.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b4daca90.chunk.js.map