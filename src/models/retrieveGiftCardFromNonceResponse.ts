import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { GiftCard, giftCardSchema } from './giftCard';

/**
 * A response that contains a `GiftCard` object. If the request resulted in errors,
 * the response contains a set of `Error` objects.
 */
export interface RetrieveGiftCardFromNonceResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents a Square gift card. */
  giftCard?: GiftCard;
}

export const retrieveGiftCardFromNonceResponseSchema: Schema<RetrieveGiftCardFromNonceResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    giftCard: ['gift_card', optional(lazy(() => giftCardSchema))],
  }
);
