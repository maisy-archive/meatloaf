export function injectQuickCSS(css) {
    const style = document.createElement("style");
    style.className = "CUMCORD_INJECTED_CSS CUMCORD_QUICK_CSS";
    style.textContent = css;
    document.head.appendChild(style);
  
    return () => { style.remove() }
}

export function unpatchAllQuickCSS() {
    for (const style of document.querySelectorAll(".CUMCORD_QUICK_CSS")) {
        style.remove();
    }
}

export function getQuickCSS() {
    let quickCSS = document.querySelector('.CUMCORD_QUICK_CSS');
    if (quickCSS) {
        return quickCSS.textContent;
    } else {
        return;
    }
}