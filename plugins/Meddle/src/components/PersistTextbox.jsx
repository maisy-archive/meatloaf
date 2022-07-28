import { SText } from "cumcord-tools";

export default function PersistTextbox({ k, depends, children }) {
    return (
        <div class="beef-meddle-persist-textbox-wrapper">
            <SText
                k={k}
                depends={depends}
            >
                {children}
            </SText>
        </div>
    );
}