(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(77)),i=(n(79),n(86)),s=n(87),c={id:"transactions",title:"Transaction endpoint"},u={unversionedId:"transactions",id:"transactions",isDocsHomePage:!1,title:"Transaction endpoint",description:"After getting a response from Pay endpoint you can use this endpoint to fetch informations about the transaction such as status, transaction id , total amount paid, ETC...",source:"@site/docs\\transactions.mdx",slug:"/transactions",permalink:"/docs/transactions",version:"current",sidebar:"docs",previous:{title:"Pay endpoint",permalink:"/docs/pay"},next:{title:"Subscription",permalink:"/docs/subscription"}},l=[{value:"URL",id:"url",children:[{value:"testing server:",id:"testing-server",children:[]},{value:"production(Live) server:",id:"productionlive-server",children:[]}]},{value:"Authentication",id:"authentication",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Path parameters",id:"path-parameters",children:[]}]},{value:"Request body",id:"request-body",children:[]},{value:"Response body",id:"response-body",children:[]},{value:"Example",id:"example",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After getting a response from Pay endpoint you can use this endpoint to fetch informations about the transaction such as status, transaction id , total amount paid, ETC..."),Object(o.b)("h2",{id:"url"},"URL"),Object(o.b)("h3",{id:"testing-server"},"testing server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"GET https://staging.xpay.app/api/v1/communities/{community_id}/transactions/{transaction_uuid}/\n")),Object(o.b)("h3",{id:"productionlive-server"},"production(Live) server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"GET https://community.xpay.app/api/v1/communities/{community_id}/transactions/{transaction_uuid}/\n")),Object(o.b)("h2",{id:"authentication"},"Authentication"),Object(o.b)("p",null,"Supply your API key in the request header"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'"x-api-key" : string\n')),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"path-parameters"},"Path parameters"),Object(o.b)("h4",{id:"required-properties"},"Required Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"community_id"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ID that references prefrences to your community"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value that your community recieved from XPay")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction_uuid"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UUID of the transaction to be fetched"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"you usually have this value from the response of PAY endpoint")))),Object(o.b)("h2",{id:"request-body"},"Request body"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Do not supply a request body.\n")),Object(o.b)("h2",{id:"response-body"},"Response body"),Object(o.b)("p",null,"If successful, this method returns a response body with the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'{\n  "status": {\n    "code": integer,\n    "message": string,\n    "errors": []\n  },\n  "data": {\n    "created": string,\n    "id": integer,\n    "uuid": string,\n    "member_id": string, // in case the payment is connected to a membership id\n    "total_amount": string,\n    "total_amount_currency": string,\n    "payment_for": string, // ex: "API_PAYMENT", "EVENT", "BILL", etc..\n    "payment_for": number, // in case the payment was for event, service, product or training.\n    "status": string,\n    "custom_fields_json": object,\n    "total_amount_piasters": number\n  },\n  "count": integer,\n  "next": string,\n  "previous": string\n}\n')),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"The following example uses Axios which is a Promise based HTTP client for the browser and node.js"),Object(o.b)("a",{target:"_blank",href:"https://github.com/axios/axios"},"Axios Github repo"),Object(o.b)("h4",{id:"installing"},"installing"),Object(o.b)("p",null,"Using npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"$ npm install axios\n")),Object(o.b)("p",null,"Using jsDelivr CDN:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>\n')),Object(o.b)(i.a,{defaultValue:"request",values:[{label:"Request Body",value:"request"},{label:"Response Body",value:"response"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"request",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'axios({\n  method: "get",\n  url:\n    "https://staging.xpay.app/api/v1/communities/JZ40KjN/transactions/2e1b68de-53f3-4228-a509-53560477a860/",\n  headers: {\n    "x-api-key": "fVmOK4Y6.gHjL48wKy47MoIUwIBGCht8M8kSg7QCP",\n  },\n})\n  .then((response) => {\n    console.log(response.data.data);\n  })\n  .catch((e) => {\n    console.log(e.response.data.status);\n  });\n'))),Object(o.b)(s.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "created": "2020-02-25T23:43:20.505541+02:00",\n  "custom_fields_json": null,\n  "id": 1760,\n  "member_id": "13333",\n  "payment_for": "BILL",\n  "quantity": null,\n  "status": "SUCCESSFUL",\n  "total_amount": "12.50",\n  "total_amount_currency": "EGP",\n  "total_amount_piasters": 1250,\n  "uuid": "2e1b68de-53f3-4228-a509-53560477a860"\n}\n')))))}p.isMDXComponent=!0},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,s(s({ref:t},u),{},{components:n})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},79:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(78),a=n(80);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},80:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},81:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},83:function(e,t,n){"use strict";var r=n(0),a=n(84);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},84:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},86:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(83),i=n(81),s=n(47),c=n.n(s);const u=37,l=39;t.a=function(e){const{block:t,children:n,defaultValue:s,values:b,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[j,O]=Object(r.useState)(s),[y,h]=Object(r.useState)(!1);if(null!=p){const e=m[p];null!=e&&e!==j&&b.some((t=>t.value===e))&&O(e)}const g=e=>{O(e),null!=p&&f(p,e)},v=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},x=()=>{h(!1)};return Object(r.useEffect)((()=>(window.addEventListener("keydown",w),window.addEventListener("mousedown",x),()=>{window.removeEventListener("keydown",w),window.removeEventListener("mousedown",x)})),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},d)},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),style:y?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),w(e)},onFocus:()=>g(e),onClick:()=>{g(e),h(!1)},onPointerDown:()=>h(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===j))[0]))}},87:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);