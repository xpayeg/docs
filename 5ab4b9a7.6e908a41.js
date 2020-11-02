(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{66:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=(r(0),r(77)),a=r(79);const i={id:"custom-fields",title:"Custom Fields"},c={unversionedId:"custom-fields",id:"custom-fields",isDocsHomePage:!1,title:"Custom Fields",description:"Custom fields is a way to add extra fields (parameters) to any of your API payments template to fit your needs.",source:"@site/docs\\custom_fields.mdx",slug:"/custom-fields",permalink:"/docs/custom-fields",version:"current",sidebar:"docs",next:{title:"Promocode",permalink:"/docs/promo-code"}},u=[],s={rightToc:u};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Custom fields is a way to add extra fields (parameters) to any of your API payments template to fit your needs.\nso, it can allow you to submit extra information during the payment process which can be retrieved later using our API."),Object(o.b)("p",null,"custom fields can:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"take a value type of string, number or boolean."),Object(o.b)("li",{parentName:"ul"},"be required so it blocks the payment process if the value is not submitted during the payment process.")),Object(o.b)("p",null,"to add custom fields to your API payment template follow the same steps in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"api-payments"}),"create API payment")," or navigate to your api payment template then :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to the end of the form, you will find the ",Object(o.b)("strong",{parentName:"p"},"custom fields")," section"),Object(o.b)("img",{alt:"custom fields section",src:Object(a.a)("guides/custom_fields.png")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fill in the value of the ",Object(o.b)("strong",{parentName:"p"},"FIELD LABEL"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Choose the ",Object(o.b)("strong",{parentName:"p"},"FIELD TYPE")," from the drop down menu"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Checkbox ( boolean ) "),Object(o.b)("li",{parentName:"ul"},"Text"),Object(o.b)("li",{parentName:"ul"},"Number"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check the ",Object(o.b)("strong",{parentName:"p"},"REQUIRED")," checkbox to make this field required to be submitted with a value during the payment process.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on ",Object(o.b)("strong",{parentName:"p"},"Add another custom field")," if you wish to add more custom field."),Object(o.b)("img",{alt:"add another custom fields",src:Object(a.a)("guides/another-custom-field.png")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"SAVE")," "))))}l.isMDXComponent=!0},77:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return r?o.a.createElement(f,c(c({ref:t},s),{},{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){const e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},79:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(78),o=r(80);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},80:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);