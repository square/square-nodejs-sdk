import { array, lazy, object, optional, Schema } from '../schema';
import {
  CustomAttributeDefinition,
  customAttributeDefinitionSchema,
} from './customAttributeDefinition';
import { Error, errorSchema } from './error';

/** Represents a response from updating an order custom attribute definition. */
export interface UpdateOrderCustomAttributeDefinitionResponse {
  /**
   * Represents a definition for custom attribute values. A custom attribute definition
   * specifies the key, visibility, schema, and other properties for a custom attribute.
   */
  customAttributeDefinition?: CustomAttributeDefinition;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const updateOrderCustomAttributeDefinitionResponseSchema: Schema<UpdateOrderCustomAttributeDefinitionResponse> = object(
  {
    customAttributeDefinition: [
      'custom_attribute_definition',
      optional(lazy(() => customAttributeDefinitionSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
