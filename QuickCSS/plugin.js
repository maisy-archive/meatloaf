(function(ve,R,pe,ye,q,me){"use strict";function ie(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var Z=ie(R),_e=ie(ye),Ee=()=>cumcord.patcher.injectCSS('.cumcord-quickcss{background:#1d1f21;color:#c5c8c6;border:1px solid #555;border-radius:.5rem;font-family:"monospace";font-size:.9rem;line-height:1.1rem;min-height:25rem;margin-bottom:1rem}'),H=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},oe={};Object.defineProperty(oe,"__esModule",{value:!0});var F=Object.assign||function(u){for(var f=1;f<arguments.length;f++){var v=arguments[f];for(var h in v)Object.prototype.hasOwnProperty.call(v,h)&&(u[h]=v[h])}return u},be=function(){function u(f,v){for(var h=0;h<v.length;h++){var n=v[h];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(f,n.key,n)}}return function(f,v,h){return v&&u(f.prototype,v),h&&u(f,h),f}}(),Se=_e.default,W=xe(Se);function xe(u){if(u&&u.__esModule)return u;var f={};if(u!=null)for(var v in u)Object.prototype.hasOwnProperty.call(u,v)&&(f[v]=u[v]);return f.default=u,f}function Ce(u,f){var v={};for(var h in u)f.indexOf(h)>=0||!Object.prototype.hasOwnProperty.call(u,h)||(v[h]=u[h]);return v}function we(u,f){if(!(u instanceof f))throw new TypeError("Cannot call a class as a function")}function le(u,f){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:u}function ke(u,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);u.prototype=Object.create(f&&f.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(u,f):u.__proto__=f)}var Ke=13,Ae=9,Oe=8,De=89,B=90,Pe=77,se=57,ue=219,ce=222,fe=192,Ie=27,he=100,Fe=3e3,Te="navigator"in H&&/Win/i.test(navigator.platform),X="navigator"in H&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),U="npm__react-simple-code-editor__textarea",Le=`
/**
 * Reset the text fill color so that placeholder is visible
 */
.`+U+`:empty {
  -webkit-text-fill-color: inherit !important;
}

/**
 * Hack to apply on some CSS on IE10 and IE11
 */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /**
    * IE doesn't support '-webkit-text-fill-color'
    * So we use 'color: transparent' to make the text transparent on IE
    * Unlike other browsers, it doesn't affect caret color in IE
    */
  .`+U+` {
    color: transparent !important;
  }

  .`+U+`::selection {
    background-color: #accef7 !important;
    color: transparent !important;
  }
}
`,ge=function(u){ke(f,u);function f(){var v,h,n,L;we(this,f);for(var P=arguments.length,l=Array(P),C=0;C<P;C++)l[C]=arguments[C];return L=(h=(n=le(this,(v=f.__proto__||Object.getPrototypeOf(f)).call.apply(v,[this].concat(l))),n),n.state={capture:!0},n._recordCurrentState=function(){var a=n._input;if(!!a){var g=a.value,E=a.selectionStart,b=a.selectionEnd;n._recordChange({value:g,selectionStart:E,selectionEnd:b})}},n._getLines=function(a,g){return a.substring(0,g).split(`
`)},n._recordChange=function(a){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,E=n._history,b=E.stack,O=E.offset;if(b.length&&O>-1){n._history.stack=b.slice(0,O+1);var D=n._history.stack.length;if(D>he){var w=D-he;n._history.stack=b.slice(w,D),n._history.offset=Math.max(n._history.offset-w,0)}}var y=Date.now();if(g){var d=n._history.stack[n._history.offset];if(d&&y-d.timestamp<Fe){var t=/[^a-z0-9]([a-z0-9]+)$/i,e=n._getLines(d.value,d.selectionStart).pop().match(t),r=n._getLines(a.value,a.selectionStart).pop().match(t);if(e&&r&&r[1].startsWith(e[1])){n._history.stack[n._history.offset]=F({},a,{timestamp:y});return}}}n._history.stack.push(F({},a,{timestamp:y})),n._history.offset++},n._updateInput=function(a){var g=n._input;!g||(g.value=a.value,g.selectionStart=a.selectionStart,g.selectionEnd=a.selectionEnd,n.props.onValueChange(a.value))},n._applyEdits=function(a){var g=n._input,E=n._history.stack[n._history.offset];E&&g&&(n._history.stack[n._history.offset]=F({},E,{selectionStart:g.selectionStart,selectionEnd:g.selectionEnd})),n._recordChange(a),n._updateInput(a)},n._undoEdit=function(){var a=n._history,g=a.stack,E=a.offset,b=g[E-1];b&&(n._updateInput(b),n._history.offset=Math.max(E-1,0))},n._redoEdit=function(){var a=n._history,g=a.stack,E=a.offset,b=g[E+1];b&&(n._updateInput(b),n._history.offset=Math.min(E+1,g.length-1))},n._handleKeyDown=function(a){var g=n.props,E=g.tabSize,b=g.insertSpaces,O=g.ignoreTabKey,D=g.onKeyDown;if(!(D&&(D(a),a.defaultPrevented))){a.keyCode===Ie&&a.target.blur();var w=a.target,y=w.value,d=w.selectionStart,t=w.selectionEnd,e=(b?" ":"	").repeat(E);if(a.keyCode===Ae&&!O&&n.state.capture)if(a.preventDefault(),a.shiftKey){var r=n._getLines(y,d),i=r.length-1,o=n._getLines(y,t).length-1,s=y.split(`
`).map(function(x,M){return M>=i&&M<=o&&x.startsWith(e)?x.substring(e.length):x}).join(`
`);if(y!==s){var p=r[i];n._applyEdits({value:s,selectionStart:p.startsWith(e)?d-e.length:d,selectionEnd:t-(y.length-s.length)})}}else if(d!==t){var c=n._getLines(y,d),m=c.length-1,_=n._getLines(y,t).length-1,A=c[m];n._applyEdits({value:y.split(`
`).map(function(x,M){return M>=m&&M<=_?e+x:x}).join(`
`),selectionStart:/\S/.test(A)?d+e.length:d,selectionEnd:t+e.length*(_-m+1)})}else{var z=d+e.length;n._applyEdits({value:y.substring(0,d)+e+y.substring(t),selectionStart:z,selectionEnd:z})}else if(a.keyCode===Oe){var N=d!==t,te=y.substring(0,d);if(te.endsWith(e)&&!N){a.preventDefault();var G=d-e.length;n._applyEdits({value:y.substring(0,d-e.length)+y.substring(t),selectionStart:G,selectionEnd:G})}}else if(a.keyCode===Ke){if(d===t){var Q=n._getLines(y,d).pop(),S=Q.match(/^\s+/);if(S&&S[0]){a.preventDefault();var K=`
`+S[0],I=d+K.length;n._applyEdits({value:y.substring(0,d)+K+y.substring(t),selectionStart:I,selectionEnd:I})}}}else if(a.keyCode===se||a.keyCode===ue||a.keyCode===ce||a.keyCode===fe){var k=void 0;a.keyCode===se&&a.shiftKey?k=["(",")"]:a.keyCode===ue?a.shiftKey?k=["{","}"]:k=["[","]"]:a.keyCode===ce?a.shiftKey?k=['"','"']:k=["'","'"]:a.keyCode===fe&&!a.shiftKey&&(k=["`","`"]),d!==t&&k&&(a.preventDefault(),n._applyEdits({value:y.substring(0,d)+k[0]+y.substring(d,t)+k[1]+y.substring(t),selectionStart:d,selectionEnd:t+2}))}else(X?a.metaKey&&a.keyCode===B:a.ctrlKey&&a.keyCode===B)&&!a.shiftKey&&!a.altKey?(a.preventDefault(),n._undoEdit()):(X?a.metaKey&&a.keyCode===B&&a.shiftKey:Te?a.ctrlKey&&a.keyCode===De:a.ctrlKey&&a.keyCode===B&&a.shiftKey)&&!a.altKey?(a.preventDefault(),n._redoEdit()):a.keyCode===Pe&&a.ctrlKey&&(X?a.shiftKey:!0)&&(a.preventDefault(),n.setState(function(x){return{capture:!x.capture}}))}},n._handleChange=function(a){var g=a.target,E=g.value,b=g.selectionStart,O=g.selectionEnd;n._recordChange({value:E,selectionStart:b,selectionEnd:O},!0),n.props.onValueChange(E)},n._history={stack:[],offset:-1},h),le(n,L)}return be(f,[{key:"componentDidMount",value:function(){this._recordCurrentState()}},{key:"render",value:function(){var h=this,n=this.props,L=n.value,P=n.style,l=n.padding,C=n.highlight,a=n.textareaId,g=n.textareaClassName,E=n.autoFocus,b=n.disabled,O=n.form,D=n.maxLength,w=n.minLength,y=n.name,d=n.placeholder,t=n.readOnly,e=n.required,r=n.onClick,i=n.onFocus,o=n.onBlur,s=n.onKeyUp;n.onKeyDown,n.onValueChange,n.tabSize,n.insertSpaces,n.ignoreTabKey;var p=n.preClassName,c=Ce(n,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),m={paddingTop:l,paddingRight:l,paddingBottom:l,paddingLeft:l},_=C(L);return W.createElement("div",F({},c,{style:F({},Y.container,P)}),W.createElement("textarea",{ref:function(z){return h._input=z},style:F({},Y.editor,Y.textarea,m),className:U+(g?" "+g:""),id:a,value:L,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:r,onKeyUp:s,onFocus:i,onBlur:o,disabled:b,form:O,maxLength:D,minLength:w,name:y,placeholder:d,readOnly:t,required:e,autoFocus:E,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),W.createElement("pre",F({className:p,"aria-hidden":"true",style:F({},Y.editor,Y.highlight,m)},typeof _=="string"?{dangerouslySetInnerHTML:{__html:_+"<br />"}}:{children:_})),W.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:Le}}))}},{key:"session",get:function(){return{history:this._history}},set:function(h){this._history=h.history}}]),f}(W.Component);ge.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0};var ze=oe.default=ge,Y={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}},ee={exports:{}};(function(u){var f=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var v=function(h){var n=/\blang(?:uage)?-([\w-]+)\b/i,L=0,P={},l={manual:h.Prism&&h.Prism.manual,disableWorkerMessageHandler:h.Prism&&h.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof C?new C(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++L}),t.__id},clone:function t(e,r){r=r||{};var i,o;switch(l.util.type(e)){case"Object":if(o=l.util.objId(e),r[o])return r[o];i={},r[o]=i;for(var s in e)e.hasOwnProperty(s)&&(i[s]=t(e[s],r));return i;case"Array":return o=l.util.objId(e),r[o]?r[o]:(i=[],r[o]=i,e.forEach(function(p,c){i[c]=t(p,r)}),i);default:return e}},getLanguage:function(t){for(;t&&!n.test(t.className);)t=t.parentElement;return t?(t.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var i="no-"+e;t;){var o=t.classList;if(o.contains(e))return!0;if(o.contains(i))return!1;t=t.parentElement}return!!r}},languages:{plain:P,plaintext:P,text:P,txt:P,extend:function(t,e){var r=l.util.clone(l.languages[t]);for(var i in e)r[i]=e[i];return r},insertBefore:function(t,e,r,i){i=i||l.languages;var o=i[t],s={};for(var p in o)if(o.hasOwnProperty(p)){if(p==e)for(var c in r)r.hasOwnProperty(c)&&(s[c]=r[c]);r.hasOwnProperty(p)||(s[p]=o[p])}var m=i[t];return i[t]=s,l.languages.DFS(l.languages,function(_,A){A===m&&_!=t&&(this[_]=s)}),s},DFS:function t(e,r,i,o){o=o||{};var s=l.util.objId;for(var p in e)if(e.hasOwnProperty(p)){r.call(e,p,e[p],i||p);var c=e[p],m=l.util.type(c);m==="Object"&&!o[s(c)]?(o[s(c)]=!0,t(c,r,null,o)):m==="Array"&&!o[s(c)]&&(o[s(c)]=!0,t(c,r,p,o))}}},plugins:{},highlightAll:function(t,e){l.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var i={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),l.hooks.run("before-all-elements-highlight",i);for(var o=0,s;s=i.elements[o++];)l.highlightElement(s,e===!0,i.callback)},highlightElement:function(t,e,r){var i=l.util.getLanguage(t),o=l.languages[i];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+i;var s=t.parentElement;s&&s.nodeName.toLowerCase()==="pre"&&(s.className=s.className.replace(n,"").replace(/\s+/g," ")+" language-"+i);var p=t.textContent,c={element:t,language:i,grammar:o,code:p};function m(A){c.highlightedCode=A,l.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,l.hooks.run("after-highlight",c),l.hooks.run("complete",c),r&&r.call(c.element)}if(l.hooks.run("before-sanity-check",c),s=c.element.parentElement,s&&s.nodeName.toLowerCase()==="pre"&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!c.code){l.hooks.run("complete",c),r&&r.call(c.element);return}if(l.hooks.run("before-highlight",c),!c.grammar){m(l.util.encode(c.code));return}if(e&&h.Worker){var _=new Worker(l.filename);_.onmessage=function(A){m(A.data)},_.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else m(l.highlight(c.code,c.grammar,c.language))},highlight:function(t,e,r){var i={code:t,grammar:e,language:r};return l.hooks.run("before-tokenize",i),i.tokens=l.tokenize(i.code,i.grammar),l.hooks.run("after-tokenize",i),C.stringify(l.util.encode(i.tokens),i.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var i in r)e[i]=r[i];delete e.rest}var o=new E;return b(o,o.head,t),g(t,o,e,o.head,0),D(o)},hooks:{all:{},add:function(t,e){var r=l.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=l.hooks.all[t];if(!(!r||!r.length))for(var i=0,o;o=r[i++];)o(e)}},Token:C};h.Prism=l;function C(t,e,r,i){this.type=t,this.content=e,this.alias=r,this.length=(i||"").length|0}C.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(m){i+=t(m,r)}),i}var o={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},s=e.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(o.classes,s):o.classes.push(s)),l.hooks.run("wrap",o);var p="";for(var c in o.attributes)p+=" "+c+'="'+(o.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+p+">"+o.content+"</"+o.tag+">"};function a(t,e,r,i){t.lastIndex=e;var o=t.exec(r);if(o&&i&&o[1]){var s=o[1].length;o.index+=s,o[0]=o[0].slice(s)}return o}function g(t,e,r,i,o,s){for(var p in r)if(!(!r.hasOwnProperty(p)||!r[p])){var c=r[p];c=Array.isArray(c)?c:[c];for(var m=0;m<c.length;++m){if(s&&s.cause==p+","+m)return;var _=c[m],A=_.inside,z=!!_.lookbehind,N=!!_.greedy,te=_.alias;if(N&&!_.pattern.global){var G=_.pattern.toString().match(/[imsuy]*$/)[0];_.pattern=RegExp(_.pattern.source,G+"g")}for(var Q=_.pattern||_,S=i.next,K=o;S!==e.tail&&!(s&&K>=s.reach);K+=S.value.length,S=S.next){var I=S.value;if(e.length>t.length)return;if(!(I instanceof C)){var k=1,x;if(N){if(x=a(Q,K,t,z),!x)break;var V=x.index,M=x.index+x[0].length,T=K;for(T+=S.value.length;V>=T;)S=S.next,T+=S.value.length;if(T-=S.value.length,K=T,S.value instanceof C)continue;for(var $=S;$!==e.tail&&(T<M||typeof $.value=="string");$=$.next)k++,T+=$.value.length;k--,I=t.slice(K,T),x.index-=K}else if(x=a(Q,0,I,z),!x)continue;var V=x.index,j=x[0],ne=I.slice(0,V),de=I.slice(V+j.length),re=K+I.length;s&&re>s.reach&&(s.reach=re);var J=S.prev;ne&&(J=b(e,J,ne),K+=ne.length),O(e,J,k);var We=new C(p,A?l.tokenize(j,A):j,te,j);if(S=b(e,J,We),de&&b(e,S,de),k>1){var ae={cause:p+","+m,reach:re};g(t,e,r,S.prev,K,ae),s&&ae.reach>s.reach&&(s.reach=ae.reach)}}}}}}function E(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function b(t,e,r){var i=e.next,o={value:r,prev:e,next:i};return e.next=o,i.prev=o,t.length++,o}function O(t,e,r){for(var i=e.next,o=0;o<r&&i!==t.tail;o++)i=i.next;e.next=i,i.prev=e,t.length-=o}function D(t){for(var e=[],r=t.head.next;r!==t.tail;)e.push(r.value),r=r.next;return e}if(!h.document)return h.addEventListener&&(l.disableWorkerMessageHandler||h.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,i=e.code,o=e.immediateClose;h.postMessage(l.highlight(i,l.languages[r],r)),o&&h.close()},!1)),l;var w=l.util.currentScript();w&&(l.filename=w.src,w.hasAttribute("data-manual")&&(l.manual=!0));function y(){l.manual||l.highlightAll()}if(!l.manual){var d=document.readyState;d==="loading"||d==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",y):window.requestAnimationFrame?window.requestAnimationFrame(y):window.setTimeout(y,16)}return l}(f);u.exports&&(u.exports=v),typeof H!="undefined"&&(H.Prism=v)})(ee),function(u){var f=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+f.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+f.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+f.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:f,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var v=u.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))}(Prism);var Me=()=>(pe.useNest(R.persist),q.React.createElement(q.React.Fragment,null,q.React.createElement(ze,{className:"cumcord-quickcss",value:R.persist.ghost.css??"",onValueChange:u=>{R.persist.store.css=u,R.patchedQuickCSS(R.persist.ghost.css)},highlight:u=>ee.exports.highlight(u,ee.exports.languages.css),padding:10}),q.React.createElement("link",{href:"https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@master/themes/prism-atom-dark.css",rel:"stylesheet"}))),Re=()=>{Z.default.patchedQuickCSS=ve.injectCSS(Z.default.persist.ghost.css);let u=Ee();return{onUnload(){Z.default.patchedQuickCSS(),u()},settings:me.createElement(Me)}};return Re})(cumcord.patcher,cumcord.pluginData,cumcord.utils,cumcord.modules.common.React,cumcord.modules.common,cumcord.modules.common.React);
