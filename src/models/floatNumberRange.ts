import { nullable, object, optional, Schema, string } from '../schema';

/** Specifies a decimal number range. */
export interface FloatNumberRange {
  /** A decimal value indicating where the range starts. */
  startAt?: string | null;
  /** A decimal value indicating where the range ends. */
  endAt?: string | null;
}

export const floatNumberRangeSchema: Schema<FloatNumberRange> = object({
  startAt: ['start_at', optional(nullable(string()))],
  endAt: ['end_at', optional(nullable(string()))],
});
