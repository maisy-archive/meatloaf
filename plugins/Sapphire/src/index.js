import registerGoosemodObj from "./lib/registerGoosemodObj";
import loadTopaz from "./lib/loadTopaz";
import fixLocalStorage from "./lib/fixLocalStorage";
import injectStyles from "./styles.scss";

const patches = [
    fixLocalStorage(),
    registerGoosemodObj(),
    loadTopaz(),
    injectStyles(),
]

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}