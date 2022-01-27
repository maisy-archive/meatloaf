import createBackup from "./createBackup";
import downloadFile from "./downloadFile";
import SettingsCard from "./components/SettingsCard";

export default function Settings(props) {
    return (
        <>
            <SettingsCard 
                title="Backup" 
                description="Creates a backup of your current installation, including plugins and plugin nests." 
                buttonText="Backup" 
                buttonFunc={async (e) => { downloadFile(JSON.stringify(await createBackup()), "backup.json") }}
            />
        </>
    );
}
