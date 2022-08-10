import { batchFind } from "@cumcord/modules/webpack";

export const [
    FormTitle,
    FormText,
    FormDivider,
    Card,
    BadgeClasses,
    { getRegisteredExperiments },
] = batchFind(({ findByProps, findByPropsAll, findByDisplayName }) => {
    findByDisplayName("FormTitle");
    findByDisplayName("FormText");
    findByDisplayName("FormDivider");
    findByDisplayName("Card");
    findByProps("textBadge");
    findByProps("getAllExperimentOverrideDescriptors");
});