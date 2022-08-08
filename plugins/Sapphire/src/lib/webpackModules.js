import webpack from "@cumcord/modules/webpack";
import common from "@cumcord/modules/common";

// Some of this is similar to https://github.com/GooseMod/GooseMod/blob/master/src/util/discord/webpackModules.js for obvious reasons

const all = () => Object.keys(webpack.modules).map((x) => webpack.modules[x].exports).filter((x) => x);

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
        React: common.React,
        ReactDOM: common.ReactDOM,
        Flux: common.Flux,
        FluxDispatcher: common.FluxDispatcher,
        i18n: common.i18n,
        channels: common.channels,
        constants: common.constants,
    },
    find: (filter, tryDefault = true) => doFind(filter, tryDefault)[0],
    findAll: (filter, tryDefault = true) => doFind(filter, tryDefault),
    findByDisplayName: webpack.findByDisplayName,
    findByDisplayNameAll: webpack.findByDisplayNameAll,
    findByModuleId: (id) => webpack.modules[id],
    findByProps: webpack.findByProps,
    findByPropsAll: webpack.findByPropsAll,
    findByPrototypes: webpack.findByPrototypes,
};
