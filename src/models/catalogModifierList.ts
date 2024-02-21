import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';

/**
 * For a text-based modifier, this encapsulates the modifier's text when its `modifier_type` is `TEXT`.
 * For example, to sell T-shirts with custom prints, a text-based modifier can be used to capture the buyer-supplied
 * text string to be selected for the T-shirt at the time of sale.
 * For non text-based modifiers, this encapsulates a non-empty list of modifiers applicable to items
 * at the time of sale. Each element of the modifier list is a `CatalogObject` instance of the `MODIFIER` type.
 * For example, a "Condiments" modifier list applicable to a "Hot Dog" item
 * may contain "Ketchup", "Mustard", and "Relish" modifiers.
 * A non text-based modifier can be applied to the modified item once or multiple times, if the `selection_type` field
 * is set to `SINGLE` or `MULTIPLE`, respectively. On the other hand, a text-based modifier can be applied to the item
 * only once and the `selection_type` field is always set to `SINGLE`.
 */
export interface CatalogModifierList {
  /**
   * The name of the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of
   * Unicode code points.
   */
  name?: string | null;
  /** The position of this `CatalogModifierList` within a list of `CatalogModifierList` instances. */
  ordinal?: number | null;
  /** Indicates whether a CatalogModifierList supports multiple selections. */
  selectionType?: string;
  /**
   * A non-empty list of `CatalogModifier` objects to be included in the `CatalogModifierList`,
   * for non text-based modifiers when the `modifier_type` attribute is `LIST`. Each element of this list
   * is a `CatalogObject` instance of the `MODIFIER` type, containing the following attributes:
   * ```
   * {
   * "id": "{{catalog_modifier_id}}",
   * "type": "MODIFIER",
   * "modifier_data": {{a CatalogModifier instance>}}
   * }
   * ```
   */
  modifiers?: CatalogObject[] | null;
  /**
   * The IDs of images associated with this `CatalogModifierList` instance.
   * Currently these images are not displayed on Square products, but may be displayed in 3rd-party applications.
   */
  imageIds?: string[] | null;
  /** Defines the type of `CatalogModifierList`. */
  modifierType?: string;
  /**
   * The maximum length, in Unicode points, of the text string of the text-based modifier as represented by
   * this `CatalogModifierList` object with the `modifier_type` set to `TEXT`.
   */
  maxLength?: number | null;
  /**
   * Whether the text string must be a non-empty string (`true`) or not (`false`) for a text-based modifier
   * as represented by this `CatalogModifierList` object with the `modifier_type` set to `TEXT`.
   */
  textRequired?: boolean | null;
  /**
   * A note for internal use by the business.
   * For example, for a text-based modifier applied to a T-shirt item, if the buyer-supplied text of "Hello, Kitty!"
   * is to be printed on the T-shirt, this `internal_name` attribute can be "Use italic face" as
   * an instruction for the business to follow.
   * For non text-based modifiers, this `internal_name` attribute can be
   * used to include SKUs, internal codes, or supplemental descriptions for internal use.
   */
  internalName?: string | null;
}

export const catalogModifierListSchema: Schema<CatalogModifierList> = object({
  name: ['name', optional(nullable(string()))],
  ordinal: ['ordinal', optional(nullable(number()))],
  selectionType: ['selection_type', optional(string())],
  modifiers: [
    'modifiers',
    optional(nullable(array(lazy(() => catalogObjectSchema)))),
  ],
  imageIds: ['image_ids', optional(nullable(array(string())))],
  modifierType: ['modifier_type', optional(string())],
  maxLength: ['max_length', optional(nullable(number()))],
  textRequired: ['text_required', optional(nullable(boolean()))],
  internalName: ['internal_name', optional(nullable(string()))],
});
