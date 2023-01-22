(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),c=n.n(i)()(r());c.push([e.id,"body{background-color:#fff}.title{display:flex;justify-content:center}.sim{background-color:#fff;border:solid;max-width:10em;max-height:10em;text-align:center}canvas{border:solid;margin:2em;min-width:80vw}.btns{display:flex}.sliders{display:flex}.box{display:flex;flex-direction:column;max-width:6em;text-align:center;border:solid}",""]);const a=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],l=o.base?s[0]+o.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var v=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:d,updater:v,references:1})}c.push(d)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var s=o(e,r),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{let e;function t(e,t,n,o,r,i,c){this.x=e,this.y=t,this.mass=c,this.height=o,this.width=n,this.velocity=r,this.acceleration=i}let o=new t(10,10,10,10,2,0,10),r=new t(200,10,10,10,0,0,10),i=!1;function c(){clearInterval(e),console.log("loop-stop")}function a(){const e=document.querySelector(".velocity1"),t=document.querySelector(".velocity2"),n=document.querySelector(".slidermass1"),i=document.querySelector(".slidermass2");o.x=10,o.y=10,r.x=200,r.y=10,e.value=1,t.value=0,n.value=1,i.value=1}function s(e,t,n,o){let r=document.createElement("div");r.setAttribute("class","box");let i=document.createElement("p");i.innerText=e;let c=document.createElement("input"),a=document.createElement("input");return c.setAttribute("class",`${e}`),a.setAttribute("type","range"),a.setAttribute("min",`${n}`),a.setAttribute("max",`${o}`),a.value=t,a.setAttribute("class","slider"+e),c.value=t,a.oninput=function(){c.value=this.value},r.appendChild(i),r.appendChild(c),r.appendChild(a),r}var l=n(379),u=n.n(l),d=n(795),p=n.n(d),m=n(569),v=n.n(m),f=n(565),y=n.n(f),h=n(216),b=n.n(h),x=n(589),g=n.n(x),S=n(192),C={};C.styleTagTransform=g(),C.setAttributes=y(),C.insert=v().bind(null,"head"),C.domAPI=p(),C.insertStyleElement=b(),u()(S.Z,C),S.Z&&S.Z.locals&&S.Z.locals,console.log("hello world"),function t(){console.log("hello world1");const n=document.querySelector("body");n.innerHTML="";const l=document.createElement("p");l.setAttribute("class","title"),l.innerText="PHYSICS-SIM";const u=document.createElement("div");u.setAttribute("class","sim sim1"),u.innerHTML="<p>Conservation of momentum</p><p>click me </p>",n.appendChild(l),n.appendChild(u),document.querySelector(".sim1").addEventListener("click",(()=>{!function(){const n=document.querySelector("body");n.innerHTML="",n.innerHTML="<div class='btns'><button class='go-back'>Go Back to menu</button><button class='start-game'>Start Simulation</button><button class='stop-game'>Stop Simulation</button><button class='reset-game'>Reset Simulation</button></div>";const l=document.createElement("canvas");l.setAttribute("class","cvs"),n.appendChild(l);let u=document.querySelector(".start-game"),d=document.querySelector(".reset-game"),p=document.querySelector(".stop-game"),m=!1,v=document.createElement("div");v.setAttribute("class","sliders");let f=s("velocity1",1,-20,20),y=s("mass1",1,0,20),h=s("velocity2",-1,-20,20),b=s("mass2",1,0,20);v.appendChild(f),v.appendChild(y),v.appendChild(h),v.appendChild(b),n.appendChild(v);let x=document.createElement("p");x.innerText="Velocity after inpact: 0",x.setAttribute("class","velocity1display"),n.appendChild(x),u.addEventListener("click",(()=>{m||function(){const t=document.querySelector(".cvs"),n=t.getContext("2d"),c=document.querySelector(".velocity1"),a=document.querySelector(".velocity2"),s=document.querySelector(".slidermass1"),l=document.querySelector(".slidermass2"),u=document.querySelector(".velocity1display");e=setInterval((()=>function(e,t,n,c,a,s,l){if(l.clearRect(0,0,s.width,s.height),o.x+o.width>=r.x&&o.x<=r.x+r.width&&0==i){i=!0;let t=(o.velocity*(o.mass-r.mass)+2*r.mass*r.velocity)/(o.mass+r.mass),n=(r.velocity*(r.mass-o.mass)+2*o.mass*o.velocity)/(o.mass+r.mass);o.velocity=t,r.velocity=n,e.innerText=`Velocity of block 1 after inpact: ${o.velocity.toFixed(2)}`,c.value=o.velocity.toFixed(2),a.value=r.velocity.toFixed(2)}else i=!1,o.velocity=c.value,r.velocity=a.value;o.mass=n.value,r.mass=t.value,r.x+=r.velocity/3,o.x+=o.velocity/3,o.y=s.height-o.height,r.y=s.height-r.height,l.fillRect(o.x,o.y,o.width,o.height),l.fillRect(r.x,r.y,r.width,r.height),console.log("loop")}(u,l,s,c,a,t,n)),20),console.log("loop-start")}(),m=!0})),p.addEventListener("click",(()=>{c(),m=!1})),d.addEventListener("click",(()=>{a()})),document.querySelector(".go-back").addEventListener("click",(()=>{!m||(c(),a()),t()}))}()}))}()})()})();