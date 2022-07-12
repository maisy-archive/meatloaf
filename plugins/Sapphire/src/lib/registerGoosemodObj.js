import Divider from "../components/Divider";
import Header from "../components/Header";
import SubText from "../components/SubText";
import TextAndChild from "../components/TextAndChild";
import Toggle from "../components/Toggle";

export default function registerGoosemodObj() {
    const uninjectors = {};
    window.goosemod = {
        patcher: {
            patch: (parent, func, handler, before = false, instead = false) => {
                const patchType = before ? "before" : instead ? "instead" : "after";

                return cumcord.patcher[patchType](func, parent, handler);
            },
            inject: (_id, parent, func, handler, before = false) => {
                const patchType = before ? "before" : "after";

                uninjectors[_id] = cumcord.patcher[patchType](func, parent, handler);
            },
            uninject: (_id) => {
                if (!uninjectors[_id]) return false;

                uninjectors[_id]();

                return true;
            },
            internalMessage: () => { console.log("Plugin called internalMessage, stub for now") },
            commands: {
                add: () => { console.log("Plugin called commands.add, stub for now") },
                remove: () => { console.log("Plugin called commands.remove, stub for now") }
            }
        },
        webpackModules: {
            ...cumcord.modules.webpack,
            findByModuleId: (id) => { return cumcord.modules.webpack.modules[id] },
            common: cumcord.modules.common,
        },
        settings: {
            Items: {
                header: Header,
                subtext: SubText,
                divider: Divider,
                toggle: Toggle,
                "text-and-child": TextAndChild
            }
        },
        reactUtils: {
            getOwnerInstance: cumcord.utils.getOwnerInstance,

        },
        showToast: cumcord.ui.toasts.showToast,
        _SAPPHIRE: true
    }

    return () => { if(window.goosemod._SAPPHIRE) delete window.goosemod };
}