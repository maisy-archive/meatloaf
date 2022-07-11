import registerGoosemodObj from "./lib/registerGoosemodObj";

const patches = [
    registerGoosemodObj(),
]

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}