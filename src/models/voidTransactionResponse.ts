import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [VoidTransaction](api-endpoint:Transactions-VoidTransaction) endpoint.
 */
export interface VoidTransactionResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const voidTransactionResponseSchema: Schema<VoidTransactionResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
