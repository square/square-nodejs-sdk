import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';

/** V1Discount */
export interface V1Discount {
  /** The discount's unique ID. */
  id?: string;
  /** The discount's name. */
  name?: string;
  /** The rate of the discount, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. This rate is 0 if discount_type is VARIABLE_PERCENTAGE. */
  rate?: string;
  amountMoney?: V1Money;
  discountType?: string;
  /** Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment. */
  pinRequired?: boolean;
  color?: string;
  /** The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. */
  v2Id?: string;
}

export const v1DiscountSchema: Schema<V1Discount> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  rate: ['rate', optional(string())],
  amountMoney: ['amount_money', optional(lazy(() => v1MoneySchema))],
  discountType: ['discount_type', optional(string())],
  pinRequired: ['pin_required', optional(boolean())],
  color: ['color', optional(string())],
  v2Id: ['v2_id', optional(string())],
});
