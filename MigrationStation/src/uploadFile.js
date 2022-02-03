export default function uploadFile() {
    let fileList;
    let domNode = document.createElement("input");
    domNode.setAttribute("accept", "application/json");
    domNode.setAttribute("type", "file");

    domNode.addEventListener("change", handleFiles, false);

    domNode.click();

    function handleFiles() {
        fileList = this.files;

        domNode.remove();
        fileList[0].text().then((text) => { return text; });
    }
}