/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { OrderUpdated } from "./OrderUpdated";

export const OrderUpdatedObject: core.serialization.ObjectSchema<
    serializers.OrderUpdatedObject.Raw,
    Square.OrderUpdatedObject
> = core.serialization.object({
    orderUpdated: core.serialization.property("order_updated", OrderUpdated.optional()),
});

export declare namespace OrderUpdatedObject {
    export interface Raw {
        order_updated?: OrderUpdated.Raw | null;
    }
}
