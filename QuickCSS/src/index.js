import { injectCSS } from "@cumcord/patcher";
import { persist } from "@cumcord/pluginData";
import styles from "./styles.css";

let editorStyles = styles();

export const patchedQuickCSS = injectCSS(persist.ghost.css);

export function onUnload() {
    patchedQuickCSS();
    editorStyles();
}

export { default as settings } from "./Settings";
