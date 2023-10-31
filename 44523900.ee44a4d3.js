/*! For license information please see 44523900.ee44a4d3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(151)),c=(n(153),n(157)),i=n(156),s={id:"transactions",title:"Transactions"},u={id:"version-1/transactions",title:"Transactions",description:"After getting a response from Pay endpoint you can use this endpoint to fetch informations about the transaction such as status, transaction id , total amount paid, ETC...",source:"@site/versioned_docs/version-1/transactions.mdx",permalink:"/api-docs/transactions",version:"1"},l=[{value:"REQUEST",id:"request",children:[{value:"testing server:",id:"testing-server",children:[]},{value:"production(Live) server:",id:"productionlive-server",children:[]}]},{value:"Parameters",id:"parameters",children:[{value:"Path parameters",id:"path-parameters",children:[]}]},{value:"Request body",id:"request-body",children:[]},{value:"Response body",id:"response-body",children:[{value:"Example",id:"example",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After getting a response from Pay endpoint you can use this endpoint to fetch informations about the transaction such as status, transaction id , total amount paid, ETC..."),Object(o.b)("h2",{id:"request"},"REQUEST"),Object(o.b)("h3",{id:"testing-server"},"testing server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-http"}),"GET https://staging.xpay.app/api/v1/communities/{community_id}/transactions/{transaction_uuid}/\n")),Object(o.b)("h3",{id:"productionlive-server"},"production(Live) server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-http"}),"GET https://community.xpay.app/api/v1/communities/{community_id}/transactions/{transaction_uuid}/\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"path-parameters"},"Path parameters"),Object(o.b)("h4",{id:"required-properties"},"Required Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"community_id"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ID that references prefrences to your community"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value that your community recieved from XPay")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction_uuid"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UUID of the transaction to be fetched"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"you usually have this value from the response of PAY endpoint")))),Object(o.b)("h2",{id:"request-body"},"Request body"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Do not supply a request body.\n")),Object(o.b)("h2",{id:"response-body"},"Response body"),Object(o.b)("p",null,"If successful, this method returns a response body with the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "code": integer,\n    "message": string,\n    "errors": []\n  },\n  "data": {\n    "created": string,\n    "id": integer,\n    "uuid": string,\n    "total_amount": string,\n    "total_amount_currency": string,\n    "status": string\n  },\n  "count": integer,\n  "next": string,\n  "previous": string\n}\n')),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)(c.a,{defaultValue:"request",values:[{label:"Request Body",value:"request"},{label:"Response Body",value:"response"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"request",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),""))),Object(o.b)(i.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "code": 200,\n    "message": "success",\n    "errors": []\n  },\n  "data": {\n    "created": "2020-05-10T14:20:11.855539+02:00",\n    "id": 3517,\n    "uuid": "452ecb4d-3b6e-4a94-af82-f3ffd21c7e0f",\n    "total_amount": "50.00",\n    "total_amount_currency": "EGP",\n    "status": "SUCCESSFUL"\n  },\n  "count": null,\n  "next": null,\n  "previous": null\n}\n')))))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,i({ref:t},u,{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},152:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(152);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},154:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},155:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=a},156:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},157:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(155);var c=function(){return Object(r.useContext)(o.a)},i=n(154),s=n.n(i),u=n(93),l=n.n(u);const b=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:i,groupId:u}=e,{tabGroupChoices:d,setTabGroupChoices:m}=c(),[f,O]=Object(r.useState)(o);if(null!=u){const e=d[u];null!=e&&e!==f&&O(e)}const j=e=>{O(e),null!=u&&m(u,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:s()("tab-item",l.a.tabItem,{"tab-item--active":f===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===f)[0]))}}}]);