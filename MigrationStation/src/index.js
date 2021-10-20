import { React } from "@cumcord/modules/common";
import { Settings } from "./components/Settings";
import plugins from "@cumcord/plugins";

export default (data) => {
    return {
        onLoad() {
            // let rawPlugins = plugins.installed.ghost;
            // let prettyPlugins = Object.keys(rawPlugins)
            //     .map((key) => [key, rawPlugins[key]]);

            // for (const plugin of prettyPlugins) {
            //     console.log(plugin[0]);
            // }
        },
        onUnload() {},
        settings: React.createElement(Settings),
    }
}  