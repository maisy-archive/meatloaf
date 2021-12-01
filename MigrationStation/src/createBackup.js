import data from "@cumcord/pluginData";
import idb from "@cumcord/modules/internal/idbKeyval";
import plugins from "@cumcord/plugins";

export default async function createBackup() {
    let rawPlugins = plugins.installed.ghost;
    let prettyPlugins = Object.keys(rawPlugins).map((key) => [
        key,
        rawPlugins[key],
    ]);

    let backupObject = {
        plugins: [],
    };

    for (const plugin of prettyPlugins) {
        backupObject.plugins.push({
            url: plugin[0],
            nest: await idb.get(plugin[0] + "_CUMCORD_STORE"),
        });
    }

    return backupObject;
}
3