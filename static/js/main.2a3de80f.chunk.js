(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(9),l=c(2),o=c(1),i=(c(14),c(15),c(8)),d=c.n(i),r=c(0),j=function(e){var t=e.reset,c=e.query,s=e.applyQuery,a=e.onHandleInputQuery,n=e.onHandletypeOfSelection;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return n(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){a(e.target.value),s(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){t(),a("")}})})]})]})})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(18);var b=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},h=c(6),O=c.n(h),m=function(e){var t=e.todos,c=e.todoSelectedId,s=e.onTodoSelect,a=e.onMixTodos;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:Object(r.jsx)("button",{type:"button",className:"button",onClick:function(){return a(t)},children:"Mix Todos"})})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:O()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:O()("far","fa-eye",{"fa-eye-slash":c===e.id})})})})})]},e.id)}))})]})},x=function(e){var t=e.todo,c=e.onClose,s=Object(o.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1],d=Object(o.useState)(!1),j=Object(l.a)(d,2),h=j[0],O=j[1];return Object(o.useEffect)((function(){var e;(e=t.userId,u("/users/".concat(e))).then((function(e){i(e),O(!0)}))})),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),h?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){O(!1),c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(r.jsx)(b,{})]})},f=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(null),i=Object(l.a)(a,2),h=i[0],O=i[1],f=Object(o.useState)(!1),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(o.useState)(c),g=Object(l.a)(y,2),S=g[0],k=g[1],C=Object(o.useState)(""),w=Object(l.a)(C,2),T=w[0],I=w[1],E=Object(o.useState)(""),_=Object(l.a)(E,2),H=_[0],L=_[1],M=Object(o.useState)("all"),Q=Object(l.a)(M,2),B=Q[0],q=Q[1];Object(o.useEffect)((function(){u("/todos").then((function(e){s(e),N(!0)}))}),[]),Object(o.useEffect)((function(){switch(B){case"all":k(c);break;case"active":k(c.filter((function(e){return!1===e.completed})));break;case"completed":k(c.filter((function(e){return!0===e.completed})))}k((function(e){return e.filter((function(e){return e.title.toLowerCase().includes(H.toLowerCase())}))}))}),[B,H,c]);var A=Object(o.useCallback)(d()(L,1e3),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsxs)("div",{className:"block",children:[!1===v&&Object(r.jsx)(b,{}),Object(r.jsx)(j,{reset:function(){return I("")},query:T,applyQuery:A,onHandleInputQuery:function(e){I(e)},onHandletypeOfSelection:function(e){q(e)}})]}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(m,{todos:S,todoSelectedId:(null===h||void 0===h?void 0:h.id)||0,onTodoSelect:function(e){O(e)},onMixTodos:function(e){k(Object(n.a)(e).sort((function(){return Math.random()-.5})))}})})]})})}),h&&Object(r.jsx)(x,{todo:h,onClose:O})]})};a.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2a3de80f.chunk.js.map