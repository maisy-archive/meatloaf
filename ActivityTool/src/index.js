import { createElement } from "@cumcord/modules/common/React";
import data from "@cumcord/pluginData";
import Settings from "./Settings";

import logger from "./logger";
import setDiscatch from "./setDiscatch";

export default () => {
    logger("log", "[ActivityTool]", "Initialising...");

    // Patch dispatch to catch errors rather than throwing them, allowing for persistent activities
    if (data.persist.ghost.settings.persistentActivities === true) {
        setDiscatch(true);
    }

    return {
        onUnload() {
            setDiscatch(false);
        },
        settings: createElement(Settings),
    };
};
