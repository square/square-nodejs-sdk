import { boolean, number, object, optional, Schema, string } from '../schema';

/**
 * A defined break template that sets an expectation for possible `Break`
 * instances on a `Shift`.
 */
export interface BreakType {
  /** The UUID for this object. */
  id?: string;
  /** The ID of the business location this type of break applies to. */
  locationId: string;
  /**
   * A human-readable name for this type of break. The name is displayed to
   * employees in Square products.
   */
  breakName: string;
  /**
   * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of
   * this break. Precision less than minutes is truncated.
   * Example for break expected duration of 15 minutes: T15M
   */
  expectedDuration: string;
  /**
   * Whether this break counts towards time worked for compensation
   * purposes.
   */
  isPaid: boolean;
  /**
   * Used for resolving concurrency issues. The request fails if the version
   * provided does not match the server version at the time of the request. If a value is not
   * provided, Square's servers execute a "blind" write; potentially
   * overwriting another writer's data.
   */
  version?: number;
  /** A read-only timestamp in RFC 3339 format. */
  createdAt?: string;
  /** A read-only timestamp in RFC 3339 format. */
  updatedAt?: string;
}

export const breakTypeSchema: Schema<BreakType> = object({
  id: ['id', optional(string())],
  locationId: ['location_id', string()],
  breakName: ['break_name', string()],
  expectedDuration: ['expected_duration', string()],
  isPaid: ['is_paid', boolean()],
  version: ['version', optional(number())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
