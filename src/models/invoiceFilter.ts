import { array, nullable, object, optional, Schema, string } from '../schema';

/** Describes query filters to apply. */
export interface InvoiceFilter {
  /**
   * Limits the search to the specified locations. A location is required.
   * In the current implementation, only one location can be specified.
   */
  locationIds: string[];
  /**
   * Limits the search to the specified customers, within the specified locations.
   * Specifying a customer is optional. In the current implementation,
   * a maximum of one customer can be specified.
   */
  customerIds?: string[] | null;
}

export const invoiceFilterSchema: Schema<InvoiceFilter> = object({
  locationIds: ['location_ids', array(string())],
  customerIds: ['customer_ids', optional(nullable(array(string())))],
});
