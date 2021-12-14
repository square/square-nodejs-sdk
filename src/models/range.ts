import { object, optional, Schema, string } from '../schema';

/** The range of a number value between the specified lower and upper bounds. */
export interface Range {
  /**
   * The lower bound of the number range. At least one of `min` or `max` must be specified.
   * If unspecified, the results will have no minimum value.
   */
  min?: string;
  /**
   * The upper bound of the number range. At least one of `min` or `max` must be specified.
   * If unspecified, the results will have no maximum value.
   */
  max?: string;
}

export const rangeSchema: Schema<Range> = object({
  min: ['min', optional(string())],
  max: ['max', optional(string())],
});
