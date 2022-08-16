import { lazy, object, optional, Schema, string } from '../schema';
import {
  CustomerTextFilter,
  customerTextFilterSchema,
} from './customerTextFilter';

/**
 * The customer address filter. This filter is used in a [CustomerCustomAttributeFilterValue]($m/CustomerCustomAttributeFilterValue) filter when
 * searching by an `Address`-type custom attribute.
 */
export interface CustomerAddressFilter {
  /**
   * A filter to select customers based on exact or fuzzy matching of
   * customer attributes against a specified query. Depending on the customer attributes,
   * the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both.
   */
  postalCode?: CustomerTextFilter;
  /**
   * Indicates the country associated with another entity, such as a business.
   * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country?: string;
}

export const customerAddressFilterSchema: Schema<CustomerAddressFilter> = object(
  {
    postalCode: ['postal_code', optional(lazy(() => customerTextFilterSchema))],
    country: ['country', optional(string())],
  }
);
