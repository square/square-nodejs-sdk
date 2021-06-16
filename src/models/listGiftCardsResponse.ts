import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { GiftCard, giftCardSchema } from './giftCard';

/**
 * A response that contains one or more `GiftCard`. The response might contain a set of `Error`
 * objects if the request resulted in errors.
 */
export interface ListGiftCardsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Gift cards retrieved. */
  giftCards?: GiftCard[];
  /**
   * When a response is truncated, it includes a cursor that you can use in a
   * subsequent request to fetch the next set of gift cards. If empty, this is
   * the final response.
   */
  cursor?: string;
}

export const listGiftCardsResponseSchema: Schema<ListGiftCardsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    giftCards: ['gift_cards', optional(array(lazy(() => giftCardSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
