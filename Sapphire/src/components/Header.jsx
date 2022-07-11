import { FormTitle, /* Margins, Tooltip, Science */ } from "../WPMODULES";

export default function SettingsButton({ text, id }) {
    return (
        <FormTitle tag="h5" id={id}>
            {text}
        </FormTitle>
    );
}
