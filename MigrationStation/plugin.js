(function(o,R,f,p,i,g){"use strict";function c(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function b(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var s=b(o),y=c(f),E=c(p);async function h(){let e=E.default.installed.ghost,t=Object.keys(e).map(r=>[r,e[r]]),n={plugins:[]};for(const r of t)n.plugins.push({url:r[0],nest:await y.default.get(r[0]+"_CUMCORD_STORE")});return n}function S(e,t){let n=document.createElement("a");n.href=`data:,${encodeURIComponent(e)}`,n.setAttribute("download",t),n.click(),n.remove()}function D(){let e,t=document.createElement("input");t.setAttribute("accept","application/json"),t.setAttribute("type","file"),t.addEventListener("change",n,!1),t.click();function n(){e=this.files,t.remove(),e[0].text().then(r=>r)}}const a=i.findByProps("Sizes","Colors","Looks","DropdownSizes"),l=i.findByDisplayName("Card"),u=i.findByDisplayName("FormText"),m=i.findByDisplayName("FormTitle");function d({title:e,description:t,buttonText:n,buttonColor:r,buttonSize:v,buttonLook:F,buttonFunc:O}){return s.createElement(s.Fragment,null,s.createElement(l,{type:l.Types.PRIMARY,className:"beef-ms-settings-card"},s.createElement(m,{tag:m.Tags.H1},e),s.createElement(u,{className:"beef-ms-settings-card-description",type:u.Types.DESCRIPTION},t),s.createElement(a,{color:a.Colors[r]||a.Colors.BRAND,size:a.Sizes[v]||a.Sizes.SMALL,look:a.Looks[F]||a.Looks.FILLED,className:"beef-ms-settings-card-button",onClick:O},n)))}function C(e){return s.createElement(s.Fragment,null,s.createElement("div",{className:"beef-ms-settings-card-container"},s.createElement(d,{title:"Backup",description:"Creates a backup of your current installation, including plugins and plugin nests.",buttonText:"Backup",buttonSize:"MEDIUM",buttonFunc:async t=>{S(JSON.stringify(await h()),"backup.json")}}),s.createElement(d,{title:"Restore",description:"Restores from a backup of your current installation.",buttonText:"Restore",buttonSize:"MEDIUM",buttonFunc:async t=>{console.log(D())}})))}var N=()=>g.injectCSS(".beef-ms-settings-card-container{display:flex;flex-direction:row;margin-bottom:.5rem}.beef-ms-settings-card-container .beef-ms-settings-card{width:100%;padding:20px;margin-left:.5rem}.beef-ms-settings-card-container .beef-ms-settings-card h1{margin-bottom:.25rem}.beef-ms-settings-card-container .beef-ms-settings-card .beef-ms-settings-card-description{margin-bottom:2rem}.beef-ms-settings-card-container .beef-ms-settings-card .beef-ms-settings-card-button{position:absolute;bottom:0;right:0;margin:.5rem}"),j=()=>{const e=[N()];return{onUnload(){_.forEachRight(e,t=>t())},settings:o.createElement(C)}};return j})(cumcord.modules.common.React,cumcord.pluginData,cumcord.modules.internal.idbKeyval,cumcord.plugins,cumcord.modules.webpack,cumcord.patcher);
