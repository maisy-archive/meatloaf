import { findByDisplayName } from "@cumcord/modules/webpack";

const   SwitchItem = findByDisplayName("SwitchItem"),
        Switch = findByDisplayName("Switch");

export default function Settings(props) {
    const [toggle, setToggle] = React.useState(false);

    return (
        <>
            <SwitchItem
                onChange={(e) => { setToggle(!toggle) }}
                value={toggle}
            >
                Test :)
            </SwitchItem>
        </>
    );
}