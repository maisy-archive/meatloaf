import { Card, FormTitle, FormText, BadgeClasses } from "../WPMODULES";

export default function ExperimentCard({ id, experiment }) {
    return (
        <Card className="beef-experiments-card">
            <div className="beef-experiments-row">
                <FormTitle style={{ margin: "unset" }} tag="h3">{experiment.title}</FormTitle>
                <span className={[BadgeClasses.textBadge, BadgeClasses.baseShapeRound].join(" ")} style={{ backgroundColor: "hsl(235, calc(var(--saturation-factor, 1) * 85.6%), 64.7%)", marginLeft: "auto" }}>{experiment.type}</span>
            </div>
            <FormText>{id}</FormText>
        </Card>
    );
}
