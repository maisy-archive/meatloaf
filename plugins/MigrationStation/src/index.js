import injectStyles from "./styles.scss";

const patches = [
    injectStyles(),
]

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}

export { default as settings } from "./Settings";