import { persist } from "@cumcord/pluginData";
import { getChannel, getGuild, getCurrentUser, getUser, getMessage, getToken } from "../WPMODULES";

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