import { number, object, optional, Schema, string } from '../schema';

/** Represents a [ListLoyaltyPromotions]($e/Loyalty/ListLoyaltyPromotions) request. */
export interface ListLoyaltyPromotionsRequest {
  /** Indicates the status of a [loyalty promotion]($m/LoyaltyPromotion). */
  status?: string;
  /**
   * The cursor returned in the paged response from the previous call to this endpoint.
   * Provide this cursor to retrieve the next page of results for your original request.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /**
   * The maximum number of results to return in a single paged response.
   * The minimum value is 1 and the maximum value is 30. The default value is 30.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  limit?: number;
}

export const listLoyaltyPromotionsRequestSchema: Schema<ListLoyaltyPromotionsRequest> = object(
  {
    status: ['status', optional(string())],
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
  }
);
