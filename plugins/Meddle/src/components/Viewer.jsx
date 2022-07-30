import { FormText, FormTitle } from "../WPMODULES";

export default function Viewer({ object }) {
    if (typeof object === "object") {
        return (
            <div>
                <div className="beef-meddle-column">
                    {Object.entries(object).map(([key, value]) => {
                        let finalValue;

                        switch(typeof(value)) {
                            case "string":
                                finalValue = value.length > 0 ? value : "empty string";
                            break;
                            case "number":
                                finalValue = value.toString();
                            break;
                            case "boolean":
                                finalValue = value.toString();
                            break;
                            case "object":
                                finalValue = JSON.stringify(value);
                            break;
                            case "undefined":
                                finalValue = "undefined";
                        }

                        return (
                            <div>
                                <FormTitle style={{ textTransform: "none", userSelect: "all" }} tag="h4"><code>{key}</code></FormTitle>
                                <FormText style={{ userSelect: "all" }}><code>{finalValue}</code></FormText>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return <FormText>Unable to resolve given snowflake.</FormText>;
    };
}