(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),y=s(n),b=r,d=y["".concat(o,".").concat(b)]||y[b]||l[b]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(101)),o={id:"authentication",title:"Authentication"},c={unversionedId:"authentication",id:"authentication",isDocsHomePage:!1,title:"Authentication",description:"The XPay API uses API keys to authenticate requests.",source:"@site/docs/authentication.mdx",slug:"/authentication",permalink:"/docs/authentication",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Prepare Amount endpoint",permalink:"/docs/prepare-amount"}},u=[{value:"Links",id:"links",children:[]}],p={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The XPay API uses API keys to authenticate requests.\nYou can view and manage your API keys in the XPay Dashboard."),Object(i.a)("p",null,"API key is supplied in the request header with a key value pair with that structure"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"x-api-key" : string\n')),Object(i.a)("p",null,"Your API keys carry many privileges, so be sure to keep them secure!\nDo not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth."),Object(i.a)("p",null,"Related guide: ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"api-key"}),"How to create API key"),"."),Object(i.a)("h3",{id:"links"},"Links"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"https://community.xpay.app/admin/"}),"XPay Dashboard (live)")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"https://staging.xpay.app/admin/"}),"XPay Dashboard (test)")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"api-key"}),"How to create API key"))))}s.isMDXComponent=!0}}]);