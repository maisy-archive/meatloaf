import { createElement } from "@cumcord/modules/common/React";
import Settings from "./Settings";

import { nests } from "@cumcord/modules/internal";
import { persist } from "@cumcord/pluginData";

import modules from "./lib/modules";

const handleNestsUpdate = (_, data) => modules[data.path[0]] ? modules[data.path[0]](data.value) : void 0;
const toggleModule = (name, value) => handleNestsUpdate("SET", { path: [name], value });

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
