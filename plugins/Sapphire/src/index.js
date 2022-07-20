import registerGoosemodObj from "./patches/registerGoosemodObj";
import loadTopaz from "./patches/loadTopaz";
import fixLocalStorage from "./patches/fixLocalStorage";
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