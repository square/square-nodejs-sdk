import { object, Schema, string } from '../schema';

/** Describes a gift card activity of the CLEAR_BALANCE type. */
export interface GiftCardActivityClearBalance {
  reason: string;
}

export const giftCardActivityClearBalanceSchema: Schema<GiftCardActivityClearBalance> = object(
  { reason: ['reason', string()] }
);
