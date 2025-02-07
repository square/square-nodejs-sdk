/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const GiftCardActivityBlockReason: core.serialization.Schema<
    serializers.GiftCardActivityBlockReason.Raw,
    Square.GiftCardActivityBlockReason
> = core.serialization.stringLiteral("CHARGEBACK_BLOCK");

export declare namespace GiftCardActivityBlockReason {
    export type Raw = "CHARGEBACK_BLOCK";
}
