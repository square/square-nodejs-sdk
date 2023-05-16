import { dict, lazy, object, Schema } from '../schema';
import {
  BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest,
  bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequestSchema,
} from './bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest';

/** Represents a [BulkDeleteMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkDeleteMerchantCustomAttributes) request. */
export interface BulkDeleteMerchantCustomAttributesRequest {
  /**
   * The data used to update the `CustomAttribute` objects.
   * The keys must be unique and are used to map to the corresponding response.
   */
  values: Record<string, BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest>;
}

export const bulkDeleteMerchantCustomAttributesRequestSchema: Schema<BulkDeleteMerchantCustomAttributesRequest> = object(
  {
    values: [
      'values',
      dict(
        lazy(
          () =>
            bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequestSchema
        )
      ),
    ],
  }
);
