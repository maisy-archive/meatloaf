import { SSwitch, SText } from "cumcord-tools";
import { FormTitle } from "../WPMODULES";

export default function DispatchSettings(props) {
    return (
        <div className="beef-meddle-settings-section">
            <FormTitle tag="h3">FluxDispatcher</FormTitle>
            <SSwitch k="dispatchLogEnabled">Log all FluxDispatcher calls to console</SSwitch>
            <SSwitch k="dispatchWhiteListMode">Dispatch logger whitelist mode</SSwitch>
            <SText
                k="dispatchIgnoreList"
            >
                FluxDispatcher calls to hide when not in whitelist mode (comma separated)                
            </SText>

            <SText
                k="dispatchWhiteList"
            >
                FluxDispatcher calls to allow when in whitelist mode (comma separated)
            </SText>
        </div>
    );
}
