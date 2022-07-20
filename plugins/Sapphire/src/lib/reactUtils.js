import utils from "@cumcord/utils";

export default {
    findInReactTree: utils.findInReactTree,
    findInTree: utils.findInTree,
    getNodeInternals: (node) => node._reactInternalFiber || node._reactInternals,
    getOwnerInstance: utils.getOwnerInstance,
    getReactInstance: utils.getReactInstance,
}