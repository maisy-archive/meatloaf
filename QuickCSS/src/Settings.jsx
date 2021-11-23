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
                className="beef-quickcss-editor"
                value={persist.ghost.css ?? ""}
                onValueChange={(val) => {
                    persist.store.css = val;
                    patchedQuickCSS(persist.ghost.css);
                }}
                highlight={(code) => highlight(code, languages.css)}
                padding={10}
            />
            <link
                href={document.querySelector("html").classList.contains("theme-dark") ? "https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@master/themes/prism-one-dark.css" : "https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@master/themes/prism-one-light.css" }
                rel="stylesheet"
            />
        </>
    );
};
