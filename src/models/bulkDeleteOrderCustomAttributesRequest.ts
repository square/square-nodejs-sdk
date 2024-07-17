import { dict, lazy, object, Schema } from '../schema';
import {
  BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute,
  bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema,
} from './bulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute';

/** Represents a bulk delete request for one or more order custom attributes. */
export interface BulkDeleteOrderCustomAttributesRequest {
  /** A map of requests that correspond to individual delete operations for custom attributes. */
  values: Record<
    string,
    BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute
  >;
}

export const bulkDeleteOrderCustomAttributesRequestSchema: Schema<BulkDeleteOrderCustomAttributesRequest> = object(
  {
    values: [
      'values',
      dict(
        lazy(
          () =>
            bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema
        )
      ),
    ],
  }
);
