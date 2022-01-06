import { createElement } from "@cumcord/modules/common/React";
import data from "@cumcord/pluginData";

import logger from "./logger";
import Settings from "./Settings";

import { instead } from "@cumcord/patcher";

export default () => {
    logger("log", "[ActivityTool]", "Initialising...");

    // Patch dispatch to catch errors rather than throwing them, allowing for persistent activities
    data.discatch = instead("dispatch", window.cumcord.modules.webpack.findByProps("isDispatching"), (args, originalFunction) => {
            try {
                originalFunction(args);
            } catch (error) {
                logger("warn", "[ActivityTool] Dispatch error caught!\n", error);
            }
        }
    );

    return {
        onUnload() {
            if(data.discatch) {
                data.discatch();
            }
        },
        settings: createElement(Settings),
    };
};
