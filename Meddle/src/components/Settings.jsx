import { findByDisplayName, findByProps } from "@cumcord/modules/webpack";

const FormTitle = findByDisplayName("FormTitle"),
      FormText  = findByDisplayName("FormText");

export default function Settings(props) {
    return (
        <div className="beef-meddle-settings">
            <FormTitle tag="h1">Meddle</FormTitle>
            <FormText>A tool for those who like to mess with the Maze.</FormText>
        </div>
    );
}
