/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { SubscriptionEvent } from "./SubscriptionEvent";

export const ListSubscriptionEventsResponse: core.serialization.ObjectSchema<
    serializers.ListSubscriptionEventsResponse.Raw,
    Square.ListSubscriptionEventsResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    subscriptionEvents: core.serialization.property(
        "subscription_events",
        core.serialization.list(SubscriptionEvent).optional(),
    ),
    cursor: core.serialization.string().optional(),
});

export declare namespace ListSubscriptionEventsResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        subscription_events?: SubscriptionEvent.Raw[] | null;
        cursor?: string | null;
    }
}
