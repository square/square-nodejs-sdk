import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * Represents an applied portion of a discount to a line item in an order.
 * Order scoped discounts have automatically applied discounts present for each line item.
 * Line-item scoped discounts must have applied discounts added manually for any applicable line
 * items. The corresponding applied money is automatically computed based on participating
 * line items.
 */
export interface OrderLineItemAppliedDiscount {
  /** A unique ID that identifies the applied discount only within this order. */
  uid?: string | null;
  /**
   * The `uid` of the discount that the applied discount represents. It must
   * reference a discount present in the `order.discounts` field.
   * This field is immutable. To change which discounts apply to a line item,
   * you must delete the discount and re-add it as a new `OrderLineItemAppliedDiscount`.
   */
  discountUid: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  appliedMoney?: Money;
}

export const orderLineItemAppliedDiscountSchema: Schema<OrderLineItemAppliedDiscount> = object(
  {
    uid: ['uid', optional(nullable(string()))],
    discountUid: ['discount_uid', string()],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
  }
);
