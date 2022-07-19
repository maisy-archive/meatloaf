import TextAndChild from "./TextAndChild";
import { Button } from "../WPMODULES";

export default function TextAndButton({ text, subtext, danger, disabled, onclick, buttonText }) {
    return (
        <TextAndChild text={text} subtext={subtext}>
            <Button
                color={danger ? Button.Colors.RED : Button.Colors.BRAND}
                disabled={disabled}

                onClick={() => onclick()}
            >
                {buttonText}
            </Button>
        </TextAndChild>
    );
}