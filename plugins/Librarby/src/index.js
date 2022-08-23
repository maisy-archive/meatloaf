import exposeApi from "./lib/exposeApi";

const patches = [
    exposeApi(),
];

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}