/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Money } from "./Money";
import { GiftCardActivityAdjustDecrementReason } from "./GiftCardActivityAdjustDecrementReason";

export const GiftCardActivityAdjustDecrement: core.serialization.ObjectSchema<
    serializers.GiftCardActivityAdjustDecrement.Raw,
    Square.GiftCardActivityAdjustDecrement
> = core.serialization.object({
    amountMoney: core.serialization.property("amount_money", Money),
    reason: GiftCardActivityAdjustDecrementReason,
});

export declare namespace GiftCardActivityAdjustDecrement {
    export interface Raw {
        amount_money: Money.Raw;
        reason: GiftCardActivityAdjustDecrementReason.Raw;
    }
}
