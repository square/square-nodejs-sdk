import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Represents an individual delete response in a [BulkDeleteMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkDeleteMerchantCustomAttributes)
 * request.
 */
export interface BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse {
  /** Errors that occurred while processing the individual MerchantCustomAttributeDeleteRequest request */
  errors?: Error[];
}

export const bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema: Schema<BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
