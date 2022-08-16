import { object, optional, Schema, string } from '../schema';

/** Specifies a decimal number range. */
export interface FloatNumberRange {
  /** A decimal value indicating where the range starts. */
  startAt?: string;
  /** A decimal value indicating where the range ends. */
  endAt?: string;
}

export const floatNumberRangeSchema: Schema<FloatNumberRange> = object({
  startAt: ['start_at', optional(string())],
  endAt: ['end_at', optional(string())],
});
