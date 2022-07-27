import exposeObject from "./patches/exposeObject";
import registerSettings from "./patches/registerSettings";
import dispatchLogger from "./patches/dispatchLogger";
import initDispatchEvents from "./patches/initDispatchEvents";

import styles from "./styles.scss";
import { setDefaults } from "cumcord-tools";

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
    initDispatchEvents(),
    styles(),
];

export function onUnload() {
    _.forEachRight(patches, (p) => p());
}