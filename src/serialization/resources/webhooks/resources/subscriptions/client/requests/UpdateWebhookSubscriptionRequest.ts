/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Square from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { WebhookSubscription } from "../../../../../../types/WebhookSubscription";

export const UpdateWebhookSubscriptionRequest: core.serialization.Schema<
    serializers.webhooks.UpdateWebhookSubscriptionRequest.Raw,
    Omit<Square.webhooks.UpdateWebhookSubscriptionRequest, "subscriptionId">
> = core.serialization.object({
    subscription: WebhookSubscription.optional(),
});

export declare namespace UpdateWebhookSubscriptionRequest {
    export interface Raw {
        subscription?: WebhookSubscription.Raw | null;
    }
}
