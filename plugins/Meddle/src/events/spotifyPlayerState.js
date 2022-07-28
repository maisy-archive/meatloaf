import { nests } from "@cumcord/modules/internal";

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

export default function spotifyPlayerState(payload) {
    // Assign data from the payload to the nest, checking if the data is non-null
    for (let k of Object.keys(spotifyStateNest.ghost)) {
        spotifyStateNest.store[k] = (payload.track || payload.context) ? payload[k] : exampleSpotifyState[k];
    }
}