import { FormText, Markdown } from "../WPMODULES";

export default function SubText({ text }) {
    return (
        <FormText type="description">
            <Markdown>{text}</Markdown>
        </FormText>
    );
}
