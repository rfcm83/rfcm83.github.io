(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1/Ks":function(t,e,n){"use strict";n("EU/P")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},HQAx:function(t,e,n){"use strict";var r=n("P8UN"),a=n("ewoU"),i=n("DFzH"),o=n("kiRH"),s=n("nONw"),c=n("ytzU");r(r.P,"Array",{flatMap:function(t){var e,n,r=i(this);return s(t),e=o(r.length),n=c(r,0),a(n,r,r,e,0,1,t,arguments[1]),n}}),n("Dq1/")("flatMap")},HXzo:function(t,e,n){"use strict";n("EU/P")("trim",(function(t){return function(){return t(this,3)}}))},I17o:function(t,e,n){"use strict";var r=n("P8UN"),a=n("pTxf"),i=n("CL53"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padEnd:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"QzX/":function(t,e,n){"use strict";n("EU/P")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},Rw9D:function(t,e,n){"use strict";var r=n("P8UN"),a=n("/+AL");r(r.P+r.F*!n("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(t){return a(this,t,arguments.length,arguments[1],!0)}})},"Y++M":function(t,e,n){"use strict";var r=n("DFzH"),a=n("dTG6"),i=n("kiRH");t.exports=function(t){for(var e=r(this),n=i(e.length),o=arguments.length,s=a(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,l=void 0===c?n:a(c,n);l>s;)e[s++]=t;return e}},YuTi:function(t,e,n){n("R48M"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},ZiRl:function(t,e,n){var r=n("P8UN");r(r.P,"String",{repeat:n("gd4K")})},eWDE:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return d}));n("sC2a"),n("q8oJ"),n("8npG");var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("Bl7J"),s=function(t){var e=t.currentPage,n=t.numPages,r=1===e,o=e===n,s=e-1==1?"/":(e-1).toString(),c=(e+1).toString();return a.a.createElement("div",{className:"container"},a.a.createElement("nav",{className:"pagination",role:"pagination"},a.a.createElement("div",{className:"page-number"},"Page ",e," of ",n),a.a.createElement("div",null,!r&&a.a.createElement(i.Link,{to:s,rel:"prev",className:"newer-posts"},"← Previous Page"),!o&&a.a.createElement(i.Link,{to:c,rel:"next",className:"older-posts"},"Next Page →"))))},c=n("vrFN"),l=n("LvDl");var u=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges,e=this.props.pageContext,n=e.currentPage,r=e.numPages;n-1==1||(n-1).toString(),(n+1).toString();return a.a.createElement(o.a,null,a.a.createElement(c.a,{title:"Home",keywords:["blog","azure","develop","cloud"]}),t.map((function(t){var e=t.node;return a.a.createElement("article",{className:"post",key:e.fields.slug},e.frontmatter.img&&e.frontmatter.img.childImageSharp&&e.frontmatter.img.childImageSharp.fluid&&a.a.createElement(i.Link,{to:e.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+e.frontmatter.img.childImageSharp.fluid.src+")"}}),a.a.createElement("div",{className:"post-content"},a.a.createElement("div",{className:"post-headeritem"},a.a.createElement("span",{className:"post-date"},e.frontmatter.date,"  — "),a.a.createElement("span",{className:"post-words"},e.timeToRead," minute read")),a.a.createElement("h2",{className:"post-title"},a.a.createElement(i.Link,{to:e.fields.slug},e.frontmatter.title)),a.a.createElement("p",null,e.frontmatter.description," ",e.excerpt.toString().replace("Generic badge","")),a.a.createElement("div",{className:"post-tags"},e.frontmatter.tags&&e.frontmatter.tags.map((function(t){return a.a.createElement("span",{key:t},a.a.createElement(i.Link,{className:"tag",to:"/tags/"+Object(l.kebabCase)(t)+"/"},"#",t))})))))})),a.a.createElement(s,{currentPage:n,numPages:r}))},r}(a.a.Component),d=(e.default=u,"397660703")},ewoU:function(t,e,n){"use strict";var r=n("tuyV"),a=n("BjK0"),i=n("kiRH"),o=n("ot9L"),s=n("sOol")("isConcatSpreadable");t.exports=function t(e,n,c,l,u,d,f,p){for(var m,g,h=u,v=0,P=!!f&&o(f,p,3);v<l;){if(v in c){if(m=P?P(c[v],v,n):c[v],g=!1,a(m)&&(g=void 0!==(g=m[s])?!!g:r(m)),g&&d>0)h=t(e,n,m,i(m.length),h,d-1)-1;else{if(h>=9007199254740991)throw TypeError();e[h]=m}h++}v++}return h}},gd4K:function(t,e,n){"use strict";var r=n("1Llc"),a=n("ap2Z");t.exports=function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},lFjb:function(t,e,n){"use strict";var r=n("P8UN"),a=n("5SQf"),i=n("1Llc"),o=n("kiRH"),s=[].lastIndexOf,c=!!s&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!n("h/qr")(s)),"Array",{lastIndexOf:function(t){if(c)return s.apply(this,arguments)||0;var e=a(this),n=o(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},lizw:function(t,e,n){"use strict";var r=n("P8UN"),a=n("pTxf"),i=n("CL53"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},n0hJ:function(t,e,n){var r=n("P8UN");r(r.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},nMRu:function(t,e,n){"use strict";var r=n("P8UN"),a=n("DFzH"),i=n("kxs/");r(r.P+r.F*n("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=a(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},pTxf:function(t,e,n){var r=n("kiRH"),a=n("gd4K"),i=n("ap2Z");t.exports=function(t,e,n,o){var s=String(i(t)),c=s.length,l=void 0===n?" ":String(n),u=r(e);if(u<=c||""==l)return s;var d=u-c,f=a.call(l,Math.ceil(d/l.length));return f.length>d&&(f=f.slice(0,d)),o?f+s:s+f}},upxI:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"SetValue.NET","description":"Mi nombre es Raúl Fernández de Córdoba, trabajo en Kabel como Cloud Solution Architect. En mi día a día, trato de definir las bases de las distintas soluciones técnicas que se van a implementar, asesorar y definir las mejores estrategias para resolver una necesidad.","author":"Raúl Fernández de Córdoba","siteUrl":"http://setvalue.net"}}}}')},vrFN:function(t,e,n){"use strict";var r=n("upxI"),a=n("q1tI"),i=n.n(a),o=n("TJpk"),s=n.n(o);function c(t){var e=t.description,n=t.lang,a=t.meta,o=t.title,c=t.keywords,l=t.cover,u=r.data.site,d=e||u.siteMetadata.description,f=u.siteMetadata.siteUrl+(l||"/cloud.svg");return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:d},{name:"keywords",content:c},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d},{name:"twitter:image",content:f}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},zTTH:function(t,e,n){"use strict";var r=n("P8UN"),a=n("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-abea27004fc7ddee64db.js.map