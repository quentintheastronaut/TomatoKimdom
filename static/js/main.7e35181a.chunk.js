(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},45:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(17),s=n.n(i),o=(n(37),n(26),n(38),n.p+"static/media/tomato-5.641c9480.png"),r=(n(39),n(13)),l=n(1);function j(e){var t=e.onClick,n=e.title,c=e.path;return Object(l.jsx)("button",{className:"Button",onClick:function(e){t&&t(e)},children:""===c?n:Object(l.jsx)(r.b,{to:c,style:{textDecoration:"none",color:"white"},children:n})})}j.defaultProps={onClick:null,title:"Button",path:""};var u=j;var d=function(){return Object(l.jsx)("div",{className:"Header",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(r.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("img",{className:"Logo",src:o,alt:""}),Object(l.jsx)("p",{className:"header-title",children:"Tomato Kingdom"})]})}),Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(u,{title:"Login"}),Object(l.jsx)(u,{title:"Setting",path:"/setting"}),Object(l.jsx)(u,{title:"Missions",path:"/missions"}),Object(l.jsx)(u,{title:"Challenges"})]})]})})},b=n(21),O=(n(45),n(5)),h=function(e){return{type:"SETPERIODCOUNTER",value:e}},p=function(e){return{type:"SETSTATE",value:e}},m=n(19),v=n(20),x=n.p+"static/media/ding.658f4412.mp3",f=n(30);function g(e){var t="0".concat(Math.floor(e/60).toString()).slice(-2),n="0".concat((e%60).toString()).slice(-2);return"".concat(t,":").concat(n)}var N=function(e){var t=Object(O.b)(),n=Object(O.c)((function(e){return e.period})),a=Object(O.c)((function(e){return e.periodCounter})),i=Object(O.c)((function(e){return e.shortBreak})),s=Object(O.c)((function(e){return e.longBreak})),o=Object(O.c)((function(e){return e.longBreakInterval})),r=Object(O.c)((function(e){return e.state})),j=Object(c.useState)(60*n),d=Object(b.a)(j,2),N=d[0],T=d[1],k=Object(c.useState)(!1),E=Object(b.a)(k,2),S=E[0],C=E[1],y=Object(c.useState)(0),B=Object(b.a)(y,2),D=B[0],w=B[1],R=new Audio(x);function I(){return"pomodoro"===r&&a<o-1?(t(p("short")),t(h(a+1)),T(60*i),C(!1),R.play()):"pomodoro"===r&&a>=o-1?(t(p("long")),t(h(a+1)),T(60*s),C(!1),R.play()):"short"===r?(t(p("pomodoro")),T(60*n),C(!1),R.play()):"long"===r&&(t(p("pomodoro")),t(h(0)),T(60*n),C(!1),R.play()),w((function(e){return e+1})),[!0,1e3]}return R.loop=!1,console.log(N,r,S),Object(l.jsxs)("div",{className:"Clock",children:[Object(l.jsx)("div",{className:"Clock-wrapper",children:Object(l.jsx)(f.CountdownCircleTimer,{size:"300",isPlaying:S,duration:N,initialRemainingTime:N,colors:[["#004777",.33],["#F7B801",.33],["#A30000",.33]],onComplete:function(e){return I()},children:function(e){var t=e.remainingTime;return Object(l.jsxs)("div",{className:"timer",children:[Object(l.jsx)("div",{className:"value",children:g(t)}),Object(l.jsx)("div",{className:"text",children:"seconds"})]})}},D)}),Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(u,{title:Object(l.jsx)(m.a,{icon:v.c}),onClick:function(e){C(!1),T(60*n),w((function(e){return e+1}))}}),Object(l.jsx)(u,{title:N===60*n||!1===S?Object(l.jsx)(m.a,{icon:v.a}):Object(l.jsx)(m.a,{icon:v.b}),onClick:function(e){S?(console.log("stop"),C(!1)):(console.log("play"),C(!0),N===60*n&&R.play())}}),Object(l.jsx)(u,{title:"Next",onClick:function(){return I()}})]})]})};n(49),n(50);var T=function(){for(var e=[],t=Object(O.c)((function(e){return e.longBreakInterval})),n=Object(O.c)((function(e){return e.periodCounter})),c=0;c<t;c++)c<n?e.push(Object(l.jsx)("div",{className:"Parallelogram",style:{backgroundColor:"red"}})):e.push(Object(l.jsx)("div",{className:"Parallelogram",style:{backgroundColor:"white"}}));return Object(l.jsx)("div",{className:"Stack",children:Object(l.jsx)("div",{className:"Stack-wrapper",children:e.map((function(e){return e}))})})};var k=function(){return Object(l.jsx)("div",{className:"Body",children:Object(l.jsxs)("div",{className:"Body-wrapper",children:[Object(l.jsx)(N,{}),Object(l.jsx)(T,{})]})})},E=n(31),S=n.n(E);n(69);var C=function(){return Object(l.jsx)("div",{className:"SoundCloudWidget",children:Object(l.jsx)(S.a,{url:"https://soundcloud.com/le-hoang-phuc-646298054/vtv-o-nha-1m-ep05-imma-heartbreaker",width:"350px",height:"125px"})})},y=n(4);n(70);var B=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.period})),n=0,c=0,a=0,i=0;function s(e){switch(e.target.name){case"pomodoro":n=e.target.value;break;case"short":c=e.target.value;break;case"long":a=e.target.value;break;case"interval":i=e.target.value}}return Object(l.jsx)("div",{className:"Body",children:Object(l.jsxs)("div",{className:"Setting-wrapper",children:[Object(l.jsxs)("div",{className:"Time",children:[Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Pomodoro"}),Object(l.jsx)("input",{className:"Input",defaultValue:"50",type:"number",name:"pomodoro",placeholder:"Pomodoro",onChange:s})]}),Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Short break"}),Object(l.jsx)("input",{className:"Input",defaultValue:"10",type:"number",name:"short",placeholder:"Short break",onChange:s})]}),Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Long break"}),Object(l.jsx)("input",{className:"Input",defaultValue:"20",type:"number",name:"long",placeholder:"Long Break",onChange:s})]}),Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Long break interval"}),Object(l.jsx)("input",{className:"Input",defaultValue:"4",type:"number",name:"interval",placeholder:"Long Break Interval",onChange:s})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)(u,{title:"Submit",onClick:function(t){e({type:"SETPERIOD",value:0===n?50:n}),e(function(e){return{type:"SETSHORTBREAK",value:e}}(0===c?10:c)),e(function(e){return{type:"SETLONGBREAK",value:e}}(0===a?20:a)),e(function(e){return{type:"SETLONGBREAKINTERVAL",value:e}}(0===i?4:i)),console.log("Submit")}})}),Object(l.jsx)("div",{children:t})]})})};n(71),n(72);function D(e){var t=e.onChange,n=e.mission;return Object(l.jsx)("div",{className:"Mission",children:Object(l.jsxs)("div",{className:"Mission-wrapper",children:[Object(l.jsx)("div",{children:n.id}),Object(l.jsx)("div",{className:"Mission-content",style:!1===n.isDone?{}:{textDecoration:"line-through"},children:n.mission}),Object(l.jsx)("button",{onClick:function(e){t&&t(n.id,!n.isDone)},children:"Cick me"})]})})}D.defaultProps={onChange:null,mission:""};var w=D,R=(n(73),n.p+"static/media/flag.89b3f41f.png");var I=function(){var e=Object(O.c)((function(e){return e.toDos})),t=Object(O.c)((function(e){return e.period})),n=Object(O.b)();function c(t,c){n(function(e,t){return{type:"SETSTATETODO",id:e,value:t}}(t,c)),console.log(t,c),console.log(e)}return Object(l.jsxs)("div",{className:"Body",children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("img",{src:R,alt:"",style:{width:"25px",height:"25px",padding:"0 10px"}}),"Mission"]}),Object(l.jsx)("div",{className:"Missions-wrapper",children:e.map((function(e){return Object(l.jsx)(w,{mission:e,onChange:c})}))}),Object(l.jsx)("div",{children:t})]})};var A=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-6",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(y.c,{children:[Object(l.jsx)(y.a,{path:"/setting",children:Object(l.jsx)(B,{})}),Object(l.jsx)(y.a,{path:"/missions",children:Object(l.jsx)(I,{})}),Object(l.jsx)(y.a,{default:!0,path:"/",children:Object(l.jsx)(k,{})})]})]})}),Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)(C,{})})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},P=n(6),M=n(32),K={period:50,shortBreak:10,longBreak:20,longBreakInterval:4,periodCounter:0,state:"pomodoro",toDos:[{id:0,isDone:!0,mission:"H\u1ecdc responsive"},{id:1,isDone:!0,mission:"H\u1ecdc Webpack"},{id:2,isDone:!0,mission:"H\u1ecdc Redux"}]},H=Object(M.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETPERIOD":return Object(P.a)(Object(P.a)({},e),{},{period:t.value});case"SETSHORTBREAK":return Object(P.a)(Object(P.a)({},e),{},{shortBreak:t.value});case"SETLONGBREAK":return Object(P.a)(Object(P.a)({},e),{},{longBreak:t.value});case"SETLONGBREAKINTERVAL":return Object(P.a)(Object(P.a)({},e),{},{longBreakInterval:t.value});case"SETPERIODCOUNTER":return Object(P.a)(Object(P.a)({},e),{},{periodCounter:t.value});case"SETSTATE":case"ADDTODO":case"DELETETODO":return Object(P.a)(Object(P.a)({},e),{},{state:t.value});case"SETSTATETODO":var n=e.toDos;return n[t.id].isDone=t.value,Object(P.a)(Object(P.a)({},e),{},{toDos:n});default:return e}}));s.a.render(Object(l.jsx)(O.a,{store:H,children:Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(A,{})})}),document.getElementById("root")),L()}},[[74,1,2]]]);
//# sourceMappingURL=main.7e35181a.chunk.js.map