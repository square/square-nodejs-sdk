import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Represents a response from a delete request containing error messages if there are any. */
export interface DeleteCustomerCustomAttributeDefinitionResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteCustomerCustomAttributeDefinitionResponseSchema: Schema<DeleteCustomerCustomAttributeDefinitionResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
