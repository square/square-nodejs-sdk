/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { TaxCalculationPhase } from "./TaxCalculationPhase";
import { TaxInclusionType } from "./TaxInclusionType";

export const CatalogTax: core.serialization.ObjectSchema<serializers.CatalogTax.Raw, Square.CatalogTax> =
    core.serialization.object({
        name: core.serialization.string().optionalNullable(),
        calculationPhase: core.serialization.property("calculation_phase", TaxCalculationPhase.optional()),
        inclusionType: core.serialization.property("inclusion_type", TaxInclusionType.optional()),
        percentage: core.serialization.string().optionalNullable(),
        appliesToCustomAmounts: core.serialization.property(
            "applies_to_custom_amounts",
            core.serialization.boolean().optionalNullable(),
        ),
        enabled: core.serialization.boolean().optionalNullable(),
        appliesToProductSetId: core.serialization.property(
            "applies_to_product_set_id",
            core.serialization.string().optionalNullable(),
        ),
    });

export declare namespace CatalogTax {
    export interface Raw {
        name?: (string | null) | null;
        calculation_phase?: TaxCalculationPhase.Raw | null;
        inclusion_type?: TaxInclusionType.Raw | null;
        percentage?: (string | null) | null;
        applies_to_custom_amounts?: (boolean | null) | null;
        enabled?: (boolean | null) | null;
        applies_to_product_set_id?: (string | null) | null;
    }
}
