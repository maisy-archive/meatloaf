import { batchFind } from "@cumcord/modules/webpack";

export const [
    FormTitle,
    // Margins,
    // Tooltip,
    // Science,
] = batchFind(({ findByProps, findByDisplayName }) => {
    findByDisplayName("FormTitle");
    // findByProps("marginTop20", "marginBottom8");
    // findByDisplayName("Tooltip");
    // findByDisplayName("Science");
});