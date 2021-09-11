(function(l,i,e){"use strict";const m=i.webpackModules.findByDisplayName("FormDivider"),g=e.React.memo(({icon:t,header:r,description:a,separator:o,collapsible:d})=>(i.webpackModules.findByProps("headerSubtext"),i.webpackModules.findByProps("marginBottom40"),i.webpackModules.findByProps("wrappedLayout"),i.webpackModules.findByProps("h1","h2","h3"),i.webpackModules.findByProps("size24"),i.webpackModules.findByProps("base"),e.React.createElement("div",{className:"vz-dashboard-section-header-wrapper"},e.React.createElement("div",{className:"vz-dashboard-content-header-inner-wrapper"},e.React.createElement("h2",{className:"vz-dashboard-section-header size24, base, content"},r)),a&&e.React.createElement("h4",{className:"vz-dashboard-section-header-description h1 headerSubtext"},a),o&&e.React.createElement(m,null))));var h=e.React.memo(({header:t,description:r,icon:a,separator:o=!0,collapsible:d=!1,id:c,className:f,children:D})=>e.React.createElement("div",{className:"vz-dashboard-section"+f},t&&e.React.createElement(g,{header:t,description:r,icon:a,separator:o,collapsible:d}),e.React.createElement("div",{className:"vz-dashboard-section-contents"},D)));const w=i.webpackModules.findByDisplayName("DropdownButton");var n=e.React.memo(({icon:t,header:r,disabled:a,description:o,buttonText:d,buttonOnClick:c,route:f})=>e.React.createElement("div",{className:"vz-dashboard-home-features-card-wrapper"},e.React.createElement("div",{className:"vz-dashboard-home-features-card"},e.React.createElement("div",{className:"vz-dashboard-home-features-card-header"},r),e.React.createElement("div",{className:"vz-dashboard-home-features-card-body"},o),e.React.createElement("div",{className:"vz-dashboard-home-features-card-footer"},e.React.createElement(w,{className:"vz-dashboard-home-features-button",children:d}))))),z=Object.defineProperty,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,u=(t,r,a)=>r in t?z(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,x=(t,r)=>{for(var a in r||(r={}))p.call(r,a)&&u(t,a,r[a]);if(s)for(var a of s(r))v.call(r,a)&&u(t,a,r[a]);return t};typeof require!="undefined"&&require;var y=(t,r)=>{var a={};for(var o in t)p.call(t,o)&&r.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&s)for(var o of s(t))r.indexOf(o)<0&&v.call(t,o)&&(a[o]=t[o]);return a},R=e.React.memo(t=>{var r=t,{color:a,className:o}=r,d=y(r,["color","className"]);return e.React.createElement("div",{class:"vz-wave-divider",style:{color:a}},e.React.createElement("svg",x({class:"vz-wave-divider-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 100"},d),e.React.createElement("path",{class:"vz-wave-divider-svg-path",fill:"currentColor",d:"M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"})))}),k=e.React.memo(()=>{const{getCurrentUser:t}=i.webpackModules.findByProps("getCurrentUser"),{username:r}=t();return e.React.createElement(e.React.Fragment,null,e.React.createElement(h,{className:"vz-dashboard-home-section-cta"},e.React.createElement("div",{className:"vz-dashboard-home-cta"},e.React.createElement("div",{className:"vz-dashboard-home-cta-overlay-background"},e.React.createElement("div",{className:"vz-dashboard-home-cta-background"})),e.React.createElement("div",{className:"vz-dashboard-home-cta-content"},e.React.createElement("div",{className:"vz-dashboard-home-cta-content-header-wrapper"},e.React.createElement("h1",{className:"vz-dashboard-home-cta-content-header"},"Welcome, ",r,"!"),e.React.createElement("h3",{className:"vz-dashboard-home-cta-content-description"},"You've made the right choice. The power of customization is now at your fingertips. Check out the features below to learn how to harness your newfound power."))),e.React.createElement(R,null))),e.React.createElement(h,{className:"vz-dashboard-home-section-features"},e.React.createElement("div",{className:"vz-dashboard-home-features-wrapper"},e.React.createElement("div",{className:"vz-dashboard-home-features"},e.React.createElement(n,{icon:"Plugin",header:"Discover Plugins",description:"Explore our vast collection of official plugins. Plugins can add just about any new feature you can imagine to Discord.",buttonText:"Browse Plugins",route:"/vizality/plugins/browse"}),e.React.createElement(n,{icon:"Theme",header:"Discover Themes",description:"Explore our vast collection of official themes. Themes can change just small portions of the app or they can be full-blown redesigns.",buttonText:"Browse Themes",route:"/vizality/themes/browse"}),e.React.createElement(n,{icon:"UnknownUser",header:"Become a Developer",description:"Find out what it takes to start making your own plugins and themes. Come check out the guidelines and all the info you need to become an addon developer for Vizality.",buttonText:"Learn How",route:"/vizality/development"}),e.React.createElement(n,{icon:"Science",header:"Read the Docs",description:"Read about all the building blocks and tools we provide to make building plugins and themes easier for you.",buttonText:"Start Reading",route:"/vizality/docs"})))))});const E=`
:root {
    --vz-dashboard-layout-padding-horizontal: 40px;
    --vz-dashboard-layout-padding-vertical: 20px;
  }
  .vz-dashboard {
    color: var(--text-normal) !important;
    overflow: hidden;
  }
  .vz-dashboard-scroller {
    padding: 0 !important;
  }
  .vz-dashboard-layout {
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
    padding: var(--vz-dashboard-layout-padding-vertical) var(--vz-dashboard-layout-padding-horizontal);
    min-height: 100%;
  }
  .vz-dashboard-layout > div {
    display: flex;
    flex-flow: column;
    width: 100%;
  }
  .vz-dashboard-layout > .vz-error-boundary {
    display: block;
  }
  .vz-dashboard-section {
    user-select: text;
  }
  
  .vz-dashboard-home-cta {
      position: relative;
      width: 100%;
      min-height: 400px;
      height: 40vh;
      display: flex;
      align-items: center;
      overflow: hidden;
  }
  .vz-dashboard-home-cta-icon-wrapper.vz-icon-wrapper {
      min-width: 400px;
      width: 40vh;
      height: auto;
      position: absolute;
      right: 10%;
      bottom: -10%;
      color: #fff;
  }
  @media (max-width: 1750px) {
      .vz-dashboard-home-cta-icon-wrapper.vz-icon-wrapper {
          display: none;
    }
  }
  .vz-dashboard-home-cta-overlay-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 1px);
      background: url(https://i.imgur.com/fIIzj3q.png);
      background-attachment: fixed;
      background-position: center;
      background-size: 150%;
      animation: backgroundPositionMoveDiagonal 100s ease infinite;
  }
  .vz-dashboard-home-cta-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      overflow: hidden;
      background-size: 400% 400%;
      animation: backgroundPositionMoveDiagonal 15s ease infinite;
      opacity: 0.9;
  }
  .vz-dashboard-home-cta-content {
      max-width: 800px;
      margin: -100px 0 0 5%;
      z-index: 1;
      padding: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeShortSlideInFromTop 0.15s forwards;
  }
  .vz-dashboard-home-cta-content-icon-wrapper.vz-icon-wrapper {
      width: 200px;
      flex: 1 0 auto;
      margin-right: 40px;
      border-radius: 50%;
      background: 'white';
      padding-top: 200px;
      height: 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
  }
  
  .vz-dashboard-home-cta-content-icon {
      margin-left: 5px;
      height: 70%;
      width: 70%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: 'white';
  }
  .vz-dashboard-home-cta-content-header {
      font-size: 54px;
      font-weight: 700;
      color: 'white';
  }
  .vz-dashboard-home-cta-content-description {
      font-size: 20px;
      line-height: 1.2;
      margin-top: 10px;
      color: 'white';
      opacity: 0.9;
  }
  .vz-dashboard-home-cta-content-buttons-wrapper {
      display: flex;
      margin-top: 30px;
  }
  .vz-dashboard-home-cta-content-button {
      height: 40px;
      background: 'white' !important;
      transition: transform 0.3s, box-shadow 0.3s;
      border-radius: 1000px;
  }
  .vz-dashboard-home-cta-content-button > div {
      padding: 0 15px;
      font-size: 18px;
  }
  .vz-dashboard-home-cta-content-button:hover {
      box-shadow: 0 0 50px 'white';
      transform: translateY(-2px);
  }
  .vz-dashboard-home-cta-content-button:active {
      transform: translateY(0);
  }
  
  .vz-dashboard-home-section-features {
      margin-top: 0 !important;
      padding: 40px;
  }
  .vz-dashboard-home-features {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      flex: 1;
      opacity: 0;
      animation: fadeShortSlideInFromBottom 0.15s forwards;
  }
  .vz-dashboard-home-features-card-wrapper {
      display: flex;
      padding: 10px;
      border-radius: 4px;
      width: 25%;
      box-sizing: border-box;
      flex: 1;
      min-width: 300px;
      min-height: 350px;
      margin-top: 50px;
  }
  .vz-dashboard-home-features-card {
      background-color: var(--background-secondary-alt);
      display: flex;
      flex: 1;
      padding: 20px 30px;
      border-radius: 4px;
      position: relative;
      z-index: 1;
      flex-flow: column wrap;
      align-items: center;
      transition: box-shadow 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
  }
  .vz-dashboard-home-features-card:hover {
      transform: translateY(-10px) !important;
      background-color: var(--background-tertiary);
      box-shadow: var(--elevation-high);
  }
  .vz-dashboard-home-features-card:hover .vz-dashboard-home-features-icon-wrapper {
      background-color: var(--background-primary);
  }
  .vz-dashboard-home-features-card:hover .vz-dashboard-home-features-icon {
      transform: scale(1.5);
  }
  .vz-dashboard-home-features-card-header {
      font-size: 24px;
      font-weight: 700;
      margin-top: 20px;
  }
  .vz-dashboard-home-features-card-body {
      margin-top: 20px;
      text-align: center;
      line-height: 1.5;
      flex: 1;
      color: var(--header-secondary);
  }
  .vz-dashboard-home-features-card-footer {
      margin: 30px 0 10px 0;
  }
  .vz-dashboard-home-features-icon {
      transition: transform 0.3s ease;
      color: var(--header-primary);
  }
  .vz-dashboard-home-features-icon-wrapper.vz-icon-wrapper {
      display: flex;
      margin-top: -90px;
      border-radius: 50%;
      padding: 20px;
      border: 20px solid var(--background-primary);
      background-color: var(--background-tertiary);
      transition: background-color 0.3s ease;
  }    
`;let N,b;var P={onLoad(){const t=i.webpackModules.findByDisplayName(r=>{var a;return((a=r.default)==null?void 0:a.displayName)==="ConnectedPrivateChannelsList"});l.after("getPredicateSections",t.prototype,(r,a)=>{const o=a.findIndex(c=>c.section=="changelog")-1;if(o<0)return a;const d=[{section:"DIVIDER"},{section:"HEADER",label:"Vizality"},{section:"DASHBOARD",label:"Dashboard",element:k}];return a.splice(o,0,...d),a}),b=l.injectCSS(E)},onUnload(){b(),N()}};return P})(cumcord.patcher,cumcord.modules,cumcord.modules.common);
