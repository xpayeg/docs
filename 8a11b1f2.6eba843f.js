(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{101:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),i=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},m=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),b=n,O=m["".concat(r,".").concat(b)]||m[b]||p[b]||c;return t?i.a.createElement(O,o(o({ref:a},s),{},{components:t})):i.a.createElement(O,o({ref:a},s))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,r=new Array(c);r[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var s=2;s<c;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return d}));var n=t(3),i=t(7),c=(t(0),t(101)),r={id:"xpayutils",title:"XpayUtils"},o={unversionedId:"android-sdk/xpayutils",id:"android-sdk/xpayutils",isDocsHomePage:!1,title:"XpayUtils",description:"XpayUtils reference",source:"@site/docs/android-sdk/xpayutils.mdx",slug:"/android-sdk/xpayutils",permalink:"/docs/android-sdk/xpayutils",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/android-sdk/installation"},next:{title:"Tutorial",permalink:"/docs/android-sdk/example"}},l=[{value:"XpayUtils reference",id:"xpayutils-reference",children:[{value:"Properties",id:"properties",children:[]},{value:"apiKey",id:"apikey",children:[]},{value:"communityId",id:"communityid",children:[]},{value:"apiPaymentId",id:"apipaymentid",children:[]},{value:"serverSetting",id:"serversetting",children:[]},{value:"paymentOptionsTotalAmounts",id:"paymentoptionstotalamounts",children:[]},{value:"activePaymentMethods",id:"activepaymentmethods",children:[]},{value:"payUsing",id:"payusing",children:[]},{value:"billingInfo",id:"billinginfo",children:[]},{value:"ShippingInfo",id:"shippinginfo",children:[]},{value:"customFields",id:"customfields",children:[]},{value:"Methods",id:"methods",children:[]},{value:"PrepareAmount",id:"prepareamount",children:[]},{value:"pay",id:"pay",children:[]},{value:"getTransaction",id:"gettransaction",children:[]},{value:"addCustomField",id:"addcustomfield",children:[]},{value:"clearCustomField",id:"clearcustomfield",children:[]}]}],s={rightToc:l};function d(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)("h2",{id:"xpayutils-reference"},"XpayUtils reference"),Object(c.a)("p",null,"XpayUtils is a singelton class, for more info on singeltons in kotlin check the following ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.geeksforgeeks.org/singleton-class-in-kotlin/"}),"link")),Object(c.a)("h3",{id:"properties"},"Properties"),Object(c.a)("h3",{id:"apikey"},"apiKey"),Object(c.a)("h4",{id:"description"},"Description"),Object(c.a)("p",null,"your API key."),Object(c.a)("p",null,Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/api-key"}),"How to create an API key")),Object(c.a)("h4",{id:"type"},"Type"),Object(c.a)("p",null,"String"),Object(c.a)("hr",null),Object(c.a)("h3",{id:"communityid"},"communityId"),Object(c.a)("h4",{id:"description-1"},"Description"),Object(c.a)("p",null,"your community ID."),Object(c.a)("p",null,Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/merchant-id"}),"How to get your merchant ID")),Object(c.a)("h4",{id:"type-1"},"Type"),Object(c.a)("p",null,"String"),Object(c.a)("hr",null),Object(c.a)("h3",{id:"apipaymentid"},"apiPaymentId"),Object(c.a)("h4",{id:"description-2"},"Description"),Object(c.a)("p",null,"your api payment ID."),Object(c.a)("p",null,Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/api-payments"}),"How to create API payment ID")),Object(c.a)("h4",{id:"type-2"},"Type"),Object(c.a)("p",null,"Number"),Object(c.a)("hr",null),Object(c.a)("h3",{id:"serversetting"},"serverSetting"),Object(c.a)("h4",{id:"description-3"},"Description"),Object(c.a)("p",null,"sets your requests to be processed on either the production or testing server"),Object(c.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"Make sure to set the values of ",Object(c.a)("inlineCode",{parentName:"p"},"apiKey"),",",Object(c.a)("inlineCode",{parentName:"p"},"communityId"),",",Object(c.a)("inlineCode",{parentName:"p"},"apiPaymentId"),"\nwith values from the production dashboard when setting ",Object(c.a)("inlineCode",{parentName:"p"},"serverSetting")," to production."))),Object(c.a)("h4",{id:"type-3"},"Type"),Object(c.a)("p",null,Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#serversetting"}),"ServerSetting")),Object(c.a)("hr",null),Object(c.a)("h3",{id:"paymentoptionstotalamounts"},"paymentOptionsTotalAmounts"),Object(c.a)("h4",{id:"description-4"},"Description"),Object(c.a)("p",null,"Total amount for the prepared amount after adding fees (if any) for each payment method available to your community"),Object(c.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"This property cannot be set by external logic, it's set internally after calling prepareAmount method."))),Object(c.a)("h4",{id:"type-4"},"Type"),Object(c.a)("p",null,Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#paymentoptionstotalamounts"}),"PaymentOptionsTotalAmounts")),Object(c.a)("hr",null),Object(c.a)("h3",{id:"activepaymentmethods"},"activePaymentMethods"),Object(c.a)("h4",{id:"description-5"},"Description"),Object(c.a)("p",null,"Available payment methods available for your community."),Object(c.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"This property cannot be set by external logic, it's set internally after calling prepareAmount method."))),Object(c.a)("h4",{id:"type-5"},"Type"),Object(c.a)("p",null,"MutableList of ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#paymentmethods"}),"PaymentMethods")),Object(c.a)("hr",null),Object(c.a)("h3",{id:"payusing"},"payUsing"),Object(c.a)("h4",{id:"description-6"},"Description"),Object(c.a)("p",null,"Payment method you wish to use when processing payments."),Object(c.a)("h4",{id:"type-6"},"Type"),Object(c.a)("p",null,Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#paymentmethods"}),"PaymentMethods")),Object(c.a)("hr",null),Object(c.a)("h3",{id:"billinginfo"},"billingInfo"),Object(c.a)("h4",{id:"description-7"},"Description"),Object(c.a)("p",null,"Billing information of the user making payment; full name, phone number, and E-mail address."),Object(c.a)("h4",{id:"type-7"},"Type"),Object(c.a)("p",null,Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#billinginfo"}),"BillingInfo")),Object(c.a)("hr",null),Object(c.a)("h3",{id:"shippinginfo"},"ShippingInfo"),Object(c.a)("h4",{id:"description-8"},"Description"),Object(c.a)("p",null,"Shipping information of the user making payment."),Object(c.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"This property must be set when processing payments using cash collection method."))),Object(c.a)("h4",{id:"type-8"},"Type"),Object(c.a)("p",null,Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#shippinginfo"}),"ShippingInfo")),Object(c.a)("hr",null),Object(c.a)("h3",{id:"customfields"},"customFields"),Object(c.a)("h4",{id:"description-9"},"Description"),Object(c.a)("p",null,"Extra information you wish to save with the transaction info for future use according to your needs."),Object(c.a)("div",{className:"admonition admonition-info alert alert--info"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"You can either set the values of this list through direct list methods\nor through ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"#addcustomfield"}),"addCustomField")," and ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"#clearcustomfield"}),"clearCustomField")," methods."))),Object(c.a)("h4",{id:"type-9"},"Type"),Object(c.a)("p",null,"MutableList of ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/android-sdk/classes#customfield"}),"CustomField")),Object(c.a)("hr",null),Object(c.a)("h3",{id:"methods"},"Methods"),Object(c.a)("h3",{id:"prepareamount"},"PrepareAmount"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"prepareAmount(amount: Number): PrepareAmountData?\n")),Object(c.a)("p",null,"This method does the following:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"Get the active payment methods available to your community and set them in ",Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"#activepaymentmethods"}),"activePaymentMethods"),"."),Object(c.a)("li",{parentName:"ul"},"Get the total amount including fees(if any) for each active payment method and set them in ",Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"#paymentoptionstotalamounts"}),"PaymentOptionsTotalAmounts"),"."),Object(c.a)("li",{parentName:"ul"},"Return ",Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/android-sdk/classes#prepareamountdata"}),"PrepareAmountData")," object which represents the total amount including fees (if any) for each active payment method.")),Object(c.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"This is a suspend function so it have to be run inside Async/Coroutine scope."))),Object(c.a)("div",{className:"admonition admonition-info alert alert--info"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"The values set inside ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"#paymentoptionstotalamounts"}),"PaymentOptionsTotalAmounts")," are the values that will be used when making a payment request,\nand they can only be set internally through ",Object(c.a)("inlineCode",{parentName:"p"},"prepareAmount")," method."))),Object(c.a)("h4",{id:"parameters"},"Parameters"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Object name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"value of the amount you want to charge the user"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(c.a)("hr",null),Object(c.a)("h3",{id:"pay"},"pay"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"pay(): PayData?\n")),Object(c.a)("p",null,"This method does the following:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"Get the values of ",Object(c.a)("inlineCode",{parentName:"li"},"payUsing"),", ",Object(c.a)("inlineCode",{parentName:"li"},"paymentOptionsTotalAmounts"),", ",Object(c.a)("inlineCode",{parentName:"li"},"billingInfo"),", ",Object(c.a)("inlineCode",{parentName:"li"},"shippingInfo"),", ",Object(c.a)("inlineCode",{parentName:"li"},"customFields")," and make a payment request using those values."),Object(c.a)("li",{parentName:"ul"},"Returns ",Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/android-sdk/classes#paydata"}),"PayData")," which contains payment information like the credit card from url or the reference number for Aman payments."),Object(c.a)("li",{parentName:"ul"},"Clear ",Object(c.a)("inlineCode",{parentName:"li"},"customFields")," and ",Object(c.a)("inlineCode",{parentName:"li"},"activePaymentMethods")," list properties."),Object(c.a)("li",{parentName:"ul"},"Set ",Object(c.a)("inlineCode",{parentName:"li"},"PaymentOptionsTotalAmounts")," to ",Object(c.a)("inlineCode",{parentName:"li"},"null"),".")),Object(c.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"This is a suspend function so it have to be run inside Async/Coroutine scope."))),Object(c.a)("hr",null),Object(c.a)("h3",{id:"gettransaction"},"getTransaction"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"getTransaction(transactionUid: String): TransactionData?\n")),Object(c.a)("p",null,"This method does the following:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"Returns ",Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/android-sdk/classes#transactiondata"}),"TransactionData")," which contains transaction info like status, creation date and time, customFields that were saved with the transaction, etc..")),Object(c.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"This is a suspend function so it have to be run inside Async/Coroutine scope."))),Object(c.a)("h4",{id:"parameters-1"},"Parameters"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Object name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"transactionUuid"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"UUID of the transaction you wish to its data"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"UUID is returned inside ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/android-sdk/classes#paydata"}),"PayData")," after pay method is called and returns successfully")))),Object(c.a)("hr",null),Object(c.a)("h3",{id:"addcustomfield"},"addCustomField"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"addCustomField(fieldName: String, fieldValue: String): Unit\n")),Object(c.a)("p",null,"This method does the following:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"Add a new custom field inside ",Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"#customfields"}),"customFields")," list.")),Object(c.a)("h4",{id:"parameters-2"},"Parameters"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Object name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"fieldName"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"key value of the data you want to save")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"fieldValue"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"value of the data you want to save")))),Object(c.a)("hr",null),Object(c.a)("h3",{id:"clearcustomfield"},"clearCustomField"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"clearCustomField(): Unit\n")),Object(c.a)("p",null,"This method does the following:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"Clears the ",Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"#customfields"}),"customFields")," list.")),Object(c.a)("hr",null))}d.isMDXComponent=!0}}]);