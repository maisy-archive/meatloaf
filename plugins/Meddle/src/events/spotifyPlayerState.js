import { nests } from "@cumcord/modules/internal";

export const spotifyStateNest = nests.make({
    data: {},
    songHasPlayed: false,
});

export default function spotifyPlayerState(payload) {
    // Set songHasPlayed to true since the song has now played
    spotifyStateNest.songHasPlayed = true;

    // Assign the payload to the data property of the nest
    spotifyStateNest.store.data = payload;
}