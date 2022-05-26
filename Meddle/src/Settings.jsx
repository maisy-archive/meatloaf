import { ErrorBoundary } from "@cumcord/ui/components";

import HeaderBar from "./components/HeaderBar";
import TabDispatch from "./components/TabDispatch";
import TabServers from "./components/TabServers";

export default function Settings(props) {
    return (
        <ErrorBoundary>
            <div className="beef-meddle-settings">
                <HeaderBar
					items={[
						{ text: "FluxDispatcher", component: TabDispatch },
                        { text: "Servers", component: TabServers },
					]}
				/>
            </div>
        </ErrorBoundary>
    );
}
