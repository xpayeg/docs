/*! For license information please see b40f1162.365d78a6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),c=(n(0),n(148)),i=n(154),o=n(153),l={id:"prepare-amount",title:"Prepare Amount endpoint"},s={id:"version-1/prepare-amount",title:"Prepare Amount endpoint",description:"This endpoint takes an amount in piasters, calculates the service fees and returns the total amount.\r",source:"@site/versioned_docs\\version-1\\prepare_amount.mdx",permalink:"/api-docs/prepare-amount",version:"1",sidebar:"version-1/docs",previous:{title:"Authentication",permalink:"/api-docs/authentication"},next:{title:"Pay endpoint",permalink:"/api-docs/pay"}},u=[{value:"REQUEST",id:"request",children:[{value:"Testing server:",id:"testing-server",children:[]},{value:"Production(Live) server:",id:"productionlive-server",children:[]}]},{value:"Parameters",id:"parameters",children:[]},{value:"Request body",id:"request-body",children:[{value:"Required Properties",id:"required-properties",children:[]}]},{value:"Response",id:"response",children:[]},{value:"Example",id:"example",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This endpoint takes an amount in piasters, calculates the service fees and returns the total amount."),Object(c.b)("p",null,"Note: depending on the agreement with XPay, if your community's service fees are ",Object(c.b)("strong",{parentName:"p"},"included in bill"),", you do not need to use this endpoint. ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"pay.md"}),"skip to next step")),Object(c.b)("h2",{id:"request"},"REQUEST"),Object(c.b)("h3",{id:"testing-server"},"Testing server:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"POST https://staging.xpay.app/api/payments/prepare-amount/\n")),Object(c.b)("h3",{id:"productionlive-server"},"Production(Live) server:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"POST https://community.xpay.app/api/payments/prepare-amount/\n")),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Do not supply any parameters.\n")),Object(c.b)("h2",{id:"request-body"},"Request body"),Object(c.b)("h3",{id:"required-properties"},"Required Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"community_id"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ID that is uniques to your community"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"amount_piasters"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"integer"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"amount that represents the service cost without service fees"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"must be supplied in ",Object(c.b)("strong",{parentName:"td"},"piasters"),".")))),Object(c.b)("h2",{id:"response"},"Response"),Object(c.b)("p",null,"If successful, this method returns a response body with the following structure:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n    "status": {\n        "code": integer,\n        "message": string,\n        "errors": []\n    },\n\n    "data": {\n        "total_amount_piasters": integer\n    },\n    "count": integer,\n    "next": string,\n    "previous": string\n}\n')),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"totaL_amount_piasters"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"integer"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"service cost with service fees included"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"save the value returned in ",Object(c.b)("inlineCode",{parentName:"td"},"<total_amount_piasters>")," as you will use it later.")))),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)(i.a,{defaultValue:"request",values:[{label:"Request Body",value:"request"},{label:"Response Body",value:"response"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"request",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "amount_piasters": 100,\n  "community_id": "1"\n}\n'))),Object(c.b)(o.a,{value:"response",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "code": 200,\n    "message": "success",\n    "errors": []\n  },\n  "data": {\n    "total_amount_piasters": 103\n  },\n  "count": null,\n  "next": null,\n  "previous": null\n}\n')))))}p.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||c;return n?a.a.createElement(m,o({ref:t},s,{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},151:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===c)for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},152:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=a},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},154:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(152);var i=function(){return Object(r.useContext)(c.a)},o=n(151),l=n.n(o),s=n(93),u=n.n(s);const b=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:o,groupId:s}=e,{tabGroupChoices:d,setTabGroupChoices:m}=i(),[O,j]=Object(r.useState)(c);if(null!=s){const e=d[s];null!=e&&e!==O&&j(e)}const f=e=>{j(e),null!=s&&m(s,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===e,className:l()("tab-item",u.a.tabItem,{"tab-item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>f(e),onClick:()=>f(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===O)[0]))}}}]);