(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{eWDE:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var n=a("dI71"),r=a("q1tI"),s=a.n(r),l=a("Wbzz"),o=a("Bl7J"),m=function(e){var t=e.currentPage,a=e.numPages,n=1===t,r=t===a,o=t-1==1?"/":"/"+(t-1).toString(),m="/"+(t+1).toString();return s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"pagination",role:"pagination"},s.a.createElement("div",{className:"page-number"},"Página ",t," / ",a),s.a.createElement("div",null,!n&&s.a.createElement(l.Link,{to:o,rel:"prev",className:"newer-posts"},"← Anterior"),!r&&s.a.createElement(l.Link,{to:m,rel:"next",className:"older-posts"},"Siguiente →"))))},i=a("vrFN"),c=a("LvDl"),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext,a=t.currentPage,n=t.numPages;a-1==1||(a-1).toString(),(a+1).toString();return s.a.createElement(o.a,null,s.a.createElement(i.a,{title:"Home",keywords:["blog","azure","develop","cloud"]}),e.map((function(e){var t=e.node;return s.a.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.fluid&&s.a.createElement(l.Link,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.fluid.src+")"}}),s.a.createElement("div",{className:"post-content"},s.a.createElement("div",{className:"post-headeritem"},s.a.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),s.a.createElement("span",{className:"post-words"},t.timeToRead," ",1==t.timeToRead?"minuto":"minutos")),s.a.createElement("h2",{className:"post-title"},s.a.createElement(l.Link,{to:t.fields.slug},t.frontmatter.title)),s.a.createElement("p",null,t.frontmatter.description," ",t.excerpt.toString().replace("Generic badge","")),s.a.createElement("div",{className:"post-tags"},t.frontmatter.tags&&t.frontmatter.tags.map((function(e){return s.a.createElement("span",{key:e},s.a.createElement(l.Link,{className:"tag",to:"/tags/"+Object(c.kebabCase)(e)+"/"},"#",e))})))))})),s.a.createElement(m,{currentPage:a,numPages:n}))},t}(s.a.Component),u=(t.default=p,"189840711")}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-8fe2e0bc74c132e10855.js.map