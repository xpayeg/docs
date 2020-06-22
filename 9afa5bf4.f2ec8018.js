(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),i=(n(0),n(150)),o=n(152),c={id:"api-payments",title:"API Payments"},p={id:"version-1/api-payments",title:"API Payments",description:"This guide explains how to use the dashboard to create an API Payment that you need to process payments on your app using our API endpoints.\r",source:"@site/versioned_docs\\version-1\\api_payments.mdx",permalink:"/api-docs/api-payments",version:"1",sidebar:"version-1/docs",previous:{title:"API key",permalink:"/api-docs/api-key"},next:{title:"Custom Fields",permalink:"/api-docs/custom-fields"}},l=[],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide explains how to use the dashboard to create an API Payment that you need to process payments on your app using our API endpoints."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to XPay community admin dashboard and login with the url and credentials that your community recieved later.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to ",Object(i.b)("strong",{parentName:"p"},"API Payment")," under ",Object(i.b)("strong",{parentName:"p"},"API Integrations")," section in the side menu."))),Object(i.b)("img",{alt:"API Payment section",src:Object(o.a)("img/guides/api_payment.png")}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"add variable amount")," button in the top right corner.")),Object(i.b)("img",{alt:"Add an API Payment form",src:Object(o.a)("img/guides/api_payment_form.png")}),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fill in the name and description that describe your payment type.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"check ",Object(i.b)("strong",{parentName:"p"},"Is active")," option.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"if you want your payments to require a ",Object(i.b)("inlineCode",{parentName:"p"},"<member_id>")," field, check ",Object(i.b)("strong",{parentName:"p"}," Require member id"),", this id will not be validated, it will just be an internal info in your business, if you don't need it.. uncheck it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"if you want the payment iframe to redirect to a specific page after payment is done, fill in the url to redirect to in ",Object(i.b)("strong",{parentName:"p"}," Redirect url")," field. In the redirected url you will have the status of the transaction, the transaction id, and the member id if provided.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you want the payment server to send a POST request to another server with transaction status, and details, after payment is done, fill in ",Object(i.b)("strong",{parentName:"p"}," Callback url")," field. The POST request body will have the status of the transaction, the transaction id, and the member id if provided.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"click ",Object(i.b)("strong",{parentName:"p"},"Save"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"you will be redirected back to ",Object(i.b)("strong",{parentName:"p"},"API Payment"),", the new created template will appear.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"save the value in the ",Object(i.b)("strong",{parentName:"p"},"ID")," column for later."))),Object(i.b)("img",{alt:"new API Payment created",src:Object(o.a)("img/guides/api_payment_list.png")}))}b.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},151:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(151);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);