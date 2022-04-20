import { createElement } from "@cumcord/modules/common/React";
import Settings from "./Settings";

import { nests } from "@cumcord/modules/internal";
import { persist } from "@cumcord/pluginData";

import modules from "./lib/modules";

function handleNestsUpdate(_, data) {
    console.log(data.path[0], data.value);
    if(modules[data.path[0]]) return modules[data.path[0]](data.value);
}

function toggleModule(name, value) {
    return handleNestsUpdate("SET", { path: [name], value });
}

export default () => {
    persist.on(nests.Events.SET, handleNestsUpdate);
    for(let module of Object.keys(modules)) {
        if(persist.ghost[module]) toggleModule(module, persist.ghost[module]);
    }

    return {
        onUnload: () => {
            persist.off(nests.Events.SET, handleNestsUpdate);
            for(let module of Object.keys(modules)) {
                if(persist.ghost[module]) toggleModule(module, false);
            }
        },

        settings: createElement(Settings),
    };
};
