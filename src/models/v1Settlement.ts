import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';
import { V1SettlementEntry, v1SettlementEntrySchema } from './v1SettlementEntry';

/** V1Settlement */
export interface V1Settlement {
  /** The settlement's unique identifier. */
  id?: string;
  status?: string;
  totalMoney?: V1Money;
  /** The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format. */
  initiatedAt?: string | null;
  /** The Square-issued unique identifier for the bank account associated with the settlement. */
  bankAccountId?: string | null;
  /** The entries included in this settlement. */
  entries?: V1SettlementEntry[] | null;
}

export const v1SettlementSchema: Schema<V1Settlement> = object({
  id: ['id', optional(string())],
  status: ['status', optional(string())],
  totalMoney: ['total_money', optional(lazy(() => v1MoneySchema))],
  initiatedAt: ['initiated_at', optional(nullable(string()))],
  bankAccountId: ['bank_account_id', optional(nullable(string()))],
  entries: [
    'entries',
    optional(nullable(array(lazy(() => v1SettlementEntrySchema)))),
  ],
});
