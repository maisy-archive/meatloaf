import { findByProps } from "@cumcord/modules/webpack";
import { MAX_ACCOUNTS } from "../../WPMODULES";

export default function infiniteAccounts(enabled) {
    findByProps("MAX_ACCOUNTS").MAX_ACCOUNTS = enabled ? Infinity : MAX_ACCOUNTS
}