import { Flex, Margins, FormItem, FormClasses, FormTextClasses, FormText, Markdown } from "../WPMODULES";
import Divider from "./Divider";

export default function TextAndChild({ children, text, subtext }) {
    return (
        <FormItem
            className={[Flex.Direction.VERTICAL, Flex.Justify.START, Flex.Align.STRETCH, Flex.Wrap.NO_WRAP, Margins.marginBottom20].join(" ")}
        >
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div>
                    <div className={FormClasses.labelRow} style={{ marginBottom: "4px" }}>
                        <label className={FormClasses.title}>
                            {text}
                        </label>
                    </div>
                    <FormText
                        className={FormTextClasses.description}
                    >
                        <Markdown className="settings-note-markdown">
                            {subtext}
                        </Markdown>
                    </FormText>
                </div>
                {children}
            </div>
            <Divider />
        </FormItem>
    );
}