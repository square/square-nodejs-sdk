import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** A discount applicable to items. */
export interface CatalogDiscount {
  /** The discount name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: string;
  /** How to apply a CatalogDiscount to a CatalogItem. */
  discountType?: string;
  /**
   * The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal
   * separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a percentage of `0` if `discount_type`
   * is `VARIABLE_PERCENTAGE`.
   * Do not use this field for amount-based or variable discounts.
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
  amountMoney?: Money;
  /**
   * Indicates whether a mobile staff member needs to enter their PIN to apply the
   * discount to a payment in the Square Point of Sale app.
   */
  pinRequired?: boolean;
  /** The color of the discount display label in the Square Point of Sale app. This must be a valid hex color code. */
  labelColor?: string;
  modifyTaxBasis?: string;
}

export const catalogDiscountSchema: Schema<CatalogDiscount> = object({
  name: ['name', optional(string())],
  discountType: ['discount_type', optional(string())],
  percentage: ['percentage', optional(string())],
  amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
  pinRequired: ['pin_required', optional(boolean())],
  labelColor: ['label_color', optional(string())],
  modifyTaxBasis: ['modify_tax_basis', optional(string())],
});
