import { FormTitle, FormText } from "../WPMODULES";

export default function SettingsTitle(props) {
    return (
        <div className="beef-meddle-settings-section">
            <div className="beef-meddle-settings-title">
                <FormTitle tag="h1">Meddle</FormTitle>
                <FormText>
                    A tool for those who like to mess with the Maze.
                </FormText>
                <FormText className="beef-meddle-settings-title-subtext">
                    Currently very WIP
                </FormText>
            </div>
        </div>
    );
}
