import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { GiftCard, giftCardSchema } from './giftCard';

/**
 * A response that contains the unlinked `GiftCard` object. If the request resulted in errors,
 * the response contains a set of `Error` objects.
 */
export interface UnlinkCustomerFromGiftCardResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents a Square gift card. */
  giftCard?: GiftCard;
}

export const unlinkCustomerFromGiftCardResponseSchema: Schema<UnlinkCustomerFromGiftCardResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    giftCard: ['gift_card', optional(lazy(() => giftCardSchema))],
  }
);
