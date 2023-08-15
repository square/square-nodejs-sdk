import { nullable, number, object, optional, Schema, string } from '../schema';

/**
 * A request to list gift cards. You can optionally specify a filter to retrieve a subset of
 * gift cards.
 */
export interface ListGiftCardsRequest {
  /**
   * If a [type](entity:GiftCardType) is provided, the endpoint returns gift cards of the specified type.
   * Otherwise, the endpoint returns gift cards of all types.
   */
  type?: string | null;
  /**
   * If a [state](entity:GiftCardStatus) is provided, the endpoint returns the gift cards in the specified state.
   * Otherwise, the endpoint returns the gift cards of all states.
   */
  state?: string | null;
  /**
   * If a limit is provided, the endpoint returns only the specified number of results per page.
   * The maximum value is 200. The default value is 30.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  limit?: number | null;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   * If a cursor is not provided, the endpoint returns the first page of the results.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string | null;
  /** If a customer ID is provided, the endpoint returns only the gift cards linked to the specified customer. */
  customerId?: string | null;
}

export const listGiftCardsRequestSchema: Schema<ListGiftCardsRequest> = object({
  type: ['type', optional(nullable(string()))],
  state: ['state', optional(nullable(string()))],
  limit: ['limit', optional(nullable(number()))],
  cursor: ['cursor', optional(nullable(string()))],
  customerId: ['customer_id', optional(nullable(string()))],
});
