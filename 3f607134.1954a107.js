(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{106:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r);t.a=function({children:e,hidden:t,className:a}){return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return O}));var n,r=a(3),l=a(7),c=(a(0),a(96)),i=a(106),b=(a(97),{id:"direct-order-api",title:"Direct Order API"}),d={unversionedId:"direct-order-api",id:"direct-order-api",isDocsHomePage:!1,title:"Direct Order API",description:"This guide explains how to create direct order through API call .",source:"@site/docs/direct_order_api.mdx",slug:"/direct-order-api",permalink:"/docs/direct-order-api",version:"current",sidebar:"docs",previous:{title:"Pay endpoint",permalink:"/docs/pay"},next:{title:"Transaction endpoint",permalink:"/docs/transactions"}},u=[{value:"REQUEST",id:"request",children:[{value:"testing server:",id:"testing-server",children:[]},{value:"production(Live) server:",id:"productionlive-server",children:[]}]},{value:"Parameters",id:"parameters",children:[{value:"Authorization",id:"authorization",children:[]}]},{value:"Request body",id:"request-body",children:[{value:"Required Properties",id:"required-properties-1",children:[]},{value:"Optional Properties",id:"optional-properties",children:[]}]},{value:"Response",id:"response",children:[]},{value:"Example",id:"example",children:[{value:"Recurring Payment",id:"recurring-payment",children:[]}]},{value:"Payment Options",id:"payment-options",children:[]},{value:"Custom Fields",id:"custom-fields",children:[{value:"Example",id:"example-1",children:[]},{value:"Request body",id:"request-body-1",children:[]},{value:"Redirect Url",id:"redirect-url",children:[]},{value:"Callback url",id:"callback-url",children:[]}]}],p=(n="Tabs",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.a)("div",e)}),o={rightToc:u};function O(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"This guide explains how to create direct order through API call .\nAfter calling the API successfully the user will be notified by email and/or SMS (according to API parameters)."),Object(c.a)("h2",{id:"request"},"REQUEST"),Object(c.a)("h3",{id:"testing-server"},"testing server:"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{}),"POST https://staging.xpay.app/api/orders/create-direct-order/\n")),Object(c.a)("h3",{id:"productionlive-server"},"production(Live) server:"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{}),"POST https://community.xpay.app/api/orders/create-direct-order/\n")),Object(c.a)("h2",{id:"parameters"},"Parameters"),Object(c.a)("h3",{id:"authorization"},"Authorization"),Object(c.a)("p",null,"This method requires authorization, supply the header with a key value pair with that structure"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"x-api-key" : string\n')),Object(c.a)("h4",{id:"required-properties"},"Required Properties"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"x-api-key"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"API key linked to your community"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"api-key"}),"generate API key"))))),Object(c.a)("p",null,"\u200b"),Object(c.a)("h2",{id:"request-body"},"Request body"),Object(c.a)("h3",{id:"required-properties-1"},"Required Properties"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"direct order's name"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"community_id"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"ID that is uniques to your community"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"amount.amount"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"represents the amount you want to charge the user"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"if your community fees is Added in bill then use the value returned from ",Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"prepare-amount"}),"prepare amount endpoint")," , otherwise use the amount you want to charge the user directly.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"amount.currency"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Currency"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),'supported currencies are "EGP", "USD", "EUR", "SAR", "AED" and "GBP". default is "EGP"')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"payment_methods"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"array"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"allowed payment methods."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"#payment-options"}),"see payment available payment methods"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"customer_name"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"user first and last name"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"must contain first and last name in ",Object(c.a)("strong",{parentName:"td"},"english letters")," with space between them.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"customer_email"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"user email"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"customer_mobile"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"user phone number"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.a)("strong",{parentName:"td"},"must contain country code")," prefixed")))),Object(c.a)("div",{className:"admonition admonition-danger alert alert--danger"},Object(c.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(c.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"Hardcoding the customer data in the production version of your app will raise a risk in the payment processor and the transaction will be declined"))),Object(c.a)("h3",{id:"optional-properties"},"Optional Properties"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"discount_amount.amount"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"will be subtracted from the amount"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"discount_amount.currency"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),'supported  "EGP", "USD", "EUR", "SAR", "AED" and "GBP".'),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),'default is "EGP"')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"allow_recurring_payments"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Change from regular to reccuring payment"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Needed if your payment is recurring")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"expiry_date"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Expiry Date of the reccuring payment"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Needed if your payment is recurring")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"minimum_days_between_payments"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"integer"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Number of days between each payment"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Needed if your payment is recurring")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"custom_fields"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"array"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"#custom-fields"}),"Custom Fields")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"order_description"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Order description"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"address"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"billing address"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"customer_title"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Customer title used when sending notification."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"e.g. Mr, Mrs, Doctor,... etc.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"vat_percentage"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"The percentage will be calculated and added to the amount."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"will show in the payment pages as a separate entity titled VAT")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"send_by_email"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"If true notify customer by email ."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"cc_email"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"CC email in case of email sent."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"send_by_sms"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"If true notify customer by mobile."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"redirect_url"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"#redirect_url"}),"redirect url")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"callback_url"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"#callback_url"}),"callback url")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"paid"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"default false"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"May be use in case of recurring payment and you want to mark the first payment as paid.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"tags"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"payment tags ",Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"#example"}),"see the example below")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))))),Object(c.a)("h2",{id:"response"},"Response"),Object(c.a)("p",null,"If successful, this method returns a response body with the following structure:"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": {\n        "code": 201,\n        "message": "success",\n        "errors": []\n    },\n    "data": {\n        "success": true,\n        "Direct Order Link": "https://staging-iframe.xpay.app/i/community/xL4rPB7/direct-order/1BlbR48",\n        "message": "Direct order link created successfully. SMS and email notifications sent."\n    },\n    "count": null,\n    "next": null,\n    "previous": null\n}\n')),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Direct Order Link"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Direct Order Link"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}))))),Object(c.a)("h2",{id:"example"},"Example"),Object(c.a)(p,{defaultValue:"request",values:[{label:"Request Body",value:"request"},{label:"Response Body",value:"response"}],mdxType:"Tabs"},Object(c.a)(i.a,{value:"request",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "DO created Via Api",\n    "address": "123 Main St, City",\n    "order_description": "Monthly rent payment", \n    "customer_title": "Mr.", \n    "customer_name": "Mahmoud mmm", \n    "customer_email": "test@example.com", \n    "allow_recurring_payments": false, \n    "customer_mobile": "+201223456789", \n    "cc_email": "cc@example.com", \n    "amount": {\n        "amount": 100.0,\n        "currency": "EGP"\n    },\n    "discount_amount": {\n        "amount": 10.0,\n        "currency": "EGP"\n    },\n    "community_id": "xL4rPB7", \n    "paid": false, \n    "tags": [ \n        {\n            "id": 1,\n            "name": "test-checkoutpage"\n        }\n    ],\n    "payment_methods": [ \n        "CARD",\n        "FAWRY"\n    ],\n    "vat_percentage": 5.0, \n    "expiry_date": "2025-05-31", \n    "minimum_days_between_payments": 30, \n "custom_fields": [\n    {\n      "field_label": "test label1",\n      "field_type": "TEXT"\n    },\n    {\n      "field_label": "check example",\n      "field_type": "CHECKBOX"\n    },\n    {\n      "field_label": "number example",\n      "field_type": "NUMBER",\n      "required": false\n    },\n    {\n      "field_label": "drop down example",\n      "field_type": "DROPDOWNLIST",\n      "field_choices": "c1,c2,c3",\n      "required": true\n    }\n  ],\n    "send_by_email": true, \n    "send_by_sms": true, \n    "redirect_url": "https://webhook.site/90b597de-669b-499a-a595-423054d9d46d",\n    "callback_url": "https://webhook.site/90b597de-669b-499a-a595-423054d9d46d"\n}\n'))),Object(c.a)(i.a,{value:"response",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": {\n        "code": 201,\n        "message": "success",\n        "errors": []\n    },\n    "data": {\n        "success": true,\n        "Direct Order Link": "https://staging-iframe.xpay.app/i/community/xL4rPB7/direct-order/1BlbR48",\n        "message": "Direct order link created successfully. SMS and email notifications sent."\n    },\n    "count": null,\n    "next": null,\n    "previous": null\n}\n')))),Object(c.a)("h3",{id:"recurring-payment"},"Recurring Payment"),Object(c.a)("p",null,"\u200bJust ",Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"#example"}),"follow the example above")," and don't forget to include the recurring payment paramaters"),Object(c.a)("h2",{id:"payment-options"},"Payment Options"),Object(c.a)("p",null,"There are four payment options available at the moment"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"card"),Object(c.a)("li",{parentName:"ul"},"kiosk (aman)"),Object(c.a)("li",{parentName:"ul"},"fawry (both kiosk and fawryPay)"),Object(c.a)("li",{parentName:"ul"},"mobile wallets"),Object(c.a)("li",{parentName:"ul"},"valU")),Object(c.a)("h2",{id:"custom-fields"},"Custom Fields"),Object(c.a)("p",null,"If you wish to request extra data from user during paymner, you can send custom fields array.\neach field in custom fields array contains:"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"field_label"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"label that will appears to the customer on payment")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"field_type"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"field type: TEXT, NUMBER, CHECKBOX or DROPDOWNLIST")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"required"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"optional parameter indicates if the field is mandatory")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"field_choices"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"only used in case of DROPDOWNLIST (comma separated values of the drop down list)")))),Object(c.a)("h3",{id:"example-1"},"Example"),Object(c.a)("h3",{id:"request-body-1"},"Request body"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  ....\n  "custom_fields": [\n    {\n      "field_label": "test label1",\n      "field_type": "TEXT"\n    },\n    {\n      "field_label": "check example",\n      "field_type": "CHECKBOX"\n    },\n    {\n      "field_label": "number example",\n      "field_type": "NUMBER",\n      "required": false\n    },\n    {\n      "field_label": "drop down example",\n      "field_type": "DROPDOWNLIST",\n      "field_choices": "c1,c2,c3",\n      "required": true\n    }\n  ]\n  ....\n}\n')),Object(c.a)("h3",{id:"redirect-url"},"Redirect Url"),Object(c.a)("p",null,"if it is assigned then  once the payment is completed a redirect to the url will happen and will contain the following as query paramaters:"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"total_amount_piasters"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction amount in piasters")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"total_amount"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction amount")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction_uuid"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction UUID in XPay system")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction_status"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction status")))),Object(c.a)("p",null,"and if there iscustom fields then it will be included in query parameters"),Object(c.a)("h3",{id:"callback-url"},"Callback url"),Object(c.a)("p",null,"If it is assigned,  a POST request will be send after the customer pay the direct order with json paramaters that includes:"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"total_amount_piasters"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction amount in piasters")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"total_amount"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction amount")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction_uuid"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction UUID in XPay system")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction_status"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"transaction status")))),Object(c.a)("p",null,"and if there is custom fields then it will be included in the request json parameter."),Object(c.a)("p",null,"The following is an example to the parametes sent to call back url:"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "member_id": null,\n  "test label1": "",//custom field\n  "total_amount": 99.99,\n  "check example": true,//custom field\n  "number example": "",//custom field\n  "transaction_id": "0901eddd-f71c-4f31-81a9-f03d08c328b5",\n  "drop down example": "c2",//custom field\n  "transaction_status": "SUCCESSFUL",\n  "total_amount_piasters": 9999\n}\n')))}O.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),u=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),o=u(a),O=n,m=o["".concat(c,".").concat(O)]||o[O]||p[O]||l;return a?r.a.createElement(m,i(i({ref:t},d),{},{components:a})):r.a.createElement(m,i({ref:t},d))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=o;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<l;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return c}));var n=a(22),r=a(98);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=l();return a(e,t)}},98:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);