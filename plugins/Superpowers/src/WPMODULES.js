import { batchFind } from "@cumcord/modules/webpack";

export const [
    Checkbox,
    Text,
    { MAX_ACCOUNTS },
    stream,
    { getAccounts },
    spotifyPlayer,
    { getCurrentUser }
] = batchFind(({ findByProps, findByDisplayName }) => {
    findByDisplayName("Checkbox");
    findByDisplayName("LegacyText");
    findByProps("MAX_ACCOUNTS");
    findByProps("ApplicationStreamFPSButtons");
    findByProps("getAccounts");
    findByProps("SpotifyAPI");
    findByProps("getCurrentUser");
});

export { FluxDispatcher } from "@cumcord/modules/common";