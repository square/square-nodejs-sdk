import { array, dict, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  UpsertOrderCustomAttributeResponse,
  upsertOrderCustomAttributeResponseSchema,
} from './upsertOrderCustomAttributeResponse';

/** Represents a response from a bulk upsert of order custom attributes. */
export interface BulkUpsertOrderCustomAttributesResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** A map of responses that correspond to individual upsert operations for custom attributes. */
  values: Record<string, UpsertOrderCustomAttributeResponse>;
}

export const bulkUpsertOrderCustomAttributesResponseSchema: Schema<BulkUpsertOrderCustomAttributesResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    values: [
      'values',
      dict(lazy(() => upsertOrderCustomAttributeResponseSchema)),
    ],
  }
);
