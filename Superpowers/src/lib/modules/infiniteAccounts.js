import { findByProps } from "@cumcord/modules/webpack";

let { MAX_ACCOUNTS } = findByProps("MAX_ACCOUNTS"); // original

export default function infiniteAccounts(enabled) {
    if(enabled === true) {
        findByProps("MAX_ACCOUNTS").MAX_ACCOUNTS = Infinity;
    } else {
        findByProps("MAX_ACCOUNTS").MAX_ACCOUNTS = MAX_ACCOUNTS;
    }
}