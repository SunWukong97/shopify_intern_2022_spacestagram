(this.webpackJsonpspacestagram=this.webpackJsonpspacestagram||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),i=a.n(s),r=(a(11),a(6)),o=a(2),l=(a(12),a(13),a(0));var d=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],s=a?Object(l.jsx)("i",{className:"fas fa-heart heart-animation"}):"Like",i=a?"red":"white";return Object(l.jsx)("button",{className:"my-like-button",onClick:function(){n(!a)},style:{backgroundColor:i},children:s})};var j=function(e){var t,a=e.title,c=e.mediaType,n=e.imageUrl,s=e.date,i=e.description;return t="image"===c?Object(l.jsx)("img",{src:n,alt:"an picture taken by NASA of space",className:"card-img-top"}):Object(l.jsx)("iframe",{title:"youtube video of "+a,style:{height:"20em",width:"auto"},controls:!0,src:n,alt:"an picture taken by NASA of space",className:"card-img-top"}),Object(l.jsxs)("div",{className:"card pb-2 shadow-sm",children:[t,Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h2",{className:"card-title",children:a}),Object(l.jsx)("p",{children:s}),Object(l.jsx)("p",{className:"card-text",children:i}),Object(l.jsx)(d,{})]})]})};a(15);var u=function(e){var t=e.display;return Object(l.jsx)("div",{className:"background-overlay",style:{display:t},children:Object(l.jsxs)("div",{className:"loading-icon-wrapper",children:[Object(l.jsx)("div",{className:"loading-icon loading-icon-animation"}),Object(l.jsx)("p",{children:"Loading"})]})})};a(16),a(17);var b=function(e){var t=e.dateSelection,a=[10,20,30,60];return Object(l.jsxs)("div",{className:"date-selector-menu",children:[Object(l.jsx)("label",{htmlFor:"date-selector",children:"Posts from last"}),Object(l.jsxs)("select",{name:"date-selector",id:"date-selector",onChange:function(e){t(e.target.value)},children:[Object(l.jsx)("option",{value:a[0],children:"10 days"}),Object(l.jsx)("option",{value:a[1],children:"20 days"}),Object(l.jsx)("option",{value:a[2],children:"30 days"}),Object(l.jsx)("option",{value:a[3],children:"2 months"})]})]})};var h=function(e){var t=e.dateSelection;return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"navbar-brand h1",href:"#",children:"Spacestagram"}),Object(l.jsx)("p",{children:"Brought to you by NASA's Astronomy Picture of the Day (APOD) API"})]}),Object(l.jsx)(b,{dateSelection:t})]})};var m=function(){var e,t,a=(new Date).toISOString().slice(0,10),s=new Date;s.setDate(s.getDate()-10),s=s.toISOString().slice(0,10);var i,d=Object(c.useState)(!0),b=Object(o.a)(d,2),m=b[0],O=b[1],f=Object(c.useState)(null),p=Object(o.a)(f,2),v=p[0],x=p[1];function g(e){i="https://api.nasa.gov/planetary/apod?api_key=".concat("vn0fMtp6NRQpMEMQlXgvuFttofKGuxcMKFG0cixN","&start_date=").concat(e,"&end_date=").concat(a),fetch(i).then((function(e){if(!e.ok)throw new Error("no reposnse");return e.json()})).then((function(e){x(e.reverse()),O(!1)})).catch((function(e){console.error("problem fetching data")}))}return Object(c.useEffect)((function(){g(s)}),[]),m?t="block":(t="none",e=function(e){var t,a=[],c=Object(r.a)(e);try{for(c.s();!(t=c.n()).done;){var n=t.value;a.push(Object(l.jsx)("div",{className:"row justify-content-center mt-4",children:Object(l.jsx)("div",{className:"col-lg-4 col-md-8 col-sm-auto",children:Object(l.jsx)(j,{title:n.title,mediaType:n.media_type,imageUrl:n.url,date:n.date,description:n.explanation})})},n.title))}}catch(s){c.e(s)}finally{c.f()}return a}(v)),Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)(h,{dateSelection:function(e){var t=new Date;t.setDate((new Date).getDate()-e),t=t.toISOString().slice(0,10),O(!0),g(t)}}),Object(l.jsx)(u,{display:t}),Object(l.jsx)("div",{className:"container ",children:e})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.262075a9.chunk.js.map