/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CatalogTimePeriod: core.serialization.ObjectSchema<
    serializers.CatalogTimePeriod.Raw,
    Square.CatalogTimePeriod
> = core.serialization.object({
    event: core.serialization.string().optionalNullable(),
});

export declare namespace CatalogTimePeriod {
    export interface Raw {
        event?: (string | null) | null;
    }
}
