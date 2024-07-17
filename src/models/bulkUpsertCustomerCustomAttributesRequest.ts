import { dict, lazy, object, Schema } from '../schema';
import {
  BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest,
  bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema,
} from './bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest';

/** Represents a [BulkUpsertCustomerCustomAttributes]($e/CustomerCustomAttributes/BulkUpsertCustomerCustomAttributes) request. */
export interface BulkUpsertCustomerCustomAttributesRequest {
  /**
   * A map containing 1 to 25 individual upsert requests. For each request, provide an
   * arbitrary ID that is unique for this `BulkUpsertCustomerCustomAttributes` request and the
   * information needed to create or update a custom attribute.
   */
  values: Record<
    string,
    BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest
  >;
}

export const bulkUpsertCustomerCustomAttributesRequestSchema: Schema<BulkUpsertCustomerCustomAttributesRequest> = object(
  {
    values: [
      'values',
      dict(
        lazy(
          () =>
            bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema
        )
      ),
    ],
  }
);
