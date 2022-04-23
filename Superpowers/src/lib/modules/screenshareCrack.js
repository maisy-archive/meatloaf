import { stream } from "../../WPMODULES";
const { ApplicationStreamSettingRequirements } = stream; // original

export default function screenshareCrack(enabled) {
    if(enabled === true) {
        stream.ApplicationStreamSettingRequirements = ApplicationStreamSettingRequirements.map(obj => {return  {resolution: obj.resolution, fps: obj.fps}});
    } else {
        stream.ApplicationStreamSettingRequirements = ApplicationStreamSettingRequirements;
    }
}