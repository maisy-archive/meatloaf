import { persist } from "@cumcord/pluginData";
import { batchFind } from "@cumcord/modules/webpack";

const [
    { getChannel },
    { getGuild },
    { getCurrentUser },
    { getUser },
    { getMessage },
    { getToken },
] = batchFind(({ findByProps, findByDisplayName, findByDisplayNameAll }) => {
    findByProps("hasChannel");
    findByProps("getGuild");
    findByProps("getCurrentUser");
    findByProps("getUser");
    findByProps("getMessage");
    findByProps("getToken");
});

const apiObject = {
    modules: {
        getChannel,
        getGuild,
        getCurrentUser,
        getUser,
        getMessage,
        getToken,
    },
}

// TODO: Make this better

export default function exposeObject() {
    if(persist.ghost["generalExposeObject"] && !window.Meddle) {
        window.Meddle = apiObject;
    } else if (!persist.ghost["generalExposeObject"] && window.Meddle) {
        delete window.Meddle;
    }

    return () => { delete window.Meddle };
}