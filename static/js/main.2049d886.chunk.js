(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=(a(14),a(1)),m=(a(16),a(4)),s=a.n(m);function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},l.a.createElement("img",{src:s.a,alt:"no logo"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("button",{type:"button",className:"btn btn-".concat("light"===e.mode?"dark":"light"," my-3 mx-1"),onClick:e.toggleMode},"light"===e.mode?"Darkmode":"Lightmode"))))}function d(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],r=a[1],m=o.split(" ").length-1;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mb-3 my-5"},l.a.createElement("h2",null,e.heading),l.a.createElement("textarea",{className:"form-control ".concat(e.mode),value:o,onChange:function(e){r(e.target.value)},id:"text-area-toggle",rows:"8"}),l.a.createElement("button",{type:"button",className:"btn btn-".concat("light"===e.mode?"primary":"dark"," my-3 mx-1"),onClick:function(){var t=o.toUpperCase();r(t),""===document.getElementById("text-area-toggle").value?e.showAlert("Text Area Empty","warning"):e.showAlert("Converted to Uppercase","success")}},"UPPERCASE"),l.a.createElement("button",{type:"button",className:"btn btn-".concat("light"===e.mode?"primary":"dark"," my-3 mx-1"),onClick:function(){var t=o.toLowerCase();r(t),""===document.getElementById("text-area-toggle").value?e.showAlert("Text Area Empty","warning"):e.showAlert("Converted to Lowercase","success")}},"lowercase"),l.a.createElement("button",{type:"button",className:"btn btn-".concat("light"===e.mode?"primary":"dark"," my-3 mx-1"),onClick:function(){navigator.clipboard.writeText(o),""===document.getElementById("text-area-toggle").value?e.showAlert("Text Area Empty","warning"):e.showAlert("Copied to Clipboard","success")}},"Copy"),l.a.createElement("button",{type:"button",className:"btn btn-".concat("light"===e.mode?"primary":"dark"," my-3 mx-1"),onClick:function(){var t=o.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extra Spaces Removed","success")}},"Remove Extra Spaces"),l.a.createElement("button",{type:"button",className:"btn btn-danger my-3 mx-1",onClick:function(){r(""),""===document.getElementById("text-area-toggle").value||e.showAlert("Text Cleared","success")}},"Clear")),l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"Text Summary"),l.a.createElement("p",null,m," Words and ",o.length," Characters"),l.a.createElement("p",null,.48*m," Seconds reading time")))}i.defaultProps={title:"No Title",about:"About"};var u=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type),id:"alrt",role:"alert"},l.a.createElement("strong",null,e.alert.msg))};var g=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(null),m=Object(c.a)(r,2),s=m[0],g=m[1],b=function(e,t){g({msg:e,type:t}),setTimeout(function(){g(null)},1e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{mode:a,toggleMode:function(){"light"===a?(o("dark"),document.getElementById("body").style.backgroundColor="#292a2e",document.getElementById("body").style.color="white",b("Darkmode has been Enabled","success")):(o("light"),document.getElementById("body").style.backgroundColor="white",document.getElementById("body").style.color="black",b("Lightmode has been Enabled","success"))}}),l.a.createElement(u,{alert:s}),l.a.createElement(d,{showAlert:b,heading:"Enter Text to Analyze",mode:a}))},b=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null))),b()},4:function(e,t,a){e.exports=a.p+"static/media/logo.d595dfe5.png"},5:function(e,t,a){e.exports=a(18)}},[[5,3,2]]]);
//# sourceMappingURL=main.2049d886.chunk.js.map