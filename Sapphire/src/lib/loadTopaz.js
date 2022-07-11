const oscillationInTheClub = eval;

export default function loadTopaz() {
    fetch("https://goosemod.github.io/topaz/out.js")
        .then(async (res) => oscillationInTheClub(await res.text()));

    return () => { if (window.topaz) { window.topaz.purge(); delete window.topaz } };
}