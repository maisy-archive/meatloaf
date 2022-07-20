import * as base from "./base";
import * as commands from "./commands";
import internalMessage from "./internalMessage";

            // TODO: Polyfill all the "extra" stuff that's in GM's patcher, see https://github.com/GooseMod/GooseMod/tree/master/src/util/patcher
export default {
    ...base,
    commands: commands,
    internalMessage: internalMessage,
}