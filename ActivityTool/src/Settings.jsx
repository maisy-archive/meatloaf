import { findByDisplayName } from "@cumcord/modules/webpack";
import data from "@cumcord/pluginData";

const   SwitchItem = findByDisplayName("SwitchItem"),
        FormText = findByDisplayName("FormText");

// TODO: I can probably do this better
export default function Settings(props) {
    const [persistentActivityToggle, setPersistentActivityToggle] = React.useState(data.persist.ghost.settings.persistentActivities || false);

    return (
        <>
            <SwitchItem
                onChange={(e) => { setPersistentActivityToggle(e); data.persist.store.settings.persistentActivities = e;   }}
                value={persistentActivityToggle}
            >
                Persistent Activities
                <FormText>When enabled, patch Dispatch to make activities persist when the user leaves the VC, including when removed by a moderator.</FormText>
            </SwitchItem>
        </>
    );
}