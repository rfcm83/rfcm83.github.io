(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{eWDE:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));a("pIFo"),a("a1Th"),a("Btvt");var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),s=a("Bl7J"),l=function(e){var t=e.currentPage,a=e.numPages,r=1===t,s=t===a,l=t-1==1?"/":"/"+(t-1).toString(),c="/"+(t+1).toString();return n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"pagination",role:"pagination"},n.a.createElement("div",{className:"page-number"},"Página ",t," / ",a),n.a.createElement("div",null,!r&&n.a.createElement(o.Link,{to:l,rel:"prev",className:"newer-posts"},"← Anterior"),!s&&n.a.createElement(o.Link,{to:c,rel:"next",className:"older-posts"},"Siguiente →"))))},c=a("vrFN"),m=a("LvDl");var i=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext,a=t.currentPage,r=t.numPages;a-1==1||(a-1).toString(),(a+1).toString();return n.a.createElement(s.b,null,n.a.createElement(c.a,{title:"Home",keywords:["blog","azure","develop","cloud"]}),e.map((function(e){var t=e.node;return n.a.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.fluid&&n.a.createElement(o.Link,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.fluid.src+")"}}),n.a.createElement("div",{className:"post-content"},n.a.createElement("div",{className:"post-headeritem"},n.a.createElement("span",{className:"post-date"},Object(s.a)(t.frontmatter.date),"  — "),n.a.createElement("span",{className:"post-words"},t.timeToRead," ",1==t.timeToRead?"minuto":"minutos")),n.a.createElement("h2",{className:"post-title"},n.a.createElement(o.Link,{to:t.fields.slug},t.frontmatter.title)),n.a.createElement("p",null,t.frontmatter.description," ",t.excerpt.toString().replace("Generic badge","")),n.a.createElement("div",{className:"post-tags"},t.frontmatter.tags&&t.frontmatter.tags.map((function(e){return n.a.createElement("span",{key:e},n.a.createElement(o.Link,{className:"tag",to:"/tags/"+Object(m.kebabCase)(e)+"/"},"#",e))})))))})),n.a.createElement(l,{currentPage:a,numPages:r}))},r}(n.a.Component),p=(t.default=i,"397660703")}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-21a2d7bd4bfa459dbfc7.js.map