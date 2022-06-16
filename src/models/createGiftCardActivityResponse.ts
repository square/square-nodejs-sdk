import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { GiftCardActivity, giftCardActivitySchema } from './giftCardActivity';

/**
 * A response that contains a `GiftCardActivity` that was created.
 * The response might contain a set of `Error` objects if the request resulted in errors.
 */
export interface CreateGiftCardActivityResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents an action performed on a [gift card]($m/GiftCard) that affects its state or balance.
   * A gift card activity contains information about a specific activity type. For example, a `REDEEM` activity
   * includes a `redeem_activity_details` field that contains information about the redemption.
   */
  giftCardActivity?: GiftCardActivity;
}

export const createGiftCardActivityResponseSchema: Schema<CreateGiftCardActivityResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    giftCardActivity: [
      'gift_card_activity',
      optional(lazy(() => giftCardActivitySchema)),
    ],
  }
);
