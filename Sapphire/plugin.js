(function(u,I,p,g,B,S,x,P){"use strict";function c(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function R(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var o=R(I),r=c(p),w=c(g),j=c(S),d=c(x);const[de,D,C,O,m,F,[,b],f,s,N,M,se,ue,me,fe,{BOT_AVATARS:pe},{createBotMessage:z},{getChannelId:y},{receiveMessage:k}]=p.batchFind(({findByProps:e,findByDisplayName:t,findByDisplayNameAll:n})=>{t("FormTitle"),t("FormText"),t("FormDivider"),t("FormItem"),e("dividerDefault","titleDefault"),e("formText","placeholder"),n("Markdown"),e("Sizes","Colors","Looks","DropdownSizes"),t("Flex"),e("marginTop20","marginBottom8"),t("SwitchItem"),t("Tooltip"),t("Science"),t("InfoFilled"),t("WarningCircle"),e("BOT_AVATARS","DEFAULT_AVATARS"),e("createBotMessage"),e("getChannelId","getVoiceChannelId"),e("receiveMessage","sendBotMessage")});function h(){return o.createElement(C,{className:m.dividerDefault})}function v({children:e,text:t,subtext:n}){return o.createElement(O,{className:[s.Direction.VERTICAL,s.Justify.START,s.Align.STRETCH,s.Wrap.NO_WRAP,N.marginBottom20].join(" ")},o.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.createElement("div",null,o.createElement("div",{className:m.labelRow,style:{marginBottom:"4px"}},o.createElement("label",{className:m.title},t)),o.createElement(D,{className:F.description},o.createElement(b,{className:"settings-note-markdown"},n))),e),o.createElement(h,null))}function $({text:e,subtext:t,danger:n,disabled:a,onclick:i,buttonText:l}){return o.createElement(v,{text:e,subtext:t},o.createElement(f,{color:n?f.Colors.RED:f.Colors.BRAND,disabled:a,onClick:()=>i()},l))}function H({text:e,subtext:t,isToggled:n,onToggle:a,disabled:i}){const[l,ce]=o.useState(n()||!1);return o.createElement(M,{value:l,note:o.createElement(b,null,t),disabled:i?i():!1,onChange:E=>{ce(E),a(E)}},e)}const T=new Map;function V(e,t,n,a=!1,i=!1){return w.default[a?"before":i?"instead":"after"](t,e,n)}function W(e,t,n,a,i=!1){const l=i?"before":"after";T.set(e,w.default[l](n,t,a))}function L(e){const t=T.get(e);return t?(t(),!0):!1}var U=Object.freeze({__proto__:null,patch:V,inject:W,uninject:L});const A=new Map;function J(e,t,n,a=[]){A.set(e,B.addCommand({name:e,description:t,args:a,handler:n}))}function q(e){A.get(e)()}var G=Object.freeze({__proto__:null,add:J,remove:q});function K(e,t="Sapphire"){const n=z(y(),"");typeof e=="string"?n.content=e:n.embeds.push(e),n.state,n.author.id="1",n.author.bot=!0,n.author.discriminator="6969",n.author.avatar="clyde",n.author.username=t,k(y(),n)}var Q={...U,commands:G,internalMessage:K},X={all:()=>Object.values(r.default.modules).map(e=>e.exports),common:j.default,find:r.default.find,findAll:r.default.findAll,findByDisplayName:r.default.findByDisplayName,findByDisplayNameAll:r.default.findByDisplayNameAll,findByModuleId:e=>r.default.modules[e],findByProps:r.default.findByProps,findByPropsAll:r.default.findByPropsAll,findByPrototypes:r.default.findByPrototypes},Y={findInReactTree:d.default.findInReactTree,findInTree:d.default.findInTree,getNodeInternals:e=>e._reactInternalFiber||e._reactInternals,getOwnerInstance:d.default.getOwnerInstance,getReactInstance:d.default.getReactInstance};function Z(e,t){const n=document.createElement("div"),a=P.showToast({title:e,content:t?.subtext||"",duration:t?.duration||3e3});return{toastElem:n,closeFn:a}}function ee(){return window.goosemod={patcher:Q,webpackModules:X,settings:{Items:{divider:h,toggle:H,"text-and-child":v,"text-and-button":$}},reactUtils:Y,showToast:Z,_SAPPHIRE:!0},()=>{window.goosemod?._SAPPHIRE&&delete window.goosemod}}const te=eval;function ne(){return fetch("https://goosemod.github.io/topaz/out.js").then(async e=>te(await e.text())),()=>{window.topaz&&(window.topaz.__reloading=!0,window.topaz.purge(),delete window.topaz)}}function oe(){const e=document.createElement("frame");e.src="about:blank",document.body.appendChild(e);let t=Object.getOwnPropertyDescriptor(e.contentWindow,"localStorage");return e.remove(),t}var ae=()=>(Object.defineProperty(window,"localStorage",{...oe(),_SAPPHIRE:!0}),()=>{window.localStorage._SAPPHIRE&&delete window.localStorage}),re=()=>g.injectCSS(".settings-note-markdown{font-size:inherit;color:inherit!important}.settings-note-markdown,.settings-note-markdown [class*=paragraph-]{margin:0}.beef-sapphire-stub{color:var(--info-warning-foreground);display:flex;gap:.5rem;align-items:center;padding:.25rem}");const ie=[ae(),ee(),ne(),re()];function le(){_.forEachRight(ie,e=>e())}return u.onUnload=le,Object.defineProperty(u,"__esModule",{value:!0}),u})({},cumcord.modules.common.React,cumcord.modules.webpack,cumcord.patcher,cumcord.commands,cumcord.modules.common,cumcord.utils,cumcord.ui.toasts);
