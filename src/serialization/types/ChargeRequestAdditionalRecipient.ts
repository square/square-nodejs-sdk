/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Money } from "./Money";

export const ChargeRequestAdditionalRecipient: core.serialization.ObjectSchema<
    serializers.ChargeRequestAdditionalRecipient.Raw,
    Square.ChargeRequestAdditionalRecipient
> = core.serialization.object({
    locationId: core.serialization.property("location_id", core.serialization.string()),
    description: core.serialization.string(),
    amountMoney: core.serialization.property("amount_money", Money),
});

export declare namespace ChargeRequestAdditionalRecipient {
    export interface Raw {
        location_id: string;
        description: string;
        amount_money: Money.Raw;
    }
}
