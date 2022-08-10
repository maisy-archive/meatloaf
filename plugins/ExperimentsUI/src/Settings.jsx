import { ErrorBoundary } from "@cumcord/ui/components";
import ExperimentCard from "./components/ExperimentCard";

import { FormTitle, getRegisteredExperiments } from "./WPMODULES";

export default function Settings(props) {
    return (
        <ErrorBoundary>
            <div className="beef-experiments-settings">
                <FormTitle tag="h1">ExperimentsUI</FormTitle>
                <div className="beef-experiments-column">
                    {Object.entries(getRegisteredExperiments()).map(([id, experiment]) => {
                        return (
                            <ExperimentCard id={id} experiment={experiment} />
                        );
                    })}
                </div>
            </div>
        </ErrorBoundary>
    );
}
