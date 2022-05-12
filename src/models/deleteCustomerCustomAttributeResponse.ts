import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Represents a [DeleteCustomerCustomAttribute]($e/CustomerCustomAttributes/DeleteCustomerCustomAttribute) response.
 * Either an empty object `{}` (for a successful deletion) or `errors` is present in the response.
 */
export interface DeleteCustomerCustomAttributeResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteCustomerCustomAttributeResponseSchema: Schema<DeleteCustomerCustomAttributeResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
