import { findByProps } from "@cumcord/modules/webpack";

const { getAccounts } = findByProps("getAccounts");

const getSpotifyAccounts = () => getAccounts().filter(acc => acc.type === "spotify");

function updateProfile(accountId, isPremium) {
    return findByProps("dispatch", "_lastID").dispatch({
        type: "SPOTIFY_PROFILE_UPDATE",
        accountId,
        isPremium
    });
}

export default function spotifyListenAlong(enabled) {
    for(let account of getSpotifyAccounts()) {
        updateProfile(account.id, enabled);
    }
}