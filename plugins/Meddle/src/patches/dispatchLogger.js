import { after } from "@cumcord/patcher";
import { persist } from "@cumcord/pluginData";

import { FluxDispatcher } from "../WPMODULES";

export default function dispatchLogger() {
    return after("dispatch", FluxDispatcher, (args) => {
        if (!persist.ghost.dispatchLogEnabled || persist.ghost.dispatchWhiteListMode && !persist.ghost.dispatchWhiteList.split(",").includes(args[0].type) || persist.ghost.dispatchIgnoreList.split(",").includes(args[0].type)) return;

        console.log(args[0]);
    });
};
