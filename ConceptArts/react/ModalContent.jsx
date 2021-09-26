import { webpackModules } from "@cumcord/modules";

const FormTitle = webpackModules.findByDisplayName("FormTitle");
const FormDivider =  webpackModules.findByDisplayName("FormDivider");
const HelpMessage = webpackModules.findByDisplayName("HelpMessage");

export default (props) => {
    return (
        <div className="concept-quickcss">
            <HelpMessage className="concept-nitro-helpmessage" messageType={0}>Your Nitro subscription will expire soon! Please go to the Subscriptions page to renew it!</HelpMessage>
        </div>
    );
};