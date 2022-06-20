import { FormText, Switch } from "../WPMODULES";
import { persist } from "@cumcord/pluginData";
import exposeObject from "../patches/exposeObject";

export default function GeneralSettings(props) {
    return (
        <div className="beef-meddle-settings-tab">
            <div>
                <Switch
                    checked={persist.ghost["generalExposeObject"]}
                    onChange={(v) => { persist.store["generalExposeObject"] = v; exposeObject() }}
                />
                <FormText>
                    Expose a Meddle object on the window
                </FormText>
            </div>
        </div>
    );
}
