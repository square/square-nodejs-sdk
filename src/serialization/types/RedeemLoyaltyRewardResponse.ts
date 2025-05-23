/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { LoyaltyEvent } from "./LoyaltyEvent";

export const RedeemLoyaltyRewardResponse: core.serialization.ObjectSchema<
    serializers.RedeemLoyaltyRewardResponse.Raw,
    Square.RedeemLoyaltyRewardResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    event: LoyaltyEvent.optional(),
});

export declare namespace RedeemLoyaltyRewardResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        event?: LoyaltyEvent.Raw | null;
    }
}
