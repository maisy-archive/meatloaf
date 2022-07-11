import { batchFind } from "@cumcord/modules/webpack";

export const [
    FormTitle,
    FormText,
    FormDivider,
    FormItem,
    FormClasses,
    FormTextClasses,
    Markdown,
    Button,
    Flex,
    Margins,
] = batchFind(({ findByProps, findByDisplayName }) => {
    findByDisplayName("FormTitle");
    findByDisplayName("FormText");
    findByDisplayName("FormDivider");
    findByDisplayName("FormItem");
    findByProps("dividerDefault", "titleDefault");
    findByProps("formText", "placeholder");
    findByDisplayName("Markdown");
    findByProps("Sizes", "Colors", "Looks", "DropdownSizes");
    findByDisplayName("Flex");
    findByProps("marginTop20", "marginBottom8");
});