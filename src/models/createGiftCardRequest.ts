import { lazy, object, Schema, string } from '../schema';
import { GiftCard, giftCardSchema } from './giftCard';

/** Represents a [CreateGiftCard]($e/GiftCards/CreateGiftCard) request. */
export interface CreateGiftCardRequest {
  /**
   * A unique identifier for this request, used to ensure idempotency. For more information,
   * see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey: string;
  /**
   * The ID of the [location](entity:Location) where the gift card should be registered for
   * reporting purposes. Gift cards can be redeemed at any of the seller's locations.
   */
  locationId: string;
  /** Represents a Square gift card. */
  giftCard: GiftCard;
}

export const createGiftCardRequestSchema: Schema<CreateGiftCardRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    locationId: ['location_id', string()],
    giftCard: ['gift_card', lazy(() => giftCardSchema)],
  }
);
