/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const OrderLineItemDiscountScope: core.serialization.Schema<
    serializers.OrderLineItemDiscountScope.Raw,
    Square.OrderLineItemDiscountScope
> = core.serialization.enum_(["OTHER_DISCOUNT_SCOPE", "LINE_ITEM", "ORDER"]);

export declare namespace OrderLineItemDiscountScope {
    export type Raw = "OTHER_DISCOUNT_SCOPE" | "LINE_ITEM" | "ORDER";
}
