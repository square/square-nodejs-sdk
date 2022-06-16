import { object, Schema, string } from '../schema';

/** Represents details about an `UNBLOCK` [gift card activity type]($m/GiftCardActivityType). */
export interface GiftCardActivityUnblock {
  /** Indicates the reason for unblocking a [gift card]($m/GiftCard). */
  reason: string;
}

export const giftCardActivityUnblockSchema: Schema<GiftCardActivityUnblock> = object(
  { reason: ['reason', string()] }
);
