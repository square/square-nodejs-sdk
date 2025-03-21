/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const ListPaymentRefundsRequestSortField: core.serialization.Schema<
    serializers.ListPaymentRefundsRequestSortField.Raw,
    Square.ListPaymentRefundsRequestSortField
> = core.serialization.enum_(["CREATED_AT", "UPDATED_AT"]);

export declare namespace ListPaymentRefundsRequestSortField {
    export type Raw = "CREATED_AT" | "UPDATED_AT";
}
