import { modules, findByDisplayName, findByDisplayNameAll, findByProps, findByPropsAll, findByPrototypes } from "@cumcord/modules/webpack";
import { React, ReactDOM, Flux, FluxDispatcher, i18n, channels, constants } from "@cumcord/modules/common";

// Some of this is similar to https://github.com/GooseMod/GooseMod/blob/master/src/util/discord/webpackModules.js for obvious reasons

const all = () => Object.keys(modules).map((x) => modules[x].exports).filter((x) => x);

const wrapFilter = (filter) => (mod) => {
    try {
        return filter(mod);
    } catch {
        return false;
    }
};

const doFind = (_filter, tryDefault) => {
    const filter = wrapFilter(_filter);
    const found = [];

    for (const m of all()) {
        if (tryDefault && m.default && filter(m.default)) found.push(m.default);
        if (filter(m)) found.push(m);
    }

    return found;
};

export default {
    all: all,
    common: {
        React: React,
        ReactDOM: ReactDOM,
        Flux: Flux,
        FluxDispatcher: FluxDispatcher,
        i18n: i18n,
        channels: channels,
        constants: constants,
    },
    find: (filter, tryDefault = true) => doFind(filter, tryDefault)[0],
    findAll: (filter, tryDefault = true) => doFind(filter, tryDefault),
    findByDisplayName: findByDisplayName,
    findByDisplayNameAll: findByDisplayNameAll,
    findByModuleId: (id) => modules[id],
    findByProps: findByProps,
    findByPropsAll: findByPropsAll,
    findByPrototypes: findByPrototypes,
};
