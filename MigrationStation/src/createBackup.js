import data from "@cumcord/pluginData";
import plugins from "@cumcord/plugins";

export default function createBackup() {
    let rawPlugins = plugins.installed.ghost;
    let prettyPlugins = Object.keys(rawPlugins)
        .map((key) => [key, rawPlugins[key]]);
    
    let backupObject = {
        plugins: []
    }

    for (const plugin of prettyPlugins) {
        backupObject.plugins.push(
            {
                url: plugin[0],
            }
        )
    }

    return backupObject;
}