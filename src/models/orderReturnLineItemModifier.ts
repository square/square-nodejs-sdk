import {
  bigint,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';

/** A line item modifier being returned. */
export interface OrderReturnLineItemModifier {
  /** A unique ID that identifies the return modifier only within this order. */
  uid?: string | null;
  /**
   * The modifier `uid` from the order's line item that contains the
   * original sale of this line item modifier.
   */
  sourceModifierUid?: string | null;
  /** The catalog object ID referencing [CatalogModifier]($m/CatalogModifier). */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this line item modifier references. */
  catalogVersion?: bigint | null;
  /** The name of the item modifier. */
  name?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  basePriceMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalPriceMoney?: Money;
}

export const orderReturnLineItemModifierSchema: Schema<OrderReturnLineItemModifier> = object(
  {
    uid: ['uid', optional(nullable(string()))],
    sourceModifierUid: ['source_modifier_uid', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    name: ['name', optional(nullable(string()))],
    basePriceMoney: ['base_price_money', optional(lazy(() => moneySchema))],
    totalPriceMoney: ['total_price_money', optional(lazy(() => moneySchema))],
  }
);
