import { lazy, object, Schema, string } from '../schema';
import { LoyaltyAccount, loyaltyAccountSchema } from './loyaltyAccount';

/** A request to create a new loyalty account. */
export interface CreateLoyaltyAccountRequest {
  /**
   * Describes a loyalty account. For more information, see
   * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
   */
  loyaltyAccount: LoyaltyAccount;
  /**
   * A unique string that identifies this `CreateLoyaltyAccount` request.
   * Keys can be any valid string, but must be unique for every request.
   */
  idempotencyKey: string;
}

export const createLoyaltyAccountRequestSchema: Schema<CreateLoyaltyAccountRequest> = object(
  {
    loyaltyAccount: ['loyalty_account', lazy(() => loyaltyAccountSchema)],
    idempotencyKey: ['idempotency_key', string()],
  }
);
