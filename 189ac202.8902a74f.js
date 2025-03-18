(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{106:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),c=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},m=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),b=n,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||r;return t?i.a.createElement(u,p(p({ref:a},s),{},{components:t})):i.a.createElement(u,p({ref:a},s))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=m;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return c}));var n=t(3),i=t(7),r=(t(0),t(106)),o={id:"sdk-errors",title:"Errors reference"},p={unversionedId:"android-sdk/sdk-errors",id:"android-sdk/sdk-errors",isDocsHomePage:!1,title:"Errors reference",description:"XpayUtils and some data classes throws exceptions in the following cases:",source:"@site/docs/android-sdk/errors.mdx",slug:"/android-sdk/sdk-errors",permalink:"/docs/android-sdk/sdk-errors",version:"current",sidebar:"docs",previous:{title:"Models",permalink:"/docs/android-sdk/classes"},next:{title:"Introduction",permalink:"/docs/ios-sdk/installation"}},l=[{value:"apiKey is required",id:"apikey-is-required",children:[]},{value:"communityId is required",id:"communityid-is-required",children:[]},{value:"variableAmountID is required",id:"variableamountid-is-required",children:[]},{value:"Payment method is not set",id:"payment-method-is-not-set",children:[]},{value:"Payment method chosen is not available",id:"payment-method-chosen-is-not-available",children:[]},{value:"Billing information is not found",id:"billing-information-is-not-found",children:[]},{value:"PaymentOptionsTotalAmounts is not set",id:"paymentoptionstotalamounts-is-not-set",children:[]},{value:"activePaymentMethods is empty",id:"activepaymentmethods-is-empty",children:[]},{value:"Shipping Information is not found",id:"shipping-information-is-not-found",children:[]},{value:"name value provided is in the wrong format",id:"name-value-provided-is-in-the-wrong-format",children:[]},{value:"email value provided is in the wrong format",id:"email-value-provided-is-in-the-wrong-format",children:[]},{value:"phone value provided is in the wrong format",id:"phone-value-provided-is-in-the-wrong-format",children:[]}],s={rightToc:l};function c(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("p",null,"XpayUtils and some data classes throws exceptions in the following cases:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"You are trying to call a method when there is a required property missing."),Object(r.a)("li",{parentName:"ul"},"You are trying to set the value of property in the wrong format."),Object(r.a)("li",{parentName:"ul"},"XPay servers returned an error message.")),Object(r.a)("p",null,"All errors (except server errors, it's a work in progress) that gets thrown by XPayUtils can be found in this document with the reason explained and steps to solve the error."),Object(r.a)("hr",null),Object(r.a)("h2",{id:"apikey-is-required"},"apiKey is required"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalStateException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": ",Object(r.a)("inlineCode",{parentName:"p"},"XPayUtils.apiKey")," is null"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": Set ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#apikey"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.apiKey"))," with your API Key value"),Object(r.a)("p",null,"check ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/api-key"}),"here")," to know how to generate an API key."),Object(r.a)("hr",null),Object(r.a)("h2",{id:"communityid-is-required"},"communityId is required"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalStateException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": ",Object(r.a)("inlineCode",{parentName:"p"},"XPayUtils.communityId")," is null"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": Set ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#communityid"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.communityId"))," with your Community ID value"),Object(r.a)("p",null,"check ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/api-key"}),"here")," to know how to get your Community ID."),Object(r.a)("hr",null),Object(r.a)("h2",{id:"variableamountid-is-required"},"variableAmountID is required"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalStateException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": ",Object(r.a)("inlineCode",{parentName:"p"},"XPayUtils.variableAmountID")," is null"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": Set ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#aipaymentid"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.apiPaymentId"))," with your API Payment ID"),Object(r.a)("p",null,"check ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/api-payments"}),"here")," to know how to generate an API Payment ID."),Object(r.a)("hr",null),Object(r.a)("h2",{id:"payment-method-is-not-set"},"Payment method is not set"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalStateException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": ",Object(r.a)("inlineCode",{parentName:"p"},"XPayUtils.payUsing")," is null"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": Set ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#payusing"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.payUsing"))," with one of the values found in XpayUtils.activePaymentMethods."),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Check the examples in ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/example#3-display-active-payment-methods"}),"Display active payment methods"),"\nand ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/example#4-set-payment-method"}),"Set Payment method")," sections in the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/example"}),"Tutorial"),"."))),Object(r.a)("hr",null),Object(r.a)("h2",{id:"payment-method-chosen-is-not-available"},"Payment method chosen is not available"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalArgumentException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": The value found in ",Object(r.a)("inlineCode",{parentName:"p"},"XPayUtils.payUsing")," is not found in ",Object(r.a)("inlineCode",{parentName:"p"},"XpayUtils.activePaymentMethods"),"."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": Set ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#payusing"}),Object(r.a)("inlineCode",{parentName:"a"},"XPayUtils.payUsing"))," with one of the values found in ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#activepaymentmethods"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.activePaymentMethods")),"."),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Check the examples in ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/example#3-display-active-payment-methods"}),"Display active payment methods"),"\nand ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/example#4-set-payment-method"}),"Set Payment method")," sections in the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/example"}),"Tutorial"),"."))),Object(r.a)("hr",null),Object(r.a)("h2",{id:"billing-information-is-not-found"},"Billing information is not found"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalStateException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": ",Object(r.a)("inlineCode",{parentName:"p"},"XPayUtils.billingInfo")," is null."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": Set ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#billinginfo"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.billingInfo"))," using ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#billinginfo"}),"BillingInfo")," data class."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Example"),":"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'XpayUtils.billingInfo = BillingInfo(\n  "John Doe",\n  "j.doe@test.com",\n  "+201111111111"\n);\n')),Object(r.a)("hr",null),Object(r.a)("h2",{id:"paymentoptionstotalamounts-is-not-set"},"PaymentOptionsTotalAmounts is not set"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalStateException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": ",Object(r.a)("inlineCode",{parentName:"p"},"XpayUtils.PaymentOptionsTotalAmounts")," is null."),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"XpayUtils.pay()")," reads the value of the total amount of the payment from ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#paymentoptionstotalamounts"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.PaymentOptionsTotalAmounts"))," accessors using the value inside ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#payusing"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.payusing"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": call ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#prepareamount"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.prepareAmount()"))," method before calling ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#pay"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.pay()"))," method which sets ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#paymentoptionstotalamounts"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.PaymentOptionsTotalAmounts"))," internally."),Object(r.a)("hr",null),Object(r.a)("h2",{id:"activepaymentmethods-is-empty"},"activePaymentMethods is empty"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalStateException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": ",Object(r.a)("inlineCode",{parentName:"p"},"XPayUtils.activePaymentMethods")," mutable list is empty"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": call ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#prepareamount"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.prepareAmount()"))," method\nbefore calling ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#pay"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.pay()"))," method which sets ",Object(r.a)("inlineCode",{parentName:"p"},"XpayUtils.activePaymentMethods")," internally"),Object(r.a)("hr",null),Object(r.a)("h2",{id:"shipping-information-is-not-found"},"Shipping Information is not found"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalStateException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": ",Object(r.a)("inlineCode",{parentName:"p"},"XPayUtils.ShippingInfo")," is null"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": Set ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/xpayutils#shippinginfo"}),Object(r.a)("inlineCode",{parentName:"a"},"XpayUtils.ShippingInfo"))," using ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#shippinginfo"}),"ShippingInfo")," data class."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Example"),":"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'XpayUtils.ShippingInfo = ShippingInfo(\n  "EG", // country\n  "Cairo", // city\n  "Down Town", // state\n  "5", // apartment\n  "5", // building\n  "5", // floor\n  "Falki" // street\n);\n')),Object(r.a)("hr",null),Object(r.a)("h2",{id:"name-value-provided-is-in-the-wrong-format"},"name value provided is in the wrong format"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalArgumentException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": value passed to name property in ",Object(r.a)("inlineCode",{parentName:"p"},"BillingInfo")," did not match the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#name"}),"name regex pattern"),"."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": Make sure the value passed to the name property follows the name regex pattern found ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#name"}),"here"),"."),Object(r.a)("hr",null),Object(r.a)("h2",{id:"email-value-provided-is-in-the-wrong-format"},"email value provided is in the wrong format"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalArgumentException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": value passed to ",Object(r.a)("inlineCode",{parentName:"p"},"email")," property in ",Object(r.a)("inlineCode",{parentName:"p"},"BillingInfo")," did not match the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#email"}),"email regex pattern"),"."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": Make sure the value passed to the ",Object(r.a)("inlineCode",{parentName:"p"},"email")," property follows the email regex pattern found ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#email"}),"here"),"."),Object(r.a)("hr",null),Object(r.a)("h2",{id:"phone-value-provided-is-in-the-wrong-format"},"phone value provided is in the wrong format"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Type"),": IllegalArgumentException"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Reason"),": value passed to ",Object(r.a)("inlineCode",{parentName:"p"},"phone")," property in ",Object(r.a)("inlineCode",{parentName:"p"},"BillingInfo")," did not match the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#phone"}),"phone regex pattern"),"."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Solution"),": Make sure the value passed to the ",Object(r.a)("inlineCode",{parentName:"p"},"phone")," property follows the phone regex pattern found ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#phone"}),"here"),"."),Object(r.a)("hr",null))}c.isMDXComponent=!0}}]);