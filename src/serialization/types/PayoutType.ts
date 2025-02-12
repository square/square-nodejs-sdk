/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const PayoutType: core.serialization.Schema<serializers.PayoutType.Raw, Square.PayoutType> =
    core.serialization.enum_(["BATCH", "SIMPLE"]);

export declare namespace PayoutType {
    export type Raw = "BATCH" | "SIMPLE";
}
