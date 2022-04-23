import registerSettings from "./patches/registerSettings";
import dispatchLogger from "./patches/dispatchLogger";

import styles from "./styles.scss";

import { setDefaults } from "cumcord-tools";

setDefaults({
    dispatchLogEnabled: false,
    dispatchIgnoreList: "",
    dispatchWhiteList: "",
    dispatchWhiteListMode: false,
});

const patches = [
    registerSettings(),
    dispatchLogger(),
    styles(),
];

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}