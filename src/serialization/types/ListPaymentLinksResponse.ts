/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { PaymentLink } from "./PaymentLink";

export const ListPaymentLinksResponse: core.serialization.ObjectSchema<
    serializers.ListPaymentLinksResponse.Raw,
    Square.ListPaymentLinksResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    paymentLinks: core.serialization.property("payment_links", core.serialization.list(PaymentLink).optional()),
    cursor: core.serialization.string().optional(),
});

export declare namespace ListPaymentLinksResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        payment_links?: PaymentLink.Raw[] | null;
        cursor?: string | null;
    }
}
