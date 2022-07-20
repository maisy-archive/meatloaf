import { changeLog, showChangeLog, hideChangeLog } from "../WPMODULES";

let originalChangelog = Object.assign({}, changeLog);

function setChangelog(changelog) {
    const changelogToAssign = {
        template: "standard",
        revision: "1",
        locale: "en-gb", /* bri'ish */
        ...changelog,
    };

    for (let k of Object.keys(changeLog)) {
        delete changeLog[k];
    };

    for (let k of Object.keys(changelogToAssign)) {
        changeLog[k] = changelogToAssign[k];
    }
}

export default {
    showChangelog: () => showChangeLog(),
    hideChangelog: () => hideChangeLog(),
    setChangelog: setChangelog,
    resetChangelog: () => setChangelog(originalChangelog),
}