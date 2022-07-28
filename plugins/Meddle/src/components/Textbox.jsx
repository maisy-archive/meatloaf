import { FormText, TextInput } from "../WPMODULES";

export default function Textbox({ value, onChange, variant="column", fixedWidth, children }) {
    if (variant !== "column" && variant !== "row") { throw new Error("Component Error - Textbox: variant should be column (default) or row"); }

    return (
        <div class={variant === "column" ? "beef-meddle-column" : "beef-meddle-row beef-meddle-center"}>
            <FormText style={fixedWidth ? { width: fixedWidth } : {}}>{children}</FormText>
            <TextInput value={value} onChange={onChange} />
        </div>
    );
}