import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Range, rangeSchema } from './range';

/**
 * Supported custom attribute query expressions for calling the
 * [SearchCatalogItems](#endpoint-Catalog-SearchCatalogItems)
 * endpoint to search for items or item variations.
 */
export interface CustomAttributeFilter {
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * `custom_attribute_definition_id`
   * property value against the the specified id.
   */
  customAttributeDefinitionId?: string;
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * `key` property value against
   * the specified key.
   */
  key?: string;
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * `string_value`  property value
   * against the specified text.
   */
  stringFilter?: string;
  /** The range of a number value between the specified lower and upper bounds. */
  numberFilter?: Range;
  /**
   * A query expression to filter items or item variations by matching  their custom attributes'
   * `selection_uid_values`
   * values against the specified selection uids.
   */
  selectionUidsFilter?: string[];
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * `boolean_value` property values
   * against the specified Boolean expression.
   */
  boolFilter?: boolean;
}

export const customAttributeFilterSchema: Schema<CustomAttributeFilter> = object(
  {
    customAttributeDefinitionId: [
      'custom_attribute_definition_id',
      optional(string()),
    ],
    key: ['key', optional(string())],
    stringFilter: ['string_filter', optional(string())],
    numberFilter: ['number_filter', optional(lazy(() => rangeSchema))],
    selectionUidsFilter: ['selection_uids_filter', optional(array(string()))],
    boolFilter: ['bool_filter', optional(boolean())],
  }
);
