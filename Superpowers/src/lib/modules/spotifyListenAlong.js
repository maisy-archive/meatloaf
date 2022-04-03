import { findByProps } from "@cumcord/modules/webpack";

const { getAccounts } = findByProps("getAccounts");

function getSpotifyAccounts() {
    return getAccounts().filter(acc => acc.type === "spotify");
}

function updateProfile(accountId, isPremium) {
    return findByProps("dispatch", "_lastID").dispatch({
        type: "SPOTIFY_PROFILE_UPDATE",
        accountId,
        isPremium
    });
}

export default function spotifyListenAlong(enabled) {
    if(enabled === true) {
        for(let account of getSpotifyAccounts()) {
            updateProfile(account.id, true);
        }
    } else {
        for(let account of getSpotifyAccounts()) {
            updateProfile(account.id, false);
        }
    }
}