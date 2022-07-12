import getGoosemodObj from "./getGoosemodObj";

const oscillationInTheClub = eval;
const gmObj = getGoosemodObj();

export default function loadTopaz() {
  const fW = new Proxy(window, {
    get(target, prop) {
      if (prop === "goosemod") {
        return gmObj;
      }

      return Reflect.get(target, prop);
    },
  });

  fetch("https://goosemod.github.io/topaz/out.js").then(async (res) =>
    oscillationInTheClub(`(window, goosemod) => ` + (await res.text()))(fW, gmObj)
  );
}
