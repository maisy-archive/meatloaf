import { copyText, saveFile, openFile, showToast } from "./lib/util";
import { getPlugins, loadPlugins, makeSnippet } from "./lib/plugins";

import SettingsCard from "./components/SettingsCard";

import logger from "@cumcord/utils";

export default function Settings() {
    return (
        <>
            <div className="beef-ms-settings-card-container">
                <SettingsCard 
                    title="Backup" 
                    description="Creates a backup of your current installation, including plugins and plugin nests." 
                    buttonText="Backup"
                    buttonSize="MEDIUM"
                    buttonFunc={async () => { await saveFile(JSON.stringify(await getPlugins()), `backup-${Date.now()}.json`) }}
                />
                <SettingsCard 
                    title="make big snippet very cool" 
                    description="phorcys does not know how to make a submenu with react" 
                    buttonText="Copy"
                    buttonSize="MEDIUM"
                    buttonFunc={async () => {
                        try {
                            await copyText(await makeSnippet());
                        } catch(e) {
                            showToast({message: "Could not copy to clipboard! :(", id: "ms-clipboard-error", type: 2});
                            logger.error("[MigrationStation]", "Could not copy to clipboard", e);
                        } finally {
                            showToast({message: "Snippet was copied to clipboard successfully!", id: "ms-clipboard-success", type: 1});
                        }
                    }}
                />
                <SettingsCard 
                    title="Restore" 
                    description="Restores from a backup of your current installation." 
                    buttonText="Restore"
                    buttonSize="MEDIUM"
                    buttonFunc={async () => {
                        let json;

                        try {
                            json = JSON.parse(await openFile());
                        } catch(e) {
                            showToast({message: "Could not open backup! :(", id: "ms-backup-error", type: 2});
                            logger.error("[MigrationStation]", "Could not open backup", e);
                        } finally {
                            loadPlugins(json);
                        }
                    }}
                />
            </div>
        </>
    );
}
