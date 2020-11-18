import { object, Schema, string } from '../schema';

/** The query filter to return the search result by exact match of the specified attribute name and value. */
export interface CatalogQueryExact {
  /** The name of the attribute to be searched. Matching of the attribute name is exact. */
  attributeName: string;
  /**
   * The desired value of the search attribute. Matching of the attribute value is case insensitive and can be partial.
   * For example, if a specified value of "sma", objects with the named attribute value of "Small", "small" are both matched.
   */
  attributeValue: string;
}

export const catalogQueryExactSchema: Schema<CatalogQueryExact> = object({
  attributeName: ['attribute_name', string()],
  attributeValue: ['attribute_value', string()],
});
