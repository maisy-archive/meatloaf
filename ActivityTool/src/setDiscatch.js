import { instead } from "@cumcord/patcher";
import { findByProps } from "@cumcord/modules/webpack";

import logger from "./logger";
import data from "@cumcord/pluginData";

export default (value) => {
    if (value === true) {
        data.discatch = instead("dispatch", findByProps("isDispatching"), (args, originalFunction) => {
                try {
                    originalFunction(args);
                } catch (error) {
                    logger("warn", "[ActivityTool] Dispatch error caught!\n", error);
                }
            }
        );
    } else {
        if(data.discatch) data.discatch();
    }
}