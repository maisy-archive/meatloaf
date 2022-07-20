import webpack from "@cumcord/modules/webpack";
import common from "@cumcord/modules/common";

export default {
    all: () => Object.values(webpack.modules).map((m) => m.exports),
    common: common,
    find: webpack.find,
    findAll: webpack.findAll,
    findByDisplayName: webpack.findByDisplayName,
    findByDisplayNameAll: webpack.findByDisplayNameAll,
    findByModuleId: (id) => webpack.modules[id],
    findByProps: webpack.findByProps,
    findByPropsAll: webpack.findByPropsAll,
    findByPrototypes: webpack.findByPrototypes,
};