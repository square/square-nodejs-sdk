import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyAccount, loyaltyAccountSchema } from './loyaltyAccount';

/** A response that includes the loyalty account. */
export interface RetrieveLoyaltyAccountResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Describes a loyalty account. For more information, see
   * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
   */
  loyaltyAccount?: LoyaltyAccount;
}

export const retrieveLoyaltyAccountResponseSchema: Schema<RetrieveLoyaltyAccountResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    loyaltyAccount: [
      'loyalty_account',
      optional(lazy(() => loyaltyAccountSchema)),
    ],
  }
);
