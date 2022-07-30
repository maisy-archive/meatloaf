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
    Slider,
    { GuildFeatures },
    { joinGuild },
    { getCurrentUser },
    { findActivity },
    { SpotifyAPI },
    { SpotifyEndpoints },
    { SpotifySocket },
    { getActiveSocketAndDevice, shouldShowActivity },
] = batchFind(({ findByProps, findByDisplayName }) => {
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
    findByDisplayName("Slider");
    findByProps("GuildFeatures");
    findByProps("joinGuild");
    findByProps("getCurrentUser");
    findByProps("getApplicationActivities");
    findByProps("SpotifyAPI");
    findByProps("SpotifyEndpoints");
    findByProps("SpotifySocket");
    findByProps("getActiveSocketAndDevice");
});