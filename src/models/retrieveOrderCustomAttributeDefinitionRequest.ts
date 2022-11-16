import { number, object, optional, Schema } from '../schema';

/** Represents a get request for an order custom attribute definition. */
export interface RetrieveOrderCustomAttributeDefinitionRequest {
  /**
   * To enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
   * control, include this optional field and specify the current version of the custom attribute.
   */
  version?: number;
}

export const retrieveOrderCustomAttributeDefinitionRequestSchema: Schema<RetrieveOrderCustomAttributeDefinitionRequest> = object(
  { version: ['version', optional(number())] }
);
