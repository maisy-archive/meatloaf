import { React } from "@cumcord/modules/common";

import { webpackModules } from "@cumcord/modules";
const TextArea = webpackModules.findByDisplayName("TextArea");

import { injectQuickCSS, unpatchAllQuickCSS } from "../util";

class QuickCSSInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            updatable: false,
            name: props.name,
            value: props.value
        };
    }

    setCSS(value){
        this.setState({
            value: value
        });
    }

    render() {
        return(
            <TextArea
                rows={20}
                value={this.state.value}
                onChange={e => { unpatchAllQuickCSS(); injectQuickCSS(e); this.setCSS(e) }}
            />
        )
    };
};

export default QuickCSSInput;