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
import { V1Money, v1MoneySchema } from './v1Money';
import { V1PaymentDiscount, v1PaymentDiscountSchema } from './v1PaymentDiscount';
import {
  V1PaymentItemDetail,
  v1PaymentItemDetailSchema,
} from './v1PaymentItemDetail';
import { V1PaymentModifier, v1PaymentModifierSchema } from './v1PaymentModifier';
import { V1PaymentTax, v1PaymentTaxSchema } from './v1PaymentTax';

/**
 * Payment include an` itemizations` field that lists the items purchased,
 * along with associated fees, modifiers, and discounts. Each itemization has an
 * `itemization_type` field that indicates which of the following the itemization
 * represents:
 * <ul>
 * <li>An item variation from the merchant's item library</li>
 * <li>A custom monetary amount</li>
 * <li>
 * An action performed on a Square gift card, such as activating or
 * reloading it.
 * </li>
 * </ul>
 * *Note**: itemization information included in a `Payment` object reflects
 * details collected **at the time of the payment**. Details such as the name or
 * price of items might have changed since the payment was processed.
 */
export interface V1PaymentItemization {
  /** The item's name. */
  name?: string | null;
  /** The quantity of the item purchased. This can be a decimal value. */
  quantity?: number | null;
  itemizationType?: string;
  /** V1PaymentItemDetail */
  itemDetail?: V1PaymentItemDetail;
  /** Notes entered by the merchant about the item at the time of payment, if any. */
  notes?: string | null;
  /** The name of the item variation purchased, if any. */
  itemVariationName?: string | null;
  totalMoney?: V1Money;
  singleQuantityMoney?: V1Money;
  grossSalesMoney?: V1Money;
  discountMoney?: V1Money;
  netSalesMoney?: V1Money;
  /** All taxes applied to this itemization. */
  taxes?: V1PaymentTax[] | null;
  /** All discounts applied to this itemization. */
  discounts?: V1PaymentDiscount[] | null;
  /** All modifier options applied to this itemization. */
  modifiers?: V1PaymentModifier[] | null;
}

export const v1PaymentItemizationSchema: Schema<V1PaymentItemization> = object({
  name: ['name', optional(nullable(string()))],
  quantity: ['quantity', optional(nullable(number()))],
  itemizationType: ['itemization_type', optional(string())],
  itemDetail: ['item_detail', optional(lazy(() => v1PaymentItemDetailSchema))],
  notes: ['notes', optional(nullable(string()))],
  itemVariationName: ['item_variation_name', optional(nullable(string()))],
  totalMoney: ['total_money', optional(lazy(() => v1MoneySchema))],
  singleQuantityMoney: [
    'single_quantity_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  grossSalesMoney: ['gross_sales_money', optional(lazy(() => v1MoneySchema))],
  discountMoney: ['discount_money', optional(lazy(() => v1MoneySchema))],
  netSalesMoney: ['net_sales_money', optional(lazy(() => v1MoneySchema))],
  taxes: ['taxes', optional(nullable(array(lazy(() => v1PaymentTaxSchema))))],
  discounts: [
    'discounts',
    optional(nullable(array(lazy(() => v1PaymentDiscountSchema)))),
  ],
  modifiers: [
    'modifiers',
    optional(nullable(array(lazy(() => v1PaymentModifierSchema)))),
  ],
});
