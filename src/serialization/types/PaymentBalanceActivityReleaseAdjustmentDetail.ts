/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const PaymentBalanceActivityReleaseAdjustmentDetail: core.serialization.ObjectSchema<
    serializers.PaymentBalanceActivityReleaseAdjustmentDetail.Raw,
    Square.PaymentBalanceActivityReleaseAdjustmentDetail
> = core.serialization.object({
    paymentId: core.serialization.property("payment_id", core.serialization.string().optionalNullable()),
});

export declare namespace PaymentBalanceActivityReleaseAdjustmentDetail {
    export interface Raw {
        payment_id?: (string | null) | null;
    }
}
