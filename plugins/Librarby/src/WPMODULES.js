import { batchFind } from "@cumcord/modules/webpack";

export const [
    [, { getUser }],
] = batchFind(({ findByProps, findByPropsAll, findByDisplayName }) => {
    findByPropsAll("getUser");
});
