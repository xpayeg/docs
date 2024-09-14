(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(98)),o=a(99),c={id:"api-payments",title:"API Payments"},p={unversionedId:"api-payments",id:"api-payments",isDocsHomePage:!1,title:"API Payments",description:"This guide explains how to use the dashboard to create an API Payment that you need to process payments on your app using our API endpoints.",source:"@site/docs/api_payments.mdx",slug:"/api-payments",permalink:"/docs/api-payments",version:"current",sidebar:"docs",previous:{title:"API key",permalink:"/docs/api-key"},next:{title:"How to get your merchant ID",permalink:"/docs/merchant-id"}},s=[],l={rightToc:s};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This guide explains how to use the dashboard to create an API Payment that you need to process payments on your app using our API endpoints."),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Navigate to XPay dashboard through the follwing Urls:")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://staging.xpay.app/admin/"}),"Testing dashboard"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://community.xpay.app/admin/"}),"Testing dashboard")))),Object(i.a)("img",{alt:"XPay dashboard login screen",src:Object(o.a)("guides/login.png")}),Object(i.a)("ol",{start:2},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Enter your credentials and click on ",Object(i.a)("strong",{parentName:"p"},"Log in"),".")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Navigate to ",Object(i.a)("strong",{parentName:"p"},"API Payment")," under ",Object(i.a)("strong",{parentName:"p"},"API Integrations")," section in the side menu."))),Object(i.a)("img",{alt:"API Payment section",src:Object(o.a)("guides/api_payment.png")}),Object(i.a)("ol",{start:4},Object(i.a)("li",{parentName:"ol"},"Click on ",Object(i.a)("strong",{parentName:"li"},"add variable amount")," button in the top right corner.")),Object(i.a)("img",{alt:"Add an API Payment form",src:Object(o.a)("guides/api_payment_form.png")}),Object(i.a)("ol",{start:5},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Fill in the name and description that describe your payment type.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"check ",Object(i.a)("strong",{parentName:"p"},"Is active")," option.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"if you want your payments to require a ",Object(i.a)("inlineCode",{parentName:"p"},"<member_id>")," field, check ",Object(i.a)("strong",{parentName:"p"}," Require member id"),", this id will not be validated, it will just be an internal info in your business, if you don't need it.. uncheck it.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"if you want the payment iframe to redirect to a specific page after payment is done, fill in the url to redirect to in ",Object(i.a)("strong",{parentName:"p"}," Redirect url")," field. In the redirected url you will have the status of the transaction, the transaction id, and the member id if provided.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"If you want the payment server to send a POST request to another server with transaction status, and details, after payment is done, fill in ",Object(i.a)("strong",{parentName:"p"}," Callback url")," field. The POST request body will have the status of the transaction, the transaction id, and the member id if provided."))),Object(i.a)("div",{className:"admonition admonition-info alert alert--info"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The callback URL is only called when the transaction is accepted by our system, meaning the user completed the payment and received a response indicating the transaction was successful for a card payment or pending for kiosk / cash collection"))),Object(i.a)("ol",{start:10},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"click ",Object(i.a)("strong",{parentName:"p"},"Save"),".")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"you will be redirected back to ",Object(i.a)("strong",{parentName:"p"},"API Payment"),", the new created template will appear.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"save the value in the ",Object(i.a)("strong",{parentName:"p"},"ID")," column for later."))),Object(i.a)("img",{alt:"new API Payment created",src:Object(o.a)("guides/api_payment_list.png")}))}m.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?r.a.createElement(b,c(c({ref:t},s),{},{components:a})):r.a.createElement(b,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(22),r=a(100);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+o:o}(t,e,a,n)}}function o(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}}}]);