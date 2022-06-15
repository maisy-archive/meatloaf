import { Button } from "../WPMODULES";

export default function SettingsButton({ text, color, size, look, func }) {
    return (
        <Button
            color={Button.Colors[color] || Button.Colors.BRAND}
            size={Button.Sizes[size] || Button.Sizes.SMALL}
            look={Button.Looks[look] || Button.Looks.FILLED}
            className="beef-ms-settings-card-button"
            onClick={func}
        >
            {text}
        </Button>
    );
}