(function(r,u,t){"use strict";function a(c){const e=document.createElement("style");return e.className="CUMCORD_INJECTED_CSS CUMCORD_QUICK_CSS",e.textContent=c,document.head.appendChild(e),()=>{e.remove()}}function o(){for(const c of document.querySelectorAll(".CUMCORD_QUICK_CSS"))c.remove()}const m=u.webpackModules.findByDisplayName("TextArea");let s;var d=c=>{const e=c.persist.store;return{onLoad(){//! Deprecated settings patch
s=r.patcher.injectCSS(`
                .cumcord-quickcss-formdivider, .cumcord-quickcss-helpmessage {
                    margin-bottom: 20px;
                    margin-top: 20px;
                }
            `)},onUnload(){s(),o()},settings:t.React.createElement("div",{className:"cumcord-quickcss"},t.React.createElement(m,{rows:20,onChange:n=>{o(),a(n),e.css=n}}))}};return d})(cumcord,cumcord.modules,cumcord.modules.common);
