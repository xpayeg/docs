(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(151)),i=n(153),c={id:"custom-fields",title:"Custom Fields"},l={id:"version-1/custom-fields",title:"Custom Fields",description:"Custom fields is a way to add extra fields (parameters) to any of your API payments template to fit your needs.",source:"@site/versioned_docs/version-1/custom_fields.mdx",permalink:"/api-docs/custom-fields",version:"1"},s=[],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Custom fields is a way to add extra fields (parameters) to any of your API payments template to fit your needs.\nso, it can allow you to submit extra information during the payment process which can be retrieved later using our API."),Object(o.b)("p",null,"custom fields can:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"take a value type of string, number or boolean."),Object(o.b)("li",{parentName:"ul"},"be required so it blocks the payment process if the value is not submitted during the payment process.")),Object(o.b)("p",null,"to add custom fields to your API payment template follow the same steps in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"api-payment.mdx"}),"create API payment")," or navigate to your api payment template then :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to the end of the form, you will find the ",Object(o.b)("strong",{parentName:"p"},"custom fields")," section"),Object(o.b)("img",{alt:"custom fields section",src:Object(i.a)("img/guides/custom_fields.png")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fill in the value of the ",Object(o.b)("strong",{parentName:"p"},"FIELD LABEL"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Choose the ",Object(o.b)("strong",{parentName:"p"},"FIELD TYPE")," from the drop down menu"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Checkbox ( boolean ) "),Object(o.b)("li",{parentName:"ul"},"Text"),Object(o.b)("li",{parentName:"ul"},"Number"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check the ",Object(o.b)("strong",{parentName:"p"},"REQUIRED")," checkbox to make this field required to be submitted with a value during the payment process.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on ",Object(o.b)("strong",{parentName:"p"},"Add another custom field")," if you wish to add more custom field."),Object(o.b)("img",{alt:"add another custom fields",src:Object(i.a)("img/guides/another-custom-field.png")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"SAVE")," "))))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(f,c({ref:t},s,{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},152:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(152);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);