import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * Represents a tax being returned that applies to one or more return line items in an order.
 * Fixed-amount, order-scoped taxes are distributed across all non-zero return line item totals.
 * The amount distributed to each return line item is relative to that item’s contribution to the
 * order subtotal.
 */
export interface OrderReturnTax {
  /** Unique ID that identifies the return tax only within this order. */
  uid?: string;
  /** `uid` of the Tax from the Order which contains the original charge of this tax. */
  sourceTaxUid?: string;
  /** The catalog object id referencing [CatalogTax](#type-catalogtax). */
  catalogObjectId?: string;
  /** The tax's name. */
  name?: string;
  /** Indicates how the tax is applied to the associated line item or order. */
  type?: string;
  /**
   * The percentage of the tax, as a string representation of a decimal number.
   * For example, a value of `"7.25"` corresponds to a percentage of 7.25%.
   */
  percentage?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  appliedMoney?: Money;
  /** Indicates whether this is a line item or order level tax. */
  scope?: string;
}

export const orderReturnTaxSchema: Schema<OrderReturnTax> = object({
  uid: ['uid', optional(string())],
  sourceTaxUid: ['source_tax_uid', optional(string())],
  catalogObjectId: ['catalog_object_id', optional(string())],
  name: ['name', optional(string())],
  type: ['type', optional(string())],
  percentage: ['percentage', optional(string())],
  appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
  scope: ['scope', optional(string())],
});
