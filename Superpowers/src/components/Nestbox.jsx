import { findByDisplayName } from "@cumcord/modules/webpack";
import { persist } from "@cumcord/pluginData";
const Checkbox = findByDisplayName("Checkbox");

export default function Nestbox({ children, value, checkboxArgs }) {
    return <Checkbox value={persist.ghost[value]} type="inverted" onChange={() => persist.store[value] = !persist.ghost[value]} {...checkboxArgs}>{ children }</Checkbox>;
}