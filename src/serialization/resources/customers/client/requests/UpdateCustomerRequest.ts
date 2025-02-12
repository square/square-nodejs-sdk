/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { Address } from "../../../../types/Address";
import { CustomerTaxIds } from "../../../../types/CustomerTaxIds";

export const UpdateCustomerRequest: core.serialization.Schema<
    serializers.UpdateCustomerRequest.Raw,
    Omit<Square.UpdateCustomerRequest, "customerId">
> = core.serialization.object({
    givenName: core.serialization.property("given_name", core.serialization.string().optionalNullable()),
    familyName: core.serialization.property("family_name", core.serialization.string().optionalNullable()),
    companyName: core.serialization.property("company_name", core.serialization.string().optionalNullable()),
    nickname: core.serialization.string().optionalNullable(),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optionalNullable()),
    address: Address.optional(),
    phoneNumber: core.serialization.property("phone_number", core.serialization.string().optionalNullable()),
    referenceId: core.serialization.property("reference_id", core.serialization.string().optionalNullable()),
    note: core.serialization.string().optionalNullable(),
    birthday: core.serialization.string().optionalNullable(),
    version: core.serialization.bigint().optional(),
    taxIds: core.serialization.property("tax_ids", CustomerTaxIds.optional()),
});

export declare namespace UpdateCustomerRequest {
    export interface Raw {
        given_name?: (string | null) | null;
        family_name?: (string | null) | null;
        company_name?: (string | null) | null;
        nickname?: (string | null) | null;
        email_address?: (string | null) | null;
        address?: Address.Raw | null;
        phone_number?: (string | null) | null;
        reference_id?: (string | null) | null;
        note?: (string | null) | null;
        birthday?: (string | null) | null;
        version?: (bigint | number) | null;
        tax_ids?: CustomerTaxIds.Raw | null;
    }
}
