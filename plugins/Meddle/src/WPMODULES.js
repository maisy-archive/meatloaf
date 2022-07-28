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
    UserActivityContainer,
    UserPopoutClasses,
    ActivityPopoutClasses,
    ScrollerClasses,
    ActivityClasses,
    { GuildFeatures },
    { joinGuild },
    { getCurrentUser },
    { findActivity },
    { SpotifyAPI },
    { SpotifyEndpoints },
    { getActiveSocketAndDevice },
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
    findByDisplayName("UserActivityContainer");
    findByProps("userPopout", "body");
    findByProps("activity", "note");
    findByProps("scrollerBase", "thin");
    findByProps("contentImagesProfile");
    findByProps("GuildFeatures");
    findByProps("joinGuild");
    findByProps("getCurrentUser");
    findByProps("getApplicationActivities");
    findByProps("SpotifyAPI");
    findByProps("SpotifyEndpoints");
    findByProps("getActiveSocketAndDevice");
});