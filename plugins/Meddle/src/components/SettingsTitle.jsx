import { FormTitle, FormText } from "../WPMODULES";

export default function SettingsTitle(props) {
    return (
        <div>
            <FormTitle style={{ marginBottom: "0.2rem" }} tag="h1">Meddle</FormTitle>
            <FormText>
                A tool for those who like to mess with the Maze.
            </FormText>
        </div>
    );
}
