(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},124:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),a=c(10),s=c.n(a),r=(c(86),c(64),c(87),c.p+"static/media/tomato-5.641c9480.png"),i=(c(88),c(35)),l=c(2);function j(e){var t=e.onClick,c=e.title,n=e.path;return Object(l.jsx)("button",{className:"Button",onClick:function(e){t&&t(e)},children:""===n?c:Object(l.jsx)(i.b,{to:n,style:{textDecoration:"none",color:"white"},children:c})})}j.defaultProps={onClick:null,title:"Button",path:""};var d=j;var u=function(){return Object(l.jsx)("div",{className:"Header",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(i.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("img",{className:"Logo",src:r,alt:""}),Object(l.jsx)("p",{className:"header-title",children:"Tomato Kingdom"})]})}),Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(d,{title:"Login"}),Object(l.jsx)(d,{title:"Setting",path:"/setting"}),Object(l.jsx)(d,{title:"Missions",path:"/missions"}),Object(l.jsx)(d,{title:"Challenges"})]})]})})},b=c(33),O=(c(94),c(13)),h=function(e){return{type:"SETPERIODCOUNTER",value:e}},p=function(e){return{type:"SETSTATE",value:e}},m=c(21),x=c(22),v=c.p+"static/media/ding.658f4412.mp3",f=c(68);function g(e){var t="0".concat(Math.floor(e/60).toString()).slice(-2),c="0".concat((e%60).toString()).slice(-2);return"".concat(t,":").concat(c)}var N=function(e){var t=Object(O.b)(),c=Object(O.c)((function(e){return e.period})),o=Object(O.c)((function(e){return e.periodCounter})),a=Object(O.c)((function(e){return e.shortBreak})),s=Object(O.c)((function(e){return e.longBreak})),r=Object(O.c)((function(e){return e.longBreakInterval})),i=Object(O.c)((function(e){return e.state})),j=Object(n.useState)(60*c),u=Object(b.a)(j,2),N=u[0],y=u[1],k=Object(n.useState)(!1),C=Object(b.a)(k,2),S=C[0],B=C[1],E=Object(n.useState)(0),T=Object(b.a)(E,2),w=T[0],R=T[1],I=new Audio(v);function L(){return"pomodoro"===i&&o<r-1?(t(p("short")),t(h(o+1)),y(60*a),B(!1),I.play()):"pomodoro"===i&&o>=r-1?(t(p("long")),t(h(o+1)),y(60*s),B(!1),I.play()):"short"===i?(t(p("pomodoro")),y(60*c),B(!1),I.play()):"long"===i&&(t(p("pomodoro")),t(h(0)),y(60*c),B(!1),I.play()),R((function(e){return e+1})),[!0,1e3]}return I.loop=!1,console.log(N,i,S),Object(l.jsxs)("div",{className:"Clock",children:[Object(l.jsx)("div",{className:"Clock-wrapper",children:Object(l.jsx)(f.CountdownCircleTimer,{size:"300",isPlaying:S,duration:N,initialRemainingTime:N,colors:[["#004777",.33],["#F7B801",.33],["#A30000",.33]],onComplete:function(e){return L()},children:function(e){var t=e.remainingTime;return Object(l.jsxs)("div",{className:"timer",children:[Object(l.jsx)("div",{className:"value",children:g(t)}),Object(l.jsx)("div",{className:"text",children:"seconds"})]})}},w)}),Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(d,{title:Object(l.jsx)(m.a,{icon:x.g}),onClick:function(e){B(!1),y(60*c),R((function(e){return e+1}))}}),Object(l.jsx)(d,{title:N===60*c||!1===S?Object(l.jsx)(m.a,{icon:x.c}):Object(l.jsx)(m.a,{icon:x.e}),onClick:function(e){S?(console.log("stop"),B(!1)):(console.log("play"),B(!0),N===60*c&&I.play())}}),Object(l.jsx)(d,{title:"Next",onClick:function(){return L()}})]})]})};c(98),c(99);var y=function(){for(var e=[],t=Object(O.c)((function(e){return e.longBreakInterval})),c=Object(O.c)((function(e){return e.periodCounter})),n=0;n<t;n++)n<c?e.push(Object(l.jsx)("div",{className:"Parallelogram",style:{backgroundColor:"red"}})):e.push(Object(l.jsx)("div",{className:"Parallelogram",style:{backgroundColor:"white"}}));return Object(l.jsx)("div",{className:"Stack",children:Object(l.jsx)("div",{className:"Stack-wrapper",children:e.map((function(e){return e}))})})};var k=function(){return Object(l.jsx)("div",{className:"Body",children:Object(l.jsxs)("div",{className:"Body-wrapper",children:[Object(l.jsx)(N,{}),Object(l.jsx)(y,{})]})})},C=c(69),S=c.n(C);c(118);var B=function(){return Object(l.jsx)("div",{className:"SoundCloudWidget",children:Object(l.jsx)(S.a,{url:"https://soundcloud.com/le-hoang-phuc-646298054/vtv-o-nha-1m-ep05-imma-heartbreaker",width:"350px",height:"125px"})})},E=c(11);c(119);var T=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.period})),c=0,n=0,o=0,a=0;function s(e){switch(e.target.name){case"pomodoro":c=e.target.value;break;case"short":n=e.target.value;break;case"long":o=e.target.value;break;case"interval":a=e.target.value}}return Object(l.jsx)("div",{className:"Body",children:Object(l.jsxs)("div",{className:"Setting-wrapper",children:[Object(l.jsxs)("div",{className:"Time",children:[Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Pomodoro"}),Object(l.jsx)("input",{className:"Input",defaultValue:"50",type:"number",name:"pomodoro",placeholder:"Pomodoro",onChange:s})]}),Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Short break"}),Object(l.jsx)("input",{className:"Input",defaultValue:"10",type:"number",name:"short",placeholder:"Short break",onChange:s})]}),Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Long break"}),Object(l.jsx)("input",{className:"Input",defaultValue:"20",type:"number",name:"long",placeholder:"Long Break",onChange:s})]}),Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Long break interval"}),Object(l.jsx)("input",{className:"Input",defaultValue:"4",type:"number",name:"interval",placeholder:"Long Break Interval",onChange:s})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{title:"Submit",onClick:function(t){e({type:"SETPERIOD",value:0===c?50:c}),e(function(e){return{type:"SETSHORTBREAK",value:e}}(0===n?10:n)),e(function(e){return{type:"SETLONGBREAK",value:e}}(0===o?20:o)),e(function(e){return{type:"SETLONGBREAKINTERVAL",value:e}}(0===a?4:a)),console.log("Submit")}})}),Object(l.jsx)("div",{children:t})]})})};c(120),c(121);function w(e){var t=e.onChange,c=e.onDelete,n=e.onEdit,o=e.mission;return Object(l.jsx)("div",{className:"Mission",children:Object(l.jsxs)("div",{className:"Mission-wrapper",children:[Object(l.jsxs)("div",{className:"Left Mission-child",children:[Object(l.jsx)("div",{children:o.id}),Object(l.jsx)("div",{style:{backgroundColor:o.color},className:"ColorBox"})]}),Object(l.jsx)("div",{className:"Mission-child Center",children:Object(l.jsx)("div",{className:"Mission-content",style:!1===o.completed?{}:{textDecoration:"line-through"},children:o.text})}),Object(l.jsx)("button",{className:"CheckButton",onClick:function(e){t&&t(o.id,!o.completed)},children:!1===o.completed?"":Object(l.jsx)(m.a,{icon:x.a,color:"green"})}),Object(l.jsx)("button",{className:"DeleteButton",onClick:function(e){c&&c(o.id,!o.completed)},children:Object(l.jsx)(m.a,{icon:x.f,color:"grey"})}),Object(l.jsx)("button",{className:"DeleteButton",onClick:function(e){n&&n(o.id,!o.completed)},children:Object(l.jsx)(m.a,{icon:x.b,color:"grey"})})]})})}w.defaultProps={onChange:null,onDelete:null,onEdit:null,mission:""};var R=w,I=(c(122),c.p+"static/media/flag.89b3f41f.png"),L=c(167),M=c(166),A=c(169),D=c(165),P=c(164),F=c(170),K=c(159),V=c(70),G=c(161),H="'Baloo Tammudu 2'",J=Object(V.a)({typography:{fontFamily:H}}),U=Object(K.a)({root:{fontFamily:H},MuiTypography:{root:{fontFamily:H}}});var W=function(){var e=U(),t=Object(O.c)((function(e){return e.todos})),c=o.a.useState(!1),n=Object(b.a)(c,2),a=n[0],s=n[1],r=o.a.useState(""),i=Object(b.a)(r,2),j=i[0],u=i[1],h=Object(O.b)();function p(e,c){h({type:"todos/setDone",payload:e}),console.log(e,c),console.log(t)}function v(e,t){}function f(e,t){h({type:"todos/delete",payload:e})}var g=function(){s(!1)};return Object(l.jsxs)("div",{className:"Body",children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("img",{src:I,alt:"",style:{width:"25px",height:"25px",padding:"0 10px"}}),"Mission"]}),Object(l.jsx)("div",{className:"Missions-nav",children:Object(l.jsx)(d,{title:Object(l.jsx)(m.a,{icon:x.d}),onClick:function(){s(!0)}})}),Object(l.jsx)("div",{className:"Missions-wrapper",children:t.map((function(e){return Object(l.jsx)(R,{mission:e,onEdit:v,onDelete:f,onChange:p})}))}),Object(l.jsx)(G.a,{theme:J,children:Object(l.jsx)(A.a,{open:a,onClose:g,classes:{root:e.root},children:Object(l.jsxs)("div",{children:[Object(l.jsx)(F.a,{classes:{root:e.root},children:"Add new task"}),Object(l.jsx)(P.a,{classes:{root:e.root},children:Object(l.jsx)(M.a,{classes:{root:e.root},autoFocus:!0,margin:"dense",id:"name",label:"New task",type:"text",fullWidth:!0,onChange:function(e){u(e.target.value)}})}),Object(l.jsxs)(D.a,{classes:{root:e.root},children:[Object(l.jsx)(L.a,{onClick:g,color:"primary",classes:{root:e.root},children:"Cancel"}),Object(l.jsx)(L.a,{onClick:function(){return h({type:"todos/add",payload:j}),void s(!1)},color:"primary",classes:{root:e.root},children:"Add"})]})]})})})]})};var z=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-6",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(u,{}),Object(l.jsxs)(E.c,{children:[Object(l.jsx)(E.a,{path:"/setting",children:Object(l.jsx)(T,{})}),Object(l.jsx)(E.a,{path:"/missions",children:Object(l.jsx)(W,{})}),Object(l.jsx)(E.a,{default:!0,path:"/",children:Object(l.jsx)(k,{})})]})]})}),Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)(B,{})})]})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,172)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),o(e),a(e),s(e)}))},Q=c(71),X=c(12),Y=c(72);function Z(e){return e.reduce((function(e,t){return Math.max(t.id,e)}),-1)+1}var $={period:50,shortBreak:10,longBreak:20,longBreakInterval:4,periodCounter:0,state:"pomodoro",todos:[{id:0,text:"Learn React",completed:!0,color:"#e0544c"},{id:1,text:"Learn Redux",completed:!1,color:"#e0544c"},{id:2,text:"Build something fun!",completed:!1,color:"#e0544c"}],filters:{status:"Active",colors:["red","blue"]}},_=Object(Y.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETPERIOD":return Object(X.a)(Object(X.a)({},e),{},{period:t.value});case"SETSHORTBREAK":return Object(X.a)(Object(X.a)({},e),{},{shortBreak:t.value});case"SETLONGBREAK":return Object(X.a)(Object(X.a)({},e),{},{longBreak:t.value});case"SETLONGBREAKINTERVAL":return Object(X.a)(Object(X.a)({},e),{},{longBreakInterval:t.value});case"SETPERIODCOUNTER":return Object(X.a)(Object(X.a)({},e),{},{periodCounter:t.value});case"SETSTATE":return Object(X.a)(Object(X.a)({},e),{},{state:t.value});case"todos/add":return Object(X.a)(Object(X.a)({},e),{},{todos:[].concat(Object(Q.a)(e.todos),[{id:Z(e.todos),text:t.payload,completed:!1,color:"#e0544c"}])});case"todos/setDone":return Object(X.a)(Object(X.a)({},e),{},{todos:e.todos.map((function(e){return e.id!==t.payload?e:Object(X.a)(Object(X.a)({},e),{},{completed:!e.completed})}))});case"todos/delete":return Object(X.a)(Object(X.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload}))});default:return e}}));s.a.render(Object(l.jsx)(O.a,{store:_,children:Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(z,{})})}),document.getElementById("root")),q()},64:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},94:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[124,1,2]]]);
//# sourceMappingURL=main.5deaab35.chunk.js.map