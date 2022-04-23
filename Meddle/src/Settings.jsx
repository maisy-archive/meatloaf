import { FormDivider } from "./WPMODULES";

import { ErrorBoundary } from "@cumcord/ui/components";

import SettingsTitle from "./components/SettingsTitle";
import DispatchSettings from "./components/DispatchSetttings";

export default function Settings(props) {
    return (
        <ErrorBoundary>
            <div className="beef-meddle-settings">
                <SettingsTitle />

                <FormDivider className="beef-meddle-settings-divider" />

                <DispatchSettings />
            </div>
        </ErrorBoundary>
    );
}
