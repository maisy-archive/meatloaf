// sink my saviour https://github.com/yellowsink/cc-plugins/blob/master/cumstain/patches/settingsEntry.js

import { findByDisplayName } from "@cumcord/modules/webpack";
import { after, findAndPatch } from "@cumcord/patcher";
import Settings from "../components/Settings";

export default () =>
    findAndPatch(
        () => findByDisplayName("SettingsView"),
        (SettingsView) =>
            after("getPredicateSections", SettingsView.prototype, (_, ret) => {
                if (ret[1]?.section != "My Account") return;

                let index =
                    ret.findIndex((e) => e.section == "changelog") - 1;

                const meddleSettings = [
                    {
                        section: "DIVIDER",
                    },
                    {
                        section: "HEADER",
                        label: "Meddle"
                    },
                    {
                        section: "beef_meddle_SETTINGS",
                        label: "Settings",
                        element: Settings,
                    }
                ]

                ret.splice(index, 0, ...meddleSettings);

                return ret;
            })
    );