import { lazy, object, optional, Schema, string } from '../schema';
import {
  GiftCardActivityActivate,
  giftCardActivityActivateSchema,
} from './giftCardActivityActivate';
import {
  GiftCardActivityAdjustDecrement,
  giftCardActivityAdjustDecrementSchema,
} from './giftCardActivityAdjustDecrement';
import {
  GiftCardActivityAdjustIncrement,
  giftCardActivityAdjustIncrementSchema,
} from './giftCardActivityAdjustIncrement';
import {
  GiftCardActivityBlock,
  giftCardActivityBlockSchema,
} from './giftCardActivityBlock';
import {
  GiftCardActivityClearBalance,
  giftCardActivityClearBalanceSchema,
} from './giftCardActivityClearBalance';
import {
  GiftCardActivityDeactivate,
  giftCardActivityDeactivateSchema,
} from './giftCardActivityDeactivate';
import {
  GiftCardActivityImport,
  giftCardActivityImportSchema,
} from './giftCardActivityImport';
import {
  GiftCardActivityImportReversal,
  giftCardActivityImportReversalSchema,
} from './giftCardActivityImportReversal';
import {
  GiftCardActivityLoad,
  giftCardActivityLoadSchema,
} from './giftCardActivityLoad';
import {
  GiftCardActivityRedeem,
  giftCardActivityRedeemSchema,
} from './giftCardActivityRedeem';
import {
  GiftCardActivityRefund,
  giftCardActivityRefundSchema,
} from './giftCardActivityRefund';
import {
  GiftCardActivityUnblock,
  giftCardActivityUnblockSchema,
} from './giftCardActivityUnblock';
import {
  GiftCardActivityUnlinkedActivityRefund,
  giftCardActivityUnlinkedActivityRefundSchema,
} from './giftCardActivityUnlinkedActivityRefund';
import { Money, moneySchema } from './money';

/** Represents an action performed on a gift card that affects its state or balance. */
export interface GiftCardActivity {
  /** The unique ID of the gift card activity. */
  id?: string;
  /** Indicates the gift card activity type. */
  type: string;
  /** The ID of the location at which the activity occurred. */
  locationId: string;
  /** The timestamp when the gift card activity was created, in RFC 3339 format. */
  createdAt?: string;
  /** The gift card ID. The ID is not required if a GAN is present. */
  giftCardId?: string;
  /** The gift card GAN. The GAN is not required if `gift_card_id` is present. */
  giftCardGan?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  giftCardBalanceMoney?: Money;
  /** Present only when `GiftCardActivityType` is LOAD. */
  loadActivityDetails?: GiftCardActivityLoad;
  /** Describes a gift card activity of the ACTIVATE type. */
  activateActivityDetails?: GiftCardActivityActivate;
  /** Present only when `GiftCardActivityType` is REDEEM. */
  redeemActivityDetails?: GiftCardActivityRedeem;
  /** Describes a gift card activity of the CLEAR_BALANCE type. */
  clearBalanceActivityDetails?: GiftCardActivityClearBalance;
  /** Describes a gift card activity of the DEACTIVATE type. */
  deactivateActivityDetails?: GiftCardActivityDeactivate;
  /** Describes a gift card activity of the ADJUST_INCREMENT type. */
  adjustIncrementActivityDetails?: GiftCardActivityAdjustIncrement;
  /** Describes a gift card activity of the ADJUST_DECREMENT type. */
  adjustDecrementActivityDetails?: GiftCardActivityAdjustDecrement;
  /** Present only when `GiftCardActivityType` is REFUND. */
  refundActivityDetails?: GiftCardActivityRefund;
  /** Present only when `GiftCardActivityType` is UNLINKED_ACTIVITY_REFUND. */
  unlinkedActivityRefundActivityDetails?: GiftCardActivityUnlinkedActivityRefund;
  /**
   * Describes a gift card activity of the IMPORT type and the `GiftCardGANSource` is OTHER
   * (a third-party gift card).
   */
  importActivityDetails?: GiftCardActivityImport;
  /** Describes a gift card activity of the BLOCK type. */
  blockActivityDetails?: GiftCardActivityBlock;
  /** Present only when `GiftCardActivityType` is UNBLOCK. */
  unblockActivityDetails?: GiftCardActivityUnblock;
  /** Present only when GiftCardActivityType is IMPORT_REVERSAL and GiftCardGANSource is OTHER */
  importReversalActivityDetails?: GiftCardActivityImportReversal;
}

export const giftCardActivitySchema: Schema<GiftCardActivity> = object({
  id: ['id', optional(string())],
  type: ['type', string()],
  locationId: ['location_id', string()],
  createdAt: ['created_at', optional(string())],
  giftCardId: ['gift_card_id', optional(string())],
  giftCardGan: ['gift_card_gan', optional(string())],
  giftCardBalanceMoney: [
    'gift_card_balance_money',
    optional(lazy(() => moneySchema)),
  ],
  loadActivityDetails: [
    'load_activity_details',
    optional(lazy(() => giftCardActivityLoadSchema)),
  ],
  activateActivityDetails: [
    'activate_activity_details',
    optional(lazy(() => giftCardActivityActivateSchema)),
  ],
  redeemActivityDetails: [
    'redeem_activity_details',
    optional(lazy(() => giftCardActivityRedeemSchema)),
  ],
  clearBalanceActivityDetails: [
    'clear_balance_activity_details',
    optional(lazy(() => giftCardActivityClearBalanceSchema)),
  ],
  deactivateActivityDetails: [
    'deactivate_activity_details',
    optional(lazy(() => giftCardActivityDeactivateSchema)),
  ],
  adjustIncrementActivityDetails: [
    'adjust_increment_activity_details',
    optional(lazy(() => giftCardActivityAdjustIncrementSchema)),
  ],
  adjustDecrementActivityDetails: [
    'adjust_decrement_activity_details',
    optional(lazy(() => giftCardActivityAdjustDecrementSchema)),
  ],
  refundActivityDetails: [
    'refund_activity_details',
    optional(lazy(() => giftCardActivityRefundSchema)),
  ],
  unlinkedActivityRefundActivityDetails: [
    'unlinked_activity_refund_activity_details',
    optional(lazy(() => giftCardActivityUnlinkedActivityRefundSchema)),
  ],
  importActivityDetails: [
    'import_activity_details',
    optional(lazy(() => giftCardActivityImportSchema)),
  ],
  blockActivityDetails: [
    'block_activity_details',
    optional(lazy(() => giftCardActivityBlockSchema)),
  ],
  unblockActivityDetails: [
    'unblock_activity_details',
    optional(lazy(() => giftCardActivityUnblockSchema)),
  ],
  importReversalActivityDetails: [
    'import_reversal_activity_details',
    optional(lazy(() => giftCardActivityImportReversalSchema)),
  ],
});
