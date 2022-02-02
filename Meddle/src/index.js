import { createElement } from "@cumcord/modules/common/React";
import Settings from "./Settings";

import logger from "./logger";

export default () => {
    logger("log", "[Meddle]", "Initialising...");

    const patches = [
        
    ];

    return {
        onUnload() {
            _.forEachRight(patches, (p) => p());
        },
        settings: createElement(Settings),
    };
};
