(function(a,n,u,t){"use strict";function i(e){const c=document.createElement("style");return c.className="CUMCORD_INJECTED_CSS CUMCORD_QUICK_CSS",c.textContent=e,document.head.appendChild(c),()=>{c.remove()}}function s(){for(const e of document.querySelectorAll(".CUMCORD_QUICK_CSS"))e.remove()}const l=n.webpackModules.findByDisplayName("TextArea");var m=e=>{u.useNest(e.data.persist);const c=e.data.persist.store;return t.React.createElement("div",{className:"cumcord-quickcss"},t.React.createElement(FormTitle,{className:"cumcord-quickcss-formtitle",tag:"h1"},"Quick CSS"),t.React.createElement(l,{className:"cumcord-quickcss-input",rows:20,value:c.css,onChange:r=>{s(),i(r),c.css=r,console.log(c.css)}}))};let o;var d=e=>({onLoad(){//! Deprecated settings patch
o=a.patcher.injectCSS(`
                .cumcord-quickcss-formdivider, .cumcord-quickcss-helpmessage {
                    margin-bottom: 20px;
                    margin-top: 20px;
                }
            `)},onUnload(){o(),s()},settings:m(e)});return d})(cumcord,cumcord.modules,cumcord.utils,cumcord.modules.common);
