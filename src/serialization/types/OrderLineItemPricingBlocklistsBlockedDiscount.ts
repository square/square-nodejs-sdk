/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const OrderLineItemPricingBlocklistsBlockedDiscount: core.serialization.ObjectSchema<
    serializers.OrderLineItemPricingBlocklistsBlockedDiscount.Raw,
    Square.OrderLineItemPricingBlocklistsBlockedDiscount
> = core.serialization.object({
    uid: core.serialization.string().optionalNullable(),
    discountUid: core.serialization.property("discount_uid", core.serialization.string().optionalNullable()),
    discountCatalogObjectId: core.serialization.property(
        "discount_catalog_object_id",
        core.serialization.string().optionalNullable(),
    ),
});

export declare namespace OrderLineItemPricingBlocklistsBlockedDiscount {
    export interface Raw {
        uid?: (string | null) | null;
        discount_uid?: (string | null) | null;
        discount_catalog_object_id?: (string | null) | null;
    }
}
