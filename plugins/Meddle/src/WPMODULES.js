import { batchFind } from "@cumcord/modules/webpack";

export const [
    SettingsView,
    FluxDispatcher,
    FormTitle,
    FormText,
    FormDivider,
    Switch,
    Button,
    TextInput,
    TabBar,
    TabBarStyles,
    TabBarClasses,
    { GuildFeatures },
    { joinGuild },
] = batchFind(({ findByProps, findByDisplayName, findByDisplayNameAll }) => {
    findByDisplayName("SettingsView");
    findByProps("dirtyDispatch");
    findByDisplayName("FormTitle");
    findByDisplayName("FormText");
    findByDisplayName("FormDivider")
    findByDisplayName("Switch");
    findByProps("Sizes", "Colors", "Looks", "DropdownSizes");
    findByDisplayName("TextInput");
    findByDisplayName("TabBar");
    findByProps("topPill");
    findByProps("tabBar", "nowPlayingColumn");
    findByProps("GuildFeatures");
    findByProps("joinGuild");
});