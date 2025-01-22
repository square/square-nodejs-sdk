/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { LoyaltyEvent } from "./LoyaltyEvent";

export const AdjustLoyaltyPointsResponse: core.serialization.ObjectSchema<
    serializers.AdjustLoyaltyPointsResponse.Raw,
    Square.AdjustLoyaltyPointsResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    event: LoyaltyEvent.optional(),
});

export declare namespace AdjustLoyaltyPointsResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        event?: LoyaltyEvent.Raw | null;
    }
}
