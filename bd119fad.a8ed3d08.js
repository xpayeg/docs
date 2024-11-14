(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(22),a=r(101);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+p:p}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},101:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(99)),i=r(100),c={id:"merchant-id",title:"How to get your merchant ID"},u={unversionedId:"merchant-id",id:"merchant-id",isDocsHomePage:!1,title:"How to get your merchant ID",description:"1. Navigate to XPay dashboard through the follwing Urls:",source:"@site/docs/community_id.mdx",slug:"/merchant-id",permalink:"/docs/merchant-id",version:"current",sidebar:"docs",previous:{title:"API Payments",permalink:"/docs/api-payments"}},l=[],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Navigate to XPay dashboard through the follwing Urls:")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://staging.xpay.app/admin/"}),"Testing dashboard"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://community.xpay.app/admin/"}),"Testing dashboard")))),Object(o.a)("img",{alt:"XPay dashboard login screen",src:Object(i.a)("guides/login.png")}),Object(o.a)("ol",{start:2},Object(o.a)("li",{parentName:"ol"},"Enter your credentials and click on ",Object(o.a)("strong",{parentName:"li"},"Log in"),".")),Object(o.a)("p",null,"3) Once you are logged in, go to the side menu and choose Merchants."),Object(o.a)("img",{alt:"Add API key",src:Object(i.a)("guides/community_Id.png")}),Object(o.a)("ol",{start:4},Object(o.a)("li",{parentName:"ol"},"Copy your merchant ID.")))}s.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);