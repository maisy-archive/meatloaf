import { after } from "@cumcord/patcher";
import { persist } from "@cumcord/pluginData";

import { FluxDispatcher } from "../WPMODULES";

export const dispatchLogs = [];
export const ignoreList = [];

export default () => {
    return after("dispatch", FluxDispatcher, (args) => {
        if (!persist.ghost.logDispatch || ignoreList?.includes(args[0].type)) return;
        dispatchLogs.push(args[0]);
    });
};
