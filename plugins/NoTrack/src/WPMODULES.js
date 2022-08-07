import { batchFind } from "@cumcord/modules/webpack";

export const [
    Metadata,
    Analytics,
    Properties,
    Reporter
] = batchFind(({ findByProps, findByDisplayName }) => {
    findByProps("trackWithMetadata");
    findByProps("AnalyticsActionHandlers");
    findByProps("encodeProperties", "track");
    findByProps("submitLiveCrashReport");
});
