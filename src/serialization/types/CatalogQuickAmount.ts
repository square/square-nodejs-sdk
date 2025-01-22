/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CatalogQuickAmountType } from "./CatalogQuickAmountType";
import { Money } from "./Money";

export const CatalogQuickAmount: core.serialization.ObjectSchema<
    serializers.CatalogQuickAmount.Raw,
    Square.CatalogQuickAmount
> = core.serialization.object({
    type: CatalogQuickAmountType,
    amount: Money,
    score: core.serialization.bigint().optionalNullable(),
    ordinal: core.serialization.bigint().optionalNullable(),
});

export declare namespace CatalogQuickAmount {
    export interface Raw {
        type: CatalogQuickAmountType.Raw;
        amount: Money.Raw;
        score?: ((bigint | number) | null) | null;
        ordinal?: ((bigint | number) | null) | null;
    }
}
