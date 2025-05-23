/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { GiftCardActivityBlockReason } from "./GiftCardActivityBlockReason";

export const GiftCardActivityBlock: core.serialization.ObjectSchema<
    serializers.GiftCardActivityBlock.Raw,
    Square.GiftCardActivityBlock
> = core.serialization.object({
    reason: GiftCardActivityBlockReason,
});

export declare namespace GiftCardActivityBlock {
    export interface Raw {
        reason: GiftCardActivityBlockReason.Raw;
    }
}
