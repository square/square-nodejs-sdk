/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents an [AdjustLoyaltyPoints](api-endpoint:Loyalty-AdjustLoyaltyPoints) request.
 */
export interface AdjustLoyaltyPointsResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The resulting event data for the adjustment. */
    event?: Square.LoyaltyEvent;
}
