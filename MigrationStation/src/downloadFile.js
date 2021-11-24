// thanks yellowsink lol

export default function downloadFile(data, fileName) {
    let domNode = document.createElement("a");
    domNode.href = `data:,${encodeURIComponent(data)}`;
    domNode.setAttribute("download", fileName);
    domNode.click();
    domNode.remove();
}