import { persist, patchedQuickCSS } from "@cumcord/pluginData";
import { useNest } from "@cumcord/utils";

// code editor imports
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";

export default () => {
  useNest(persist);
  return (
    <>
      <Editor
        className="cumcord-quickcss"
        value={persist.ghost.css ?? ""}
        onValueChange={(val) => {
          persist.store.css = val;
          patchedQuickCSS(persist.ghost.css);
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
};
