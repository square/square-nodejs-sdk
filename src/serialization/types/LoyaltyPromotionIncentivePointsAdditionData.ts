/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const LoyaltyPromotionIncentivePointsAdditionData: core.serialization.ObjectSchema<
    serializers.LoyaltyPromotionIncentivePointsAdditionData.Raw,
    Square.LoyaltyPromotionIncentivePointsAdditionData
> = core.serialization.object({
    pointsAddition: core.serialization.property("points_addition", core.serialization.number()),
});

export declare namespace LoyaltyPromotionIncentivePointsAdditionData {
    export interface Raw {
        points_addition: number;
    }
}
