import { findByProps } from "@cumcord/modules/webpack";

const Button = findByProps(
    "Sizes",
    "Colors",
    "Looks",
    "DropdownSizes"
);
const { openModal } = findByProps("openModal", "openModalLazy");

import DiscoinModal from "./modals/discoins/Modal";

export function Settings(props) {
    return (
        <>
            <Button 
                size="sizeMedium-1AC_Sl"
                color="colorBrand-3pXr91"
                onClick={DiscoinModal()}
            >
                Open Discoin Modal
            </Button>         
        </>
    )
}