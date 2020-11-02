(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(77)),o=n(79),c={id:"api-payments",title:"API Payments"},p={unversionedId:"api-payments",id:"api-payments",isDocsHomePage:!1,title:"API Payments",description:"This guide explains how to use the dashboard to create an API Payment that you need to process payments on your app using our API endpoints.",source:"@site/docs\\api_payments.mdx",slug:"/api-payments",permalink:"/docs/api-payments",version:"current",sidebar:"docs",previous:{title:"API key",permalink:"/docs/api-key"}},s=[],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide explains how to use the dashboard to create an API Payment that you need to process payments on your app using our API endpoints."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to XPay community admin dashboard and login with the url and credentials that your community recieved later.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to ",Object(i.b)("strong",{parentName:"p"},"API Payment")," under ",Object(i.b)("strong",{parentName:"p"},"API Integrations")," section in the side menu."))),Object(i.b)("img",{alt:"API Payment section",src:Object(o.a)("guides/api_payment.png")}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"add variable amount")," button in the top right corner.")),Object(i.b)("img",{alt:"Add an API Payment form",src:Object(o.a)("guides/api_payment_form.png")}),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fill in the name and description that describe your payment type.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"check ",Object(i.b)("strong",{parentName:"p"},"Is active")," option.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"if you want your payments to require a ",Object(i.b)("inlineCode",{parentName:"p"},"<member_id>")," field, check ",Object(i.b)("strong",{parentName:"p"}," Require member id"),", this id will not be validated, it will just be an internal info in your business, if you don't need it.. uncheck it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"if you want the payment iframe to redirect to a specific page after payment is done, fill in the url to redirect to in ",Object(i.b)("strong",{parentName:"p"}," Redirect url")," field. In the redirected url you will have the status of the transaction, the transaction id, and the member id if provided.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you want the payment server to send a POST request to another server with transaction status, and details, after payment is done, fill in ",Object(i.b)("strong",{parentName:"p"}," Callback url")," field. The POST request body will have the status of the transaction, the transaction id, and the member id if provided."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The callback URL is only called when the transaction is accepted by our system, meaning the user completed the payment and received a response indicating the transaction was successful for a card payment or pending for kiosk / cash collection"))),Object(i.b)("ol",{start:9},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"click ",Object(i.b)("strong",{parentName:"p"},"Save"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"you will be redirected back to ",Object(i.b)("strong",{parentName:"p"},"API Payment"),", the new created template will appear.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"save the value in the ",Object(i.b)("strong",{parentName:"p"},"ID")," column for later."))),Object(i.b)("img",{alt:"new API Payment created",src:Object(o.a)("guides/api_payment_list.png")}))}b.isMDXComponent=!0},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},79:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(78),r=n(80);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},80:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);