import { React } from "@cumcord/modules/common";
import { Settings } from "./components/Settings";

export default(data) => {
  return {
      onLoad() {
        // uninjectCSS = css();
      },
      onUnload() {
        // uninjectCSS();
      },
      settings: React.createElement(Settings)
  }
};