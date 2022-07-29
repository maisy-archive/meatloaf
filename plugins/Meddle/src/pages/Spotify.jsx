import { useNest } from "@cumcord/utils";
import { fetchState, forceEventUpdate, spotifyNest } from "../patches/spotifyEventHandler";
import { FormDivider, FormTitle, Slider, Switch, TextInput, getCurrentUser, UserActivityContainer, ActivityClasses, ActivityPopoutClasses, ScrollerClasses, UserPopoutClasses, findActivity, FluxDispatcher, shouldShowActivity, Button } from "../WPMODULES";

export default function NewSpotifySettings() {
    useNest(spotifyNest);

    const [intermediate, setIntermediate] = React.useState(formatMillis(spotifyNest.ghost.overrides.time.duration));

    const [activityKey, forceActivity] = React.useReducer((n) => ~n, 0);
    const [sliderKey, forceSlider] = React.useReducer((n) => ~n, 0);

    React.useEffect(() => {
        function fluxListener() {
            forceActivity();
        }

        function nestListener(_, { path, value }) {
            if (path.join(".") === "overrides.time.duration" && !spotifyNest.ghost.overrides.time.enabled) setIntermediate(formatMillis(value));
            forceSlider();
        }

        FluxDispatcher.subscribe("SPOTIFY_PLAYER_STATE", fluxListener);
        spotifyNest.on("SET", nestListener);

        return () => {
            FluxDispatcher.unsubscribe("SPOTIFY_PLAYER_STATE", fluxListener);
            spotifyNest.off("SET", nestListener);
        }
    }, []);

    return (
        <>
            <div className="beef-meddle-spotify">
                {/* <FormText>Name: {spotifyNest.ghost.playerState.item.name}</FormText>
                <FormText>Artist: {spotifyNest.ghost.playerState.item.artists[0].name}</FormText>
                <FormText>Album: {spotifyNest.ghost.playerState.item.album.name}</FormText>
                <FormText>Playing until: {new Date(spotifyNest.ghost.playerState.timestamp + spotifyNest.ghost.playerState.item.duration_ms - spotifyNest.ghost.playerState.progress_ms).toLocaleTimeString("de")}</FormText>
                <FormText>Latest update: {new Date(spotifyNest.ghost.playerState.timestamp).toLocaleTimeString("de")}</FormText> */}
                <img className="beef-meddle-spotify-cover" src={spotifyNest.ghost.overrides.cover.value}></img>
                <div className="beef-meddle-spotify-details">
                    <Override id="title">Title</Override>
                    <Override id="artists">Artists (comma-seperated)</Override>
                    <Override id="album">Album</Override>
                </div>
            </div>

            <FormTitle>Progress</FormTitle>
            <Slider
                className="beef-meddle-spotify-slider-input"
                minValue={0}
                maxValue={spotifyNest.ghost.overrides.time.duration}
                initialValue={spotifyNest.store.overrides.time.position}
                handleSize={1}
                keyboardStep={1}
                onValueChange={(i) => spotifyNest.store.overrides.time.position = Math.floor(i || 0)}
                onValueRender={renderValueMarker}
                onMarkerRender={renderValueMarker}
                disabled={!spotifyNest.ghost.overrides.time.enabled}
                key={sliderKey}
                />

            <div className="beef-meddle-spotify-override">
                <FormTitle>Duration (formatted as mm:ss)</FormTitle>
                <div>
                    <TextInput
                        className="beef-meddle-spotify-override-input"
                        value={intermediate}
                        onChange={setIntermediate}
                        onBlur={() => setIntermediate(formatMillis(spotifyNest.store.overrides.time.duration = parseMillis(intermediate)))}
                        disabled={!spotifyNest.ghost.overrides.time.enabled}
                        />
                    <Switch
                        checked={spotifyNest.ghost.overrides.time.enabled}
                        onChange={(i) => spotifyNest.store.overrides.time.enabled = i}
                        />
                </div>
            </div>

            <Override id="cover">Cover URL</Override>

            <FormDivider className="beef-meddle-divider" />

            <div className="beef-meddle-spotify-post-divider">
                <div className="beef-meddle-spotify-actions">
                    <Button
                        size={Button.Sizes.SMALL}
                        onClick={() => forceEventUpdate()}>
                            Force update
                    </Button>
                    <Button
                        size={Button.Sizes.SMALL}
                        onClick={() => fetchState()}>
                            Refresh data
                    </Button>
                </div>
                {
                    shouldShowActivity() && <div className={`beef-meddle-spotify-preview ${[
                        UserPopoutClasses.userPopout,
                        UserPopoutClasses.body,
                        ScrollerClasses.scrollerBase,
                        ScrollerClasses.thin,
                        ActivityPopoutClasses.bodyInnerWrapper,
                        ActivityPopoutClasses.activity,
                        ActivityClasses.activityUserPopout
                        ].join(" ")}`}>
                        <UserActivityContainer
                            key={activityKey}
                            type="UserPopout"
                            user={getCurrentUser()}
                            activity={findActivity((a) => a.type === constants.ActivityTypes.LISTENING)}
                            />
                    </div>
                }
            </div>
        </>
    );
}

function renderValueMarker(i) {
    return `${Math.floor(i / 60000)}m${Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(Math.floor(i / 1000 % 60))}s`;
}

function formatMillis(i) {
    return `${Math.floor(i / 60000)}:${Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(Math.floor(i / 1000 % 60))}`;
}

function parseMillis(s) {
    const time = padArray(s.split(':').filter(i => !!i).map(s => parseInt(s)), 2);

    return (time[0] * 60 + time[1]) * 1000 || 1000;
}

const padArray = (arr, len) => Array(len).fill(0).concat(arr).slice(-(Math.max(len, arr.length)));

function Override(props) {
    return (
        <div className="beef-meddle-spotify-override">
            <FormTitle>{props.children}</FormTitle>
            <div>
                <TextInput
                    className="beef-meddle-spotify-override-input"
                    value={spotifyNest.ghost.overrides[props.id].value}
                    onChange={(i) => spotifyNest.store.overrides[props.id].value = i}
                    disabled={!spotifyNest.ghost.overrides[props.id].enabled}
                    />
                <Switch
                    checked={spotifyNest.ghost.overrides[props.id].enabled}
                    onChange={(i) => spotifyNest.store.overrides[props.id].enabled = i}
                    />
            </div>
        </div>
    );
}