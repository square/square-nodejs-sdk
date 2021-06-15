import { lazy, object, Schema, string } from '../schema';
import { GiftCardActivity, giftCardActivitySchema } from './giftCardActivity';

/** A request to create a gift card activity. */
export interface CreateGiftCardActivityRequest {
  /** A unique string that identifies the `CreateGiftCardActivity` request. */
  idempotencyKey: string;
  /** Represents an action performed on a gift card that affects its state or balance. */
  giftCardActivity: GiftCardActivity;
}

export const createGiftCardActivityRequestSchema: Schema<CreateGiftCardActivityRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    giftCardActivity: [
      'gift_card_activity',
      lazy(() => giftCardActivitySchema),
    ],
  }
);
