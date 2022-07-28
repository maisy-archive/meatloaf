import { nests } from "@cumcord/modules/internal";
import { getActiveSocketAndDevice, SpotifyAPI, SpotifyEndpoints } from "../WPMODULES";

const exampleSpotifyState = {
    isPlaying: false,
    position: 0,
    track: {
        name: "Song Name",
        album: {
            image: {
                url: "https://raw.githubusercontent.com/Cumcord/assets/main/logo/filled.svg"
            },
            name: "Album Name",
        },
        duration: 0,
        // TODO: Retain other data about artists
        artists: [{
            name: "Artist Name",
            external_urls: {},
            href: {},
            id: "stub",
            type: "artist", 
            url: "Artist URL"
        }],
    },
}

// Make a nest with a clone of the example state
export const spotifyStateNest = nests.make(Object.assign({}, exampleSpotifyState));

const socket = getActiveSocketAndDevice()?.socket;
if (socket !== undefined) {
    SpotifyAPI.get(socket.accountId, socket.accessToken, {
        url: SpotifyEndpoints.PLAYER
    }).then((r) => r.body).then((body) => {
        const res = {
            accountId: socket.accountId,
            track: {
                id: body.item.id,
                name: body.item.name,
                duration: body.item.duration_ms,
                album: {
                    id: body.item.album.id,
                    name: body.item.album.name,
                    image: body.item.album.images[0],
                },
                artists: body.item.artists,
                isLocal: body.item.is_local || true,
            },
            volumePercent: body?.device.volume_percent ?? 0,
            isPlaying: body.is_playing,
            repeat: body.repeat_state !== "off",
            position: body.progress_ms,
            context: body.context,
            device: body.devicecs,
        };

        for (const k in res) {
            spotifyStateNest.store[k] = res[k];
        }
    });
}

export default function spotifyPlayerState(payload) {
    // Assign data from the payload to the nest, checking if the data is non-null
    for (let k of Object.keys(spotifyStateNest.ghost)) {
        spotifyStateNest.store[k] = (payload.track || payload.context) ? payload[k] : exampleSpotifyState[k];
    }
}