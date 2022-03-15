import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyAccount, loyaltyAccountSchema } from './loyaltyAccount';

/** A response that includes the loyalty account. */
export interface RetrieveLoyaltyAccountResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Describes a loyalty account in a [loyalty program]($m/LoyaltyProgram). For more information, see
   * [Create and Retrieve Loyalty Accounts](https://developer.squareup.com/docs/loyalty-api/loyalty-accounts).
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
