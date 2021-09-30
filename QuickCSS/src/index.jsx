import { patcher } from "@cumcord"; 
import { webpack } from "@cumcord/modules";
import { useNest } from "@cumcord/utils";

let patchedQuickCSS = ""

const TextArea = webpack.findByDisplayName("TextArea");

function Settings(props) {
    let nest = props.data.persist;
    useNest(nest)

    return (
        <>
            <TextArea
                className="cumcord-quickcss"
                value={nest.ghost.css}
                rows={30}
                onChange={val => { nest.store.css = val; if(props.patchedQuickCSS) patchedQuickCSS(); patchedQuickCSS = patcher.injectCSS(nest.ghost.css) }}
            />            
        </>
    )
}

export default (data) => {
  return {
    onLoad() {
        if (!data.persist.ghost.css) {
          data.persist.store.css = "";
        }
        patchedQuickCSS = patcher.injectCSS(data.persist.ghost.css);
    },
    onUnload() {
        patchedQuickCSS();
    },
    settings: React.createElement(Settings, { data }),
  };
};

