(function(l,n,e){"use strict";const f=n.webpackModules.findByDisplayName("FormDivider"),g=e.React.memo(({icon:a,header:r,description:t,separator:o,collapsible:i})=>(n.webpackModules.findByProps("headerSubtext"),n.webpackModules.findByProps("marginBottom40"),n.webpackModules.findByProps("wrappedLayout"),n.webpackModules.findByProps("h1","h2","h3"),n.webpackModules.findByProps("size24"),n.webpackModules.findByProps("base"),e.React.createElement("div",{className:"vz-dashboard-section-header-wrapper"},e.React.createElement("div",{className:"vz-dashboard-content-header-inner-wrapper"},e.React.createElement("h2",{className:"vz-dashboard-section-header size24, base, content"},r)),t&&e.React.createElement("h4",{className:"vz-dashboard-section-header-description h1 headerSubtext"},t),o&&e.React.createElement(f,null))));var h=e.React.memo(({header:a,description:r,icon:t,separator:o=!0,collapsible:i=!1,id:c,className:m,children:C})=>e.React.createElement("div",{className:"vz-dashboard-section"+m},a&&e.React.createElement(g,{header:a,description:r,icon:t,separator:o,collapsible:i}),e.React.createElement("div",{className:"vz-dashboard-section-contents"},C)));const w=n.webpackModules.findByDisplayName("DropdownButton");var d=e.React.memo(({icon:a,header:r,disabled:t,description:o,buttonText:i,buttonOnClick:c,route:m})=>e.React.createElement("div",{className:"vz-dashboard-home-features-card-wrapper"},e.React.createElement("div",{className:"vz-dashboard-home-features-card"},e.React.createElement("div",{className:"vz-dashboard-home-features-card-header"},r),e.React.createElement("div",{className:"vz-dashboard-home-features-card-body"},o),e.React.createElement("div",{className:"vz-dashboard-home-features-card-footer"},e.React.createElement(w,{className:"vz-dashboard-home-features-button",children:i}))))),x=Object.defineProperty,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,v=(a,r,t)=>r in a?x(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,z=(a,r)=>{for(var t in r||(r={}))p.call(r,t)&&v(a,t,r[t]);if(s)for(var t of s(r))u.call(r,t)&&v(a,t,r[t]);return a};typeof require!="undefined"&&require;var y=(a,r)=>{var t={};for(var o in a)p.call(a,o)&&r.indexOf(o)<0&&(t[o]=a[o]);if(a!=null&&s)for(var o of s(a))r.indexOf(o)<0&&u.call(a,o)&&(t[o]=a[o]);return t},R=e.React.memo(a=>{var r=a,{color:t,className:o}=r,i=y(r,["color","className"]);return e.React.createElement("div",{class:"vz-wave-divider",style:{color:t}},e.React.createElement("svg",z({class:"vz-wave-divider-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 100"},i),e.React.createElement("path",{class:"vz-wave-divider-svg-path",fill:"currentColor",d:"M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"})))}),k=e.React.memo(()=>{const{getCurrentUser:a}=n.webpackModules.findByProps("getCurrentUser"),{username:r}=a();return e.React.createElement(e.React.Fragment,null,e.React.createElement(h,{className:"vz-dashboard-home-section-cta"},e.React.createElement("div",{className:"vz-dashboard-home-cta"},e.React.createElement("div",{className:"vz-dashboard-home-cta-overlay-background"},e.React.createElement("div",{className:"vz-dashboard-home-cta-background"})),e.React.createElement("div",{className:"vz-dashboard-home-cta-content"},e.React.createElement("div",{className:"vz-dashboard-home-cta-content-header-wrapper"},e.React.createElement("h1",{className:"vz-dashboard-home-cta-content-header"},"Welcome, ",r,"!"),e.React.createElement("h3",{className:"vz-dashboard-home-cta-content-description"},"You've made the right choice. The power of customization is now at your fingertips. Check out the features below to learn how to harness your newfound power."))),e.React.createElement(R,null))),e.React.createElement(h,{className:"vz-dashboard-home-section-features"},e.React.createElement("div",{className:"vz-dashboard-home-features-wrapper"},e.React.createElement("div",{className:"vz-dashboard-home-features"},e.React.createElement(d,{icon:"Plugin",header:"Discover Plugins",description:"Explore our vast collection of official plugins. Plugins can add just about any new feature you can imagine to Discord.",buttonText:"Browse Plugins",route:"/vizality/plugins/browse"}),e.React.createElement(d,{icon:"Theme",header:"Discover Themes",description:"Explore our vast collection of official themes. Themes can change just small portions of the app or they can be full-blown redesigns.",buttonText:"Browse Themes",route:"/vizality/themes/browse"}),e.React.createElement(d,{icon:"UnknownUser",header:"Become a Developer",description:"Find out what it takes to start making your own plugins and themes. Come check out the guidelines and all the info you need to become an addon developer for Vizality.",buttonText:"Learn How",route:"/vizality/development"}),e.React.createElement(d,{icon:"Science",header:"Read the Docs",description:"Read about all the building blocks and tools we provide to make building plugins and themes easier for you.",buttonText:"Start Reading",route:"/vizality/docs"})))))});const E=`
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
  .sidebarRegion-VFTUkN {
    flex-grow: 0;
  }
  
  .contentColumnDefault-1VQkGM {
    max-width: calc(100% - 60px);
  }

  .contentRegion-3nDuYy .contentColumn-2hrIYH {
    max-width: 100%;
  }
  .contentRegion-3nDuYy .contentColumn-2hrIYH .features-2npk2D .video-34IsHk {
    width: fit-content;
    margin-right: auto;
    margin-left: auto;
  }
  .contentRegion-3nDuYy .contentColumn-2hrIYH .features-2npk2D .feature-BGH8y4 > div:last-child {
    width: 100%;
  }
  .contentRegion-3nDuYy .contentColumn-2hrIYH .features-2npk2D .feature-BGH8y4 > div:last-child > .title-PMZpEi, .contentRegion-3nDuYy .contentColumn-2hrIYH .features-2npk2D .feature-BGH8y4 > div:last-child .description-1W0DiL {
    text-align: end;
  }
  .contentRegion-3nDuYy .contentColumn-2hrIYH .attendeeCTA-3ZZQWt {
    border: 0;
  }
  .contentRegion-3nDuYy .content-1rPSz4 {
    max-width: 100%;
  }
  .contentRegion-3nDuYy .customColumn-Rb6toI {
    max-width: 100%;
  }
  .contentRegion-3nDuYy .customColumn-Rb6toI .customScroller-26gWhv > .flex-1xMQg5 {
    max-width: 100%;
  }
  .contentRegion-3nDuYy .customColumn-Rb6toI .content-3YMskv {
    max-width: 100%;
  }
  .customScroller-26gWhv>div {
    max-width: 100%;
  }
  .contentColumnDefault-1VQkGM {
    max-width: calc(83vw) !important;
  }
`;let b,D;var N={onLoad(){const a=n.webpackModules.findByDisplayName("SettingsView");b=l.after("getPredicateSections",a.prototype,(r,t)=>{const o=t.findIndex(c=>c.section=="changelog")-1;if(o<0)return t;const i=[{section:"DIVIDER"},{section:"HEADER",label:"Vizality"},{section:"DASHBOARD",label:"Dashboard",element:k}];return t.splice(o,0,...i),t}),l.injectCSS(E)},onUnload(){b(),D()}};return N})(cumcord.patcher,cumcord.modules,cumcord.modules.common);
