(this.webpackJsonpbelefti=this.webpackJsonpbelefti||[]).push([[0],{21:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),a=n(14),s=n.n(a),i=(n(21),n(16)),r=n(15),l=n.n(r),d=n.p+"static/media/logo.689b0658.jpg",u=(n(40),n(0));var h=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){l.a.get("https://hiveon.net/api/v1/stats/miner/1ad68e074d71c8fc6abe15187173767101d4c26e/ETH/billing-acc").then((function(e){return o(e.data)})).catch((function(e){return console.log(e)}))}),[]);var a=n.totalUnpaid,s=new Date,r="".concat(s.getDate(),"/").concat(s.getMonth()+1,"/").concat(s.getFullYear()," \xe0 ").concat((s.getHours()<10?"0":"")+s.getHours(),":").concat((s.getMinutes()<10?"0":"")+s.getMinutes(),":").concat((s.getSeconds()<10?"0":"")+s.getSeconds());return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("h1",{children:"Mohamed HM"}),Object(u.jsx)("img",{src:d,className:"App-logo",alt:"logo",onClick:function(){window.location.reload(!1)},style:{cursor:"pointer"}}),Object(u.jsx)("h3",{children:r}),Object(u.jsxs)("h4",{children:["La valeur actuelle est de: ",Object(u.jsx)("span",{style:{color:"green"},children:parseFloat(a).toFixed(5)})]}),Object(u.jsxs)("h5",{children:["Le pourcentage pour atteindre 0.1 est de: ",Object(u.jsxs)("span",{style:{color:"red"},children:[parseFloat(1e3*a).toFixed(2)," %"]})]})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),j()}},[[42,1,2]]]);
//# sourceMappingURL=main.b9e8427b.chunk.js.map