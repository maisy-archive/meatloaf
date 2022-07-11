import Header from "../components/Header";

export default function registerGoosemodObj() {
    window.goosemod = {
        patcher: {
            patch: (parent, func, handler, before = false, instead = false) => {
                const patchType = before ? "before" : instead ? "instead" : "after";

                return cumcord.patcher[patchType](func, parent, handler);
            },
            internalMessage: () => { console.log("Plugin called internalMessage, stub for now") }
        },
        webpackModules: {
            ...cumcord.modules.webpack,
            findByModuleId: (id) => { return cumcord.modules.webpack.modules[id] },
            common: cumcord.modules.common,
        },
        settings: {
            Items: {
                header: Header
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