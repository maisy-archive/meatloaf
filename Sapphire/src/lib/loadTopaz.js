export default function loadTopaz() {
    (async() => { (1, eval)(await (await fetch('https://goosemod.github.io/topaz/out.js', { cache: 'no-store' })).text()); })();

    return () => { if (window.topaz) { window.topaz.purge(); delete window.topaz } };
}