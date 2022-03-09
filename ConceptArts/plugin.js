(function(d,p,n,a){"use strict";function E(t){if(t&&t.__esModule)return t;var s=Object.create(null);return t&&Object.keys(t).forEach(function(l){if(l!=="default"){var u=Object.getOwnPropertyDescriptor(t,l);Object.defineProperty(s,l,u.get?u:{enumerable:!0,get:function(){return t[l]}})}}),s.default=t,Object.freeze(s)}var e=E(p);const o=a.webpack.findByDisplayName("FormTitle"),y=a.webpack.findByDisplayName("FormDivider");a.webpack.findByDisplayName("HelpMessage");const r=a.webpack.findByDisplayName("Text"),D=a.webpack.findByDisplayName("UserSettingsPremiumSubscriptionsIcon"),f=a.webpack.findByDisplayName("ShinyButton");var g=t=>e.createElement("div",{className:"concept-modal"},e.createElement(y,null),e.createElement("br",null),e.createElement("div",null,e.createElement(o,{tag:"h4"},"What? Discoins? Huh?"),e.createElement(r,null,"Discoins are Discord's latest and greatest invention. Instead of a subscription-based service like Discord Nitro, Discoins are used to buy the perks that ",e.createElement("strong",null,"you")," want, for a better price!")),e.createElement("br",null),e.createElement("div",null,e.createElement(o,{tag:"h4"},"Alright, but how do I get Discoins?"),e.createElement(r,null,"You can earn Discoins in a number of ways: Sending messages, spending time in voice channels, using slash commands, and many more!")),e.createElement("br",null),e.createElement("div",null,e.createElement(o,{tag:"h4"},"Okay, cool. How can I use my Discoins?"),e.createElement(r,null,"Discoins will be represented around the app with a ",e.createElement(D,null)," icon. You can use your hard-earned Discoins in the Discoin Shop. Want to go there now?"),e.createElement("br",null),e.createElement(f,{color:"colorBrand-3pXr91"},"Discoin Shop")),e.createElement("br",null),e.createElement("div",null,e.createElement(o,{tag:"h4"},"Wait a minute! What about my existing Discord Nitro subscription!"),e.createElement(r,null,"Fear not, traveller! Your Nitro subscription will simply be converted into Discoins - an appropriate amount to purchase all the perks you already had back again!")),e.createElement("br",null),e.createElement(o,{tag:"h5"},"THIS IS NOT A REAL DISCORD MODAL - AS MUCH AS WE MAY WISH, DISCOINS ARE NOT REAL. THIS IS MERELY CONCEPT ART."));const i=n.findByProps("ModalCloseButton"),c=n.findByDisplayNameAll("Header")[1],m=n.findByDisplayName("Flex"),h=n.findByDisplayName("UserSettingsPremiumSubscriptionsIcon"),{openModal:b}=n.findByProps("openModal","openModalLazy");function S(){b(t=>e.createElement(i.ModalRoot,{transitionState:t.transitionState,size:"large"},e.createElement(i.ModalHeader,{separator:!1},e.createElement(m.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},e.createElement(c,{tag:"h2",size:c.Sizes.SIZE_20},e.createElement(h,null)," Discoins - imagine a currency")),e.createElement(m.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},e.createElement(i.ModalCloseButton,{onClick:t.onClose}))),e.createElement(i.ModalContent,null,e.createElement(g,null))))}const M=n.findByProps("Sizes","Colors","Looks","DropdownSizes");n.findByProps("openModal","openModalLazy");function B(t){return e.createElement(e.Fragment,null,e.createElement(M,{size:"sizeMedium-1AC_Sl",color:"colorBrand-3pXr91",onClick:S()},"Open Discoin Modal"))}var N=t=>({onLoad(){},onUnload(){},settings:d.React.createElement(B)});return N})(cumcord.modules.common,cumcord.modules.common.React,cumcord.modules.webpack,cumcord.modules);
