import { number, object, optional, Schema, string } from '../schema';

/** The query filter to return the search result whose named attribute values fall between the specified range. */
export interface CatalogQueryRange {
  /** The name of the attribute to be searched. */
  attributeName: string;
  /** The desired minimum value for the search attribute (inclusive). */
  attributeMinValue?: number;
  /** The desired maximum value for the search attribute (inclusive). */
  attributeMaxValue?: number;
}

export const catalogQueryRangeSchema: Schema<CatalogQueryRange> = object({
  attributeName: ['attribute_name', string()],
  attributeMinValue: ['attribute_min_value', optional(number())],
  attributeMaxValue: ['attribute_max_value', optional(number())],
});
