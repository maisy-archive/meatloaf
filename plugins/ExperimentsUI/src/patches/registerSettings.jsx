import Settings from "../Settings";
import { registerSection } from "@cumcord/ui/userSettings"

export default () => {
    return registerSection("BEEF_EXPERIMENTS", "ExperimentsUI", Settings)
};
