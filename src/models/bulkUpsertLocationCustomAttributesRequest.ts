import { dict, lazy, object, Schema } from '../schema';
import {
  BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest,
  bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema,
} from './bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest';

/** Represents a [BulkUpsertLocationCustomAttributes]($e/LocationCustomAttributes/BulkUpsertLocationCustomAttributes) request. */
export interface BulkUpsertLocationCustomAttributesRequest {
  /**
   * A map containing 1 to 25 individual upsert requests. For each request, provide an
   * arbitrary ID that is unique for this `BulkUpsertLocationCustomAttributes` request and the
   * information needed to create or update a custom attribute.
   */
  values: Record<string, BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest>;
}

export const bulkUpsertLocationCustomAttributesRequestSchema: Schema<BulkUpsertLocationCustomAttributesRequest> = object(
  {
    values: [
      'values',
      dict(
        lazy(
          () =>
            bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema
        )
      ),
    ],
  }
);
