import { FormText, Switch } from "../WPMODULES";

// "Why not use Discord's?"
// I don't like it. :chad:

export default function SwitchItem({ text, subtext, checked, onChange }) {
    return (
        <div class="beef-meddle-switch">
            <Switch
                checked={checked}
                onChange={onChange}
            />
            <FormText>
                {text}
                <FormText class="beef-meddle-subtext">
                    {subtext}
                </FormText>
            </FormText>
        </div>
    );
}


