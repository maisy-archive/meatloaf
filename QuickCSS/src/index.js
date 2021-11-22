import { injectCSS } from "@cumcord/patcher";
import data from "@cumcord/pluginData";
import styles from "./styles.css";
import Settings from "./Settings";

import { createElement } from "@cumcord/modules/common/React";

export default () => {
  data.patchedQuickCSS = injectCSS(data.persist.ghost.css);
  let editorStyles = styles();

  return {
    onUnload() {
      data.patchedQuickCSS();
      editorStyles();
    },
    settings: createElement(Settings),
  };
};
