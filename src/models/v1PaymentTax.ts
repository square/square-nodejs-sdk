import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Error, errorSchema } from './error';
import { V1Money, v1MoneySchema } from './v1Money';

/** V1PaymentTax */
export interface V1PaymentTax {
  /** Any errors that occurred during the request. */
  errors?: Error[] | null;
  /** The merchant-defined name of the tax. */
  name?: string | null;
  appliedMoney?: V1Money;
  /** The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. */
  rate?: string | null;
  inclusionType?: string;
  /** The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID. */
  feeId?: string | null;
}

export const v1PaymentTaxSchema: Schema<V1PaymentTax> = object({
  errors: ['errors', optional(nullable(array(lazy(() => errorSchema))))],
  name: ['name', optional(nullable(string()))],
  appliedMoney: ['applied_money', optional(lazy(() => v1MoneySchema))],
  rate: ['rate', optional(nullable(string()))],
  inclusionType: ['inclusion_type', optional(string())],
  feeId: ['fee_id', optional(nullable(string()))],
});
