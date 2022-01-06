export default (type, title, content) => {
    console[type](`%c${title}%c`, "color: orange; font-weight: bold;", "", content);
}