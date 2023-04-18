import { boolean, nullable, number, object, optional, Schema } from '../schema';

/** Represents a [RetrieveBookingCustomAttribute]($e/BookingCustomAttributes/RetrieveBookingCustomAttribute) request. */
export interface RetrieveBookingCustomAttributeRequest {
  /**
   * Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of
   * the custom attribute. Set this parameter to `true` to get the name and description of the custom
   * attribute, information about the data type, or other definition details. The default value is `false`.
   */
  withDefinition?: boolean | null;
  /**
   * The current version of the custom attribute, which is used for strongly consistent reads to
   * guarantee that you receive the most up-to-date data. When included in the request, Square
   * returns the specified version or a higher version if one exists. If the specified version is
   * higher than the current version, Square returns a `BAD_REQUEST` error.
   */
  version?: number;
}

export const retrieveBookingCustomAttributeRequestSchema: Schema<RetrieveBookingCustomAttributeRequest> = object(
  {
    withDefinition: ['with_definition', optional(nullable(boolean()))],
    version: ['version', optional(number())],
  }
);
