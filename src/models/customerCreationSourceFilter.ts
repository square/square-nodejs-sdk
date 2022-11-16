import { array, nullable, object, optional, Schema, string } from '../schema';

/**
 * The creation source filter.
 * If one or more creation sources are set, customer profiles are included in,
 * or excluded from, the result if they match at least one of the filter criteria.
 */
export interface CustomerCreationSourceFilter {
  /**
   * The list of creation sources used as filtering criteria.
   * See [CustomerCreationSource](#type-customercreationsource) for possible values
   */
  values?: string[] | null;
  /**
   * Indicates whether customers should be included in, or excluded from,
   * the result set when they match the filtering criteria.
   */
  rule?: string;
}

export const customerCreationSourceFilterSchema: Schema<CustomerCreationSourceFilter> = object(
  {
    values: ['values', optional(nullable(array(string())))],
    rule: ['rule', optional(string())],
  }
);
