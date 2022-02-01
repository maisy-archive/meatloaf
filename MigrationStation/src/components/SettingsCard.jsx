import { findByProps, findByDisplayName } from "@cumcord/modules/webpack"
const Button    = findByProps("Sizes", "Colors", "Looks", "DropdownSizes"),
      Card      = findByDisplayName("Card"),
      FormText  = findByDisplayName("FormText"),
      FormTitle = findByDisplayName("FormTitle");

export default function SettingsCard({ title, description, buttonText, buttonColor, buttonSize, buttonLook, buttonFunc }) {
    return (
        <>
            <Card
                type={Card.Types.PRIMARY}
                className="beef-ms-settings-card"
            >
                <FormTitle tag={FormTitle.Tags.H1}>{title}</FormTitle>
                <FormText className="beef-ms-settings-card-description" type={FormText.Types.DESCRIPTION}>{description}</FormText>
                <Button
                    color={Button.Colors[buttonColor] || Button.Colors.BRAND}
                    size={Button.Sizes[buttonSize] || Button.Sizes.SMALL}
                    look={Button.Looks[buttonLook] || Button.Looks.FILLED}
                    className="beef-ms-settings-card-button"
                    onClick={buttonFunc}
                >
                    {buttonText}
                </Button>
            </Card>
        </>
    )
}