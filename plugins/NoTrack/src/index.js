import { Metadata, Analytics, Properties, Reporter } from "./WPMODULES";
import { instead } from "@cumcord/patcher";

const patches = [];

const Sentry = {
    main: window.__SENTRY__?.hub,
    client: window.__SENTRY__?.hub?.getClient(),
};

if (Metadata) {
    patches.push(instead("trackWithMetadata", Metadata, () => {}));
    patches.push(instead("trackWithGroupMetadata", Metadata, Metadata, () => {}));
    patches.push(instead("trackWithGroupMetadata", Metadata, Metadata, () => {}));
}

if (Analytics) {
    patches.push(instead("handleTrack", Analytics.AnalyticsActionHandlers, () => {}));
}

if (Properties) {
    patches.push(instead("track", Properties, () => {}));
}

if (Reporter) {
    patches.push(instead("submitLiveCrashReport", Reporter, () => {}));
}

if (Sentry.main && Sentry.client) {
    Sentry.client.close();
    Sentry.main.getStackTop().scope.clear();
    Sentry.main.getScope().clear();
    patches.push(instead("addBreadcrumb", Sentry.main, () => {}));
}

export function onUnload() {
    _.forEachRight(patches, (p) => p());
    if (Sentry.main && Sentry.client) {
        Sentry.client.getOptions().enabled = true;
    }
}
