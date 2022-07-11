// thanks yellowsink lol
export function saveFile(data, fileName) {
    let domNode = document.createElement("a");
    domNode.href = `data:,${encodeURIComponent(data)}`;
    domNode.setAttribute("download", fileName);
    domNode.click();
    domNode.remove();
}

export async function openFile() {
    return new Promise((resolve, reject) => {
        let domNode = document.createElement("input");
        domNode.setAttribute("accept", "application/json");
        domNode.setAttribute("type", "file");

        domNode.addEventListener("change", async () => {
            resolve(await domNode.files[0].text());
        }, false);

        domNode.click();
    });
}