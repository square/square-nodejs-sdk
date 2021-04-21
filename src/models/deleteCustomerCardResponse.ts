import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the `DeleteCustomerCard` endpoint.
 */
export interface DeleteCustomerCardResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteCustomerCardResponseSchema: Schema<DeleteCustomerCardResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
