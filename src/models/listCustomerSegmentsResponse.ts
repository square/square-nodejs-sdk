import { array, lazy, object, optional, Schema, string } from '../schema';
import { CustomerSegment, customerSegmentSchema } from './customerSegment';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body for requests to the `ListCustomerSegments` endpoint.
 * Either `errors` or `segments` is present in a given response (never both).
 */
export interface ListCustomerSegmentsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The list of customer segments belonging to the associated Square account. */
  segments?: CustomerSegment[];
  /**
   * A pagination cursor to be used in subsequent calls to `ListCustomerSegments`
   * to retrieve the next set of query results. The cursor is only present if the request succeeded and
   * additional results are available.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const listCustomerSegmentsResponseSchema: Schema<ListCustomerSegmentsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    segments: ['segments', optional(array(lazy(() => customerSegmentSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
