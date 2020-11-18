import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';

/**
 * A list of modifiers applicable to items at the time of sale.
 * For example, a "Condiments" modifier list applicable to a "Hot Dog" item
 * may contain "Ketchup", "Mustard", and "Relish" modifiers.
 * Use the `selection_type` field to specify whether or not multiple selections from
 * the modifier list are allowed.
 */
export interface CatalogModifierList {
  /** The name for the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: string;
  /** Determines where this modifier list appears in a list of `CatalogModifierList` values. */
  ordinal?: number;
  /** Indicates whether a CatalogModifierList supports multiple selections. */
  selectionType?: string;
  /**
   * The options included in the `CatalogModifierList`.
   * You must include at least one `CatalogModifier`.
   * Each CatalogObject must have type `MODIFIER` and contain
   * `CatalogModifier` data.
   */
  modifiers?: CatalogObject[];
}

export const catalogModifierListSchema: Schema<CatalogModifierList> = object({
  name: ['name', optional(string())],
  ordinal: ['ordinal', optional(number())],
  selectionType: ['selection_type', optional(string())],
  modifiers: ['modifiers', optional(array(lazy(() => catalogObjectSchema)))],
});
