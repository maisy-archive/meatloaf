import { createElement } from "@cumcord/modules/common/React";

import Settings from "./Settings";
import injectStyles from "./styles.scss";

export default () => {
    const patches = [
        injectStyles(),
    ];

    return {
        onUnload() {
            _.forEachRight(patches, (p) => p());
        },
        settings: createElement(Settings),
    };
};
