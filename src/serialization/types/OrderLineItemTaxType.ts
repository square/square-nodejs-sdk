/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const OrderLineItemTaxType: core.serialization.Schema<
    serializers.OrderLineItemTaxType.Raw,
    Square.OrderLineItemTaxType
> = core.serialization.enum_(["UNKNOWN_TAX", "ADDITIVE", "INCLUSIVE"]);

export declare namespace OrderLineItemTaxType {
    export type Raw = "UNKNOWN_TAX" | "ADDITIVE" | "INCLUSIVE";
}
