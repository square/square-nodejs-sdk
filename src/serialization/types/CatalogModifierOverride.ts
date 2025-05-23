/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CatalogModifierOverride: core.serialization.ObjectSchema<
    serializers.CatalogModifierOverride.Raw,
    Square.CatalogModifierOverride
> = core.serialization.object({
    modifierId: core.serialization.property("modifier_id", core.serialization.string()),
    onByDefault: core.serialization.property("on_by_default", core.serialization.boolean().optionalNullable()),
    hiddenOnlineOverride: core.serialization.property(
        "hidden_online_override",
        core.serialization.unknown().optional(),
    ),
    onByDefaultOverride: core.serialization.property("on_by_default_override", core.serialization.unknown().optional()),
});

export declare namespace CatalogModifierOverride {
    export interface Raw {
        modifier_id: string;
        on_by_default?: (boolean | null) | null;
        hidden_online_override?: unknown | null;
        on_by_default_override?: unknown | null;
    }
}
