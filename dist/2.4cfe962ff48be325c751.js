(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{211:function(e,t,a){"use strict";a.r(t);var o=a(0),l=a.n(o),n=a(10),r=a(1),s=a.n(r),c=a(3),m=a(7),u=a(6);t.default=Object(c.g)((function(e){const[t,a]=Object(o.useState)(),[r,c]=Object(o.useState)(),p=Object(o.useContext)(m.a),i=Object(o.useContext)(u.a);return l.a.createElement(n.a,{title:"Create New Post"},l.a.createElement("form",{onSubmit:async function(a){a.preventDefault();try{const a=await s.a.post("/create-post",{title:t,body:r,token:i.user.token});p({type:"flashMessage",value:"Post created"}),e.history.push("/post/"+a.data),console.log("new post was created")}catch(a){console.log("Error")}}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"post-title",className:"text-muted mb-1"},l.a.createElement("small",null,"Title")),l.a.createElement("input",{onChange:e=>a(e.target.value),autoFocus:!0,name:"title",id:"post-title",className:"form-control form-control-lg form-control-title",type:"text",placeholder:"",autoComplete:"off"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"post-body",className:"text-muted mb-1 d-block"},l.a.createElement("small",null,"Body Content")),l.a.createElement("textarea",{onChange:e=>c(e.target.value),name:"body",id:"post-body",className:"body-content tall-textarea form-control",type:"text"})),l.a.createElement("button",{className:"btn btn-primary"},"Save New Post")))}))}}]);