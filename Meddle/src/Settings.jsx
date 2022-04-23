import { FormTitle, FormText, FormDivider, Button, Switch } from "./WPMODULES";

import { persist } from "@cumcord/pluginData";
import { ErrorBoundary } from "@cumcord/ui/components";
import { dispatchLogs } from "./patches/dispatchLogger";

// yellowsink bless
const Option = ({ k, children }) => (
    <div className="beef-meddle-settings-row">
        <Switch
            checked={persist.ghost[k]}
            onChange={(v) => (persist.store[k] = v)}
        />
        <FormText>{children}</FormText>
    </div>
);

export default function Settings(props) {
    return (
        <ErrorBoundary>
            <div className="beef-meddle-settings">
                <div className="beef-meddle-settings-title">
                    <FormTitle tag="h1">Meddle</FormTitle>
                    <FormText>
                        A tool for those who like to mess with the Maze.
                    </FormText>
                    <FormText className="beef-meddle-settings-title-subtext">
                        Currently very WIP
                    </FormText>

                    <FormDivider />
                </div>

                <Option k="logDispatch">Log all FluxDispatcher calls</Option>
            </div>

            <Button
                color={Button.Colors.BRAND}
                size={Button.Sizes.SMALL}
                look={Button.Looks.FILLED}
                className="beef-meddle-settings-button"
                onClick={() => {
                    console.log(dispatchLogs);
                }}
            >
                Show all logged FluxDispatcher calls in console
            </Button>
        </ErrorBoundary>
    );
}
