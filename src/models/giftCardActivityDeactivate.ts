import { object, Schema, string } from '../schema';

/** Describes a gift card activity of the DEACTIVATE type. */
export interface GiftCardActivityDeactivate {
  reason: string;
}

export const giftCardActivityDeactivateSchema: Schema<GiftCardActivityDeactivate> = object(
  { reason: ['reason', string()] }
);
