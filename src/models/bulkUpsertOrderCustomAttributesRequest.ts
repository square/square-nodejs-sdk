import { dict, lazy, object, Schema } from '../schema';
import {
  BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute,
  bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema,
} from './bulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute';

/** Represents a bulk upsert request for one or more order custom attributes. */
export interface BulkUpsertOrderCustomAttributesRequest {
  /** A map of requests that correspond to individual upsert operations for custom attributes. */
  values: Record<string, BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute>;
}

export const bulkUpsertOrderCustomAttributesRequestSchema: Schema<BulkUpsertOrderCustomAttributesRequest> = object(
  {
    values: [
      'values',
      dict(
        lazy(
          () =>
            bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema
        )
      ),
    ],
  }
);
