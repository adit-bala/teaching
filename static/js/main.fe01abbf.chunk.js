(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(30)},19:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),c=a.n(r),s=(a(19),a(0)),m=(a(8),a(5));function i(){return Object(m.useKonami)(function(){alert("[konami]")}),l.a.createElement("div",{className:"sidebar-container"},l.a.createElement("div",{className:"pfp-container"},l.a.createElement("div",{className:"switch",title:"[boo]"})),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"title-container"},l.a.createElement("div",{className:"name-div"},l.a.createElement("h1",{className:"name"}," Aditya Balasubramanian")),l.a.createElement("p",{className:"email"}," aditbala [at] berkeley [dot] edu"),l.a.createElement("h5",{className:"position"}," Spring 2023 CS 61A TA ")),l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"link-div"},l.a.createElement("a",{className:"link",href:"https://cs61a.org/",target:"_blank",rel:"noreferrer"},"Course Website")),l.a.createElement("div",{className:"link-div"},l.a.createElement("a",{className:"link",href:"https://drive.google.com/drive/folders/1NRurDjbnM0TYAW5NBC6MJVyC60dX-_H9?usp=sharing",target:"_blank",rel:"noreferrer"},"Lab Notes")),l.a.createElement("div",{className:"link-div"},l.a.createElement("a",{className:"link",href:"https://docs.google.com/forms/d/e/1FAIpQLSefWVPJbJdIx-04gaA_fNsMvUo6Nw6cZ5U8P5AopHfdND4iEg/viewform",target:"_blank",rel:"noreferrer"},"Feedback"))),l.a.createElement("div",{className:"times-container"},l.a.createElement("p",{className:"times"}," ",l.a.createElement("b",null,"Lab:")," Tu 3:30 - 5:00 PM @ ",l.a.createElement("b",null," SODA 271")," "),l.a.createElement("p",{className:"times"}," ",l.a.createElement("b",null,"Disc: ")," Th 3:30 - 5:00 PM @ ",l.a.createElement("b",null," SODA 320")," "),l.a.createElement("p",{className:"times"}," ",l.a.createElement("b",null,"OH: "),"TBD @ ",l.a.createElement("b",null," TBD")," ")))}a(4);function d(){return l.a.createElement("div",{className:"announcements-container"},l.a.createElement("div",{className:"title-div"},l.a.createElement("h1",{className:"title"}," Announcements ")),l.a.createElement("p",{className:"announcements"}," ","WELCOME."))}var o={disc:"https://cs61a.org/disc/",lab:"https://cs61a.org/lab/",slides:"https://slides.aditbala.com/".concat("sp23","/"),attendanceDisc:"https://links.aditbala.com/disc",attendanceLab:"https://links.aditbala.com/lab"},E=["00"];function u(e){var t=e.num,a=e.labTitle,n=e.discTitle,r=e.attend,c=e.sol;return l.a.createElement(l.a.Fragment,null,r[0]&&l.a.createElement("div",{className:"wrapper"},l.a.createElement("p",{className:"week"},"Lab ",t,": ",a),!E.includes(t)&&l.a.createElement("a",{href:o.attendanceLab,target:"_blank",className:"button slides",rel:"noreferrer"}," ","attendance"," "),l.a.createElement("a",{href:o.lab+"lab".concat(t),target:"_blank",className:"button slides",rel:"noreferrer"},"assignment"," "),c[0]&&l.a.createElement("a",{href:o.lab+"sol-lab".concat(t),target:"_blank",className:"button slides",rel:"noreferrer"}," ","solution"," ")),r[1]&&l.a.createElement("div",{className:"wrapper"},l.a.createElement("p",{className:"week"}," ","Disc ",t,": ",n," "),l.a.createElement("a",{href:o.attendanceDisc+"".concat(t),target:"_blank",className:"button slides",rel:"noreferrer"}," ","attendance"," "),l.a.createElement("a",{href:o.disc+"disc".concat(t),target:"_blank",className:"button",rel:"noreferrer"}," ","assignment"," "),c[1]&&l.a.createElement("a",{href:o.disc+"sol-disc".concat(t),target:"_blank",className:"button slides",rel:"noreferrer"}," ","solution"," ")),l.a.createElement("div",{className:"wrapper"},l.a.createElement("p",{className:"week"}," slides ",t,": "),l.a.createElement("a",{href:o.slides+"disc".concat(t," "),target:"_blank",className:"button slides",rel:"noreferrer"},"html"),l.a.createElement("a",{href:o.slides+"disc".concat(t,".pdf"),target:"_blank",className:"button slides",rel:"noreferrer"},"pdf")),l.a.createElement("br",null))}function b(e){var t=e.num,a=e.mStart,n=e.mEnd,r=e.dStart,c=e.dEnd,s=e.content;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"current-week"}," ",l.a.createElement("b",null,"week ",t,": ",a,"/",r," - ",n,"/",c)," "),l.a.createElement("div",null,l.a.createElement(u,{num:s.num,labTitle:s.lt,discTitle:s.dt,attend:s.at,sol:s.sol})))}function N(){return l.a.createElement("div",{className:"body-container"},l.a.createElement(d,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"title-div"},l.a.createElement("h1",{className:"title"}," Weekly Materials ")),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"week-div"},l.a.createElement(b,{num:"15",mStart:"4",dStart:"24",mEnd:"4",dEnd:"28",content:{num:"13",lt:"SQL",dt:"Final Review",at:[!0,!0],sol:[!1,!1]}}),l.a.createElement(b,{num:"14",mStart:"4",dStart:"17",mEnd:"4",dEnd:"21",content:{num:"12",lt:"Scheme Lists, Interpreters",dt:"Interpreters, SQL",at:[!0,!0],sol:[!0,!0]}}),l.a.createElement(b,{num:"13",mStart:"4",dStart:"10",mEnd:"4",dEnd:"14",content:{num:"11",lt:"Scheme",dt:"Scheme, Scheme Lists",at:[!0,!0],sol:[!0,!0]}}),l.a.createElement(b,{num:"10",mStart:"3",dStart:"20",mEnd:"3",dEnd:"24",content:{num:"09",lt:"Mutable Trees, Efficiency",dt:"Mutable Trees, Linked Lists, Efficiency",at:[!0,!1],sol:[!1,!1]}}),l.a.createElement(b,{num:"9",mStart:"3",dStart:"13",mEnd:"3",dEnd:"17",content:{num:"08",lt:"OOP, Inheritance",dt:"OOP, Inheritance, Str/Repr",at:[!0,!0],sol:[!0,!0]}}),l.a.createElement(b,{num:"8",mStart:"3",dStart:"06",mEnd:"3",dEnd:"10",content:{num:"07",lt:"Object-Oriented Programming",dt:"Object-Oriented Programming",at:[!0,!0],sol:[!0,!0]}}),l.a.createElement(b,{num:"7",mStart:"2",dStart:"27",mEnd:"3",dEnd:"03",content:{num:"06",lt:"Mutability, Iterators, Generators",dt:"Mutability, Iterators",at:[!0,!0],sol:[!0,!0]}}),l.a.createElement(b,{num:"6",mStart:"2",dStart:"20",mEnd:"2",dEnd:"24",content:{num:"05",lt:"Data Abstraction, Sequences",dt:"Trees",at:[!0,!0],sol:[!0,!0]}}),l.a.createElement(b,{num:"5",mStart:"2",dStart:"13",mEnd:"2",dEnd:"17",content:{num:"04",lt:"Recursion, Tree Recursion, Python Lists ",dt:"Tree Recursion, Python Lists",at:[!0,!0],sol:[!0,!0]}}),l.a.createElement(b,{num:"4",mStart:"2",dStart:"06",mEnd:"2",dEnd:"10",content:{num:"03",lt:"Recursion",dt:"Recursion",at:[!1,!0],sol:[!1,!0]}}),l.a.createElement(b,{num:"3",mStart:"1",dStart:"30",mEnd:"2",dEnd:"03",content:{num:"02",lt:"HOF, Lambda Expressions",dt:"Environment Diagrams, HOF",at:[!0,!0],sol:[!0,!0]}}),l.a.createElement(b,{num:"2",mStart:"1",dStart:"23",mEnd:"1",dEnd:"27",content:{num:"01",lt:"Functions, Control",dt:"Control, Environment Diagrams",at:[!0,!0],sol:[!0,!0]}}),l.a.createElement(b,{num:"1",mStart:"1",dStart:"18",mEnd:"1",dEnd:"20",content:{num:"00",lt:"Getting Started",dt:"Getting Started",at:[!0,!0],sol:[!1,!0]}})))))}var v=function(){return l.a.createElement("div",{className:"page"},l.a.createElement(i,null),l.a.createElement(N,null))};function f(){return Object(m.useKonami)(function(){alert("[konami]")}),l.a.createElement("div",{className:"sidebar-container"},l.a.createElement("div",{className:"pfp-container"},l.a.createElement("div",{className:"switch",title:"[boo]"})),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"title-container"},l.a.createElement("div",{className:"name-div"},l.a.createElement("h1",{className:"name"}," Aditya Balasubramanian")),l.a.createElement("p",{className:"email"}," aditbala [at] berkeley [dot] edu"),l.a.createElement("h5",{className:"position"}," Summer 2023 CS 61C TA ")),l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"link-div"},l.a.createElement("a",{className:"link",href:"https://cs61c.org/",target:"_blank",rel:"noreferrer"},"Course Website")),l.a.createElement("div",{className:"link-div"},l.a.createElement("a",{className:"link",href:"https://links.cs61c.org/su23-disc",target:"_blank",rel:"noreferrer"},"Attendance")),l.a.createElement("div",{className:"link-div"},l.a.createElement("a",{className:"link",href:"https://docs.google.com/forms/d/e/1FAIpQLSefWVPJbJdIx-04gaA_fNsMvUo6Nw6cZ5U8P5AopHfdND4iEg/viewform",target:"_blank",rel:"noreferrer"},"Feedback"))),l.a.createElement("div",{className:"times-container"},l.a.createElement("p",{className:"times"}," ",l.a.createElement("b",null,"Disc: "),"M/W 6-7:00PM @ ",l.a.createElement("b",null,"Soda 420")," "),l.a.createElement("p",{className:"times"}," ",l.a.createElement("b",null,"OH: "),"M/Tu 5-6:00PM @ ",l.a.createElement("b",null," Soda 382E/H")," ")))}a(26);var p=function(){return l.a.createElement("div",{className:"page"},l.a.createElement(f,null),l.a.createElement("div",{className:"body-container"},l.a.createElement("div",{className:"announcements-container"},l.a.createElement("div",{className:"title-div"},l.a.createElement("h1",{className:"title"}," Weekly Materials "))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"week-div"},Array.from({length:12},function(e,t){return t+1}).map(function(e){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("p",{className:"week"},"Discussion ".concat(e<10?"0"+e:e,": ")),l.a.createElement("a",{href:"https://slides.aditbala.com/61c/su23/disc".concat(e<10?"0"+e:e),target:"_blank",className:"button slides_button",rel:"noopener noreferrer"},l.a.createElement("span",{className:"btn_label"},"Slides"),l.a.createElement("svg",{width:"8",height:"8",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M1 9L9 1M9 1H1.80004M9 1L9.00002 4.55556L9.00005 8.11111",stroke:"white"}))),l.a.createElement("a",{href:"https://cs61c.org/su23/discussions/disc".concat(e<10?"0"+e:e),target:"_blank",className:"button worksheet_button",rel:"noopener noreferrer"},l.a.createElement("span",{className:"btn_label"},"Worksheet"),l.a.createElement("svg",{width:"8",height:"8",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M1 9L9 1M9 1H1.80004M9 1L9.00002 4.55556L9.00005 8.11111",stroke:"black"}))))})))))};a(28);var h=function(){return l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"",element:l.a.createElement(p,null)}),l.a.createElement(s.a,{path:"/61a",element:l.a.createElement(v,null)}))},g=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,31)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})},k=a(6);c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k.a,null,l.a.createElement(h,null)))),g()},4:function(e,t,a){},8:function(e,t,a){}},[[10,3,2]]]);
//# sourceMappingURL=main.fe01abbf.chunk.js.map