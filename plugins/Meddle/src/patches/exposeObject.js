import { persist } from "@cumcord/pluginData";
import * as modules from "../WPMODULES";

const apiObject = {
    modules: {
        ...modules,
    }
}

// TODO: Make this better

function unExposeObject() {
    delete window.Meddle;
}

export default function exposeObject() {
    if(persist.ghost["generalExposeObject"] && !window.Meddle) {
        window.Meddle = apiObject;
    } else if (!persist.ghost["generalExposeObject"] && window.Meddle) {
        unExposeObject();
    }

    return unExposeObject;
}