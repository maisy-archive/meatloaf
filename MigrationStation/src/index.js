import { createElement } from "@cumcord/modules/common/React";
import Settings from "./Settings";

export default () => {
    return {
        onUnload() {

        },
        settings: createElement(Settings),
    };
};
