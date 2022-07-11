import { persist } from "@cumcord/pluginData";
import { Checkbox } from "../WPMODULES";

export default function Nestbox({ children, value, checkboxArgs }) {
    return <Checkbox value={persist.ghost[value]} type="inverted" onChange={() => persist.store[value] = !persist.ghost[value]} {...checkboxArgs}>{ children }</Checkbox>;
}