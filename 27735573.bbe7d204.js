(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(96)),o=r(97),c={id:"api-key",title:"API key"},p={unversionedId:"api-key",id:"api-key",isDocsHomePage:!1,title:"API key",description:"1. Navigate to XPay dashboard through the follwing Urls:",source:"@site/docs\\api_key.mdx",slug:"/api-key",permalink:"/docs/api-key",version:"current",sidebar:"docs",previous:{title:"Errors reference",permalink:"/docs/android-sdk/sdk-errors"},next:{title:"API Payments",permalink:"/docs/api-payments"}},l=[],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Navigate to XPay dashboard through the follwing Urls:")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://staging.xpay.app/admin/"}),"Testing dashboard"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://community.xpay.app/admin/"}),"Testing dashboard")))),Object(i.a)("img",{alt:"XPay dashboard login screen",src:Object(o.a)("guides/login.png")}),Object(i.a)("ol",{start:2},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Enter your credentials and click on ",Object(i.a)("strong",{parentName:"p"},"Log in"),".")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Click on ",Object(i.a)("strong",{parentName:"p"},"add API key")," button in the top right corner.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Fill in the name."))),Object(i.a)("img",{alt:"Add API key",src:Object(o.a)("guides/add_api_key.png")}),Object(i.a)("ol",{start:5},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"click ",Object(i.a)("strong",{parentName:"p"},"Save"),", you will be redirected back to ",Object(i.a)("strong",{parentName:"p"},"API keys"),".")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"copy the api key value from the message that appears in the top and save it safely as it can't be retrieved later."))),Object(i.a)("img",{alt:"API key",src:Object(o.a)("guides/new_api_key.png")}))}u.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(22),a=r(98);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},98:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);