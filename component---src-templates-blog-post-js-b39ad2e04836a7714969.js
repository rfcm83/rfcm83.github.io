(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),l=n(r("8OQS")),s=n(r("pVnL")),c=n(r("q1tI")),u=n(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=d(e),r=p(t);return g[r]||!1},w="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,b=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),c.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function k(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function C(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),b.set(e,t)),function(){r.unobserve(e),b.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+l+r+n+t+i+a+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(I,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,a(n),l):l})),I=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!w&&y&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(w||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=p(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,m=e.fixed,w=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,b=e.itemProp,E=e.loading,C=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,s.default)({opacity:j?1:0,transition:L?"opacity "+v+"ms":"none"},l),N="boolean"==typeof w?"lightgray":w,P={transitionDelay:v+"ms"},R=(0,s.default)({opacity:this.state.imgLoaded?0:1},L&&P,l,f),W={title:t,alt:this.state.isVisible?"":r,style:R,className:p,itemProp:b};if(g){var H=g,V=h(g);return c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),N&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&P)}),V.base64&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:W,imageVariants:H,generateSources:k}),V.tracedSVG&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:W,imageVariants:H,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,S(H),c.default.createElement(I,{alt:r,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:E,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:r,title:t,loading:E},V,{imageVariants:H}))}}))}if(m){var M=m,q=h(m),T=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete T.display,c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},N&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:N,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},L&&P)}),q.base64&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:W,imageVariants:M,generateSources:k}),q.tracedSVG&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:W,imageVariants:M,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,S(M),c.default.createElement(I,{alt:r,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:E,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:r,title:t,loading:E},q,{imageVariants:M}))}}))}return null},t}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});L.propTypes={resolutions:_,sizes:N,fixed:u.default.oneOfType([_,u.default.arrayOf(_)]),fluid:u.default.oneOfType([N,u.default.arrayOf(N)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=L;t.default=P},"PZd/":function(e,t,r){var n=r("P8UN"),a=r("ys0W")(!0);n(n.S,"Object",{entries:function(e){return a(e)}})},SGlo:function(e,t,r){"use strict";var n=r("rj/q"),a=r("N+BI").getWeak,i=r("1a8y"),o=r("BjK0"),l=r("xa9o"),s=r("yde8"),c=r("Wadk"),u=r("qDzq"),d=r("O1i0"),f=c(5),p=c(6),h=0,g=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},w=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=w(this,e);if(t)return t[1]},has:function(e){return!!w(this,e)},set:function(e,t){var r=w(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var c=e((function(e,n){l(e,c,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=n&&s(n,r,e[i],e)}));return n(c.prototype,{delete:function(e){if(!o(e))return!1;var r=a(e);return!0===r?g(d(this,t)).delete(e):r&&u(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=a(e);return!0===r?g(d(this,t)).has(e):r&&u(r,this._i)}}),c},def:function(e,t,r){var n=a(i(t),!0);return!0===n?g(e).set(t,r):n[e._i]=r,e},ufstore:g}},TSYQ:function(e,t,r){var n;r("MIFh"),function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===i)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},eMsz:function(e,t,r){"use strict";var n,a=r("emib"),i=r("Wadk")(0),o=r("IYdN"),l=r("N+BI"),s=r("k5Iv"),c=r("SGlo"),u=r("BjK0"),d=r("O1i0"),f=r("O1i0"),p=!a.ActiveXObject&&"ActiveXObject"in a,h=l.getWeak,g=Object.isExtensible,m=c.ufstore,w=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=h(e);return!0===t?m(d(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(d(this,"WeakMap"),e,t)}},y=e.exports=r("94Pd")("WeakMap",w,v,c,!0,!0);f&&p&&(s((n=c.getConstructor(w,"WeakMap")).prototype,v),l.NEED=!0,i(["delete","has","get","set"],(function(e){var t=y.prototype,r=t[e];o(t,e,(function(t,a){if(u(t)&&!g(t)){this._f||(this._f=new n);var i=this._f[e](t,a);return"set"==e?this:i}return r.call(this,t,a)}))})))},"t+fG":function(e,t,r){var n=r("P8UN"),a=r("96qb"),i=r("ap2Z"),o=/"/g,l=function(e,t,r,n){var a=String(i(e)),l="<"+t;return""!==r&&(l+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(l),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return U}));r("q8oJ"),r("8npG"),r("HQhv");var n,a=r("q1tI"),i=r.n(a),o=r("Wbzz"),l=r("LvDl"),s=r("9eSz"),c=r.n(s),u=r("Bl7J"),d=r("vrFN"),f=(r("6Gk8"),r("pJf4"),r("pS08"),r("LagC"),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),p=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return f(t,e),t}(Error);function h(e,t){if(!e)throw new p(t)}r("rzGZ"),r("Dq+y"),r("PZd/"),r("OeI1"),r("AqHK");function g(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}r("JHok"),r("Ggvi"),r("E5k/"),r("sc67"),r("m210"),r("4DPX"),r("6kNP");var m=r("TSYQ"),w=r.n(m),v=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),y=function(){return(y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},b=function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{s(n.next(e))}catch(t){i(t)}}function l(e){try{s(n.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,l)}s((n=n.apply(e,t||[])).next())}))},S=function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(l){i=[6,l],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},E=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},O=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},k=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},C=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function j(e,t,r){var n=t.height,a=t.width,i=E(t,["height","width"]),o=y({height:n,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(e,"",Object.keys(o).map((function(e){return e+"="+o[e]})).join(", "));if(r)var s=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(s),r(l))}catch(e){console.error(e)}}),1e3);return l}var z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,a=r.windowHeight,i=void 0===a?400:a,o=r.windowPosition,l=void 0===o?"windowCenter":o,s=r.windowWidth,c=void 0===s?550:s;j(e,y({height:i,width:c},"windowCenter"===l?k(c,i):C(c,i)),n)},t.handleClick=function(e){return b(t,void 0,void 0,(function(){var t,r,n,a,i,o,l,s,c,u;return S(this,(function(d){switch(d.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,a=t.networkLink,i=t.onClick,o=t.url,l=t.openShareDialogOnClick,s=t.opts,c=a(o,s),n?[2]:(e.preventDefault(),r?(u=r(),O(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return l&&this.openShareDialog(c),i&&i(e,c),[2]}}))}))},t}return v(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,a=e.disabledStyle,o=e.forwardedRef,l=(e.networkLink,e.networkName),s=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),c=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,E(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=w()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),f=y(y(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},c),n&&a);return i.a.createElement("button",y({},u,{"aria-label":u["aria-label"]||l,className:d,onClick:this.handleClick,ref:o,style:f}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(a.Component),x=function(){return(x=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var I=function(e,t,r,n){function o(a,o){var l=r(a),s=x({},a);return Object.keys(l).forEach((function(e){delete s[e]})),i.a.createElement(z,x({},n,s,{forwardedRef:o,networkName:e,networkLink:t,opts:r(a)}))}return o.displayName="ShareButton-"+e,Object(a.forwardRef)(o)};var L=I("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return h(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+g({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),_=function(){return(_=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},N=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function P(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,a=t.iconFillColor,o=t.round,l=t.size,s=N(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return i.a.createElement("svg",_({viewBox:"0 0 64 64",width:l,height:l},s),o?i.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):i.a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),i.a.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var R=P({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});r("MIFh");var W=I("twitter",(function(e,t){var r=t.title,n=t.via,a=t.hashtags,i=void 0===a?[]:a,o=t.related,l=void 0===o?[]:o;return h(e,"twitter.url"),h(Array.isArray(i),"twitter.hashtags is not an array"),h(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+g({url:e,text:r,via:n,hashtags:i.length>0?i.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),H=P({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var V=I("linkedin",(function(e,t){var r=t.title,n=t.summary,a=t.source;return h(e,"linkedin.url"),"https://linkedin.com/shareArticle"+g({url:e,mini:"true",title:r,summary:n,source:a})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),M=P({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var q=I("instapaper",(function(e,t){var r=t.title,n=t.description;return h(e,"instapaper.url"),"http://www.instapaper.com/hello2"+g({url:e,title:r,description:n})}),(function(e){return{title:e.title,description:e.description}}),{windowWidth:500,windowHeight:500,windowPosition:"windowCenter"}),T=P({color:"#1F1F1F",networkName:"instapaper",path:"M35.688 43.012c0 2.425.361 2.785 3.912 3.056V48H24.401v-1.932c3.555-.27 3.912-.63 3.912-3.056V20.944c0-2.379-.36-2.785-3.912-3.056V16H39.6v1.888c-3.55.27-3.912.675-3.912 3.056v22.068h.001z"});var B=I("whatsapp",(function(e,t){var r=t.title,n=t.separator;return h(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+g({text:r?r+n+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),G=P({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});var A=I("telegram",(function(e,t){var r=t.title;return h(e,"telegram.url"),"https://telegram.me/share/"+g({url:e,text:r})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400}),D=P({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"}),F=function(e){var t=e.title,r="undefined"!=typeof window?window.location.href:"";return i.a.createElement("div",{class:"socialButtons"},i.a.createElement(L,{url:r,title:t},i.a.createElement(R,{round:"true",size:"32"})),i.a.createElement(W,{url:r,title:t},i.a.createElement(H,{round:"true",size:"32"})),i.a.createElement(V,{url:r,title:t},i.a.createElement(M,{round:"true",size:"32"})),i.a.createElement(q,{url:r,title:t},i.a.createElement(T,{round:"true",size:"32"})),i.a.createElement(B,{url:r,title:t},i.a.createElement(G,{round:"true",size:"32"})),i.a.createElement(A,{url:r,title:t},i.a.createElement(D,{round:"true",size:"32"})))};var J=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext,r=(t.previous,t.next,e.frontmatter.title+e.frontmatter.tags.map((function(e){return" #"+e.split(" ").join("")})).toString().split(",").join(""));this.props.data.site.siteMetadata;return i.a.createElement(u.a,null,i.a.createElement(d.a,{title:e.frontmatter.title,description:e.frontmatter.description,keywords:[e.frontmatter.tags],cover:[e.frontmatter.img.childImageSharp.fluid.src]}),i.a.createElement("article",{className:"article-page"},i.a.createElement("div",{className:"page-content"},e.frontmatter.img&&i.a.createElement("div",{className:"page-cover-image"},i.a.createElement("figure",null,i.a.createElement(c.a,{className:"page-image",key:e.frontmatter.img.childImageSharp.fluid.src,fluid:e.frontmatter.img.childImageSharp.fluid}))),i.a.createElement("div",{className:"wrap-content"},i.a.createElement("header",{className:"header-page"},i.a.createElement("h1",{className:"page-title"},e.frontmatter.title),i.a.createElement("div",{className:"page-date"},i.a.createElement("span",null,e.frontmatter.date)),i.a.createElement(F,{title:r})),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("div",{className:"page-footer"},i.a.createElement("div",{className:"page-tag"},e.frontmatter.tags&&e.frontmatter.tags.map((function(e){return i.a.createElement("span",{key:e},i.a.createElement(o.Link,{className:"tag",to:"/tags/"+Object(l.kebabCase)(e)+"/"},"#",e))})))),i.a.createElement(F,{title:r})))))},n}(i.a.Component),U=(t.default=J,"2391212983")},ys0W:function(e,t,r){var n=r("QPJK"),a=r("2mBY"),i=r("5SQf"),o=r("BnbX").f;e.exports=function(e){return function(t){for(var r,l=i(t),s=a(l),c=s.length,u=0,d=[];c>u;)r=s[u++],n&&!o.call(l,r)||d.push(e?[r,l[r]]:l[r]);return d}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b39ad2e04836a7714969.js.map