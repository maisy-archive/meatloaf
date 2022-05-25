import { SSwitch, SText } from "cumcord-tools";

export default function DispatchSettings(props) {
    return (
        <div className="beef-meddle-settings-tab">
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
