!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(2);const u=document.querySelector(".form");Object(r.addValidationListeners)();u.addEventListener("submit",(function(t){t.preventDefault();const e=new FormData(t.target);fetch("https://60376bfd5435040017722533.mockapi.io/form",{method:"POST",body:e}).then((t=>{t.ok?u.reset():Object(o.createAlertElement)()})).catch((()=>{Object(o.createAlertElement)()}))}))},function(t,e,n){"use strict";n.r(e),n.d(e,"addValidationListeners",(function(){return p}));const r=document.querySelector(".form__input--name"),o=document.querySelector(".form__input--phone"),u=document.querySelector(".form__input--email"),i={text:"Пожалуйста, используйте только русские буквы, пробелы и тире.",pattern:/[^-а-яА-Я ]/g},c={text:'Пожалуйста, используйте только цифры, знаки "-" и "+" и пробелы.',pattern:/[^-0-9 +]/g},a={text:"Пожалуйста, введите корреткный email.",pattern:/[^a-zA-z]+@[^a-zA-z]+.[^a-zA-z]+/g},l=function(t,e,n){t.value.match(e)?t.setCustomValidity(n):t.setCustomValidity("")},f=function(){l(r,i.pattern,i.text)},s=function(){l(o,c.pattern,c.text)},d=function(){l(u,a.pattern,a.text)},p=function(){r.addEventListener("input",f),o.addEventListener("input",s),u.addEventListener("input",d)}},function(t,e,n){"use strict";n.r(e),n.d(e,"createAlertElement",(function(){return u}));var r=n(3);const o=document.querySelector(".form"),u=Object(r.setDebounce)((function(){const t=document.createElement("p");t.textContent="Не удалось отправить форму, попробуйте позднее.",t.style.marginBottom=0,t.style.color="red",t.style.position="absolute",t.style.top="343px",t.style.left="43px",o.append(t),setTimeout((()=>{t.remove()}),3e3)}))},function(t,e,n){"use strict";n.r(e),n.d(e,"setDebounce",(function(){return r}));const r=function(t){let e=null;return function(){const n=arguments;e&&window.clearTimeout(e),e=window.setTimeout((function(){t.apply(null,n)}),500)}}}]);
//# sourceMappingURL=bundle.js.map