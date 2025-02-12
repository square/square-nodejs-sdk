/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const SubscriptionCadence: core.serialization.Schema<
    serializers.SubscriptionCadence.Raw,
    Square.SubscriptionCadence
> = core.serialization.enum_([
    "DAILY",
    "WEEKLY",
    "EVERY_TWO_WEEKS",
    "THIRTY_DAYS",
    "SIXTY_DAYS",
    "NINETY_DAYS",
    "MONTHLY",
    "EVERY_TWO_MONTHS",
    "QUARTERLY",
    "EVERY_FOUR_MONTHS",
    "EVERY_SIX_MONTHS",
    "ANNUAL",
    "EVERY_TWO_YEARS",
]);

export declare namespace SubscriptionCadence {
    export type Raw =
        | "DAILY"
        | "WEEKLY"
        | "EVERY_TWO_WEEKS"
        | "THIRTY_DAYS"
        | "SIXTY_DAYS"
        | "NINETY_DAYS"
        | "MONTHLY"
        | "EVERY_TWO_MONTHS"
        | "QUARTERLY"
        | "EVERY_FOUR_MONTHS"
        | "EVERY_SIX_MONTHS"
        | "ANNUAL"
        | "EVERY_TWO_YEARS";
}
