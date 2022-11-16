import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';

/** V1PaymentModifier */
export interface V1PaymentModifier {
  /** The modifier option's name. */
  name?: string | null;
  appliedMoney?: V1Money;
  /** The ID of the applied modifier option, if available. Modifier options applied in older versions of Square Register might not have an ID. */
  modifierOptionId?: string | null;
}

export const v1PaymentModifierSchema: Schema<V1PaymentModifier> = object({
  name: ['name', optional(nullable(string()))],
  appliedMoney: ['applied_money', optional(lazy(() => v1MoneySchema))],
  modifierOptionId: ['modifier_option_id', optional(nullable(string()))],
});
