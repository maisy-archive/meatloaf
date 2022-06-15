import { SSwitch } from "cumcord-tools";
import Textbox from "./Textbox";
import SettingsButton from "./SettingsButton";
import { joinGuild } from "../WPMODULES";

export default function ServerSettings(props) {
    return (
        <div className="beef-meddle-settings-tab">
            <Textbox k="serverId">Server ID</Textbox>

            <SSwitch k="serverLurkMode">Join as lurker</SSwitch>

            <SettingsButton
                text="Join"
                size="MEDIUM"
                func={async () => {
                    joinGuild(persist.ghost.serverId, { lurker: persist.ghost.serverLurkMode });
                }}
            />
        </div>
    );
}
