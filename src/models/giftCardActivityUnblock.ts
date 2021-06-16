import { object, Schema, string } from '../schema';

/** Present only when `GiftCardActivityType` is UNBLOCK. */
export interface GiftCardActivityUnblock {
  reason: string;
}

export const giftCardActivityUnblockSchema: Schema<GiftCardActivityUnblock> = object(
  { reason: ['reason', string()] }
);
