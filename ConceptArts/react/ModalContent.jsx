import { webpack } from "@cumcord/modules";

const FormTitle = webpack.findByDisplayName("FormTitle");
const FormDivider =  webpack.findByDisplayName("FormDivider");
const HelpMessage = webpack.findByDisplayName("HelpMessage");
const Text = webpack.findByDisplayName("Text");
const NitroLogo = webpack.findByDisplayName('UserSettingsPremiumSubscriptionsIcon');
const ShinyButton = webpack.findByDisplayName('ShinyButton');

// const getCurrentUser = webpackModules.findByProps('getCurrentUser');

export default (props) => {
    return (
        <div className="concept-modal">
            <FormDivider/>
            <br/>
            <div>
                <FormTitle tag="h4">What? Discoins? Huh?</FormTitle>
                <Text>Discoins are Discord's latest and greatest invention. Instead of a subscription-based service like Discord Nitro, Discoins are used to buy the perks that <strong>you</strong> want, for a better price!</Text>
            </div>
            <br/>
            <div>
                <FormTitle tag="h4">Alright, but how do I get Discoins?</FormTitle>
                <Text>You can earn Discoins in a number of ways: Sending messages, spending time in voice channels, using slash commands, and many more!</Text>
            </div>
            <br/>
            <div>
                <FormTitle tag="h4">Okay, cool. How can I use my Discoins?</FormTitle>
                <Text>Discoins will be represented around the app with a <NitroLogo/> icon. You can use your hard-earned Discoins in the Discoin Shop. Want to go there now?</Text>
                <br/>
                <ShinyButton color="colorBrand-3pXr91">Discoin Shop</ShinyButton>
            </div>
            <br/>
            <div>
                <FormTitle tag="h4">Wait a minute! What about my existing Discord Nitro subscription!</FormTitle>
                <Text>Fear not, traveller! Your Nitro subscription will simply be converted into Discoins - an appropriate amount to purchase all the perks you already had back again!</Text>
            </div>
            <br/>
            <FormTitle tag="h5">THIS IS NOT A REAL DISCORD MODAL - AS MUCH AS WE MAY WISH, DISCOINS ARE NOT REAL. THIS IS MERELY CONCEPT ART.</FormTitle>
        </div>
    );
};