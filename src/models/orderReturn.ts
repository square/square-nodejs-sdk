import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { OrderMoneyAmounts, orderMoneyAmountsSchema } from './orderMoneyAmounts';
import {
  OrderReturnDiscount,
  orderReturnDiscountSchema,
} from './orderReturnDiscount';
import {
  OrderReturnLineItem,
  orderReturnLineItemSchema,
} from './orderReturnLineItem';
import {
  OrderReturnServiceCharge,
  orderReturnServiceChargeSchema,
} from './orderReturnServiceCharge';
import { OrderReturnTax, orderReturnTaxSchema } from './orderReturnTax';
import {
  OrderRoundingAdjustment,
  orderRoundingAdjustmentSchema,
} from './orderRoundingAdjustment';

/** The set of line items, service charges, taxes, discounts, tips, and other items being returned in an order. */
export interface OrderReturn {
  /** A unique ID that identifies the return only within this order. */
  uid?: string | null;
  /**
   * An order that contains the original sale of these return line items. This is unset
   * for unlinked returns.
   */
  sourceOrderId?: string | null;
  /** A collection of line items that are being returned. */
  returnLineItems?: OrderReturnLineItem[] | null;
  /** A collection of service charges that are being returned. */
  returnServiceCharges?: OrderReturnServiceCharge[];
  /**
   * A collection of references to taxes being returned for an order, including the total
   * applied tax amount to be returned. The taxes must reference a top-level tax ID from the source
   * order.
   */
  returnTaxes?: OrderReturnTax[] | null;
  /**
   * A collection of references to discounts being returned for an order, including the total
   * applied discount amount to be returned. The discounts must reference a top-level discount ID
   * from the source order.
   */
  returnDiscounts?: OrderReturnDiscount[] | null;
  /**
   * A rounding adjustment of the money being returned. Commonly used to apply cash rounding
   * when the minimum unit of the account is smaller than the lowest physical denomination of the currency.
   */
  roundingAdjustment?: OrderRoundingAdjustment;
  /** A collection of various money amounts. */
  returnAmounts?: OrderMoneyAmounts;
}

export const orderReturnSchema: Schema<OrderReturn> = object({
  uid: ['uid', optional(nullable(string()))],
  sourceOrderId: ['source_order_id', optional(nullable(string()))],
  returnLineItems: [
    'return_line_items',
    optional(nullable(array(lazy(() => orderReturnLineItemSchema)))),
  ],
  returnServiceCharges: [
    'return_service_charges',
    optional(array(lazy(() => orderReturnServiceChargeSchema))),
  ],
  returnTaxes: [
    'return_taxes',
    optional(nullable(array(lazy(() => orderReturnTaxSchema)))),
  ],
  returnDiscounts: [
    'return_discounts',
    optional(nullable(array(lazy(() => orderReturnDiscountSchema)))),
  ],
  roundingAdjustment: [
    'rounding_adjustment',
    optional(lazy(() => orderRoundingAdjustmentSchema)),
  ],
  returnAmounts: [
    'return_amounts',
    optional(lazy(() => orderMoneyAmountsSchema)),
  ],
});
