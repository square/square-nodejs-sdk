import { lazy, object, Schema, string } from '../schema';
import { GiftCard, giftCardSchema } from './giftCard';

/** A request to create a gift card. */
export interface CreateGiftCardRequest {
  /** A unique string that identifies the `CreateGiftCard` request. */
  idempotencyKey: string;
  /** The location ID where the gift card that will be created should be registered. */
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
