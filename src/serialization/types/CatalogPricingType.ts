/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CatalogPricingType: core.serialization.Schema<
    serializers.CatalogPricingType.Raw,
    Square.CatalogPricingType
> = core.serialization.enum_(["FIXED_PRICING", "VARIABLE_PRICING"]);

export declare namespace CatalogPricingType {
    export type Raw = "FIXED_PRICING" | "VARIABLE_PRICING";
}
