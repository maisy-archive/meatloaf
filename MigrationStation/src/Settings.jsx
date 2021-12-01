import { findByProps } from "@cumcord/modules/webpack";
import createBackup from "./createBackup";
import downloadFile from "./downloadFile";

const Button = findByProps("Sizes", "Colors", "Looks", "DropdownSizes");

export default function Settings(props) {
    return (
        <>
            <Button
                color={Button.Colors.BRAND}
                size={Button.Sizes.MEDIUM}
                onClick={async (e) => { downloadFile(JSON.stringify(await createBackup()), "backup.json") }}
            >
                Test backup :)
            </Button>
        </>
    );
}
