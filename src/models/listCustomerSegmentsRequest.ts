import { object, optional, Schema, string } from '../schema';

/** Defines the valid parameters for requests to __ListCustomerSegments__. */
export interface ListCustomerSegmentsRequest {
  /**
   * A pagination cursor returned by previous calls to __ListCustomerSegments__.
   * Used to retrieve the next set of query results.
   * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
   */
  cursor?: string;
}

export const listCustomerSegmentsRequestSchema: Schema<ListCustomerSegmentsRequest> = object(
  { cursor: ['cursor', optional(string())] }
);
