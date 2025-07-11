/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { SubscriptionUpdatedEventObject } from "./SubscriptionUpdatedEventObject";

export const SubscriptionUpdatedEventData: core.serialization.ObjectSchema<
    serializers.SubscriptionUpdatedEventData.Raw,
    Square.SubscriptionUpdatedEventData
> = core.serialization.object({
    type: core.serialization.string().optionalNullable(),
    id: core.serialization.string().optional(),
    object: SubscriptionUpdatedEventObject.optional(),
});

export declare namespace SubscriptionUpdatedEventData {
    export interface Raw {
        type?: (string | null) | null;
        id?: string | null;
        object?: SubscriptionUpdatedEventObject.Raw | null;
    }
}
