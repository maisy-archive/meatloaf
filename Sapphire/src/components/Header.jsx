import { FormTitle, /* Margins, Tooltip, Science */ } from "../WPMODULES";

export default function Header({ text, id }) {
    return (
        <FormTitle tag="h5" id={id}>
            {text}
        </FormTitle>
    );
}
