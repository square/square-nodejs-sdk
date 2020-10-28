import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  OrderMoneyAmounts,
  orderMoneyAmountsSchema,
} from './orderMoneyAmounts';
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

/** The set of line items, service charges, taxes, discounts, tips, etc. being returned in an Order. */
export interface OrderReturn {
  /** Unique ID that identifies the return only within this order. */
  uid?: string;
  /**
   * Order which contains the original sale of these returned line items. This will be unset
   * for unlinked returns.
   */
  sourceOrderId?: string;
  /** Collection of line items which are being returned. */
  returnLineItems?: OrderReturnLineItem[];
  /** Collection of service charges which are being returned. */
  returnServiceCharges?: OrderReturnServiceCharge[];
  /**
   * Collection of references to taxes being returned for an order, including the total
   * applied tax amount to be returned. The taxes must reference a top-level tax ID from the source
   * order.
   */
  returnTaxes?: OrderReturnTax[];
  /**
   * Collection of references to discounts being returned for an order, including the total
   * applied discount amount to be returned. The discounts must reference a top-level discount ID
   * from the source order.
   */
  returnDiscounts?: OrderReturnDiscount[];
  /**
   * A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding
   * when the minimum unit of account is smaller than the lowest physical denomination of currency.
   */
  roundingAdjustment?: OrderRoundingAdjustment;
  /** A collection of various money amounts. */
  returnAmounts?: OrderMoneyAmounts;
}

export const orderReturnSchema: Schema<OrderReturn> = object({
  uid: ['uid', optional(string())],
  sourceOrderId: ['source_order_id', optional(string())],
  returnLineItems: [
    'return_line_items',
    optional(array(lazy(() => orderReturnLineItemSchema))),
  ],
  returnServiceCharges: [
    'return_service_charges',
    optional(array(lazy(() => orderReturnServiceChargeSchema))),
  ],
  returnTaxes: [
    'return_taxes',
    optional(array(lazy(() => orderReturnTaxSchema))),
  ],
  returnDiscounts: [
    'return_discounts',
    optional(array(lazy(() => orderReturnDiscountSchema))),
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
