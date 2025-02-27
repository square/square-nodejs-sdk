/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { PaymentRefund } from "./PaymentRefund";

export const GetPaymentRefundResponse: core.serialization.ObjectSchema<
    serializers.GetPaymentRefundResponse.Raw,
    Square.GetPaymentRefundResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    refund: PaymentRefund.optional(),
});

export declare namespace GetPaymentRefundResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        refund?: PaymentRefund.Raw | null;
    }
}
