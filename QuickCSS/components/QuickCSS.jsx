import { webpackModules } from "@cumcord/modules";
import { useNest } from "@cumcord/utils";

import { unpatchAllQuickCSS, injectQuickCSS } from "../util";
const TextArea = webpackModules.findByDisplayName("TextArea");

let currentCSS;

export default (props) => {
    useNest(props.data.persist);
    const cssStore = props.data.persist.store;
    return (
        <div className="cumcord-quickcss">
            <FormTitle className="cumcord-quickcss-formtitle" tag="h1">Quick CSS</FormTitle>
            <TextArea
                className="cumcord-quickcss-input"
                rows={20}
                value={cssStore.css}
                onChange={e => { unpatchAllQuickCSS(); injectQuickCSS(e); cssStore.css = e; console.log(cssStore.css)} }
            />
        </div>
    );
};