(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{102:function(e,t,a){"use strict";var n=a(0),r=a(103);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},103:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},106:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(102),o=a(99),l=a(53),i=a.n(l);const u=37,s=39;t.a=function(e){const{lazy:t,block:a,children:l,defaultValue:p,values:b,groupId:m,className:d}=e,{tabGroupChoices:O,setTabGroupChoices:j}=Object(c.a)(),[f,y]=Object(n.useState)(p);if(null!=m){const e=O[m];null!=e&&e!==f&&b.some((t=>t.value===e))&&y(e)}const g=e=>{y(e),null!=m&&j(m,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case s:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(n.cloneElement)(l.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},107:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function({children:e,hidden:t,className:a}){return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(96)),o=a(106),l=a(107),i={id:"prepare-amount",title:"Prepare Amount endpoint"},u={unversionedId:"prepare-amount",id:"prepare-amount",isDocsHomePage:!1,title:"Prepare Amount endpoint",description:"This endpoint takes an amount in piasters, calculates the service fees and returns the total amount.",source:"@site/docs\\prepare_amount.mdx",slug:"/prepare-amount",permalink:"/docs/prepare-amount",version:"current",sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/authentication"},next:{title:"Pay endpoint",permalink:"/docs/pay"}},s=[{value:"REQUEST",id:"request",children:[{value:"Testing server:",id:"testing-server",children:[]},{value:"Production(Live) server:",id:"productionlive-server",children:[]}]},{value:"Parameters",id:"parameters",children:[]},{value:"Request body",id:"request-body",children:[{value:"Required Properties",id:"required-properties",children:[]}]},{value:"Response",id:"response",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"This endpoint takes an amount in piasters, calculates the service fees and returns the total amount."),Object(c.a)("p",null,"Note: depending on the agreement with XPay, if your community's service fees are ",Object(c.a)("strong",{parentName:"p"},"included in bill"),", you do not need to use this endpoint. ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"pay"}),"skip to next step")),Object(c.a)("h2",{id:"request"},"REQUEST"),Object(c.a)("h3",{id:"testing-server"},"Testing server:"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),"POST https://staging.xpay.app/api/v1/payments/prepare-amount/\n")),Object(c.a)("h3",{id:"productionlive-server"},"Production(Live) server:"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),"POST https://community.xpay.app/api/v1/payments/prepare-amount/\n")),Object(c.a)("h2",{id:"parameters"},"Parameters"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),"Do not supply any parameters.\n")),Object(c.a)("h2",{id:"request-body"},"Request body"),Object(c.a)("h3",{id:"required-properties"},"Required Properties"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"community_id"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID that is uniques to your community"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount that represents the service cost without service fees"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(c.a)("h2",{id:"response"},"Response"),Object(c.a)("p",null,"If successful, this method returns a response body with the following structure:"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "status": {\n        "code": integer,\n        "message": string,\n        "errors": []\n    },\n\n    "data": {\n        "total_amount": float\n        "total_amount_currency": string\n    },\n    "count": integer,\n    "next": string,\n    "previous": string\n}\n')),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"total_amount"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"service cost with service fees included"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"save the value returned in ",Object(c.a)("inlineCode",{parentName:"td"},"<total_amount>")," as you will use it later.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"total_amount_currency"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"currency"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(c.a)("h2",{id:"example"},"Example"),Object(c.a)(o.a,{defaultValue:"request",values:[{label:"Request Body",value:"request"},{label:"Response Body",value:"response"}],mdxType:"Tabs"},Object(c.a)(l.a,{value:"request",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "amount": 50,\n  "community_id": "zogDmQW"\n}\n'))),Object(c.a)(l.a,{value:"response",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "code": 200,\n    "message": "success",\n    "errors": []\n  },\n  "data": {\n    "total_amount": 50.5,\n    "total_amount_currency": "EGP"\n  },\n  "count": null,\n  "next": null,\n  "previous": null\n}\n')))))}b.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||c;return a?r.a.createElement(d,l(l({ref:t},u),{},{components:a})):r.a.createElement(d,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<c;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}}}]);