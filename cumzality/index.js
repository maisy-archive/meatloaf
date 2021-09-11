import { after, injectCSS } from "@cumcord/patcher";
import { webpackModules } from "@cumcord/modules";

let inject;
let css;

import Home  from './react/Home';
import index from './react/styles/index.css'

export default {
  onLoad() {
    const Settings = webpackModules.findByDisplayName("SettingsView");

    inject = after("getPredicateSections", Settings.prototype, (args, items) => {
      const position = items.findIndex((item) => { return item.section == "changelog" }) - 1;

      if (position < 0) return items;

      const vzSettings = [
        { section: "DIVIDER" },
        { section: "HEADER", label: "Vizality" },
        { section: "DASHBOARD", label: "Dashboard", element: Home }
      ];
      items.splice(position, 0, ...vzSettings)

      return items;
    });


    let css = injectCSS(index);
  },
  onUnload() {
    inject();
    css();
  }
}