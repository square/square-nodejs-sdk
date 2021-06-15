import { object, Schema, string } from '../schema';

/** Describes a gift card activity of the BLOCK type. */
export interface GiftCardActivityBlock {
  reason: string;
}

export const giftCardActivityBlockSchema: Schema<GiftCardActivityBlock> = object(
  { reason: ['reason', string()] }
);
