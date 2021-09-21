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
            <HelpMessage className="cumcord-quickcss-helpmessage" messageType={0}>This does not save! Yes, I know, the storage API is available now, but I'm lazy!</HelpMessage>
            <FormDivider className="cumcord-quickcss-formdivider"/>
            <QuickCSSInput className="cumcord-quickcss-input" />
        </div>
    );
};