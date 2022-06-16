import { FormText, FormDivider } from "../WPMODULES";
import SettingsTitle from "./SettingsTitle";
import { ErrorBoundary } from "@cumcord/ui/components";

// Component taken from Yellowsink's Cumstain, cheers!

export default function HeaderBar({ items }) {
	let [current, goTo] = React.useState(0);

	return (
		<div>
            <div className="beef-meddle-settings-section">
                <SettingsTitle />
                <FormDivider className="beef-meddle-settings-divider" />
                <div className="beef-meddle-tabbar">
                    {items.map((e, i) => (
                        <button
                            className={
                                "beef-meddle-button" +
                                (i === current ? " beef-meddle-selected" : "")
                            }
                            onClick={() => goTo(i)}
                        >
                            <FormText>{e.text}</FormText>
                        </button>
                    ))}
                </div>
            </div>

			<FormDivider className="beef-meddle-settings-divider" />

            <div className="beef-meddle-settings-section beef-meddle-tabbar-content">
                <ErrorBoundary>
                    {React.createElement(items[current].component, { goTo })}
                </ErrorBoundary>
            </div>
		</div>
	);
};