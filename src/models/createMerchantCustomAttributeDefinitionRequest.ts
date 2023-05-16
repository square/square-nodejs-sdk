import { lazy, object, optional, Schema, string } from '../schema';
import {
  CustomAttributeDefinition,
  customAttributeDefinitionSchema,
} from './customAttributeDefinition';

/** Represents a [CreateMerchantCustomAttributeDefinition]($e/MerchantCustomAttributes/CreateMerchantCustomAttributeDefinition) request. */
export interface CreateMerchantCustomAttributeDefinitionRequest {
  /**
   * Represents a definition for custom attribute values. A custom attribute definition
   * specifies the key, visibility, schema, and other properties for a custom attribute.
   */
  customAttributeDefinition: CustomAttributeDefinition;
  /**
   * A unique identifier for this request, used to ensure idempotency. For more information,
   * see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string;
}

export const createMerchantCustomAttributeDefinitionRequestSchema: Schema<CreateMerchantCustomAttributeDefinitionRequest> = object(
  {
    customAttributeDefinition: [
      'custom_attribute_definition',
      lazy(() => customAttributeDefinitionSchema),
    ],
    idempotencyKey: ['idempotency_key', optional(string())],
  }
);
