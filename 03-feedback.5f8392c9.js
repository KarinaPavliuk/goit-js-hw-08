function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,s=l||f||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var i,o,a,r,u,l,f=0,s=!1,c=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,a=o;return i=o=void 0,f=t,r=e.apply(a,n)}function h(e){return f=e,u=setTimeout(w,t),s?y(e):r}function j(e){var n=e-l;return void 0===l||n>=t||n<0||c&&e-f>=a}function w(){var e=v();if(j(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-l);return c?d(n,a-(e-f)):n}(e))}function O(e){return u=void 0,g&&i?y(e):(i=o=void 0,r)}function T(){var e=v(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===u)return h(l);if(c)return u=setTimeout(w,t),y(l)}return void 0===u&&(u=setTimeout(w,t)),r}return t=b(t)||0,p(n)&&(s=!!n.leading,a=(c="maxWait"in n)?m(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),f=0,i=l=o=u=void 0},T.flush=function(){return void 0===u?r:O(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||r.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),h=JSON.parse(localStorage.getItem("feedback-form-state"));y.addEventListener("input",e(t)((e=>{console.log("input");const t=y.elements.email.value,n=y.elements.message.value,i=JSON.stringify({email:t,message:n});localStorage.setItem("feedback-form-state",i)}),500)),h&&(y.email.value=h.email||"",y.message.value=h.message||""),y.addEventListener("submit",(e=>{if(e.preventDefault(),""===y.email.value||""===y.message.value)return alert("Please fill in all the fields!");localStorage.removeItem("feedback-form-state"),console.log({email:y.email.value,message:y.message.value}),y.email.value="",y.message.value=""}));
//# sourceMappingURL=03-feedback.5f8392c9.js.map
