/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { BankAccount } from "./BankAccount";

export const ListBankAccountsResponse: core.serialization.ObjectSchema<
    serializers.ListBankAccountsResponse.Raw,
    Square.ListBankAccountsResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    bankAccounts: core.serialization.property("bank_accounts", core.serialization.list(BankAccount).optional()),
    cursor: core.serialization.string().optional(),
});

export declare namespace ListBankAccountsResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        bank_accounts?: BankAccount.Raw[] | null;
        cursor?: string | null;
    }
}
