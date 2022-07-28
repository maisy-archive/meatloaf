import { FormDivider } from "../WPMODULES";

import PersistTextbox from "../components/PersistTextbox";
import PersistSwitch from "../components/PersistSwitch";

export default function DispatchSettings(props) {
    return (
        <div>
            <div class="beef-meddle-column">
                <PersistSwitch k="dispatchLogEnabled">Log all FluxDispatcher calls to console</PersistSwitch>
                <PersistSwitch k="dispatchWhiteListMode">Dispatch logger whitelist mode</PersistSwitch>
            </div>

			<FormDivider className="beef-meddle-divider" />

            <div class="beef-meddle-column">
                <PersistTextbox
                    k="dispatchIgnoreList"
                >
                    FluxDispatcher calls to hide when not in whitelist mode (comma separated)
                </PersistTextbox>

                <PersistTextbox
                    k="dispatchWhiteList"
                >
                    FluxDispatcher calls to allow when in whitelist mode (comma separated)
                </PersistTextbox>
            </div>
        </div>
    );
}
