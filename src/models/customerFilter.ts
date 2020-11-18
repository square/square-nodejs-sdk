import { lazy, object, optional, Schema } from '../schema';
import {
  CustomerCreationSourceFilter,
  customerCreationSourceFilterSchema,
} from './customerCreationSourceFilter';
import {
  CustomerTextFilter,
  customerTextFilterSchema,
} from './customerTextFilter';
import { FilterValue, filterValueSchema } from './filterValue';
import { TimeRange, timeRangeSchema } from './timeRange';

/**
 * Represents a set of `CustomerQuery` filters used to limit the set of
 * `Customers` returned by `SearchCustomers`.
 */
export interface CustomerFilter {
  /**
   * Creation source filter.
   * If one or more creation sources are set, customer profiles are included in,
   * or excluded from, the result if they match at least one of the filter
   * criteria.
   */
  creationSource?: CustomerCreationSourceFilter;
  /**
   * Represents a generic time range. The start and end values are
   * represented in RFC 3339 format. Time ranges are customized to be
   * inclusive or exclusive based on the needs of a particular endpoint.
   * Refer to the relevant endpoint-specific documentation to determine
   * how time ranges are handled.
   */
  createdAt?: TimeRange;
  /**
   * Represents a generic time range. The start and end values are
   * represented in RFC 3339 format. Time ranges are customized to be
   * inclusive or exclusive based on the needs of a particular endpoint.
   * Refer to the relevant endpoint-specific documentation to determine
   * how time ranges are handled.
   */
  updatedAt?: TimeRange;
  /**
   * A filter to select customers based on exact or fuzzy matching of
   * customer attributes against a specified query. Depending on customer attributes,
   * the filter can be case sensitive. This filter can be either exact or fuzzy. It cannot be both.
   */
  emailAddress?: CustomerTextFilter;
  /**
   * A filter to select customers based on exact or fuzzy matching of
   * customer attributes against a specified query. Depending on customer attributes,
   * the filter can be case sensitive. This filter can be either exact or fuzzy. It cannot be both.
   */
  phoneNumber?: CustomerTextFilter;
  /**
   * A filter to select customers based on exact or fuzzy matching of
   * customer attributes against a specified query. Depending on customer attributes,
   * the filter can be case sensitive. This filter can be either exact or fuzzy. It cannot be both.
   */
  referenceId?: CustomerTextFilter;
  /**
   * A filter to select resources based on an exact field value. For any given
   * value, the value can only be in one property. Depending on the field, either
   * all properties can be set or only a subset will be available.
   * Refer to the documentation of the field.
   */
  groupIds?: FilterValue;
}

export const customerFilterSchema: Schema<CustomerFilter> = object({
  creationSource: [
    'creation_source',
    optional(lazy(() => customerCreationSourceFilterSchema)),
  ],
  createdAt: ['created_at', optional(lazy(() => timeRangeSchema))],
  updatedAt: ['updated_at', optional(lazy(() => timeRangeSchema))],
  emailAddress: [
    'email_address',
    optional(lazy(() => customerTextFilterSchema)),
  ],
  phoneNumber: ['phone_number', optional(lazy(() => customerTextFilterSchema))],
  referenceId: ['reference_id', optional(lazy(() => customerTextFilterSchema))],
  groupIds: ['group_ids', optional(lazy(() => filterValueSchema))],
});
