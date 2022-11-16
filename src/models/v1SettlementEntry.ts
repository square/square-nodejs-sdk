import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';

/** V1SettlementEntry */
export interface V1SettlementEntry {
  /** The settlement's unique identifier. */
  paymentId?: string | null;
  type?: string;
  amountMoney?: V1Money;
  feeMoney?: V1Money;
}

export const v1SettlementEntrySchema: Schema<V1SettlementEntry> = object({
  paymentId: ['payment_id', optional(nullable(string()))],
  type: ['type', optional(string())],
  amountMoney: ['amount_money', optional(lazy(() => v1MoneySchema))],
  feeMoney: ['fee_money', optional(lazy(() => v1MoneySchema))],
});
