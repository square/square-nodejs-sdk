import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Payout, payoutSchema } from './payout';

export interface GetPayoutResponse {
  /**
   * An accounting of the amount owed the seller and record of the actual transfer to their
   * external bank account or to the Square balance.
   */
  payout?: Payout;
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const getPayoutResponseSchema: Schema<GetPayoutResponse> = object({
  payout: ['payout', optional(lazy(() => payoutSchema))],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
