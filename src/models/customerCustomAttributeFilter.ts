import { lazy, object, optional, Schema, string } from '../schema';
import {
  CustomerCustomAttributeFilterValue,
  customerCustomAttributeFilterValueSchema,
} from './customerCustomAttributeFilterValue';
import { TimeRange, timeRangeSchema } from './timeRange';

/**
 * The custom attribute filter. Use this filter in a set of [custom attribute filters]($m/CustomerCustomAttributeFilters) to search
 * based on the value or last updated date of a customer-related [custom attribute]($m/CustomAttribute).
 */
export interface CustomerCustomAttributeFilter {
  /**
   * The `key` of the [custom attribute](entity:CustomAttribute) to filter by. The key is the identifier of the custom attribute
   * (and the corresponding custom attribute definition) and can be retrieved using the [Customer Custom Attributes API](api:CustomerCustomAttributes).
   */
  key: string;
  /**
   * A type-specific filter used in a [custom attribute filter]($m/CustomerCustomAttributeFilter) to search based on the value
   * of a customer-related [custom attribute]($m/CustomAttribute).
   */
  filter?: CustomerCustomAttributeFilterValue;
  /**
   * Represents a generic time range. The start and end values are
   * represented in RFC 3339 format. Time ranges are customized to be
   * inclusive or exclusive based on the needs of a particular endpoint.
   * Refer to the relevant endpoint-specific documentation to determine
   * how time ranges are handled.
   */
  updatedAt?: TimeRange;
}

export const customerCustomAttributeFilterSchema: Schema<CustomerCustomAttributeFilter> = object(
  {
    key: ['key', string()],
    filter: [
      'filter',
      optional(lazy(() => customerCustomAttributeFilterValueSchema)),
    ],
    updatedAt: ['updated_at', optional(lazy(() => timeRangeSchema))],
  }
);
