/*! For license information please see component---src-templates-blog-post-js-d2bbc325785efec4f9d9.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{5900:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var l in r)a.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},1496:function(e,t,r){"use strict";var a=r(5318);t.Z=void 0;var n,i=a(r(1506)),o=a(r(5354)),l=a(r(7316)),c=a(r(7154)),s=a(r(7294)),d=a(r(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,c.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed,a=m(t||r||[]);return a&&a.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),w=function(e){var t=f(e),r=h(t);return g[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},a&&s.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),r&&s.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function O(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function k(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return s.default.createElement("source",{key:t,media:r,srcSet:a})}))}function C(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return s.default.createElement("source",{key:t,media:r,srcSet:a})}))}function j(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+s+o+l+r+a+t+i+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=s.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=s.default.createElement(z,(0,c.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?s.default.createElement("picture",null,n(a),l):l})),z=s.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,f=e.loading,p=e.draggable,h=e.ariaHidden,m=(0,l.default)(e,u);return s.default.createElement("img",(0,c.default)({"aria-hidden":h,sizes:r,srcSet:a,src:n},m,{onLoad:o,onError:d,ref:t,loading:f,draggable:p,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&w(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=s.default.createRef(),r.placeholderRef=t.placeholderRef||s.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:w(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=w(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=h(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,u=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,w=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,v=e.itemProp,S=e.loading,O=e.draggable,j=h||g;if(!j)return null;var x=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,c.default)({opacity:x?1:0,transition:I?"opacity "+y+"ms":"none"},l),H="boolean"==typeof w?"lightgray":w,P={transitionDelay:y+"ms"},V=(0,c.default)({opacity:this.state.imgLoaded?0:1},I&&P,l,u),_={title:t,alt:this.state.isVisible?"":r,style:V,className:p,itemProp:v},W=this.state.isHydrated?m(j):j[0];if(h)return s.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},s.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),H&&s.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&P)}),W.base64&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:_,imageVariants:j,generateSources:C}),W.tracedSVG&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:_,imageVariants:j,generateSources:k}),this.state.isVisible&&s.default.createElement("picture",null,E(j),s.default.createElement(z,{alt:r,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:O})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,c.default)({alt:r,title:t,loading:S},W,{imageVariants:j}))}}));if(g){var T=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete T.display,s.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},H&&s.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:H,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},I&&P)}),W.base64&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:_,imageVariants:j,generateSources:C}),W.tracedSVG&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:_,imageVariants:j,generateSources:k}),this.state.isVisible&&s.default.createElement("picture",null,E(j),s.default.createElement(z,{alt:r,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:O})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,c.default)({alt:r,title:t,loading:S},W,{imageVariants:j}))}}))}return null},t}(s.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),H=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function P(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}I.propTypes={resolutions:N,sizes:H,fixed:P(d.default.oneOfType([N,d.default.arrayOf(N)])),fluid:P(d.default.oneOfType([H,d.default.arrayOf(H)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=I;t.Z=V},2715:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var a,n=r(1721),i=r(1804),o=r.n(i),l=r(7294),c=r(5444),s=r(1496),d=r(3453),u=r(6179),f=(r(9535),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},a(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),p=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return f(t,e),t}(Error);function h(e,t){if(!e)throw new p(t)}function m(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var g=r(5900),w=r.n(g),y=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),b=function(){return b=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},b.apply(this,arguments)},v=function(e,t,r,a){return new(r||(r=Promise))((function(n,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function l(e){try{c(a.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))},S=function(e,t){var r,a,n,i,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,a&&(n=2&i[0]?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){o.label=i[1];break}if(6===i[0]&&o.label<n[1]){o.label=n[1],n=i;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(i);break}n[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(l){i=[6,l],a=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},E=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},O=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},k=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},C=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function j(e,t,r){var a=t.height,n=t.width,i=E(t,["height","width"]),o=b({height:a,width:n,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(e,"",Object.keys(o).map((function(e){return e+"="+o[e]})).join(", "));if(r)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),r(l))}catch(e){console.error(e)}}),1e3);return l}var x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,a=r.onShareWindowClose,n=r.windowHeight,i=void 0===n?400:n,o=r.windowPosition,l=void 0===o?"windowCenter":o,c=r.windowWidth,s=void 0===c?550:c;j(e,b({height:i,width:s},"windowCenter"===l?k(s,i):C(s,i)),a)},t.handleClick=function(e){return v(t,void 0,void 0,(function(){var t,r,a,n,i,o,l,c,s,d;return S(this,(function(u){switch(u.label){case 0:return t=this.props,r=t.beforeOnClick,a=t.disabled,n=t.networkLink,i=t.onClick,o=t.url,l=t.openShareDialogOnClick,c=t.opts,s=n(o,c),a?[2]:(e.preventDefault(),r?(d=r(),O(d)?[4,d]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return l&&this.openShareDialog(s),i&&i(e,s),[2]}}))}))},t}return y(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,a=e.disabled,n=e.disabledStyle,i=e.forwardedRef,o=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,E(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=w()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!a,disabled:!!a},r),f=b(b(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),a&&n);return l.createElement("button",b({},d,{"aria-label":d["aria-label"]||o,className:u,onClick:this.handleClick,ref:i,style:f}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(l.Component),R=x,L=function(){return L=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},L.apply(this,arguments)};var z=function(e,t,r,a){function n(n,i){var o=r(n),c=L({},n);return Object.keys(o).forEach((function(e){delete c[e]})),l.createElement(R,L({},a,c,{forwardedRef:i,networkName:e,networkLink:t,opts:r(n)}))}return n.displayName="ShareButton-"+e,(0,l.forwardRef)(n)};var I=z("facebook",(function(e,t){var r=t.quote,a=t.hashtag;return h(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+m({u:e,quote:r,hashtag:a})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),N=function(){return N=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},N.apply(this,arguments)},H=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function P(e){var t=function(t){var r=t.bgStyle,a=t.borderRadius,n=t.iconFillColor,i=t.round,o=t.size,c=H(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return l.createElement("svg",N({viewBox:"0 0 64 64",width:o,height:o},c),i?l.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):l.createElement("rect",{width:"64",height:"64",rx:a,ry:a,fill:e.color,style:r}),l.createElement("path",{d:e.path,fill:n}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var V=P({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var _=z("twitter",(function(e,t){var r=t.title,a=t.via,n=t.hashtags,i=void 0===n?[]:n,o=t.related,l=void 0===o?[]:o;return h(e,"twitter.url"),h(Array.isArray(i),"twitter.hashtags is not an array"),h(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+m({url:e,text:r,via:a,hashtags:i.length>0?i.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),W=P({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var T=z("linkedin",(function(e,t){var r=t.title,a=t.summary,n=t.source;return h(e,"linkedin.url"),"https://linkedin.com/shareArticle"+m({url:e,mini:"true",title:r,summary:a,source:n})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),M=P({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var A=z("instapaper",(function(e,t){var r=t.title,a=t.description;return h(e,"instapaper.url"),"http://www.instapaper.com/hello2"+m({url:e,title:r,description:a})}),(function(e){return{title:e.title,description:e.description}}),{windowWidth:500,windowHeight:500,windowPosition:"windowCenter"}),B=P({color:"#1F1F1F",networkName:"instapaper",path:"M35.688 43.012c0 2.425.361 2.785 3.912 3.056V48H24.401v-1.932c3.555-.27 3.912-.63 3.912-3.056V20.944c0-2.379-.36-2.785-3.912-3.056V16H39.6v1.888c-3.55.27-3.912.675-3.912 3.056v22.068h.001z"});var q=z("whatsapp",(function(e,t){var r=t.title,a=t.separator;return h(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+m({text:r?r+a+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),F=P({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});var D=z("telegram",(function(e,t){var r=t.title;return h(e,"telegram.url"),"https://telegram.me/share/url"+m({url:e,text:r})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400}),G=P({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"}),U=function(e){var t=e.title,r="undefined"!=typeof window?window.location.href:"";return l.createElement("div",{class:"socialButtons"},l.createElement(I,{url:r,title:t},l.createElement(V,{round:"true",size:"32"})),l.createElement(_,{url:r,title:t},l.createElement(W,{round:"true",size:"32"})),l.createElement(T,{url:r,title:t},l.createElement(M,{round:"true",size:"32"})),l.createElement(A,{url:r,title:t},l.createElement(B,{round:"true",size:"32"})),l.createElement(q,{url:r,title:t},l.createElement(F,{round:"true",size:"32"})),l.createElement(D,{url:r,title:t},l.createElement(G,{round:"true",size:"32"})))},Z=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext,r=(t.previous,t.next,e.frontmatter.title+e.frontmatter.tags.map((function(e){return" #"+e.split(" ").join("")})).toString().split(",").join(""));this.props.data.site.siteMetadata;return l.createElement(d.Z,null,l.createElement(u.Z,{title:e.frontmatter.title,description:e.frontmatter.description,keywords:[e.frontmatter.tags],cover:[e.frontmatter.img.childImageSharp.fluid.src]}),l.createElement("article",{className:"article-page"},l.createElement("div",{className:"page-content"},e.frontmatter.img&&l.createElement("div",{className:"page-cover-image"},l.createElement("figure",null,l.createElement(s.Z,{className:"page-image",key:e.frontmatter.img.childImageSharp.fluid.src,fluid:e.frontmatter.img.childImageSharp.fluid}))),l.createElement("div",{className:"wrap-content"},l.createElement("header",{className:"header-page"},l.createElement("h1",{className:"page-title"},e.frontmatter.title),l.createElement("div",{className:"page-date"},l.createElement("span",null,(0,d.B)(e.frontmatter.date))),l.createElement(U,{title:r})),l.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),l.createElement("div",{className:"bmc-black"},l.createElement("a",{href:"https://www.buymeacoffee.com/rfcm83",target:"_blank"},l.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/v2/default-black.png",alt:"Buy Me A Coffee",height:"60",width:"217"}))),l.createElement("div",{className:"page-footer"},l.createElement("div",{className:"page-tag"},e.frontmatter.tags&&e.frontmatter.tags.map((function(e){return l.createElement("span",{key:e},l.createElement(c.Link,{className:"tag",to:"/tags/"+o()(e)+"/"},"#",e))})))),l.createElement(U,{title:r})))))},t}(l.Component),J=Z}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d2bbc325785efec4f9d9.js.map