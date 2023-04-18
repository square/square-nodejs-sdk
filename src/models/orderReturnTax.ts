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
 * Represents a tax being returned that applies to one or more return line items in an order.
 * Fixed-amount, order-scoped taxes are distributed across all non-zero return line item totals.
 * The amount distributed to each return line item is relative to that item’s contribution to the
 * order subtotal.
 */
export interface OrderReturnTax {
  /** A unique ID that identifies the returned tax only within this order. */
  uid?: string | null;
  /** The tax `uid` from the order that contains the original tax charge. */
  sourceTaxUid?: string | null;
  /** The catalog object ID referencing [CatalogTax](entity:CatalogTax). */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this tax references. */
  catalogVersion?: bigint | null;
  /** The tax's name. */
  name?: string | null;
  /** Indicates how the tax is applied to the associated line item or order. */
  type?: string;
  /**
   * The percentage of the tax, as a string representation of a decimal number.
   * For example, a value of `"7.25"` corresponds to a percentage of 7.25%.
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
  appliedMoney?: Money;
  /** Indicates whether this is a line-item or order-level tax. */
  scope?: string;
}

export const orderReturnTaxSchema: Schema<OrderReturnTax> = object({
  uid: ['uid', optional(nullable(string()))],
  sourceTaxUid: ['source_tax_uid', optional(nullable(string()))],
  catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
  catalogVersion: ['catalog_version', optional(nullable(bigint()))],
  name: ['name', optional(nullable(string()))],
  type: ['type', optional(string())],
  percentage: ['percentage', optional(nullable(string()))],
  appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
  scope: ['scope', optional(string())],
});
