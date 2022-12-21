(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),o=a(7),r=(a(0),a(96)),c=a(97),i={id:"promo-code",title:"Promocode"},s={unversionedId:"promo-code",id:"promo-code",isDocsHomePage:!1,title:"Promocode",description:"One of the standalone checkout tools that xpay offers is Promocode.",source:"@site/docs\\promo_code.mdx",slug:"/promo-code",permalink:"/docs/promo-code",version:"current",sidebar:"docs",previous:{title:"Custom Fields",permalink:"/docs/custom-fields"},next:{title:"Direct Order",permalink:"/docs/direct-order"}},p=[{value:"Name",id:"name",children:[]},{value:"Expiration time",id:"expiration-time",children:[]},{value:"Discount amount",id:"discount-amount",children:[]},{value:"Discount percentage",id:"discount-percentage",children:[]},{value:"Amount trigger",id:"amount-trigger",children:[]},{value:"All user occurrences",id:"all-user-occurrences",children:[]},{value:"User occurrences",id:"user-occurrences",children:[]},{value:"Payment for",id:"payment-for",children:[]},{value:"Payment instance id",id:"payment-instance-id",children:[]},{value:"Steps to create promocode",id:"steps-to-create-promocode",children:[]}],u={rightToc:p};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"One of the standalone checkout tools that xpay offers is Promocode.\nPromocode allows you to give your users discounts on their payments.\nyou can customize each promocode to fit your needs, read more below to know more."),Object(r.a)("h2",{id:"name"},"Name"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Required")),Object(r.a)("p",null,"Promocode Unique name, This the value you share with your users."),Object(r.a)("h2",{id:"expiration-time"},"Expiration time"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Required")),Object(r.a)("p",null,"The time where the promocode expires. this value takes date and time."),Object(r.a)("h2",{id:"discount-amount"},"Discount amount"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"}," Required if Discount Percentage not set")),Object(r.a)("p",null,"This value represents the Discount amount in Egyptian pounds. use this if you want a fixed discount amount."),Object(r.a)("h2",{id:"discount-percentage"},"Discount percentage"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"}," Required if Discount amount not set")),Object(r.a)("p",null,"This value represents the Discount percentage from the total payment value."),Object(r.a)("p",null,"Ex: if you set the Discount percentage to 30 and the user uses it with a payment of 1000,\nit will give him a discount of 300 and he will pay 700 only."),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Discount amount and Discount percentage can not be set together.\nif you set one of them, make sure to leave the other value equals to zero."))),Object(r.a)("h2",{id:"amount-trigger"},"Amount trigger"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Optional")),Object(r.a)("p",null,"Minimum amount so that the promocode takes effect."),Object(r.a)("p",null,"Use this if you wish the promocode to take effect only for payments which it's amount is equal to or bigger a certain amount."),Object(r.a)("h2",{id:"all-user-occurrences"},"All user occurrences"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Optional")),Object(r.a)("p",null,"Maximum total number of uses for this promocode."),Object(r.a)("h2",{id:"user-occurrences"},"User occurrences"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Optional")),Object(r.a)("p",null,"Maximum total number of uses for this promocode ",Object(r.a)("strong",{parentName:"p"},"for a single user"),"."),Object(r.a)("h2",{id:"payment-for"},"Payment for"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Optional")),Object(r.a)("p",null,"Set this promocode to work for a certain type of payments only."),Object(r.a)("p",null,"Payment types that accepts Promocodes: Direct Order, Event, Training, Product, Service, and Sports academy."),Object(r.a)("h2",{id:"payment-instance-id"},"Payment instance id"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Optional")),Object(r.a)("p",null,"The payment ID of the payment that you wish this promocode to only work with."),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Payment for and Payment instance id must be set together."))),Object(r.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Payment ID can be found next to the payment you created in the prespective list view."),Object(r.a)("p",{parentName:"div"},"For example, in the event list view"),Object(r.a)("img",{alt:"API keys section",src:Object(c.a)("guides/promo_code_payment_ids.png")}))),Object(r.a)("h2",{id:"steps-to-create-promocode"},"Steps to create promocode"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Navigate to ",Object(r.a)("strong",{parentName:"li"},"Promocodes")," under ",Object(r.a)("strong",{parentName:"li"},"Promocodes")," in the side menu.")),Object(r.a)("img",{alt:"API keys section",src:Object(c.a)("guides/add_promo_code.png")}),Object(r.a)("ol",{start:2},Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Click on ",Object(r.a)("strong",{parentName:"p"},"Add promocode")," button in the top right corner.")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Fill in the promocode form."))),Object(r.a)("img",{alt:"Add API key",src:Object(c.a)("guides/promo_code_form_new.png")}),Object(r.a)("ol",{start:4},Object(r.a)("li",{parentName:"ol"},"click ",Object(r.a)("strong",{parentName:"li"},"Save"),", you will be redirected back to ",Object(r.a)("strong",{parentName:"li"},"Promocodes"),".")),Object(r.a)("img",{alt:"API key",src:Object(c.a)("guides/promo_code_created.png")}),Object(r.a)("ol",{start:5},Object(r.a)("li",{parentName:"ol"},"your new promocode is ready.")))}l.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,b=m["".concat(c,".").concat(d)]||m[d]||l[d]||r;return a?o.a.createElement(b,i(i({ref:t},p),{},{components:a})):o.a.createElement(b,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<r;p++)c[p]=a[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(22),o=a(98);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(o.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return r?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=r();return a(e,t)}},98:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}))}}]);