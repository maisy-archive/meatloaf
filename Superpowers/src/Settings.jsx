import { findByDisplayName } from "@cumcord/modules/webpack";

import { persist } from "@cumcord/pluginData";
import { useNest } from "@cumcord/utils";

import Nestbox from "./components/Nestbox";
const Text = findByDisplayName("Text");

export default () => {
    useNest(persist);
    return (
        <>
            <style>{`
                .cumcord-settings-modal {
                    min-width: 200px;
                    min-height: 210px;
                }
            `}</style>

            <Nestbox value="screenshareCrack">
                <Text>Screenshare crack</Text>
            </Nestbox>

            <div style={{marginTop: 10}}></div>

            <Nestbox value="spotifyListenAlong">
                <Text>Spotify listen along</Text>
            </Nestbox>

            <div style={{marginTop: 10}}></div>

            <Nestbox value="spotifyNoAutopause">
                <Text>Disable Spotify autopause (30 second limit)</Text>
            </Nestbox>

            <div style={{marginTop: 10}}></div>

            <Nestbox value="infiniteAccounts">
                <Text>Infinite account switcher accounts</Text>
            </Nestbox>
        </>
    );
};
