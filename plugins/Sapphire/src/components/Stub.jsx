import { WarningCircle } from "../WPMODULES";

export default function Stub({ componentName }) {
    return (
        <div className="beef-sapphire-stub">
            <WarningCircle /><span>This component is a stub! Name: {componentName}</span>
        </div>
    );
}
