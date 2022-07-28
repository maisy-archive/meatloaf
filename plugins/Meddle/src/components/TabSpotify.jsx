import { FluxDispatcher, FormDivider, FormText, Switch, TextInput } from "../WPMODULES";
import { spotifyStateNest } from "../events/spotifyPlayerState";
import { useNest } from "@cumcord/utils";
import SettingsButton from "./SettingsButton";

// TODO: Tidy styling

export default function SpotifySettings(props) {
    useNest(spotifyStateNest);

    const store = spotifyStateNest.store;
    const ghost = spotifyStateNest.ghost;

    return (
        <div>
            <div className="beef-meddle-spotify-row">
                <div className="beef-meddle-spotify-row">
                    <img src={ghost.track.album.image.url} height="120" width="120" />
                    <div className="beef-meddle-spotify-column">
                        <div className="beef-meddle-spotify-row">
                            <div style={{ width: "0.75rem" }}/>
                            <TextInput value={ghost.track.name} onChange={(e) => { store.track.name = e }} />
                        </div>
                        <div className="beef-meddle-spotify-row">
                            <FormText style={{ width: "0.75rem" }}>by</FormText>
                            <TextInput value={ghost.track.artists.map(e => e.name).join(", ")} onChange={(e) => { store.track.artists = e.split(", ").map(i => ({ name: i, external_urls: {}, href: {}, id: "stub", type: "artist", url: "Artist URL" })) }} />
                        </div>
                        <div className="beef-meddle-spotify-row">
                            <FormText style={{ width: "0.75rem" }}>on</FormText>
                            <TextInput value={ghost.track.album.name} onChange={(e) => { store.track.album.name = e }} />
                        </div>
                    </div>
                </div>

                <div className="beef-meddle-spotify-column" style={{ marginLeft: "auto" }}>
                    <SettingsButton
                        text="Dispatch"
                        size="MEDIUM"
                        func={async () => {
                            FluxDispatcher.dispatch({
                                ...ghost,
                                type: "SPOTIFY_PLAYER_STATE",
                            })
                        }}
                    />
                </div>
            </div>

            <FormDivider className="beef-meddle-settings-divider" />

            <div className="beef-meddle-spotify-row">
                <div className="beef-meddle-spotify-column">
                    <div className="beef-meddle-spotify-row">
                        <FormText style={{ width: "3rem" }}>Position (ms)</FormText>
                        <TextInput value={ghost.position} onChange={(e) => { store.position = e }} />
                    </div>
                    <div className="beef-meddle-spotify-row">
                        <FormText style={{ width: "3rem" }}>Duration (ms)</FormText>
                        <TextInput value={ghost.track.duration} onChange={(e) => { store.track.duration = e }} />
                    </div>
                </div>
                <div className="beef-meddle-spotify-row" style={{ marginLeft: "auto" }}>
                    <FormText>Playing</FormText>
                    <Switch
                        checked={ghost.isPlaying}
                        onChange={(e) => { store.isPlaying = e }}
                    />
                </div>
            </div>

            <FormDivider className="beef-meddle-settings-divider" />

            <div className="beef-meddle-spotify-column">
                <FormText>Image URL (only supports <code>https://i.scdn.co/image/*</code> urls)</FormText>
                <TextInput value={ghost.track.album.image.url} onChange={(e) => { store.track.album.image.url = e }} />
            </div>

            <FormDivider className="beef-meddle-settings-divider" />

            <FormText className="beef-meddle-subtext">
                If this is out of date/incorrect, try updating the current state of your Spotify player.
            </FormText>
        </div>
    )
}
