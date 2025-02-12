/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const LoyaltyPromotionIncentivePointsMultiplierData: core.serialization.ObjectSchema<
    serializers.LoyaltyPromotionIncentivePointsMultiplierData.Raw,
    Square.LoyaltyPromotionIncentivePointsMultiplierData
> = core.serialization.object({
    pointsMultiplier: core.serialization.property("points_multiplier", core.serialization.number().optionalNullable()),
    multiplier: core.serialization.string().optionalNullable(),
});

export declare namespace LoyaltyPromotionIncentivePointsMultiplierData {
    export interface Raw {
        points_multiplier?: (number | null) | null;
        multiplier?: (string | null) | null;
    }
}
