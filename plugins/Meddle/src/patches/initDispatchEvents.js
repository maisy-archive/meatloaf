import { FluxDispatcher } from "../WPMODULES";
import spotifyPlayerState from "../events/spotifyPlayerState";

const events = new Map();
events.set("SPOTIFY_PLAYER_STATE", spotifyPlayerState);

export default function initDispatchListeners() {
    for (const [k, v] of events) FluxDispatcher.subscribe(k, v);

    return () => {
        for (const [k, v] of events) FluxDispatcher.unsubscribe(k, v);
    };
}