import { findByDisplayName } from "@cumcord/modules/webpack";

const FormTitle = findByDisplayName('FormTitle');

export function Settings(props) {
    return (
        <>
            <FormTitle tag="h2">Themer</FormTitle>
        </>
    )
}