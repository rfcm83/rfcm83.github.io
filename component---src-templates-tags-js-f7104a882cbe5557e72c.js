(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{MN1z:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return o}));var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),l=a("vrFN"),m=a("Bl7J"),c=a("LvDl");t.default=function(e){var t=e.pageContext,a=e.data,n=t.tag,o=a.allMarkdownRemark,i=o.edges,d=o.totalCount,p=n+": "+d+" post"+(1===d?"":"s");return r.a.createElement(m.a,null,r.a.createElement(l.a,{title:p,description:n,keywords:n}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,p)),i.map((function(e){var t=e.node;return r.a.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.fluid&&r.a.createElement(s.Link,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.fluid.src+")"}}),r.a.createElement("div",{className:"post-content"},r.a.createElement("div",{className:"post-headeritem"},r.a.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),r.a.createElement("span",{className:"post-words"},t.timeToRead," ",1==t.timeToRead?"minuto":"minutos")),r.a.createElement("h2",{className:"post-title"},r.a.createElement(s.Link,{to:t.fields.slug},t.frontmatter.title)),r.a.createElement("p",null,t.frontmatter.description," ",t.excerpt.toString().replace("Generic badge","")),r.a.createElement("div",{className:"post-tags"},t.frontmatter.tags&&t.frontmatter.tags.map((function(e){return r.a.createElement("span",{key:e},r.a.createElement(s.Link,{className:"tag",to:"/tags/"+Object(c.kebabCase)(e)+"/"},"#",e))})))))})),r.a.createElement("div",{className:"container"},r.a.createElement(s.Link,{to:"/tags",className:"newer-posts"},"← Tags")))};var o="1409563314"}}]);
//# sourceMappingURL=component---src-templates-tags-js-f7104a882cbe5557e72c.js.map