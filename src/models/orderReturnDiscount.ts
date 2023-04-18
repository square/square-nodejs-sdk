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

/**
 * Represents a discount being returned that applies to one or more return line items in an
 * order.
 * Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals.
 * The amount distributed to each return line item is relative to that item’s contribution to the
 * order subtotal.
 */
export interface OrderReturnDiscount {
  /** A unique ID that identifies the returned discount only within this order. */
  uid?: string | null;
  /** The discount `uid` from the order that contains the original application of this discount. */
  sourceDiscountUid?: string | null;
  /** The catalog object ID referencing [CatalogDiscount](entity:CatalogDiscount). */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this discount references. */
  catalogVersion?: bigint | null;
  /** The discount's name. */
  name?: string | null;
  /** Indicates how the discount is applied to the associated line item or order. */
  type?: string;
  /**
   * The percentage of the tax, as a string representation of a decimal number.
   * A value of `"7.25"` corresponds to a percentage of 7.25%.
   * `percentage` is not set for amount-based discounts.
   */
  percentage?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  appliedMoney?: Money;
  /** Indicates whether this is a line-item or order-level discount. */
  scope?: string;
}

export const orderReturnDiscountSchema: Schema<OrderReturnDiscount> = object({
  uid: ['uid', optional(nullable(string()))],
  sourceDiscountUid: ['source_discount_uid', optional(nullable(string()))],
  catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
  catalogVersion: ['catalog_version', optional(nullable(bigint()))],
  name: ['name', optional(nullable(string()))],
  type: ['type', optional(string())],
  percentage: ['percentage', optional(nullable(string()))],
  amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
  appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
  scope: ['scope', optional(string())],
});
