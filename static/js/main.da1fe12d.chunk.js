(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),l=a.n(c),r=a(1),m=a(8),s=a(4),u=a(7),i=a.n(u),d=function(e){var t=e.addTodo,a=Object(n.useState)({id:0,task:"",completed:!1}),c=Object(s.a)(a,2),l=c[0],m=c[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.task.trim()&&(t(Object(r.a)(Object(r.a)({},l),{},{id:i()()})),m(Object(r.a)(Object(r.a)({},l),{},{task:""})))},className:"todo-form"},o.a.createElement("input",{name:"task",type:"text",onChange:function(e){m(Object(r.a)(Object(r.a)({},l),{},{task:e.target.value}))},value:l.task,className:"todo-form__input"}),o.a.createElement("button",{type:"submit",className:"todo-form__button"},"Add Todo"))},p=function(e){var t=e.id,a=e.task,n=e.toggleComplete,c=e.removeTodo;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("label",{onClick:function(){return n(t)}},o.a.createElement("input",{type:"checkbox",name:"checkbox",value:"css"}),o.a.createElement("span",null,a)),o.a.createElement("button",{onClick:function(){return c(t)},className:"todo-item__button"},"X"))},b=function(e){var t=e.todos,a=e.toggleComplete,n=e.removeTodo;return o.a.createElement("ul",{className:"todo-list"},t.map((function(e){return o.a.createElement(p,Object.assign({key:e.id},e,{toggleComplete:a,removeTodo:n}))})))};var f=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return o.a.createElement("main",{className:"App"},o.a.createElement("h1",{className:"title"},"Todo List App"),o.a.createElement(d,{addTodo:function(e){a.length<10&&c([].concat(Object(m.a)(a),[e]))}}),a.length?o.a.createElement(b,{todos:a,toggleComplete:function(e){c(a.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},removeTodo:function(e){c(a.filter((function(t){return t.id!==e})))}}):o.a.createElement("div",{className:"todo-list"},o.a.createElement("h2",null,"Please add one todo.")))};a(16);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.da1fe12d.chunk.js.map