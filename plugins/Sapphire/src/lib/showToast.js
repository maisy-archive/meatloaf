import { showToast as _showToast } from "@cumcord/ui/toasts";

export default function showToast(text, options) {
    // TODO: Actually return the toast's element if possible
    const toastElem = document.createElement("div");
    const closeFunc = _showToast({
        title: text, 
        content: options?.subtext || "", 
        duration: options?.duration || 3000,
    });
    return { toastElem, closeFn: closeFunc };
}