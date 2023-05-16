import { nullable, number, object, optional, Schema, string } from '../schema';

/** Describes a `ListInvoice` request. */
export interface ListInvoicesRequest {
  /** The ID of the location for which to list invoices. */
  locationId: string;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for your original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
  /**
   * The maximum number of invoices to return (200 is the maximum `limit`).
   * If not provided, the server uses a default limit of 100 invoices.
   */
  limit?: number | null;
}

export const listInvoicesRequestSchema: Schema<ListInvoicesRequest> = object({
  locationId: ['location_id', string()],
  cursor: ['cursor', optional(nullable(string()))],
  limit: ['limit', optional(nullable(number()))],
});
