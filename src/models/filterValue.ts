import { array, object, optional, Schema, string } from '../schema';

/**
 * A filter to select resources based on an exact field value. For any given
 * value, the value can only be in one property. Depending on the field, either
 * all properties can be set or only a subset will be available.
 * Refer to the documentation of the field.
 */
export interface FilterValue {
  /** A list of terms that must be present on the field of the resource. */
  all?: string[];
  /**
   * A list of terms where at least one of them must be present on the
   * field of the resource.
   */
  any?: string[];
  /** A list of terms that must not be present on the field the resource */
  none?: string[];
}

export const filterValueSchema: Schema<FilterValue> = object({
  all: ['all', optional(array(string()))],
  any: ['any', optional(array(string()))],
  none: ['none', optional(array(string()))],
});
