/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Order } from "./Order";
import { Error_ } from "./Error_";

export const BatchGetOrdersResponse: core.serialization.ObjectSchema<
    serializers.BatchGetOrdersResponse.Raw,
    Square.BatchGetOrdersResponse
> = core.serialization.object({
    orders: core.serialization.list(Order).optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace BatchGetOrdersResponse {
    export interface Raw {
        orders?: Order.Raw[] | null;
        errors?: Error_.Raw[] | null;
    }
}
