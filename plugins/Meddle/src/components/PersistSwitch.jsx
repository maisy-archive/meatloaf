import { SSwitch } from "cumcord-tools";

export default function PersistSwitch({ k, depends, children }) {
    return (
        <div class="beef-meddle-persist-switch-wrapper">
            <SSwitch k={k} depends={depends}>{children}</SSwitch>
        </div>
    );
}