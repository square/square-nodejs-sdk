/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Order } from "./Order";

export const PaymentLinkRelatedResources: core.serialization.ObjectSchema<
    serializers.PaymentLinkRelatedResources.Raw,
    Square.PaymentLinkRelatedResources
> = core.serialization.object({
    orders: core.serialization.list(Order).optionalNullable(),
    subscriptionPlans: core.serialization.property(
        "subscription_plans",
        core.serialization.list(core.serialization.lazy(() => serializers.CatalogObject)).optionalNullable(),
    ),
});

export declare namespace PaymentLinkRelatedResources {
    export interface Raw {
        orders?: (Order.Raw[] | null) | null;
        subscription_plans?: (serializers.CatalogObject.Raw[] | null) | null;
    }
}
