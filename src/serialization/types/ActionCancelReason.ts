/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const ActionCancelReason: core.serialization.Schema<
    serializers.ActionCancelReason.Raw,
    Square.ActionCancelReason
> = core.serialization.enum_(["BUYER_CANCELED", "SELLER_CANCELED", "TIMED_OUT"]);

export declare namespace ActionCancelReason {
    export type Raw = "BUYER_CANCELED" | "SELLER_CANCELED" | "TIMED_OUT";
}
