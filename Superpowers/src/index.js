import { nests } from "@cumcord/modules/internal";
import { persist } from "@cumcord/pluginData";

import modules from "./lib/modules";

const handleNestsUpdate = (_, data) => modules[data.path[0]] ? modules[data.path[0]](data.value) : void 0;
const toggleModule = (name, value) => handleNestsUpdate("SET", { path: [name], value });

persist.on(nests.Events.SET, handleNestsUpdate);
for(let module of Object.keys(modules)) {
    if(persist.ghost[module]) toggleModule(module, persist.ghost[module]);
}

export function onUnload() {
    persist.off(nests.Events.SET, handleNestsUpdate);
    for(let module of Object.keys(modules)) {
        if(persist.ghost[module]) toggleModule(module, false);
    }
}

export { default as settings } from "./Settings";