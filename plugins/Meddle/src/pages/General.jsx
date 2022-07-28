import { persist } from "@cumcord/pluginData";
import exposeObject from "../patches/exposeObject";
import SwitchItem from "../components/SwitchItem";

export default function GeneralSettings(props) {
    return (
        <div>
            <SwitchItem
                text="Expose a Meddle object on the window"
                subtext="This contains several utilities such as some common Webpack modules."
                checked={persist.ghost["generalExposeObject"]}
                onChange={(v) => { persist.store["generalExposeObject"] = v; exposeObject() }}
            />
        </div>
    );
}
