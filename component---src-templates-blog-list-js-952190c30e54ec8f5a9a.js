(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[544],{8486:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var r=a(3552),n=a(1804),s=a.n(n),l=a(7294),m=a(5444),o=a(3453),i=function(e){var t=e.currentPage,a=e.numPages,r=1===t,n=t===a,s=t-1==1?"/":"/"+(t-1).toString(),o="/"+(t+1).toString();return l.createElement("div",{className:"container"},l.createElement("nav",{className:"pagination",role:"pagination"},l.createElement("div",{className:"page-number"},"Página ",t," / ",a),l.createElement("div",null,!r&&l.createElement(m.Link,{to:s,rel:"prev",className:"newer-posts"},"← Anterior"),!n&&l.createElement(m.Link,{to:o,rel:"next",className:"older-posts"},"Siguiente →"))))},c=a(6179),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext,a=t.currentPage,r=t.numPages;a-1==1||(a-1).toString(),(a+1).toString();return l.createElement(o.Z,null,l.createElement(c.Z,{title:"Home",keywords:["blog","azure","develop","cloud"]}),e.map((function(e){var t=e.node;return l.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.fluid&&l.createElement(m.Link,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.fluid.src+")"}}),l.createElement("div",{className:"post-content"},l.createElement("div",{className:"post-headeritem"},l.createElement("span",{className:"post-date"},(0,o.B)(t.frontmatter.date),"  — "),l.createElement("span",{className:"post-words"},t.timeToRead," ",1==t.timeToRead?"minuto":"minutos")),l.createElement("h2",{className:"post-title"},l.createElement(m.Link,{to:t.fields.slug},t.frontmatter.title)),l.createElement("p",null,t.frontmatter.description," ",t.excerpt.toString().replace("Generic badge","")),l.createElement("div",{className:"post-tags"},t.frontmatter.tags&&t.frontmatter.tags.map((function(e){return l.createElement("span",{key:e},l.createElement(m.Link,{className:"tag",to:"/tags/"+s()(e)+"/"},"#",e))})))))})),l.createElement(i,{currentPage:a,numPages:r}))},t}(l.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-952190c30e54ec8f5a9a.js.map