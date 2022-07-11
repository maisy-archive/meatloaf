import { SText } from "cumcord-tools";

export default function Textbox({ k, depends, children }) {
    return (
        <div class="beef-meddle-textbox-wrapper">
            <SText
                k={k}
                depends={depends}
            >
                {children}
            </SText>
        </div>
    );
}