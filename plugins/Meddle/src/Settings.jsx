import { ErrorBoundary } from "@cumcord/ui/components";

import HeaderBar from "./components/HeaderBar";

import General from "./pages/General";
import Dispatch from "./pages/Dispatch";
import Servers from "./pages/Servers";
import Spotify from "./pages/Spotify";
import Snowflake from "./pages/Snowflake";

export default function Settings(props) {
    return (
        <ErrorBoundary>
            <div className="beef-meddle-settings">
                <HeaderBar
					items={[
                        { text: "General", component: General },
						{ text: "FluxDispatcher", component: Dispatch },
                        { text: "Servers", component: Servers },
                        { text: "Spotify", component: Spotify },
                        { text: "Snowflake", component: Snowflake },
					]}
				/>
            </div>
        </ErrorBoundary>
    );
}
