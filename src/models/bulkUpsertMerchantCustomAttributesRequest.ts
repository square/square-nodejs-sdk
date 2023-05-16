import { dict, lazy, object, Schema } from '../schema';
import {
  BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest,
  bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema,
} from './bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest';

/** Represents a [BulkUpsertMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkUpsertMerchantCustomAttributes) request. */
export interface BulkUpsertMerchantCustomAttributesRequest {
  /**
   * A map containing 1 to 25 individual upsert requests. For each request, provide an
   * arbitrary ID that is unique for this `BulkUpsertMerchantCustomAttributes` request and the
   * information needed to create or update a custom attribute.
   */
  values: Record<string, BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest>;
}

export const bulkUpsertMerchantCustomAttributesRequestSchema: Schema<BulkUpsertMerchantCustomAttributesRequest> = object(
  {
    values: [
      'values',
      dict(
        lazy(
          () =>
            bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema
        )
      ),
    ],
  }
);
