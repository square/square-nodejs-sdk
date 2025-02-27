/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { OrderReturnLineItem } from "./OrderReturnLineItem";
import { OrderReturnServiceCharge } from "./OrderReturnServiceCharge";
import { OrderReturnTax } from "./OrderReturnTax";
import { OrderReturnDiscount } from "./OrderReturnDiscount";
import { OrderReturnTip } from "./OrderReturnTip";
import { OrderRoundingAdjustment } from "./OrderRoundingAdjustment";
import { OrderMoneyAmounts } from "./OrderMoneyAmounts";

export const OrderReturn: core.serialization.ObjectSchema<serializers.OrderReturn.Raw, Square.OrderReturn> =
    core.serialization.object({
        uid: core.serialization.string().optionalNullable(),
        sourceOrderId: core.serialization.property("source_order_id", core.serialization.string().optionalNullable()),
        returnLineItems: core.serialization.property(
            "return_line_items",
            core.serialization.list(OrderReturnLineItem).optionalNullable(),
        ),
        returnServiceCharges: core.serialization.property(
            "return_service_charges",
            core.serialization.list(OrderReturnServiceCharge).optionalNullable(),
        ),
        returnTaxes: core.serialization.property("return_taxes", core.serialization.list(OrderReturnTax).optional()),
        returnDiscounts: core.serialization.property(
            "return_discounts",
            core.serialization.list(OrderReturnDiscount).optional(),
        ),
        returnTips: core.serialization.property(
            "return_tips",
            core.serialization.list(OrderReturnTip).optionalNullable(),
        ),
        roundingAdjustment: core.serialization.property("rounding_adjustment", OrderRoundingAdjustment.optional()),
        returnAmounts: core.serialization.property("return_amounts", OrderMoneyAmounts.optional()),
    });

export declare namespace OrderReturn {
    export interface Raw {
        uid?: (string | null) | null;
        source_order_id?: (string | null) | null;
        return_line_items?: (OrderReturnLineItem.Raw[] | null) | null;
        return_service_charges?: (OrderReturnServiceCharge.Raw[] | null) | null;
        return_taxes?: OrderReturnTax.Raw[] | null;
        return_discounts?: OrderReturnDiscount.Raw[] | null;
        return_tips?: (OrderReturnTip.Raw[] | null) | null;
        rounding_adjustment?: OrderRoundingAdjustment.Raw | null;
        return_amounts?: OrderMoneyAmounts.Raw | null;
    }
}
