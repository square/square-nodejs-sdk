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

/** Additional details about Square Account payments. */
export interface SquareAccountDetails {
  /** Unique identifier for the payment source used for this payment. */
  paymentSourceToken?: string | null;
  /** Information about errors encountered during the request. */
  errors?: Error[] | null;
}

export const squareAccountDetailsSchema: Schema<SquareAccountDetails> = object({
  paymentSourceToken: ['payment_source_token', optional(nullable(string()))],
  errors: ['errors', optional(nullable(array(lazy(() => errorSchema))))],
});
