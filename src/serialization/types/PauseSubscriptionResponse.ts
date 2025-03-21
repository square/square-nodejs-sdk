/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Subscription } from "./Subscription";
import { SubscriptionAction } from "./SubscriptionAction";

export const PauseSubscriptionResponse: core.serialization.ObjectSchema<
    serializers.PauseSubscriptionResponse.Raw,
    Square.PauseSubscriptionResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    subscription: Subscription.optional(),
    actions: core.serialization.list(SubscriptionAction).optional(),
});

export declare namespace PauseSubscriptionResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        subscription?: Subscription.Raw | null;
        actions?: SubscriptionAction.Raw[] | null;
    }
}
