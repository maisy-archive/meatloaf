import { FluxDispatcher, FormDivider, FormText, Switch } from "../WPMODULES";
import { spotifyStateNest } from "../events/spotifyPlayerState";
import { useNest } from "@cumcord/utils";
import Button from "../components/Button";
import Textbox from "../components/Textbox";

// TODO: Tidy styling

export default function SpotifySettings(props) {
    useNest(spotifyStateNest);

    const store = spotifyStateNest.store;
    const ghost = spotifyStateNest.ghost;

    return (
        <div>
            <div className="beef-meddle-row">
                <div className="beef-meddle-row beef-meddle-center">
                    <img src={ghost.track.album.image.url} height="120" width="120" />
                    <div className="beef-meddle-column">
                        <Textbox fixedWidth="0.75rem" variant="row" value={ghost.track.name} onChange={(e) => { store.track.name = e }} />
                        <Textbox fixedWidth="0.75rem" variant="row" value={ghost.track.artists.map(e => e.name).join(", ")} onChange={(e) => { store.track.artists = e.split(", ").map(i => ({ name: i, external_urls: {}, href: {}, id: "stub", type: "artist", url: "Artist URL" })) }} >by</Textbox>
                        <Textbox fixedWidth="0.75rem" variant="row" value={ghost.track.album.name} onChange={(e) => { store.track.album.name = e }} >on</Textbox>
                    </div>
                </div>

                <div className="beef-meddle-column" style={{ marginLeft: "auto" }}>
                    <Button
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

            <FormDivider className="beef-meddle-divider" />

            <div className="beef-meddle-row">
                <div className="beef-meddle-column">
                    {/* What. */}
                    <Textbox fixedWidth="3rem" variant="row" value={ghost.position} onChange={(e) => { store.position = isNaN(e) || !e ? undefined : parseInt(e) }} >Position (ms)</Textbox>
                    <Textbox fixedWidth="3rem" variant="row" value={ghost.track.duration} onChange={(e) => { store.track.duration = isNaN(e) || !e ? undefined : parseInt(e) }} >Duration (ms)</Textbox>
                </div>
                <div className="beef-meddle-row beef-meddle-center" style={{ marginLeft: "auto" }}>
                    <FormText>Playing</FormText>
                    <Switch
                        checked={ghost.isPlaying}
                        onChange={(e) => { store.isPlaying = e }}
                    />
                </div>
            </div>

            <FormDivider className="beef-meddle-divider" />

            <Textbox value={ghost.track.album.image.url} onChange={(e) => { store.track.album.image.url = e }} >Image URL (only supports <code>https://i.scdn.co/image/*</code> urls)</Textbox>

            <FormDivider className="beef-meddle-divider" />

            <FormText className="beef-meddle-subtext">
                If this is out of date/incorrect, try updating the current state of your Spotify player.
            </FormText>
        </div>
    )
}
