import { findByProps } from "@cumcord/modules/webpack";
import { instead } from "@cumcord/patcher";

const spotifyPlayer = findByProps("SpotifyAPI");

let patch;

export default function spotifyNoAutopause(enabled) {
    if (enabled === true) {
        patch = instead("pause", spotifyPlayer, () => void 0);
    } else {
        patch();
    }
}