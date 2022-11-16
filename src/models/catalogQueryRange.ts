import { bigint, nullable, object, optional, Schema, string } from '../schema';

/** The query filter to return the search result whose named attribute values fall between the specified range. */
export interface CatalogQueryRange {
  /** The name of the attribute to be searched. */
  attributeName: string;
  /** The desired minimum value for the search attribute (inclusive). */
  attributeMinValue?: bigint | null;
  /** The desired maximum value for the search attribute (inclusive). */
  attributeMaxValue?: bigint | null;
}

export const catalogQueryRangeSchema: Schema<CatalogQueryRange> = object({
  attributeName: ['attribute_name', string()],
  attributeMinValue: ['attribute_min_value', optional(nullable(bigint()))],
  attributeMaxValue: ['attribute_max_value', optional(nullable(bigint()))],
});
