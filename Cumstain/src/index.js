import { React } from "@cumcord/modules/common";
import { Settings } from "./components/Settings";

export default (data) => {
    return {
        onLoad() {

        },
        onUnload() {},
        settings: React.createElement(Settings),
    }
}  