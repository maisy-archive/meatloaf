import registerSettings from "./patches/registerSettings";
import styles from "./styles.scss";

const patches = [
    styles(),
    registerSettings(),
];

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}