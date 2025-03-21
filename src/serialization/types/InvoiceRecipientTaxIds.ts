/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const InvoiceRecipientTaxIds: core.serialization.ObjectSchema<
    serializers.InvoiceRecipientTaxIds.Raw,
    Square.InvoiceRecipientTaxIds
> = core.serialization.object({
    euVat: core.serialization.property("eu_vat", core.serialization.string().optional()),
});

export declare namespace InvoiceRecipientTaxIds {
    export interface Raw {
        eu_vat?: string | null;
    }
}
