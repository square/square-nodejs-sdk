import { boolean, nullable, object, optional, Schema, string } from '../schema';

/** A record of an employee's break during a shift. */
export interface Break {
  /** The UUID for this object. */
  id?: string;
  /**
   * RFC 3339; follows the same timezone information as `Shift`. Precision up to
   * the minute is respected; seconds are truncated.
   */
  startAt: string;
  /**
   * RFC 3339; follows the same timezone information as `Shift`. Precision up to
   * the minute is respected; seconds are truncated.
   */
  endAt?: string | null;
  /** The `BreakType` that this `Break` was templated on. */
  breakTypeId: string;
  /** A human-readable name. */
  name: string;
  /**
   * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of
   * the break.
   */
  expectedDuration: string;
  /**
   * Whether this break counts towards time worked for compensation
   * purposes.
   */
  isPaid: boolean;
}

export const breakSchema: Schema<Break> = object({
  id: ['id', optional(string())],
  startAt: ['start_at', string()],
  endAt: ['end_at', optional(nullable(string()))],
  breakTypeId: ['break_type_id', string()],
  name: ['name', string()],
  expectedDuration: ['expected_duration', string()],
  isPaid: ['is_paid', boolean()],
});
