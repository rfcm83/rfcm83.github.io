(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{eWDE:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));a("sC2a"),a("q8oJ"),a("8npG");var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),s=a("Bl7J"),i=function(e){var t=e.currentPage,a=e.numPages,n=1===t,s=t===a,i=t-1==1?"/":(t-1).toString(),l=(t+1).toString();return r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"pagination",role:"pagination"},r.a.createElement("div",{className:"page-number"},"Page ",t," of ",a),r.a.createElement("div",null,!n&&r.a.createElement(o.Link,{to:i,rel:"prev",className:"newer-posts"},"← Previous Page"),!s&&r.a.createElement(o.Link,{to:l,rel:"next",className:"older-posts"},"Next Page →"))))},l=a("vrFN"),c=a("LvDl");var m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext,a=t.currentPage,n=t.numPages;a-1==1||(a-1).toString(),(a+1).toString();return r.a.createElement(s.a,null,r.a.createElement(l.a,{title:"Home",keywords:["blog","azure","develop","cloud"]}),e.map((function(e){var t=e.node;return r.a.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.fluid&&r.a.createElement(o.Link,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.fluid.src+")"}}),r.a.createElement("div",{className:"post-content"},r.a.createElement("div",{className:"post-headeritem"},r.a.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),r.a.createElement("span",{className:"post-words"},t.timeToRead," minute read")),r.a.createElement("h2",{className:"post-title"},r.a.createElement(o.Link,{to:t.fields.slug},t.frontmatter.title)),r.a.createElement("p",null,t.frontmatter.description," ",t.excerpt.toString().replace("Generic badge","")),r.a.createElement("div",{className:"post-tags"},t.frontmatter.tags&&t.frontmatter.tags.map((function(e){return r.a.createElement("span",{key:e},r.a.createElement(o.Link,{className:"tag",to:"/tags/"+Object(c.kebabCase)(e)+"/"},"#",e))})))))})),r.a.createElement(i,{currentPage:a,numPages:n}))},n}(r.a.Component),p=(t.default=m,"189840711")},sVOG:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"SetValue.NET","description":"Mi nombre es Raúl Fernández de Córdoba, trabajo en Kabel como Cloud Solution Architect. En mi día a día, trato de definir las bases de las distintas soluciones técnicas que se van a implementar, asesorar y definir las mejores estrategias para resolver una necesidad.","author":"Raúl Fernández de Córdoba","siteUrl":"http://setvalue.net"}}}}')},vrFN:function(e,t,a){"use strict";var n=a("sVOG"),r=a("q1tI"),o=a.n(r),s=a("TJpk"),i=a.n(s);function l(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,l=e.keywords,c=e.cover,m=n.data.site,p=t||m.siteMetadata.description,d=m.siteMetadata.siteUrl+(c||"/cloud.svg");return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:p},{name:"keywords",content:l},{property:"og:title",content:s},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:p},{name:"twitter:image",content:d}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-6165c99a41c68c4bdf73.js.map