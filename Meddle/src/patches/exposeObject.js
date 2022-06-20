import { persist } from "@cumcord/pluginData";
import * as modules from "../WPMODULES";

const apiObject = {
    modules: {
        ...modules,
    }
}

export default function exposeObject() {
    if(persist.ghost["generalExposeObject"] && !window.Meddle) {
        window.Meddle = apiObject;
    } else if (!persist.ghost["generalExposeObject"] && window.Meddle) {
        delete window.Meddle;
    }
}