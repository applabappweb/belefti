(this.webpackJsonpbelefti=this.webpackJsonpbelefti||[]).push([[0],{21:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),o=c(16),s=c.n(o),r=(c(21),c(7)),i=c(6),l=c.n(i),d=c.p+"static/media/logo.689b0658.jpg",u=(c(40),c(0));var h=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)([]),s=Object(r.a)(o,2),i=s[0],h=s[1];Object(n.useEffect)((function(){l.a.get("https://hiveon.net/api/v1/stats/miner/1ad68e074d71c8fc6abe15187173767101d4c26e/ETH/billing-acc").then((function(e){return a(e.data)})).catch((function(e){return console.log(e)})),l.a.get("https://api.ethereumdb.com/v1/ticker?pair=ETH-USD&range=1h").then((function(e){return h(e.data)})).catch((function(e){return console.log(e)}))}),[]);var j=i.price,p=c.totalUnpaid,g=new Date,b="".concat(g.getDate(),"/").concat(g.getMonth()+1,"/").concat(g.getFullYear()," \xe0 ").concat((g.getHours()<10?"0":"")+g.getHours(),":").concat((g.getMinutes()<10?"0":"")+g.getMinutes(),":").concat((g.getSeconds()<10?"0":"")+g.getSeconds());return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("h1",{children:"Mohamed HM"}),Object(u.jsx)("img",{src:d,className:"App-logo",alt:"logo",onClick:function(){window.location.reload(!1)},style:{cursor:"pointer"}}),Object(u.jsx)("h3",{children:b}),Object(u.jsxs)("h4",{children:["La valeur actuelle est de: ",Object(u.jsx)("span",{style:{color:"green"},children:parseFloat(p).toFixed(5)})]}),Object(u.jsxs)("h4",{children:["Le pourcentage pour atteindre 0.1 est de: ",Object(u.jsxs)("span",{style:{color:"red"},children:[parseFloat(1e3*p).toFixed(2)," %"]})]}),Object(u.jsxs)("h4",{children:["Le Montant est de: ",Object(u.jsxs)("span",{style:{color:"yellow"},children:[parseFloat(j*p*180).toFixed(2)," DA"]})]})]})})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),j()}},[[42,1,2]]]);
//# sourceMappingURL=main.8f1b871a.chunk.js.map