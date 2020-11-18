import { object, optional, Schema, string } from '../schema';

/** The range of a number value between the specified lower and upper bounds. */
export interface Range {
  /** The lower bound of the number range. */
  min?: string;
  /** The upper bound of the number range. */
  max?: string;
}

export const rangeSchema: Schema<Range> = object({
  min: ['min', optional(string())],
  max: ['max', optional(string())],
});
