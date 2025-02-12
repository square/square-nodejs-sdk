/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Subscription } from "./Subscription";

export const DeleteSubscriptionActionResponse: core.serialization.ObjectSchema<
    serializers.DeleteSubscriptionActionResponse.Raw,
    Square.DeleteSubscriptionActionResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    subscription: Subscription.optional(),
});

export declare namespace DeleteSubscriptionActionResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        subscription?: Subscription.Raw | null;
    }
}
