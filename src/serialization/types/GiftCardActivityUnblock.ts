/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { GiftCardActivityUnblockReason } from "./GiftCardActivityUnblockReason";

export const GiftCardActivityUnblock: core.serialization.ObjectSchema<
    serializers.GiftCardActivityUnblock.Raw,
    Square.GiftCardActivityUnblock
> = core.serialization.object({
    reason: GiftCardActivityUnblockReason,
});

export declare namespace GiftCardActivityUnblock {
    export interface Raw {
        reason: GiftCardActivityUnblockReason.Raw;
    }
}
