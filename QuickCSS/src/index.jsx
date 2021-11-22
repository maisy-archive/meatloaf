import { patcher } from "@cumcord";
import { webpack } from "@cumcord/modules";
import { useNest } from "@cumcord/utils";

let patchedQuickCSS;
let editorStyles;
const TextArea = webpack.findByDisplayName("TextArea");

// code editor imports
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";
import styles from "./styles.css";

function Settings(props) {
  let nest = props.data.persist;
  useNest(nest);

  return (
    <>
      <Editor
        className="cumcord-quickcss"
        value={nest.ghost.css ?? ""}
        onValueChange={(val) => {
          nest.store.css = val;
          patchedQuickCSS(nest.ghost.css);
        }}
        highlight={(code) => highlight(code, languages.css)}
        padding={10}
      />
      <link
        href="https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@master/themes/prism-atom-dark.css"
        rel="stylesheet"
      />
    </>
  );
}

export default (data) => {
  return {
    onLoad() {
      if (!data.persist.ghost.css) {
        data.persist.store.css = "";
      }
      patchedQuickCSS = patcher.injectCSS(data.persist.ghost.css);
      editorStyles = styles();
    },
    onUnload() {
      patchedQuickCSS();
      editorStyles();
    },
    settings: React.createElement(Settings, { data }),
  };
};
