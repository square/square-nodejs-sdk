import { array, object, Schema, string } from '../schema';

/**
 * The query filter to return the search result(s) by exact match of the specified `attribute_name` and any of
 * the `attribute_values`.
 */
export interface CatalogQuerySet {
  /** The name of the attribute to be searched. Matching of the attribute name is exact. */
  attributeName: string;
  /**
   * The desired values of the search attribute. Matching of the attribute values is exact and case insensitive.
   * A maximum of 250 values may be searched in a request.
   */
  attributeValues: string[];
}

export const catalogQuerySetSchema: Schema<CatalogQuerySet> = object({
  attributeName: ['attribute_name', string()],
  attributeValues: ['attribute_values', array(string())],
});
