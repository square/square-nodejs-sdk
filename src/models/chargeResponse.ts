import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Transaction, transactionSchema } from './transaction';

/**
 * Defines the fields that are included in the response body of
 * a request to the [Charge](api-endpoint:Transactions-Charge) endpoint.
 * One of `errors` or `transaction` is present in a given response (never both).
 */
export interface ChargeResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a transaction processed with Square, either with the
   * Connect API or with Square Point of Sale.
   * The `tenders` field of this object lists all methods of payment used to pay in
   * the transaction.
   */
  transaction?: Transaction;
}

export const chargeResponseSchema: Schema<ChargeResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  transaction: ['transaction', optional(lazy(() => transactionSchema))],
});
