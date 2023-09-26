import {
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';

/** Location-specific overrides for specified properties of a `CatalogModifier` object. */
export interface ModifierLocationOverrides {
  /** The ID of the `Location` object representing the location. This can include a deactivated location. */
  locationId?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  priceMoney?: Money;
  /**
   * Indicates whether the modifier is sold out at the specified location or not. As an example, for cheese (modifier) burger (item), when the modifier is sold out, it is the cheese, but not the burger, that is sold out.
   * The seller can manually set this sold out status. Attempts by an application to set this attribute are ignored.
   */
  soldOut?: boolean;
}

export const modifierLocationOverridesSchema: Schema<ModifierLocationOverrides> = object(
  {
    locationId: ['location_id', optional(nullable(string()))],
    priceMoney: ['price_money', optional(lazy(() => moneySchema))],
    soldOut: ['sold_out', optional(boolean())],
  }
);
