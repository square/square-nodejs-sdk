import { array, lazy, object, optional, Schema } from '../schema';
import { CustomerSegment, customerSegmentSchema } from './customerSegment';
import { Error, errorSchema } from './error';

/**
 * Defines the fields included in the response body for requests to __RetrieveCustomerSegment__.
 * One of `errors` or `segment` is present in a given response (never both).
 */
export interface RetrieveCustomerSegmentResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a group of customer profiles that match one or more predefined filter criteria.
   * Segments (also known as Smart Groups) are defined and created within Customer Directory in the Square Dashboard or Point of Sale.
   */
  segment?: CustomerSegment;
}

export const retrieveCustomerSegmentResponseSchema: Schema<RetrieveCustomerSegmentResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    segment: ['segment', optional(lazy(() => customerSegmentSchema))],
  }
);
