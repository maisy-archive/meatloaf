import registerGoosemodObj from "./lib/registerGoosemodObj";
import loadTopaz from "./lib/loadTopaz";
import fixLocalStorage from "./lib/fixLocalStorage";

const patches = [
    fixLocalStorage(),
    registerGoosemodObj(),
    loadTopaz(),
]

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}