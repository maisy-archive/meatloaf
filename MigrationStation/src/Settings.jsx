import createBackup from "./createBackup";
import downloadFile from "./downloadFile";
import SettingsCard from "./components/SettingsCard";

export default function Settings(props) {
    return (
        <>
            <div className="beef-ms-settings-card-container">
                <SettingsCard 
                    title="Backup" 
                    description="Creates a backup of your current installation, including plugins and plugin nests." 
                    buttonText="Backup"
                    buttonSize="MEDIUM"
                    buttonFunc={async (e) => { downloadFile(JSON.stringify(await createBackup()), "backup.json") }}
                />
                <SettingsCard 
                    title="Restore" 
                    description="Restores from a backup of your current installation." 
                    buttonText="Restore"
                    buttonSize="MEDIUM"
                    buttonFunc={async (e) => { downloadFile(JSON.stringify(await createBackup()), "backup.json") }}
                />
            </div>
        </>
    );
}
