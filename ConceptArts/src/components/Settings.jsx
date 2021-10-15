import { findByDisplayName } from "@cumcord/modules/webpack";
const DropdownButton = findByDisplayName("DropdownButton");

export function Settings(props) {
    return (
        <>
            <DropdownButton 
                size="sizeMedium-1AC_Sl"
                color="colorBrand-3pXr91"
            >
                Open Discoin Modal
            </DropdownButton>         
        </>
    )
}