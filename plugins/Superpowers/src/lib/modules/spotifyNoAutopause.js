import { instead } from "@cumcord/patcher";

import { spotifyPlayer } from "../../WPMODULES";

let patch;

export default function spotifyNoAutopause(enabled) {
    if (enabled === true) {
        patch = instead("pause", spotifyPlayer, () => void 0);
    } else {
        patch();
    }
}