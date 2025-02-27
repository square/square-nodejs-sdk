/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Address } from "./Address";
import { CustomerPreferences } from "./CustomerPreferences";
import { CustomerCreationSource } from "./CustomerCreationSource";
import { CustomerTaxIds } from "./CustomerTaxIds";

export const Customer: core.serialization.ObjectSchema<serializers.Customer.Raw, Square.Customer> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
        givenName: core.serialization.property("given_name", core.serialization.string().optionalNullable()),
        familyName: core.serialization.property("family_name", core.serialization.string().optionalNullable()),
        nickname: core.serialization.string().optionalNullable(),
        companyName: core.serialization.property("company_name", core.serialization.string().optionalNullable()),
        emailAddress: core.serialization.property("email_address", core.serialization.string().optionalNullable()),
        address: Address.optional(),
        phoneNumber: core.serialization.property("phone_number", core.serialization.string().optionalNullable()),
        birthday: core.serialization.string().optionalNullable(),
        referenceId: core.serialization.property("reference_id", core.serialization.string().optionalNullable()),
        note: core.serialization.string().optionalNullable(),
        preferences: CustomerPreferences.optional(),
        creationSource: core.serialization.property("creation_source", CustomerCreationSource.optional()),
        groupIds: core.serialization.property(
            "group_ids",
            core.serialization.list(core.serialization.string()).optionalNullable(),
        ),
        segmentIds: core.serialization.property(
            "segment_ids",
            core.serialization.list(core.serialization.string()).optionalNullable(),
        ),
        version: core.serialization.bigint().optional(),
        taxIds: core.serialization.property("tax_ids", CustomerTaxIds.optional()),
    });

export declare namespace Customer {
    export interface Raw {
        id?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
        given_name?: (string | null) | null;
        family_name?: (string | null) | null;
        nickname?: (string | null) | null;
        company_name?: (string | null) | null;
        email_address?: (string | null) | null;
        address?: Address.Raw | null;
        phone_number?: (string | null) | null;
        birthday?: (string | null) | null;
        reference_id?: (string | null) | null;
        note?: (string | null) | null;
        preferences?: CustomerPreferences.Raw | null;
        creation_source?: CustomerCreationSource.Raw | null;
        group_ids?: (string[] | null) | null;
        segment_ids?: (string[] | null) | null;
        version?: (bigint | number) | null;
        tax_ids?: CustomerTaxIds.Raw | null;
    }
}
