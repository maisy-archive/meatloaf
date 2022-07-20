import Divider from "../components/Divider";
import TextAndChild from "../components/TextAndChild";
import TextAndButton from "../components/TextAndButton";
import Toggle from "../components/Toggle";
import internalMessage from "./internalMessage";

export default function registerGoosemodObj() {
    const uninjectors = new Map();
    const registeredCommands = new Map();
    window.goosemod = {
        patcher: {
            patch: (parent, func, handler, before = false, instead = false) => {
                const patchType = before ? "before" : instead ? "instead" : "after";

                return cumcord.patcher[patchType](func, parent, handler);
            },
            inject: (_id, parent, func, handler, before = false) => {
                const patchType = before ? "before" : "after";

                uninjectors.set(_id, cumcord.patcher[patchType](func, parent, handler));
            },
            uninject: (_id) => {
                const uninjector = uninjectors.get(_id);
                if (!uninjector) return false;

                uninjector();
                return true;
            },
            // TODO: Polyfill all the "extra" stuff that's in GM's patcher, see https://github.com/GooseMod/GooseMod/tree/master/src/util/patcher
            internalMessage: internalMessage,
            commands: {
                // TODO: Arguments are broken, fix them
                add: (name, description, execute, options = []) => registeredCommands.set(name, cumcord.commands.addCommand({
                    name: name,
                    description: description,
                    args: options,
                    handler: execute
                })),
                remove: (name) => registeredCommands.get(name)(),
            }
        },
        webpackModules: {
            all: () => Object.values(cumcord.modules.webpack.modules).map((m) => m.exports),
            common: cumcord.modules.common,
            find: cumcord.modules.webpack.find,
            findAll: cumcord.modules.webpack.findAll,
            findByDisplayName: cumcord.modules.webpack.findByDisplayName,
            findByDisplayNameAll: cumcord.modules.webpack.findByDisplayNameAll,
            findByModuleId: (id) => cumcord.modules.webpack.modules[id],
            findByProps: cumcord.modules.webpack.findByProps,
            findByPropsAll: cumcord.modules.webpack.findByPropsAll,
            findByPrototypes: cumcord.modules.webpack.findByPrototypes,
        },
        settings: {
            Items: {
                divider: Divider,
                toggle: Toggle,
                "text-and-child": TextAndChild,
                "text-and-button": TextAndButton
            }
        },
        reactUtils: {
            findInReactTree: cumcord.utils.findInReactTree,
            findInTree: cumcord.utils.findInTree,
            getNodeInternals: (node) => node._reactInternalFiber || node._reactInternals,
            getOwnerInstance: cumcord.utils.getOwnerInstance,
            getReactInstance: cumcord.utils.getReactInstance,
        },
        showToast: (text, options) => {
            // TODO: Actually return the toast's element if possible
            const toastElem = document.createElement("div");
            const closeFunc = cumcord.ui.toasts.showToast({
                title: text, 
                content: options?.subtext || "", 
                duration: options?.duration || 3000,
            });
            return { toastElem, closeFn: closeFunc };
        },
        _SAPPHIRE: true
    }

    return () => { if(window.goosemod?._SAPPHIRE) delete window.goosemod };
}