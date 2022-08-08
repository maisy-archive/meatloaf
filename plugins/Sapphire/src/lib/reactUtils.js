import { findInReactTree, findInTree, getOwnerInstance, getReactInstance } from "@cumcord/utils";

export default {
    findInReactTree: findInReactTree,
    findInTree: findInTree,
    getNodeInternals: (node) => node._reactInternalFiber || node._reactInternals,
    getOwnerInstance: getOwnerInstance,
    getReactInstance: getReactInstance,
}