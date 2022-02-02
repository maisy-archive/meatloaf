import { findByDisplayName, findByProps } from "@cumcord/modules/webpack";
import getFeatures from "./getFeatures";

const features = getFeatures();

const getGuilds = findByProps("getGuilds").getGuilds;

const SwitchItem       = findByDisplayName("SwitchItem"),
      { SingleSelect } = findByDisplayName("Select", false),
      Button           = findByProps("Sizes", "Colors", "Looks", "DropdownSizes");

function renderFeatures(guild) {
    return (
        <>
            {guild.features.map(feature => (
                <p>{feature}</p>
            ))}
        </>  
    );
}

export default function Settings(props) {
    // I have no clue how useState works
    const [selectedGuild, setSelectedGuild] = React.useState(true);

    const guilds = getGuilds();
    const formattedGuilds = [];
    Object.values(guilds).map(guild => { formattedGuilds.push({ value: guild.id, label: `${guild.name} (${guild.id})` }) });

    return (
        <>
            <SingleSelect
                options={formattedGuilds}
                onChange={(e) => { setSelectedGuild(guilds[e]); renderFeatures(guilds[e]) }}
                value={selectedGuild.id || undefined}
                isDisabled={false}
            />

            {/* <SwitchItem onChange={(e) => {}} value={persistentActivityToggle}>
                Persistent Activities
                <FormText>
                    When enabled, patch Dispatch to make activities persist when
                    the user leaves the VC, including when removed by a
                    moderator.
                </FormText>
            </SwitchItem> */}
        </>
    );
}
