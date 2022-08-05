import { useNest } from "@cumcord/utils";
import { fetchState, forceEventUpdate, spotifyNest } from "../patches/spotifyEventHandler";
import { FormDivider, FormTitle, Slider, Switch, TextInput, getCurrentUser, UserActivityContainer, ActivityClasses, ActivityPopoutClasses, ScrollerClasses, UserPopoutClasses, findActivity, FluxDispatcher, shouldShowActivity, ActivityTypes, Button } from "../WPMODULES";

export default function SpotifySettings() {
    useNest(spotifyNest);

    const [activityKey, forceActivity] = React.useReducer((n) => ~n, 0);
    const [sliderKey, forceSlider] = React.useReducer((n) => ~n, 0);

    React.useEffect(() => {
        function fluxListener() {
            forceActivity();
        }

        function nestListener() {
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
                <img className="beef-meddle-spotify-cover" src={spotifyNest.ghost.overrides.cover.value}></img>
                <div className="beef-meddle-spotify-details">
                    <Override id="title">Title</Override>
                    <Override id="artists">Artists (comma-separated)</Override>
                    <Override id="album">Album</Override>
                </div>
            </div>

            <FormTitle>Progress</FormTitle>
            <Slider
                className="beef-meddle-spotify-slider-input"
                minValue={0}
                maxValue={Math.abs(spotifyNest.ghost.overrides.time.duration)}
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
                <FormTitle>Duration (Seconds)</FormTitle>
                <div>
                    <TextInput
                        className="beef-meddle-spotify-override-input"
                        value={Math.floor(spotifyNest.ghost.overrides.time.duration / 1000)}
                        onChange={(d) => spotifyNest.store.overrides.time.duration = (parseInt(d) || 0) * 1000}
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
                            activity={findActivity((a) => a.type === ActivityTypes.LISTENING)}
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