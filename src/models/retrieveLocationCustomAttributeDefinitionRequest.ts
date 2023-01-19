import { number, object, optional, Schema } from '../schema';

/** Represents a [RetrieveLocationCustomAttributeDefinition]($e/LocationCustomAttributes/RetrieveLocationCustomAttributeDefinition) request. */
export interface RetrieveLocationCustomAttributeDefinitionRequest {
  /**
   * The current version of the custom attribute definition, which is used for strongly consistent
   * reads to guarantee that you receive the most up-to-date data. When included in the request,
   * Square returns the specified version or a higher version if one exists. If the specified version
   * is higher than the current version, Square returns a `BAD_REQUEST` error.
   */
  version?: number;
}

export const retrieveLocationCustomAttributeDefinitionRequestSchema: Schema<RetrieveLocationCustomAttributeDefinitionRequest> = object(
  { version: ['version', optional(number())] }
);
