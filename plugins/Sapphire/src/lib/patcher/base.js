import patcher from "@cumcord/patcher";

const uninjectors = new Map();

export function patch(parent, func, handler, before = false, instead = false) {
    const patchType = before ? "before" : instead ? "instead" : "after";

    return patcher[patchType](func, parent, handler);
}

export function inject(_id, parent, func, handler, before = false) {
    const patchType = before ? "before" : "after";

    uninjectors.set(_id, patcher[patchType](func, parent, handler));
}

export function uninject(_id) {
    const uninjector = uninjectors.get(_id);
    if (!uninjector) return false;

    uninjector();
    return true;
}
