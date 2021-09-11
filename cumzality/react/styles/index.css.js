const css = `
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
`

export default css;