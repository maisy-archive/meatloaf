// sink my saviour https://github.com/yellowsink/cc-plugins/blob/master/cumstain/patches/settingsEntry.js

import { after, findAndPatch } from "@cumcord/patcher";
import Settings from "../Settings";

import { SettingsView } from "../WPMODULES";

import { dependPersist } from "cumcord-tools";
import { registerSection } from "@cumcord/ui/userSettings"

export default () => {
    // Logic to initialise Meddle settings with it's own header, should I choose to add it back
    // const sections = [registerSection("DIVIDER"), registerSection("HEADER", "Meddle"), registerSection("MEDDLE", "Settings", dependPersist(Settings))];
    // return () => {
    //     _.forEachRight(sections, (s) => s());
    // };
    return registerSection("MEDDLE", "Meddle", dependPersist(Settings))
};
