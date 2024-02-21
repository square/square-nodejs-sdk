import { nullable, number, object, optional, Schema, string } from '../schema';

export interface ListPaymentLinksRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   * If a cursor is not provided, the endpoint returns the first page of the results.
   * For more  information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
  /**
   * A limit on the number of results to return per page. The limit is advisory and
   * the implementation might return more or less results. If the supplied limit is negative, zero, or
   * greater than the maximum limit of 1000, it is ignored.
   * Default value: `100`
   */
  limit?: number | null;
}

export const listPaymentLinksRequestSchema: Schema<ListPaymentLinksRequest> = object(
  {
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
  }
);
