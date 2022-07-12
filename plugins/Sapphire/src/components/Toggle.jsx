import { SwitchItem, Markdown } from "../WPMODULES";

export default function Toggle({text, subtext, isToggled, onToggle, disabled}) {
    const [val, setVal] = React.useState(isToggled() || false);
    return (
        <SwitchItem
            value={val}
            note={
                <Markdown>
                    {subtext}
                </Markdown>
            }
            disabled={disabled ? disabled() : false}
            onChange={(v) => {
                setVal(v);
                onToggle(v);
            }}
        >
            {text}
        </SwitchItem>
    );
}
