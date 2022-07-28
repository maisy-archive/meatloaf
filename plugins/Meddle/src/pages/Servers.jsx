import { persist } from "@cumcord/pluginData";
import { joinGuild, FormDivider } from "../WPMODULES";

import PersistTextbox from "../components/PersistTextbox";
import PersistSwitch from "../components/PersistSwitch";
import Button from "..//components/Button";

export default function ServerSettings(props) {
    return (
        <div>
            <PersistTextbox k="serverId">Server ID</PersistTextbox>

            <FormDivider className="beef-meddle-divider" />
            
            <div class="beef-meddle-row">
                <PersistSwitch k="serverLurkMode">Join as lurker</PersistSwitch>
                <Button
                    style={{ marginLeft: "auto" }}
                    text="Join"
                    size="SMALL"
                    func={async () => {
                        joinGuild(persist.ghost.serverId, { lurker: persist.ghost.serverLurkMode });
                    }}
                />
            </div>
        </div>
    );
}
