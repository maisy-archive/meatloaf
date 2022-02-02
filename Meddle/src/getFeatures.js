import { findByProps } from "@cumcord/modules/webpack";

const guildFeatures = findByProps("GuildFeatures").GuildFeatures;

export default function getFeatures() {
    return Object.values(guildFeatures);
}