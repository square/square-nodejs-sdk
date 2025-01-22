/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Money } from "./Money";

export const AdditionalRecipient: core.serialization.ObjectSchema<
    serializers.AdditionalRecipient.Raw,
    Square.AdditionalRecipient
> = core.serialization.object({
    locationId: core.serialization.property("location_id", core.serialization.string()),
    description: core.serialization.string().optionalNullable(),
    amountMoney: core.serialization.property("amount_money", Money),
    receivableId: core.serialization.property("receivable_id", core.serialization.string().optionalNullable()),
});

export declare namespace AdditionalRecipient {
    export interface Raw {
        location_id: string;
        description?: (string | null) | null;
        amount_money: Money.Raw;
        receivable_id?: (string | null) | null;
    }
}
