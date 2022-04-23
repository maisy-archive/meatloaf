import { batchFind } from "@cumcord/modules/webpack";

export const [
    SettingsView,
    FluxDispatcher,
    { GuildFeatures },
    FormTitle,
    FormText,
    FormDivider,
    Switch,
    Button,
] = batchFind(({ findByProps, findByDisplayName }) => {
    findByDisplayName("SettingsView");
    findByProps("dirtyDispatch");
    findByProps("GuildFeatures");
    findByDisplayName("FormTitle");
    findByDisplayName("FormText");
    findByDisplayName("FormDivider")
    findByDisplayName("Switch");
    findByProps("Sizes", "Colors", "Looks", "DropdownSizes");
});