/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Money } from "./Money";

export const CashPaymentDetails: core.serialization.ObjectSchema<
    serializers.CashPaymentDetails.Raw,
    Square.CashPaymentDetails
> = core.serialization.object({
    buyerSuppliedMoney: core.serialization.property("buyer_supplied_money", Money),
    changeBackMoney: core.serialization.property("change_back_money", Money.optional()),
});

export declare namespace CashPaymentDetails {
    export interface Raw {
        buyer_supplied_money: Money.Raw;
        change_back_money?: Money.Raw | null;
    }
}
