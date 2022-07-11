import { saveFile, openFile } from "./lib/util";
import { getPlugins, loadPlugins, makeSnippet } from "./lib/plugins";

import SettingsCard from "./components/SettingsCard";
import SettingsButton from "./components/SettingsButton";

import { logger, copyText } from "@cumcord/utils";
import { showToast, SingleSelect } from "./WPMODULES";

export default function Settings() {
    return (
        <>
            <style>{`
                .cumcord-settings-modal {
                    min-width: auto;
                    min-height: auto;
                }
            `}</style>

            <div className="beef-ms-settings-card-container">
                <SettingsCard 
                    title="Backup" 
                    description="Creates a backup of your current installation, including plugins and plugin nests." 
                >
                    {/* <SettingsButton
                        text="Backup"
                        size="MEDIUM"
                        func={}
                    /> */}
                    <SingleSelect
                        options={[{label: "Download as JSON", value: 0 }, {label: "Copy as snippet", value: 1 }]}
                        placeholder="Choose your backup method"
                        onChange={async(e) => { if(e === 0) {
                            saveFile(JSON.stringify(await getPlugins()), `backup-${Date.now()}.json`);
                        } else {
                            try {
                                await copyText(await makeSnippet());
                            } catch(e) {
                                showToast({message: "Could not copy to clipboard! :(", id: "ms-clipboard-error", type: 2});
                                logger.error("[MigrationStation]", "Could not copy to clipboard", e);
                            } finally {
                                showToast({message: "Snippet was copied to clipboard successfully!", id: "ms-clipboard-success", type: 1});
                            }
                        }}}
                        isDisabled={false}
                    />
                </SettingsCard>

                <SettingsCard 
                    title="Restore" 
                    description="Restores from a backup of your current installation." 
                >
                    <SettingsButton
                        text="Restore"
                        size="MEDIUM"
                        func={async () => {
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
                </SettingsCard>
            </div>
        </>
    );
}
