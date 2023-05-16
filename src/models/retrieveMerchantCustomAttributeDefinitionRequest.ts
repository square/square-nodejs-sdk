import { number, object, optional, Schema } from '../schema';

/** Represents a [RetrieveMerchantCustomAttributeDefinition]($e/MerchantCustomAttributes/RetrieveMerchantCustomAttributeDefinition) request. */
export interface RetrieveMerchantCustomAttributeDefinitionRequest {
  /**
   * The current version of the custom attribute definition, which is used for strongly consistent
   * reads to guarantee that you receive the most up-to-date data. When included in the request,
   * Square returns the specified version or a higher version if one exists. If the specified version
   * is higher than the current version, Square returns a `BAD_REQUEST` error.
   */
  version?: number;
}

export const retrieveMerchantCustomAttributeDefinitionRequestSchema: Schema<RetrieveMerchantCustomAttributeDefinitionRequest> = object(
  { version: ['version', optional(number())] }
);
