import { lazy, object, optional, Schema } from '../schema';
import {
  CustomerCreationSourceFilter,
  customerCreationSourceFilterSchema,
} from './customerCreationSourceFilter';
import {
  CustomerCustomAttributeFilters,
  customerCustomAttributeFiltersSchema,
} from './customerCustomAttributeFilters';
import {
  CustomerTextFilter,
  customerTextFilterSchema,
} from './customerTextFilter';
import { FilterValue, filterValueSchema } from './filterValue';
import { TimeRange, timeRangeSchema } from './timeRange';

/**
 * Represents the filtering criteria in a [search query]($m/CustomerQuery) that defines how to filter
 * customer profiles returned in [SearchCustomers]($e/Customers/SearchCustomers) results.
 */
export interface CustomerFilter {
  /**
   * The creation source filter.
   * If one or more creation sources are set, customer profiles are included in,
   * or excluded from, the result if they match at least one of the filter criteria.
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
   * customer attributes against a specified query. Depending on the customer attributes,
   * the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both.
   */
  emailAddress?: CustomerTextFilter;
  /**
   * A filter to select customers based on exact or fuzzy matching of
   * customer attributes against a specified query. Depending on the customer attributes,
   * the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both.
   */
  phoneNumber?: CustomerTextFilter;
  /**
   * A filter to select customers based on exact or fuzzy matching of
   * customer attributes against a specified query. Depending on the customer attributes,
   * the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both.
   */
  referenceId?: CustomerTextFilter;
  /**
   * A filter to select resources based on an exact field value. For any given
   * value, the value can only be in one property. Depending on the field, either
   * all properties can be set or only a subset will be available.
   * Refer to the documentation of the field.
   */
  groupIds?: FilterValue;
  /**
   * The custom attribute filters in a set of [customer filters]($m/CustomerFilter) used in a search query. Use this filter
   * to search based on [custom attributes]($m/CustomAttribute) that are assigned to customer profiles. For more information, see
   * [Search by custom attribute](https://developer.squareup.com/docs/customers-api/use-the-api/search-customers#search-by-custom-attribute).
   */
  customAttribute?: CustomerCustomAttributeFilters;
  /**
   * A filter to select resources based on an exact field value. For any given
   * value, the value can only be in one property. Depending on the field, either
   * all properties can be set or only a subset will be available.
   * Refer to the documentation of the field.
   */
  segmentIds?: FilterValue;
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
  customAttribute: [
    'custom_attribute',
    optional(lazy(() => customerCustomAttributeFiltersSchema)),
  ],
  segmentIds: ['segment_ids', optional(lazy(() => filterValueSchema))],
});
