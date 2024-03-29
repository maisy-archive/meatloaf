import { FormDivider, TabBar, TabBarStyles, TabBarClasses } from "../WPMODULES";
import SettingsTitle from "./SettingsTitle";
import { ErrorBoundary } from "@cumcord/ui/components";

// Component taken from Yellowsink's Cumstain, cheers!

export default function HeaderBar({ items }) {
	let [current, goTo] = React.useState(0);

	return (
		<div>
            <div className="beef-meddle-card">
                <SettingsTitle />
                <FormDivider className="beef-meddle-divider" />
                <TabBar
                    type={TabBarStyles.topPill}
                    className={TabBarClasses.tabBar}
                    selectedItem={current}
                    onItemSelect={goTo}
                >
                    {items.map((tab, index) => (
                        <TabBar.Item id={index}>{tab.text}</TabBar.Item>
                    ))}
                </TabBar>
            </div>

			<FormDivider className="beef-meddle-divider" />

            <div className="beef-meddle-settings-section beef-meddle-card">
                <ErrorBoundary>
                    {React.createElement(items[current].component, { goTo })}
                </ErrorBoundary>
            </div>
		</div>
	);
};