import { findByProps, findByDisplayName } from "@cumcord/modules/webpack"
const Button    = findByProps("Sizes", "Colors", "Looks", "DropdownSizes"),
      Card      = findByDisplayName("Card"),
      FormText  = findByDisplayName("FormText"),
      FormTitle = findByDisplayName("FormTitle");

export default function SettingsCard({ title, description, buttonText, buttonFunc }) {
    return (
        <>
            <Card
                type={Card.Types.PRIMARY}
                className="beef-ms-settings-card"
            >
                <FormTitle tag={FormTitle.Tags.H1}>{title}</FormTitle>
                <FormText type={FormText.Types.DESCRIPTION}>{description}</FormText>
                <Button
                    color={Button.Colors.BRAND}
                    size={Button.Sizes.SMALL}
                    className="beef-ms-settings-card-button"
                    onClick={buttonFunc}
                >
                    {buttonText}
                </Button>
            </Card>
        </>
    )
}