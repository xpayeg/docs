(window.webpackJsonp=window.webpackJsonp||[]).push([[36,39],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));d.displayName="MDXCreateElement";var b=n(22),f=n(26),y=n(123),h=n(3),g=n(7),v=n(109),j=n(110),k=n(113),O=n(142),E=n(143),C=n(141),N=n(116),x=n(108),w=n(152),P=n(67),S=n.n(P);var T=function e(t,n){return"link"===t.type?Object(j.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function _(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,s=e.activePath,u=Object(g.a)(e,["item","onItemClick","collapsible","activePath"]),p=c.items,m=c.label,d=T(c,s),b=(n=d,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),f=Object(a.useState)((function(){return!!i&&(!d&&c.collapsed)})),y=f[0],j=f[1],k=Object(a.useRef)(null),O=Object(a.useState)(void 0),E=O[0],C=O[1],N=function(e){var t;void 0===e&&(e=!0),C(e?(null===(t=k.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){d&&!b&&y&&j(!1)}),[d,b,y]);var x=Object(a.useCallback)((function(e){e.preventDefault(),E||N(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[E]);return 0===p.length?null:r.a.createElement("li",{className:Object(v.a)("menu__list-item",{"menu__list-item--collapsed":y}),key:m},r.a.createElement("a",Object(h.a)({className:Object(v.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&d},t[S.a.menuLinkText]=!i,t)),onClick:i?x:void 0,href:i?"#!":void 0},u),m),r.a.createElement("ul",{className:"menu__list",ref:k,style:{height:E},onTransitionEnd:function(){y||N(!1)}},p.map((function(e){return r.a.createElement(I,{tabIndex:y?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:s})}))))}function D(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(g.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=T(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(N.a,Object(h.a)({className:Object(v.a)("menu__link",{"menu__link--active":i}),to:c},Object(x.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function I(e){switch(e.item.type){case"category":return r.a.createElement(_,e);case"link":default:return r.a.createElement(D,e)}}var L=function(e){var t,n,o=e.path,c=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,u=e.isHidden,p=Object(a.useState)(!1),m=p[0],d=p[1],b=Object(j.useThemeConfig)(),f=b.navbar.hideOnScroll,y=b.hideableSidebar,h=Object(k.a)().isAnnouncementBarClosed,g=Object(C.a)().scrollY;Object(O.a)(m);var N=Object(E.a)();return Object(a.useEffect)((function(){N===E.b.desktop&&d(!1)}),[N]),r.a.createElement("div",{className:Object(v.a)(S.a.sidebar,(t={},t[S.a.sidebarWithHideableNavbar]=f,t[S.a.sidebarHidden]=u,t))},f&&r.a.createElement(w.a,{tabIndex:-1,className:S.a.sidebarLogo}),r.a.createElement("div",{className:Object(v.a)("menu","menu--responsive","thin-scrollbar",S.a.menu,(n={"menu--show":m},n[S.a.menuWithAnnouncementBar]=!h&&0===g,n))},r.a.createElement("button",{"aria-label":m?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){d(!m)}},m?r.a.createElement("span",{className:Object(v.a)(S.a.sidebarMenuIcon,S.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:S.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(I,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),d(!1)},collapsible:i,activePath:o})})))),y&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(v.a)("button button--secondary button--outline",S.a.collapseSidebarButton),onClick:s}))},M={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},B={Prism:n(24).a,theme:M};function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var W=/\r\n|\r|\n/,F=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},H=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},$=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=A({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=A({},n,{backgroundColor:null}),r};function z(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var J=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),R(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?$(e.theme,e.language):void 0;return t.themeDict=n})),R(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=A({},z(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?A({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),R(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),R(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=A({},z(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?A({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=H(u,p.type),p.alias&&(u=H(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(W),d=m.length;l.push({types:u,content:m[0]});for(var b=1;b<d;b++)F(l),i.push(l=[]),l.push({types:u,content:m[b]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return F(l),i}(void 0!==c?t.tokenize(a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),K=n(161),U=n.n(K),V=n(162),X=n.n(V),Y={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},q=n(133),G=function(){var e=Object(j.useThemeConfig)().prism,t=Object(q.a)().isDarkTheme,n=e.theme||Y,a=e.darkTheme||n;return t?a:n},Q=n(68),Z=n.n(Q),ee=/{([\d,-]+)}/,te=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},ne=/(?:title=")(.*)(?:")/,ae=function(e){var t=e.children,n=e.className,o=e.metastring,c=Object(j.useThemeConfig)().prism,l=Object(a.useState)(!1),i=l[0],s=l[1],u=Object(a.useState)(!1),p=u[0],m=u[1];Object(a.useEffect)((function(){m(!0)}),[]);var d=Object(a.useRef)(null),b=[],f="",y=G();if(Array.isArray(t)&&(t=t.join("")),o&&ee.test(o)){var g=o.match(ee)[1];b=X()(g).filter((function(e){return e>0}))}o&&ne.test(o)&&(f=o.match(ne)[1]);var k=n&&n.replace(/language-/,"");!k&&c.defaultLanguage&&(k=c.defaultLanguage);var O=t.replace(/\n$/,"");if(0===b.length&&void 0!==k){for(var E,C="",N=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return te(["js","jsBlock"]);case"jsx":case"tsx":return te(["js","jsBlock","jsx"]);case"html":return te(["js","jsBlock","html"]);case"python":case"py":return te(["python"]);default:return te()}}(k),x=t.replace(/\n$/,"").split("\n"),w=0;w<x.length;){var P=w+1,S=x[w].match(N);if(null!==S){switch(S.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":C+=P+",";break;case"highlight-start":E=P;break;case"highlight-end":C+=E+"-"+(P-1)+","}x.splice(w,1)}else w+=1}b=X()(C),O=x.join("\n")}var T=function(){U()(O),s(!0),setTimeout((function(){return s(!1)}),2e3)};return r.a.createElement(J,Object(h.a)({},B,{key:String(p),theme:y,code:O,language:k}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,c=e.getLineProps,l=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,f&&r.a.createElement("div",{style:a,className:Z.a.codeBlockTitle},f),r.a.createElement("div",{className:Z.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(v.a)(n,Z.a.codeBlock,"thin-scrollbar",(t={},t[Z.a.codeBlockWithTitle]=f,t))},r.a.createElement("div",{className:Z.a.codeBlockLines,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(h.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(h.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(v.a)(Z.a.copyButton),onClick:T},i?"Copied":"Copy")))}))},re=(n(69),n(70)),oe=n.n(re),ce=function(e){return function(t){var n,a=t.id,o=Object(g.a)(t,["id"]),c=Object(j.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(v.a)("anchor",(n={},n[oe.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},le=n(71),ie=n.n(le),se={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(ae,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(N.a,e)},pre:function(e){return r.a.createElement("div",Object(h.a)({className:ie.a.mdxCodeBlock},e))},h1:ce("h1"),h2:ce("h2"),h3:ce("h3"),h4:ce("h4"),h5:ce("h5"),h6:ce("h6")},ue=n(137),pe=n(115),me=n(72),de=n.n(me);function be(e){var t,n,o,c,l=e.currentDocRoute,i=e.versionMetadata,s=e.children,u=Object(b.default)(),m=u.siteConfig,d=u.isClient,f=i.pluginId,h=i.permalinkToSidebar,g=i.docsSidebars,k=i.version,O=h[l.path],E=g[O],C=Object(a.useState)(!1),N=C[0],x=C[1],w=Object(a.useState)(!1),P=w[0],S=w[1],T=Object(a.useCallback)((function(){P&&S(!1),x(!N)}),[P]);return r.a.createElement(y.a,{key:d,searchMetadatas:{version:k,tag:Object(j.docVersionSearchTag)(f,k)}},r.a.createElement("div",{className:de.a.docPage},E&&r.a.createElement("div",{className:Object(v.a)(de.a.docSidebarContainer,(t={},t[de.a.docSidebarContainerHidden]=N,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(de.a.docSidebarContainer)&&N&&S(!0)},role:"complementary"},r.a.createElement(L,{key:O,sidebar:E,path:l.path,sidebarCollapsible:null===(n=null===(o=m.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===n||n,onCollapse:T,isHidden:P}),P&&r.a.createElement("div",{className:de.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:T,onClick:T})),r.a.createElement("main",{className:de.a.docMainContainer},r.a.createElement("div",{className:Object(v.a)("container padding-vert--lg",de.a.docItemWrapper,(c={},c[de.a.docItemWrapperEnhanced]=N,c))},r.a.createElement(p,{components:se},s)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(pe.matchPath)(a.pathname,e)}));return o?r.a.createElement(be,{currentDocRoute:o,versionMetadata:n},Object(f.a)(t)):r.a.createElement(ue.default,e)}},137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(123);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},161:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},162:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);