import { showToast as utilShowToast } from "../WPMODULES";

import idb from "@cumcord/modules/internal/idbKeyval";
import installedPlugins from "@cumcord/plugins/installed";

export async function getPlugins() {
    let plugins = [];

    for (const [url, data] of Object.entries(installedPlugins.store || {})) {
        let plugin = {
            name: data.manifest.name,
            enabled: data.enabled,
            url
        }
        
        let keyval = await idb.get(`${url}_CUMCORD_STORE`);
        if(keyval) plugin.settings = keyval;

        plugins.push(plugin);
    }

    return plugins;
}

// in here, we HAVE to use window.cumcord, otherwise the snippet functionality would not be able to access
export async function loadPlugins(plugins, showToast = utilShowToast) {
    for(let plugin of plugins) {
        if(plugin.settings) {
            await cumcord.modules.internal.idbKeyval.set(`${plugin.url}_CUMCORD_STORE`, plugin.settings);
        }

        if(!cumcord.plugins.installed.ghost[plugin.url]) {
            try {
                await cumcord.plugins.importPlugin(plugin.url);
            } catch(e) {
                cumcord.utils.logger.error("[MigrationStation]", "Could not load plugin", plugin.url, e);
                showToast({message: `Could not load ${plugin.name}, check the console.`, id: `ms-${plugin.url}-err`, type: 2});
            }

            if(plugin.enabled == false) cumcord.plugins.togglePlugin(plugin.url);
        } else {
            // Reload plugin for idb changes to take effect
            try {
                cumcord.plugins.togglePlugin(plugin.url);
                cumcord.plugins.togglePlugin(plugin.url);
            } catch(e) {
                cumcord.utils.logger.error("[MigrationStation]", "Could not reload plugin", plugin.name, e);
                showToast({message: `Could not reload ${plugin.name}, check the console.`, id: `ms-${plugin.url}-err`, type: 2});
            }
        }
    }

    showToast({message: "Finished loading backup!", id: "ms-finish", type: 1});

    // Reload window for idb changes to take effect, does not appear to be needed if you reload plugin.
    // window.location.reload();
}

export async function makeSnippet(plugins) {
    /*
        kinda ugly but the only workaround I found to the fact that showToast is non-existant if you only have the function above's code
        and yes i am casting a function into a string
    */
    return `(${loadPlugins})(${JSON.stringify(plugins ?? await getPlugins())}, cumcord.modules.webpack.findByProps("showToast").showToast)`;
}