import { dict, lazy, object, Schema } from '../schema';
import {
  BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest,
  bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequestSchema,
} from './bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest';

/** Represents a [BulkDeleteLocationCustomAttributes]($e/LocationCustomAttributes/BulkDeleteLocationCustomAttributes) request. */
export interface BulkDeleteLocationCustomAttributesRequest {
  /**
   * The data used to update the `CustomAttribute` objects.
   * The keys must be unique and are used to map to the corresponding response.
   */
  values: Record<string, BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest>;
}

export const bulkDeleteLocationCustomAttributesRequestSchema: Schema<BulkDeleteLocationCustomAttributesRequest> = object(
  {
    values: [
      'values',
      dict(
        lazy(
          () =>
            bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequestSchema
        )
      ),
    ],
  }
);
