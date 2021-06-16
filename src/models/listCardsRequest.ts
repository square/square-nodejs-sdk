import { boolean, object, optional, Schema, string } from '../schema';

/**
 * Retrieves details for a specific Card. Accessible via
 * HTTP requests at GET https://connect.squareup.com/v2/cards
 */
export interface ListCardsRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for your original query.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  cursor?: string;
  /**
   * Limit results to cards associated with the customer supplied.
   * By default, all cards owned by the merchant are returned.
   */
  customerId?: string;
  /**
   * Includes disabled cards.
   * By default, all enabled cards owned by the merchant are returned.
   */
  includeDisabled?: boolean;
  /** Limit results to cards associated with the reference_id supplied. */
  referenceId?: string;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  sortOrder?: string;
}

export const listCardsRequestSchema: Schema<ListCardsRequest> = object({
  cursor: ['cursor', optional(string())],
  customerId: ['customer_id', optional(string())],
  includeDisabled: ['include_disabled', optional(boolean())],
  referenceId: ['reference_id', optional(string())],
  sortOrder: ['sort_order', optional(string())],
});
