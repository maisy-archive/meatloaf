import { FormDivider } from "./WPMODULES";

import { ErrorBoundary } from "@cumcord/ui/components";

import TabBar from "./components/TabBar";
import SettingsTitle from "./components/SettingsTitle";
import TabDispatch from "./components/TabDispatch";

export default function Settings(props) {
    return (
        <ErrorBoundary>
            <div className="beef-meddle-settings">
                <SettingsTitle />
                <FormDivider className="beef-meddle-settings-divider" />

                <TabBar
					items={[
						{ text: "FluxDispatcher", component: TabDispatch },
					]}
				/>
            </div>
        </ErrorBoundary>
    );
}
