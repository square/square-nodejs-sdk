import { array, dict, lazy, object, optional, Schema } from '../schema';
import {
  DeleteOrderCustomAttributeResponse,
  deleteOrderCustomAttributeResponseSchema,
} from './deleteOrderCustomAttributeResponse';
import { Error, errorSchema } from './error';

/** Represents a response from deleting one or more order custom attributes. */
export interface BulkDeleteOrderCustomAttributesResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * A map of responses that correspond to individual delete requests. Each response has the same ID
   * as the corresponding request and contains either a `custom_attribute` or an `errors` field.
   */
  values: Record<string, DeleteOrderCustomAttributeResponse>;
}

export const bulkDeleteOrderCustomAttributesResponseSchema: Schema<BulkDeleteOrderCustomAttributesResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    values: [
      'values',
      dict(lazy(() => deleteOrderCustomAttributeResponseSchema)),
    ],
  }
);
