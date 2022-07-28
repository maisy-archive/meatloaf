import { Button as _Button } from "../WPMODULES";

export default function Button({ text, color, size, look, func, style }) {
    return (
        <_Button
            style={style}
            color={_Button.Colors[color] || _Button.Colors.BRAND}
            size={_Button.Sizes[size] || _Button.Sizes.SMALL}
            look={_Button.Looks[look] || _Button.Looks.FILLED}
            onClick={func}
        >
            {text}
        </_Button>
    );
}