(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(7),r=a.n(s),c=a(2),i=a(3),d=a(5),o=a(4),b=a(0),u=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"Veneno"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item ml-5",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"ABOUT"})}),Object(b.jsx)("li",{className:"nav-item ml-5",children:Object(b.jsx)("a",{className:"nav-link",href:"#",children:"DS"})}),Object(b.jsx)("li",{className:"nav-item ml-5",children:Object(b.jsx)("a",{className:"nav-link",href:"#",children:"ALGO"})}),Object(b.jsx)("li",{className:"nav-item ml-5",children:Object(b.jsx)("a",{className:"nav-link",href:"#",children:"GAMES"})})]})})]})})}}]),a}(n.Component),j=u,h=function e(t){Object(c.a)(this,e),this.data=void 0,this.next=void 0,this.data=t,this.next=null},m=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).reload=function(){n.setState({key:Date.now()})},n.clear=function(){n.setState({head:null,data:1})},n.addNode=function(){if(null!==n.state.data){var e=n.state.head;if(null!==e){for(;null!==e.next;){var t;e=null===(t=e)||void 0===t?void 0:t.next}e.next=new h(n.state.data),n.setState({data:n.state.data+1})}else n.setState({head:new h(n.state.data),data:n.state.data+1})}else alert("data cant be empty")},n.addNodeStart=function(){if(null!==n.state.data){var e=new h(n.state.data);e.next=n.state.head,n.setState({head:e,data:n.state.data+1})}else alert("data cant be empty")},n.deleteStart=function(){if(null===n.state.head)return alert("list is empty");null===n.state.head.next?n.setState({head:null}):n.setState({head:n.state.head.next})},n.deleteEnd=function(){if(null===n.state.head)return alert("list is empty");for(var e=n.state.head,t=null;null!==e.next;)t=e,e=e.next;null!==t?(t.next=null,n.reload()):n.setState({head:null})},n.renderNode=function(e){return Object(b.jsx)("li",{className:"list-group-item",children:e})},n.state={head:null,data:1,key:Date.now()},n}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this,a=this.state.head,n=[];if(null!==a)for(;null!==a;)n.push(a.data),a=a.next;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"jumbotron",children:Object(b.jsx)("h2",{children:"Linked List"})}),Object(b.jsxs)("div",{className:"form-row mt-4",children:[Object(b.jsxs)("div",{className:"col-auto my-1",children:[Object(b.jsx)("input",{type:"number",name:"data",id:"data",placeholder:"enter node",className:"custom-control-input ml-2",value:null!==(e=this.state.data)&&void 0!==e?e:"",onChange:function(e){t.setState({data:parseInt(e.currentTarget.value?e.currentTarget.value:"0")})}}),Object(b.jsx)("button",{className:"btn btn-primary mx-4",onClick:this.addNode,children:"Add"}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:this.addNodeStart,children:"Add at Start"})]}),Object(b.jsxs)("div",{className:"col-auto my-2",children:[Object(b.jsx)("button",{className:"btn btn-danger mx-2",onClick:this.deleteStart,children:"Delete at Start"}),Object(b.jsx)("button",{className:"btn btn-danger mx-2",onClick:this.deleteEnd,children:"Delete at End"}),Object(b.jsx)("button",{className:"btn btn-danger mx-2",onClick:this.clear,children:"Delete All"})]})]}),Object(b.jsx)("ul",{className:"list-group list-group-horizontal-lg mt-4",style:{overflowY:"auto",maxWidth:"80%"},children:n.length?n.map(this.renderNode):Object(b.jsx)("li",{className:"list-group-item",children:"no data"})})]})}}]),a}(n.Component),v=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m,{})})}}]),a}(n.Component),x=v,O=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{}),Object(b.jsx)(x,{})]})}}]),a}(n.Component),p=O;r.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.338e1ed8.chunk.js.map