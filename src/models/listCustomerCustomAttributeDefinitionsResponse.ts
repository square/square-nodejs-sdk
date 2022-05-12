import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  CustomAttributeDefinition,
  customAttributeDefinitionSchema,
} from './customAttributeDefinition';
import { Error, errorSchema } from './error';

/**
 * Represents a [ListCustomerCustomAttributeDefinitions]($e/CustomerCustomAttributes/ListCustomerCustomAttributeDefinitions) response.
 * Either `custom_attribute_definitions`, an empty object, or `errors` is present in the response.
 * If additional results are available, the `cursor` field is also present along with `custom_attribute_definitions`.
 */
export interface ListCustomerCustomAttributeDefinitionsResponse {
  /**
   * The retrieved custom attribute definitions. If no custom attribute definitions are found,
   * Square returns an empty object (`{}`).
   */
  customAttributeDefinitions?: CustomAttributeDefinition[];
  /**
   * The cursor to provide in your next call to this endpoint to retrieve the next page of
   * results for your original request. This field is present only if the request succeeded and
   * additional results are available. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const listCustomerCustomAttributeDefinitionsResponseSchema: Schema<ListCustomerCustomAttributeDefinitionsResponse> = object(
  {
    customAttributeDefinitions: [
      'custom_attribute_definitions',
      optional(array(lazy(() => customAttributeDefinitionSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
