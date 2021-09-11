import { webpackModules } from "@cumcord/modules";

const FormTitle = webpackModules.findByDisplayName("FormTitle");
const FormDivider =  webpackModules.findByDisplayName("FormDivider");
const HelpMessage = webpackModules.findByDisplayName("HelpMessage");

import QuickCSSInput from "./QuickCSSInput.jsx";

let currentCSS;

export default (props) => {
    console.log(currentCSS)
    return (
        <div className="cumcord-quickcss">
            <FormTitle className="cumcord-quickcss-formtitle" tag="h1">Quick CSS</FormTitle>
            <HelpMessage className="cumcord-quickcss-helpmessage" messageType={0}>This does not save! Cumcord does not have a storage API that plugins can use, yet. When that is available, I'll update this plugin accordingly.</HelpMessage>
            <FormDivider className="cumcord-quickcss-formdivider"/>
            <QuickCSSInput className="cumcord-quickcss-input" />
        </div>
    );
};