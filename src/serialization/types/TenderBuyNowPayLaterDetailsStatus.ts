/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const TenderBuyNowPayLaterDetailsStatus: core.serialization.Schema<
    serializers.TenderBuyNowPayLaterDetailsStatus.Raw,
    Square.TenderBuyNowPayLaterDetailsStatus
> = core.serialization.enum_(["AUTHORIZED", "CAPTURED", "VOIDED", "FAILED"]);

export declare namespace TenderBuyNowPayLaterDetailsStatus {
    export type Raw = "AUTHORIZED" | "CAPTURED" | "VOIDED" | "FAILED";
}
