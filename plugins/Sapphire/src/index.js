import registerGoosemodObj from "./patches/registerGoosemodObj";
import loadTopaz from "./patches/loadTopaz";
import fixLocalStorage from "./patches/fixLocalStorage";
import injectStyles from "./styles.scss";

import { showToast } from "@cumcord/ui/toasts";
import { installed, togglePlugin } from "@cumcord/plugins";
import { id } from "@cumcord/pluginData";

function tryDisable() {
    setTimeout(() => {
        if (installed.ghost[id]?.enabled) {
            togglePlugin(id);
        } else {
            tryDisable();
        }
    }, 1000);
}

let patches = [];

if (!window.goosemod && !window.goosemod?._SAPPHIRE) {
    patches = [
        registerGoosemodObj(),
        fixLocalStorage(),
        loadTopaz(),
        injectStyles(),
    ]
} else {
    showToast({
        title: "Sapphire",
        content: "GooseMod is already running! Sapphire will be disabled, as it will only cause incompatibilities.",

    });

    tryDisable();
}

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}