!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var r,o,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function j(e){return l=e,f=setTimeout(h,t),d?y(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function h(){var e=g();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?p(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=o=void 0,u)}function T(){var e=g(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(h,t),y(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:w(g())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j,O=document.querySelector(".feedback-form"),h=document.querySelector("input"),w=document.querySelector("textarea"),T="feedback-form-state";function E(e){var t={email:h.value,message:w.value};localStorage.setItem(T,JSON.stringify(t))}h.addEventListener("input",e(t)(E,500)),w.addEventListener("input",e(t)(E,500)),O.addEventListener("submit",(function(e){e.preventDefault();new FormData(O);O.forEach((function(e,t){console.log(e,t)})),O.reset(),localStorage.removeItem(T)})),O.addEventListener("input",(function(e){formData[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(formData))})),j=localStorage.getItem(T),(j=JSON.parse(j))&&(h.value=j.email,w.value=j.message)}();
//# sourceMappingURL=03-feedback.9614674e.js.map
