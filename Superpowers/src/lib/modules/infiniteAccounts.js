import { findByProps } from "@cumcord/modules/webpack";

let { MAX_ACCOUNTS } = findByProps("MAX_ACCOUNTS"); // original

export default function infiniteAccounts(enabled) {
    findByProps("MAX_ACCOUNTS").MAX_ACCOUNTS = enabled ? Infinity : MAX_ACCOUNTS
}