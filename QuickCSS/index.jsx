import { patcher } from "@cumcord";
import QuickCSS from './components/QuickCSS';
import { unpatchAllQuickCSS } from "./util";

// let settingsPatch;
let css;

export default(data) => {
    return {
        onLoad() {
            //! Deprecated settings patch
            // const Settings = webpackModules.findByDisplayName("SettingsView");
            // settingsPatch = patcher.after("getPredicateSections", Settings.prototype, (args, items) => {
            //     const position = items.findIndex((item) => { return item.section == "changelog" }) - 1;
          
            //     Check if we're in the user settings menu
            //     if (position < 0) return items;
          
            //     const pluginSettings = [
            //         { section: "CUMCORD_QUICKCSS", label: "Quick CSS", element: QuickCSS },
            //     ];
    
            //     items.splice(position, 0, ...pluginSettings)
          
            //     return items;
            // });
    
            css = patcher.injectCSS(`
                .cumcord-quickcss-formdivider, .cumcord-quickcss-helpmessage {
                    margin-bottom: 20px;
                    margin-top: 20px;
                }
            `)
        },
        onUnload() {
            css();
            unpatchAllQuickCSS();
        },
        settings: QuickCSS(data),
    }
};
