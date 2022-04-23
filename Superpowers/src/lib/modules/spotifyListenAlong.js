import { findByProps } from "@cumcord/modules/webpack";

import { getAccounts, FluxDispatcher } from "../../WPMODULES";

const getSpotifyAccounts = () => getAccounts().filter(acc => acc.type === "spotify");

function updateProfile(accountId, isPremium) {
    return FluxDispatcher.dispatch({
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