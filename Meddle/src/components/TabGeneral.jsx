import { FormText, Switch } from "../WPMODULES";
import { persist } from "@cumcord/pluginData";
import exposeObject from "../patches/exposeObject";

export default function GeneralSettings(props) {
    return (
        <div className="beef-meddle-settings-tab">
            <div class="beef-meddle-switch-wrapper">
                <Switch
                    checked={persist.ghost["generalExposeObject"]}
                    onChange={(v) => { persist.store["generalExposeObject"] = v; exposeObject() }}
                />
                <FormText>
                    Expose a Meddle object on the window
                    <FormText class="beef-meddle-subtext">
                        This contains several utilities such as some common Webpack modules.
                    </FormText>
                </FormText>
            </div>
        </div>
    );
}
