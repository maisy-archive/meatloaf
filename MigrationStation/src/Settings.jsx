import { findByProps, findByDisplayName } from "@cumcord/modules/webpack";
import createBackup from "./createBackup";
import downloadFile from "./downloadFile";

const Button    = findByProps("Sizes", "Colors", "Looks", "DropdownSizes"),
      Card      = findByDisplayName("Card"),
      FormText  = findByDisplayName("FormText"),
      FormTitle  = findByDisplayName("FormTitle");

export default function Settings(props) {
    return (
        <>
            <Card
                type={Card.Types.PRIMARY}
                // TODO: STOP USING THIS
                className="formNotice-2nS8ey marginBottom20-315RVT"
            >   
                <FormTitle tag={FormTitle.Tags.H1} style={{marginBottom: "0.25rem"}}>Backup</FormTitle>
                <FormText type={FormText.Types.DESCRIPTION}>Creates a backup of your current installation, including plugins and plugin nests.</FormText>
                <Button
                    color={Button.Colors.BRAND}
                    size={Button.Sizes.SMALL}
                    style={{ left: "90%" }}
                    onClick={async (e) => { downloadFile(JSON.stringify(await createBackup()), "backup.json") }}
                >
                    Backup
                </Button>
            </Card>
        </>
    );
}
