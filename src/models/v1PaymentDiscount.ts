import { lazy, object, optional, Schema, string } from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';

/** V1PaymentDiscount */
export interface V1PaymentDiscount {
  /** The discount's name. */
  name?: string;
  appliedMoney?: V1Money;
  /** The ID of the applied discount, if available. Discounts applied in older versions of Square Register might not have an ID. */
  discountId?: string;
}

export const v1PaymentDiscountSchema: Schema<V1PaymentDiscount> = object({
  name: ['name', optional(string())],
  appliedMoney: ['applied_money', optional(lazy(() => v1MoneySchema))],
  discountId: ['discount_id', optional(string())],
});
