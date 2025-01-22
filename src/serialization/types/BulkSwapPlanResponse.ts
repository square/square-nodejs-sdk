/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";

export const BulkSwapPlanResponse: core.serialization.ObjectSchema<
    serializers.BulkSwapPlanResponse.Raw,
    Square.BulkSwapPlanResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    affectedSubscriptions: core.serialization.property(
        "affected_subscriptions",
        core.serialization.number().optional(),
    ),
});

export declare namespace BulkSwapPlanResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        affected_subscriptions?: number | null;
    }
}
