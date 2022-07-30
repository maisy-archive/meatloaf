import Viewer from "../components/Viewer";
import Textbox from "../components/Textbox";
import { FormDivider, getUser, getChannel, getGuild } from "../WPMODULES";

function getDataFromSnowflake(id) {
    const user = getUser(id);
    if (user) return user;

    const channel = getChannel(id);
    if (channel) return channel;

    const guild = getGuild(id);
    if (guild) return guild;
}

export default function SnowflakeSettings(props) {
    let [snowflake, setSnowflake] = React.useState("");

    return (
        <div>
            <Textbox value={snowflake} onChange={(e) => { setSnowflake(e) }}>Snowflake (can be the ID of a user, guild or channel)</Textbox>
            <FormDivider className="beef-meddle-divider" />
            <Viewer object={getDataFromSnowflake(snowflake)} />
        </div>
    );
}
