export default function registerGoosemodObj() {
    window.goosemod = {
        patcher: {
            ...cumcord.patcher,
            internalMessage: () => { console.log("Plugin called internalMessage, stub for now") }
        },
        webpackModules: {
            all: cumcord.modules.webpack.modules,
            find: cumcord.modules.webpack.find,
            findAll: cumcord.modules.webpack.findAll,
            findByProps: cumcord.modules.webpack.findByProps,
            findByProps: cumcord.modules.webpack.findByPropsAll,
            findByPrototypes: cumcord.modules.webpack.findByPrototypes,
            findByDisplayName: cumcord.modules.webpack.findByDisplayName,
            findByDisplayNameAll: cumcord.modules.webpack.findByDisplayNameAll,
            findByModuleId: (id) => { return cumcord.modules.webpack.modules[id] },
            common: cumcord.modules.common,
        },
        reactUtils: {
            getOwnerInstance: cumcord.utils.getOwnerInstance,

        },
        showToast: cumcord.ui.toasts.showToast,
        _SAPPHIRE: true
    }

    return () => { if(window.goosemod._SAPPHIRE) delete window.goosemod };
}