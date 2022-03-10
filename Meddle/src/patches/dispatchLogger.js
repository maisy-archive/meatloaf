import { after } from "@cumcord/patcher";

export const ignoreList = [];

export default () => {
    let dispatchLogger = after("dispatch", window.FluxDispatcher, (arguments) => {
        if (ignoreList?.includes(arguments[0].type)) return;
        console.log(arguments[0]);
    });
};
