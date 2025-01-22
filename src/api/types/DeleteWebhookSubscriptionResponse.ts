/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Defines the fields that are included in the response body of
 * a request to the [DeleteWebhookSubscription](api-endpoint:WebhookSubscriptions-DeleteWebhookSubscription) endpoint.
 */
export interface DeleteWebhookSubscriptionResponse {
    /** Information on errors encountered during the request. */
    errors?: Square.Error_[];
}
