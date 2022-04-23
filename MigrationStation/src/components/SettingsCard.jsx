import { Card, FormText, FormTitle } from "../WPMODULES";

export default function SettingsCard({ children, title, description }) {
    return (
        <>
            <Card
                type={Card.Types.PRIMARY}
                className="beef-ms-settings-card"
            >
                <FormTitle tag={FormTitle.Tags.H1}>{title}</FormTitle>
                <FormText className="beef-ms-settings-card-description" type={FormText.Types.DESCRIPTION}>{description}</FormText>
                {children}
            </Card>
        </>
    )
}