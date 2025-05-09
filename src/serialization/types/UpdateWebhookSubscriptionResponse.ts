/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { WebhookSubscription } from "./WebhookSubscription";

export const UpdateWebhookSubscriptionResponse: core.serialization.ObjectSchema<
    serializers.UpdateWebhookSubscriptionResponse.Raw,
    Square.UpdateWebhookSubscriptionResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    subscription: WebhookSubscription.optional(),
});

export declare namespace UpdateWebhookSubscriptionResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        subscription?: WebhookSubscription.Raw | null;
    }
}
