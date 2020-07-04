(this["webpackJsonptypescript-sample"]=this["webpackJsonptypescript-sample"]||[]).push([[0],{143:function(e,t,a){e.exports=a(228)},152:function(e,t,a){},153:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),r=a.n(l),o=a(14);a(152),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(33),i=a(123),m=Object(s.c)({planet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PLANET_TO_STORE":return t.payload;default:return e}},vehicle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VEHICLES_TO_STORE":return t.payload;default:return e}},token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOKEN":return t.payload;default:return e}},result:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FIND_FALCON":return t.payload;default:return e}},time:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TIME_TAKEN":return t.payload;default:return e}}}),u=Object(s.d)(m,Object(s.a)(i.a)),f=a(21),d=a(5),p=a(230),h=(a(153),a(46)),E=a.n(h);var v=function(){return c.a.createElement("div",{className:"falcon-intro-main"},c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col-12 falcon-intro-main-col justify-content-center"},c.a.createElement("img",{className:"falcone-intro-main-logo",src:E.a,alt:"falcone-logo"}),c.a.createElement("h1",{className:"falcone-intro-main-head"},"FINDING FALCONE"),c.a.createElement("p",{className:"falcone-intro-main-subtext"},"King Shan received intelligence that Al Falcone is in hiding in one of these 6 planets.Donlon,Enchai,Jebing,Sapir,Lerbin & Pingasor.However he has limited resources at his disposal & can send his army to only 4 of these planets."),c.a.createElement("h4",{className:"falcone-intro-main-sub"},"HELP HIM TO FIND FALCONE"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(p.a,{type:"primary"},c.a.createElement(f.b,{to:"/FindFalcone"},"START"))))))},g=a(38),N=a(59),y=a(232),O=a(231),b=a(28),T=a.n(b),j=a(70),S=(a(180),a(229)),x=(a(181),{display:"block",height:"30px",lineHeight:"30px"}),A=O.a.Option,_=function(e){var t=Object(o.c)((function(e){return e.planet})),a=Object(o.c)((function(e){return e.vehicle}));return c.a.createElement("div",null,c.a.createElement("h5",{className:"falcone-planet-h5"},"Planet"," ",e.index+1," "),c.a.createElement("h6",{className:"falcone-selectPlanets"},"Select the planet "),c.a.createElement(O.a,{onChange:function(t){e.onSelectPlanetChange(t,e.index),console.log("selected ".concat(t))}},function(){var a=t.filter((function(t){return e.planets[e.index]===t.name||!e.planets.includes(t.name)})).map((function(e,t){return c.a.createElement(A,{value:e.name},e.name)}));return console.log("options",a),a}()),c.a.createElement("div",null,void 0===e.planets[e.index]?"":c.a.createElement(c.a.Fragment,null,c.a.createElement("h6",{className:"falcone-selectSpaceShip"},"Select the space ship "),c.a.createElement(S.default.Group,{name:String(e.index),onChange:e.handleRadioChange}," ",function(t){var n=e.planetsArray[t].distance;return a.map((function(e){return e.max_distance>=n&&e.total_no>0?c.a.createElement(S.default,{style:x,value:e.name},e.name,"(",e.total_no,")"):c.a.createElement(S.default,{style:x,value:e.name,disabled:!0},e.name,"(",e.total_no,")")}))}(e.index)))))},C=y.a.Header,F=y.a.Content,w=y.a.Footer,k=(O.a.Option,function(){var e=Object(o.c)((function(e){return e.planet})),t=Object(o.c)((function(e){return e.vehicle})),a=Object(o.c)((function(e){return e.token})),l=Object(o.b)(),r=Object(n.useState)([]),s=Object(N.a)(r,2),i=s[0],m=s[1],u=Object(n.useState)([]),d=Object(N.a)(u,2),h=d[0],v=d[1],O=Object(n.useState)([]),b=Object(N.a)(O,2),S=b[0],x=b[1],A=Object(n.useState)(0),k=Object(N.a)(A,2),I=k[0],L=k[1],R=Object(n.useState)([]),P=Object(N.a)(R,2),D=P[0],G=P[1];Object(n.useEffect)((function(){l(function(){var e=Object(j.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://findfalcone.herokuapp.com/token",{headers:{Accept:"application/json"},method:"POST"}).then((function(e){return e.json()}));case 2:a=e.sent,console.log(a),t({type:"GET_TOKEN",payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l(function(){var e=Object(j.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://findfalcone.herokuapp.com/planets").then((function(e){return e.json()}));case 2:a=e.sent,console.log(a),t({type:"SET_PLANET_TO_STORE",payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l(function(){var e=Object(j.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://findfalcone.herokuapp.com/vehicles").then((function(e){return e.json()}));case 2:a=e.sent,t({type:"SET_VEHICLES_TO_STORE",payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var K=function(e,a,n){if(n!==a&&void 0!==a){var c=t.map((function(e){return e.name})).indexOf(a),l=i[e].distance/t[c].speed,r=I+i[e].distance/S[e].speed-l;L(r)}else{var o=I+i[e].distance/S[e].speed;L(o)}},H=function(t,a){var n=t,c=e.filter((function(e){return e.name===n})),l=a;i[l]=c[0],m(Object(g.a)(i)),D[l]=n,G(Object(g.a)(D)),console.log("parent Componet ::",t,D)},M=function(e){var a=e.target.value,n=t.filter((function(e){return e.name===a})),c=Number(e.target.name);S[c]=n[0],x(Object(g.a)(S)),console.log("selected Vehicles ::",S);var l=h[c];if(h[c]=a,v(Object(g.a)(h)),K(c,l,a),l!=a&&void 0!=l){var r=t.map((function(e){return e.name})).indexOf(l);t[r].total_no=t[r].total_no+1;var o=t.map((function(e){return e.name})).indexOf(a);t[o].total_no=t[o].total_no-1}else{var s=t.map((function(e){return e.name})).indexOf(a);t[s].total_no=t[s].total_no-1}};return c.a.createElement("div",null,c.a.createElement("div",{className:"falcone-main-layout"},c.a.createElement(y.a,{className:"layout "},c.a.createElement(C,null,c.a.createElement("div",{className:"logo"},c.a.createElement("img",{className:"falcone-logo",src:E.a,alt:"falcone-logo"}),c.a.createElement("h2",{className:"finding-falcone"},"FINDING FALCONE"),c.a.createElement("p",{className:"finding-falcone-restart float-right"},c.a.createElement(f.b,{className:"finding-falcone-restart-link",to:"/"},"RESTART")))),c.a.createElement(F,{style:{padding:"0 50px"}},c.a.createElement("div",{className:"site-layout-content falcone-row-primary"},c.a.createElement("h5",{className:"falcone-text text-center"},"Select 4 planets and the space vehicles to search in these planets"),c.a.createElement("p",{className:"float-left"},"TIME TAKEN:",I),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(_,{index:0,onSelectPlanetChange:H,planets:D,planetsArray:i,handleRadioChange:M})),c.a.createElement("div",{className:"col falcone-col"},c.a.createElement(_,{index:1,onSelectPlanetChange:H,planets:D,planetsArray:i,handleRadioChange:M})),c.a.createElement("div",{className:"col"},c.a.createElement(_,{index:2,onSelectPlanetChange:H,planets:D,planetsArray:i,handleRadioChange:M})),c.a.createElement("div",{className:"col"},c.a.createElement(_,{index:3,onSelectPlanetChange:H,planets:D,planetsArray:i,handleRadioChange:M}))),4!==h.filter((function(e){return void 0!==e})).length?"":c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(p.a,{type:"primary",onClick:function(){var e=String(Object.values(a));l(function(e){return function(){var t=Object(j.a)(T.a.mark((function t(a){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("SelectedConsole:::",e),t.next=3,fetch("https://findfalcone.herokuapp.com/find",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}));case 3:n=t.sent,console.log(n),a({type:"FIND_FALCON",payload:n});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({token:e,planet_names:D,vehicle_names:h})),l({type:"TIME_TAKEN",payload:I}),console.log("TIME TAKEN ::",I)}},c.a.createElement(f.b,{to:"/FindFalcon/result"}," FIND FALCONE")))))),c.a.createElement(w,{style:{textAlign:"center"}},"Created for GeekTrust"))))}),I=(a(227),y.a.Header),L=y.a.Content,R=y.a.Footer,P=function(){var e=Object(o.c)((function(e){return e.result})),t=Object(o.c)((function(e){return e.time}));return c.a.createElement("div",null,c.a.createElement("div",{className:"falcon-finish-main"},c.a.createElement(y.a,{className:"layout "},c.a.createElement(I,null,c.a.createElement("div",{className:"logo"},c.a.createElement("img",{className:"falcone-logo",src:E.a,alt:"falcone-logo"}),c.a.createElement("h2",{className:"finding-falcone"},"FINDING FALCONE"),c.a.createElement("p",{className:"finding-falcone-restart float-right"},c.a.createElement(f.b,{className:"finding-falcone-restart-link",to:"/"},"RESTART")))),c.a.createElement(L,{style:{padding:"0 50px"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col falcon-finish-col"},c.a.createElement("h2",{className:"falcon-finish-status"},e.status,"!"),"success"===e.status?c.a.createElement("div",null,c.a.createElement("h6",{className:"falcon-finish-congrats"},"Congratulations on finding falcone.King Shan is mightly pleased.")," ",c.a.createElement("h5",{className:"falcon-data pt-3"},"PLANET FOUND:",c.a.createElement("b",null," ",e.planet_name)),c.a.createElement("h5",{className:"falcon-data"},"TIME TAKEN:",c.a.createElement("b",null," ",t))):"","false"===e.status?c.a.createElement("h6",{className:"falcon-finish-congrats"},"Oops AI Falcone is not there !!"):"",c.a.createElement(p.a,{type:"primary"},c.a.createElement(f.b,{to:"/"},"START AGAIN"))))),c.a.createElement(R,{style:{textAlign:"center"}},"Created for GeekTrust"))))};var D=function(){return c.a.createElement(f.a,{basename:"/"},c.a.createElement("div",{className:"App-main"},c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/",exact:!0},c.a.createElement(v,null)),c.a.createElement(d.a,{path:"/FindFalcone",exact:!0},c.a.createElement(k,null)),c.a.createElement(d.a,{path:"/FindFalcon/result"},c.a.createElement(P,null)))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{store:u},c.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){e.exports=a.p+"static/media/Logo.7e244568.png"}},[[143,1,2]]]);
//# sourceMappingURL=main.bd6dc98b.chunk.js.map