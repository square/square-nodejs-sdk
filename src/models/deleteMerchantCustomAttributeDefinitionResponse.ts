import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Represents a response from a delete request containing error messages if there are any. */
export interface DeleteMerchantCustomAttributeDefinitionResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteMerchantCustomAttributeDefinitionResponseSchema: Schema<DeleteMerchantCustomAttributeDefinitionResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
