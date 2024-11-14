(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{100:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return c}));var n=a(22),r=a(101);function l(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var l=void 0===n?{}:n,c=l.forcePrependBaseUrl,i=void 0!==c&&c,o=l.absolute,u=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return u?e+p:p}(l,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},101:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},104:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},156:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/04d5956d-7b94-4412-95ee-cae3c8e84593-cf35d683f5d3c77786eec48988831662.jpeg"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n,r=a(3),l=a(7),c=(a(0),a(99)),i=a(104),o=(a(100),{id:"create-community-API",title:"Create Community API"}),u={unversionedId:"create-community-API",id:"create-community-API",isDocsHomePage:!1,title:"Create Community API",description:"This guide explains how to create Community through API call .",source:"@site/docs/create_community_api.mdx",slug:"/create-community-API",permalink:"/docs/create-community-API",version:"current",sidebar:"docs",previous:{title:"Prepare Amount endpoint",permalink:"/docs/prepare-amount"},next:{title:"Pay endpoint",permalink:"/docs/pay"}},p=[{value:"REQUEST",id:"request",children:[{value:"testing server:",id:"testing-server",children:[]},{value:"production(Live) server:",id:"productionlive-server",children:[]}]},{value:"Headers",id:"headers",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Request body",id:"request-body",children:[{value:"Required Properties",id:"required-properties",children:[]},{value:"Optional Properties",id:"optional-properties",children:[]}]},{value:"Response",id:"response",children:[]},{value:"Example",id:"example",children:[]}],b=(n="Tabs",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.a)("div",e)}),s={rightToc:p};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"This guide explains how to create Community through API call ."),Object(c.a)("h2",{id:"request"},"REQUEST"),Object(c.a)("h3",{id:"testing-server"},"testing server:"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{}),"POST https://staging.xpay.app/api/communities/create_community\n")),Object(c.a)("h3",{id:"productionlive-server"},"production(Live) server:"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{}),"POST https://staging.xpay.app/api/communities/create_community\n")),Object(c.a)("h2",{id:"headers"},"Headers"),Object(c.a)("p",null,"Content-Type: multipart/form-data"),Object(c.a)("h2",{id:"parameters"},"Parameters"),Object(c.a)("p",null,"No params\n{/* #### Required Properties"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"x-api-key"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"API key linked to your community"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"api-key"}),"generate API key"))))),Object(c.a)("p",null,"\u200b"),Object(c.a)("h2",{id:"request-body"},"Request body"),Object(c.a)("h3",{id:"required-properties"},"Required Properties"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Community name"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"logo"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"file"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),'image for community logo "png, jpg"'),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))))),Object(c.a)("h3",{id:"optional-properties"},"Optional Properties"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"app_modules"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Check allowed modules for community from list ","[Service, Bill, Event, Product, Training, Sport, Course]"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),'comma splitted string example "Service,Bill,...etc"')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"registered_name"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Alternative  name for community"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"address"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provided address for community"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"email"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"an Email for community"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"phone"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Phone number for community"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"payment_methods"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Allowed payment methods for community from list ","[Card, Kiosk, Meeza/Digital, Fawry, valu]"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),'comma splitted string example "Fawry,valu,...etc"')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"kiosk_processor"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Kiosk payment through method ","[FAWRY, AMAN]"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"default AMAN")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"wallet_processor"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Wallet payment through method ","[Banque ElAhly (NBE), Banque Misr (BM), Orange Money(OM)]"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"redirect_successful_only"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Url for successful payment where redirect after success"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))))),Object(c.a)("h2",{id:"response"},"Response"),Object(c.a)("p",null,"If successful, this method returns a response body with the following structure:"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": {\n        "code": 200,\n        "message": "success",\n        "errors": []\n    },\n    "data": {},\n    "count": null,\n    "next": null,\n    "previous": null\n}\n')),Object(c.a)("h2",{id:"example"},"Example"),Object(c.a)(b,{defaultValue:"request",values:[{label:"Request Body",value:"request"},{label:"Response Body",value:"response"}],mdxType:"Tabs"},Object(c.a)(i.a,{value:"request",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "New Community",\n    "app_modules": "event, service",\n    "order_description": "Monthly rent payment", \n    "payment_methods": "card,fawry", \n    "logo": "logo.png", \n    "allowed_cards": "NBE", \n    "NBE_setting": {"integration_method": "DI", "merchant_id":"1234",  "api_password": "pass1234"}, \n}\n'))),Object(c.a)("p",null,Object(c.a)("img",{alt:"Alt text",src:a(156).default})),Object(c.a)(i.a,{value:"response",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": {\n        "code": 200,\n        "message": "success",\n        "errors": []\n    },\n    "data": {},\n    "count": null,\n    "next": null,\n    "previous": null\n}\n')))))}d.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||l;return a?r.a.createElement(m,i(i({ref:t},u),{},{components:a})):r.a.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<l;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);