/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a [CreateLoyaltyPromotion](api-endpoint:Loyalty-CreateLoyaltyPromotion) response.
 * Either `loyalty_promotion` or `errors` is present in the response.
 */
export interface CreateLoyaltyPromotionResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The new loyalty promotion. */
    loyaltyPromotion?: Square.LoyaltyPromotion;
}
