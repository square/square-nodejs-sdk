import { array, lazy, object, optional, Schema, string } from '../schema';
import { CustomAttribute, customAttributeSchema } from './customAttribute';
import { Error, errorSchema } from './error';

/** Represents a response for an individual upsert request in a [BulkUpsertCustomerCustomAttributes]($e/CustomerCustomAttributes/BulkUpsertCustomerCustomAttributes) operation. */
export interface BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse {
  /** The ID of the customer profile associated with the custom attribute. */
  customerId?: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute?: CustomAttribute;
  /** Any errors that occurred while processing the individual request. */
  errors?: Error[];
}

export const bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponseSchema: Schema<BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse> = object(
  {
    customerId: ['customer_id', optional(string())],
    customAttribute: [
      'custom_attribute',
      optional(lazy(() => customAttributeSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
