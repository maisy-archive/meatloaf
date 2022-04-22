import registerSettings from "./patches/registerSettings";
import styles from "./styles.scss";

import { persist } from "@cumcord/pluginData";
import dispatchLogger from "./patches/dispatchLogger";

persist.ghost.logDispatch ??= true;

const patches = [
    registerSettings(),
    dispatchLogger(),
    styles(),
];

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}