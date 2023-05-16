import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ModifierLocationOverrides,
  modifierLocationOverridesSchema,
} from './modifierLocationOverrides';
import { Money, moneySchema } from './money';

/** A modifier applicable to items at the time of sale. An example of a modifier is a Cheese add-on to a Burger item. */
export interface CatalogModifier {
  /** The modifier name.  This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  priceMoney?: Money;
  /** Determines where this `CatalogModifier` appears in the `CatalogModifierList`. */
  ordinal?: number | null;
  /** The ID of the `CatalogModifierList` associated with this modifier. */
  modifierListId?: string | null;
  /** Location-specific price overrides. */
  locationOverrides?: ModifierLocationOverrides[] | null;
  /**
   * The ID of the image associated with this `CatalogModifier` instance.
   * Currently this image is not displayed by Square, but is free to be displayed in 3rd party applications.
   */
  imageId?: string | null;
}

export const catalogModifierSchema: Schema<CatalogModifier> = object({
  name: ['name', optional(nullable(string()))],
  priceMoney: ['price_money', optional(lazy(() => moneySchema))],
  ordinal: ['ordinal', optional(nullable(number()))],
  modifierListId: ['modifier_list_id', optional(nullable(string()))],
  locationOverrides: [
    'location_overrides',
    optional(nullable(array(lazy(() => modifierLocationOverridesSchema)))),
  ],
  imageId: ['image_id', optional(nullable(string()))],
});
