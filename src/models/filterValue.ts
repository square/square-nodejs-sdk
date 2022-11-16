import { array, nullable, object, optional, Schema, string } from '../schema';

/**
 * A filter to select resources based on an exact field value. For any given
 * value, the value can only be in one property. Depending on the field, either
 * all properties can be set or only a subset will be available.
 * Refer to the documentation of the field.
 */
export interface FilterValue {
  /** A list of terms that must be present on the field of the resource. */
  all?: string[] | null;
  /**
   * A list of terms where at least one of them must be present on the
   * field of the resource.
   */
  any?: string[] | null;
  /** A list of terms that must not be present on the field the resource */
  none?: string[] | null;
}

export const filterValueSchema: Schema<FilterValue> = object({
  all: ['all', optional(nullable(array(string())))],
  any: ['any', optional(nullable(array(string())))],
  none: ['none', optional(nullable(array(string())))],
});
