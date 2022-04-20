import { findByProps } from "@cumcord/modules/webpack";

const spotifyPlayer = findByProps("SpotifyAPI");
const spotifyModule = findByProps("wasAutoPaused");
const { pause }         = spotifyPlayer;
const { wasAutoPaused } = spotifyModule;

export default function spotifyNoAutopause(enabled) {
    if (enabled === true) {
        spotifyModule.wasAutoPaused = () => false;
        spotifyPlayer.pause = () => void 0;
    } else {
        spotifyModule.wasAutoPaused = wasAutoPaused;
        spotifyPlayer.pause = pause;
    }
}