import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';
import { V1PaymentTax, v1PaymentTaxSchema } from './v1PaymentTax';

/** V1PaymentSurcharge */
export interface V1PaymentSurcharge {
  /** The name of the surcharge. */
  name?: string | null;
  appliedMoney?: V1Money;
  /** The amount of the surcharge as a percentage. The percentage is provided as a string representing the decimal equivalent of the percentage. For example, "0.7" corresponds to a 7% surcharge. Exactly one of rate or amount_money should be set. */
  rate?: string | null;
  amountMoney?: V1Money;
  type?: string;
  /** Indicates whether the surcharge is taxable. */
  taxable?: boolean | null;
  /** The list of taxes that should be applied to the surcharge. */
  taxes?: V1PaymentTax[] | null;
  /** A Square-issued unique identifier associated with the surcharge. */
  surchargeId?: string | null;
}

export const v1PaymentSurchargeSchema: Schema<V1PaymentSurcharge> = object({
  name: ['name', optional(nullable(string()))],
  appliedMoney: ['applied_money', optional(lazy(() => v1MoneySchema))],
  rate: ['rate', optional(nullable(string()))],
  amountMoney: ['amount_money', optional(lazy(() => v1MoneySchema))],
  type: ['type', optional(string())],
  taxable: ['taxable', optional(nullable(boolean()))],
  taxes: ['taxes', optional(nullable(array(lazy(() => v1PaymentTaxSchema))))],
  surchargeId: ['surcharge_id', optional(nullable(string()))],
});
