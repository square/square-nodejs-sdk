import { boolean, nullable, number, object, optional, Schema } from '../schema';

/** Represents a get request for an order custom attribute. */
export interface RetrieveOrderCustomAttributeRequest {
  /**
   * To enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
   * control, include this optional field and specify the current version of the custom attribute.
   */
  version?: number;
  /**
   * Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each
   * custom attribute. Set this parameter to `true` to get the name and description of each custom attribute,
   * information about the data type, or other definition details. The default value is `false`.
   */
  withDefinition?: boolean | null;
}

export const retrieveOrderCustomAttributeRequestSchema: Schema<RetrieveOrderCustomAttributeRequest> = object(
  {
    version: ['version', optional(number())],
    withDefinition: ['with_definition', optional(nullable(boolean()))],
  }
);
