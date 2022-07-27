import { FluxDispatcher, FormDivider, FormText, Switch, TextInput } from "../WPMODULES";
import { spotifyStateNest } from "../events/spotifyPlayerState";
import { useNest } from "@cumcord/utils";
import SettingsButton from "./SettingsButton";

// If anyone reads this, please don't judge me.
// I'm sorry.

export default function SpotifySettings(props) {
    useNest(spotifyStateNest);
    const spotifyData = spotifyStateNest.ghost.data;

    const [songNameState, setSongNameState] = React.useState();
    const [artistNameState, setArtistNameState] = React.useState();
    const [albumNameState, setAlbumNameState] = React.useState();
    const [positionState, setPositionState] = React.useState();
    const [durationState, setDurationState] = React.useState();
    const [playingState, setPlayingState] = React.useState();
    const [imageUrlState, setImageUrlState] = React.useState();

    if (!spotifyStateNest.songHasPlayed && !spotifyData.track) {
        return <FormText>No song has played during Meddle's runtime. Either play a new song or modify the state of your current one.</FormText>
    } else {
        const songName = songNameState === undefined ? spotifyData.track.name : songNameState;
        const artistNames = artistNameState === undefined ? spotifyData.track.artists.map(i => i.name).join(", ") : artistNameState;
        const albumName = albumNameState === undefined ? spotifyData.track.album.name : albumNameState;
        const position = positionState === undefined ? spotifyData.position : positionState
        const duration = durationState === undefined ? spotifyData.track.duration : durationState
        const playing = playingState === undefined ? spotifyData.isPlaying : playingState
        const imageUrl = imageUrlState === undefined ? spotifyData.track.album.image.url : imageUrlState

        return (
            <div>
                <div className="beef-meddle-spotify-row">
                    <div className="beef-meddle-spotify-row">
                        <img src={spotifyData.track.album.image.url} height="120" width="120" />
                        <div className="beef-meddle-spotify-column">
                            <div className="beef-meddle-spotify-row">
                                <div style={{ width: "0.75rem" }}/>
                                <TextInput value={songName} onChange={(e) => { setSongNameState(e) }} />
                            </div>
                            <div className="beef-meddle-spotify-row">
                                <FormText style={{ width: "0.75rem" }}>by</FormText>
                                <TextInput value={artistNames} onChange={(e) => { setArtistNameState(e) }} />
                            </div>
                            <div className="beef-meddle-spotify-row">
                                <FormText style={{ width: "0.75rem" }}>on</FormText>
                                <TextInput value={albumName} onChange={(e) => { setAlbumNameState(e) }} />
                            </div>
                        </div>
                    </div>

                    <div className="beef-meddle-spotify-column" style={{ marginLeft: "auto" }}>
                        <SettingsButton
                            text="Dispatch"
                            size="MEDIUM"
                            func={async () => {
                                FluxDispatcher.dispatch({
                                    ...spotifyData,
                                    isPlaying: playing,
                                    position: position,
                                    track: {
                                        ...spotifyData.track,
                                        name: songName,
                                        album: {
                                            ...spotifyData.track.album,
                                            image: {
                                                ...spotifyData.track.album.image,
                                                url: imageUrl
                                            },
                                            name: albumName,
                                        },
                                        // TODO: Retain other data about artists
                                        artists: artistNames.split(", ").map(i => ({ name: i, external_urls: {}, href: {}, id: "stub", type: "artist", url: "" })),
                                    }
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
                            <TextInput value={position} onChange={(e) => { setPositionState(e) }} />
                        </div>
                        <div className="beef-meddle-spotify-row">
                            <FormText style={{ width: "3rem" }}>Duration (ms)</FormText>
                            <TextInput value={duration} onChange={(e) => { setDurationState(e) }} />
                        </div>
                    </div>
                    <div className="beef-meddle-spotify-row" style={{ marginLeft: "auto" }}>
                        <FormText>Playing</FormText>
                        <Switch
                            checked={playing}
                            onChange={(e) => { setPlayingState(e) }}
                        />
                    </div>
                </div>

                <FormDivider className="beef-meddle-settings-divider" />

                <div className="beef-meddle-spotify-column">
                    <FormText>Image URL</FormText>
                    <TextInput value={imageUrl} onChange={(e) => { setImageUrlState(e) }} />
                </div>
            </div>
        )
    }
}
