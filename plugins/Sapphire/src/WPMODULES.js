import { batchFind } from "@cumcord/modules/webpack";

export const [
    FormTitle,
    FormText,
    FormDivider,
    FormItem,
    FormClasses,
    FormTextClasses,
    [, Markdown],
    Button,
    Flex,
    Margins,
    SwitchItem,
    Tooltip,
    Science,
    Alert,
    WarningCircle,
    { BOT_AVATARS },
    { createBotMessage },
    { getChannelId },
    { receiveMessage },
] = batchFind(({ findByProps, findByDisplayName, findByDisplayNameAll }) => {
    findByDisplayName("FormTitle");
    findByDisplayName("FormText");
    findByDisplayName("FormDivider");
    findByDisplayName("FormItem");
    findByProps("dividerDefault", "titleDefault");
    findByProps("formText", "placeholder");
    findByDisplayNameAll("Markdown");
    findByProps("Sizes", "Colors", "Looks", "DropdownSizes");
    findByDisplayName("Flex");
    findByProps("marginTop20", "marginBottom8");
    findByDisplayName("SwitchItem")
    findByDisplayName("Tooltip");
    findByDisplayName("Science");
    findByDisplayName("InfoFilled");
    findByDisplayName("WarningCircle");
    findByProps("BOT_AVATARS", "DEFAULT_AVATARS");
    findByProps("createBotMessage");
    findByProps("getChannelId", "getVoiceChannelId");
    findByProps("receiveMessage", "sendBotMessage");
});