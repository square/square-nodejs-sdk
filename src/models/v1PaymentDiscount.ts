import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';

/** V1PaymentDiscount */
export interface V1PaymentDiscount {
  /** The discount's name. */
  name?: string | null;
  appliedMoney?: V1Money;
  /** The ID of the applied discount, if available. Discounts applied in older versions of Square Register might not have an ID. */
  discountId?: string | null;
}

export const v1PaymentDiscountSchema: Schema<V1PaymentDiscount> = object({
  name: ['name', optional(nullable(string()))],
  appliedMoney: ['applied_money', optional(lazy(() => v1MoneySchema))],
  discountId: ['discount_id', optional(nullable(string()))],
});
