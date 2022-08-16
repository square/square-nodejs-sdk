import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyPromotion, loyaltyPromotionSchema } from './loyaltyPromotion';

/**
 * Represents a [ListLoyaltyPromotions]($e/Loyalty/ListLoyaltyPromotions) response.
 * One of `loyalty_promotions`, an empty object, or `errors` is present in the response.
 * If additional results are available, the `cursor` field is also present along with `loyalty_promotions`.
 */
export interface ListLoyaltyPromotionsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The retrieved loyalty promotions. */
  loyaltyPromotions?: LoyaltyPromotion[];
  /**
   * The cursor to use in your next call to this endpoint to retrieve the next page of results
   * for your original request. This field is present only if the request succeeded and additional
   * results are available. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const listLoyaltyPromotionsResponseSchema: Schema<ListLoyaltyPromotionsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    loyaltyPromotions: [
      'loyalty_promotions',
      optional(array(lazy(() => loyaltyPromotionSchema))),
    ],
    cursor: ['cursor', optional(string())],
  }
);
