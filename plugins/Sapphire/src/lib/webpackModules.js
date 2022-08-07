import webpack from "@cumcord/modules/webpack";
import common from "@cumcord/modules/common";

// Some of this is sourced from https://github.com/GooseMod/GooseMod/blob/master/src/util/discord/webpackModules.js since I simply could not get my own method working

const all = () => Object.keys(webpack.modules).map((x) => webpack.modules[x].exports).filter((x) => x);

const wrapFilter = (filter) => (mod) => {
    try {
        return filter(mod);
    } catch {
        return false;
    }
};

const find = (_filter, tryDefault = true) => {
    const filter = wrapFilter(_filter);

    for (const m of all()) {
        if (tryDefault && m.default && filter(m.default)) return m.default;
        if (filter(m)) return m;
    }
};

const findAll = (_filter, tryDefault = true) => {
    const filter = wrapFilter(_filter);
    const out = [];

    for (const m of all()) {
        if (tryDefault && m.default && filter(m.default)) out.push(m.default);
        if (filter(m)) out.push(m);
    }

    return out;
};

export default {
    all: all,
    common: common,
    find: find,
    findAll: findAll,
    find: find,
    findAll: findAll,
    findByDisplayName: webpack.findByDisplayName,
    findByDisplayNameAll: webpack.findByDisplayNameAll,
    findByModuleId: (id) => webpack.modules[id],
    findByProps: webpack.findByProps,
    findByPropsAll: webpack.findByPropsAll,
    findByPrototypes: webpack.findByPrototypes,
};
