import exposeObject from "./patches/exposeObject";
import registerSettings from "./patches/registerSettings";
import dispatchLogger from "./patches/dispatchLogger";

import styles from "./styles.scss";
import { setDefaults } from "cumcord-tools";
import spotifyEventHandler from "./patches/spotifyEventHandler";

setDefaults({
    dispatchLogEnabled: false,
    dispatchIgnoreList: "",
    dispatchWhiteList: "",
    dispatchWhiteListMode: false,

    serverId: "",
    serverLurkMode: false,

    generalExposeObject: true,
});


const patches = [
    exposeObject(),
    registerSettings(),
    dispatchLogger(),
    spotifyEventHandler(),
    styles(),
];

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}