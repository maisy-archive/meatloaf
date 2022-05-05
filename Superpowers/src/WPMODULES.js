import { batchFind } from "@cumcord/modules/webpack";

export const [
    Checkbox,
    Text,
    { MAX_ACCOUNTS },
    stream,
    { getAccounts },
    FluxDispatcher,
    spotifyPlayer,
    { getCurrentUser }
] = batchFind(({ findByProps, findByDisplayName }) => {
    findByDisplayName("Checkbox");
    findByDisplayName("LegacyText");
    findByProps("MAX_ACCOUNTS");
    findByProps("ApplicationStreamFPSButtons");
    findByProps("getAccounts");
    findByProps("dirtyDispatch");
    findByProps("SpotifyAPI");
    findByProps("getCurrentUser");
});