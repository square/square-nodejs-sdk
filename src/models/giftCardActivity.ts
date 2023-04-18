import { lazy, nullable, object, optional, Schema, string } from '../schema';
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
  GiftCardActivityTransferBalanceFrom,
  giftCardActivityTransferBalanceFromSchema,
} from './giftCardActivityTransferBalanceFrom';
import {
  GiftCardActivityTransferBalanceTo,
  giftCardActivityTransferBalanceToSchema,
} from './giftCardActivityTransferBalanceTo';
import {
  GiftCardActivityUnblock,
  giftCardActivityUnblockSchema,
} from './giftCardActivityUnblock';
import {
  GiftCardActivityUnlinkedActivityRefund,
  giftCardActivityUnlinkedActivityRefundSchema,
} from './giftCardActivityUnlinkedActivityRefund';
import { Money, moneySchema } from './money';

/**
 * Represents an action performed on a [gift card]($m/GiftCard) that affects its state or balance.
 * A gift card activity contains information about a specific activity type. For example, a `REDEEM` activity
 * includes a `redeem_activity_details` field that contains information about the redemption.
 */
export interface GiftCardActivity {
  /** The Square-assigned ID of the gift card activity. */
  id?: string;
  /** Indicates the type of [gift card activity]($m/GiftCardActivity). */
  type: string;
  /** The ID of the [business location](entity:Location) where the activity occurred. */
  locationId: string;
  /** The timestamp when the gift card activity was created, in RFC 3339 format. */
  createdAt?: string;
  /**
   * The gift card ID. When creating a gift card activity, `gift_card_id` is not required if
   * `gift_card_gan` is specified.
   */
  giftCardId?: string | null;
  /**
   * The gift card account number (GAN). When creating a gift card activity, `gift_card_gan`
   * is not required if `gift_card_id` is specified.
   */
  giftCardGan?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  giftCardBalanceMoney?: Money;
  /** Represents details about a `LOAD` [gift card activity type]($m/GiftCardActivityType). */
  loadActivityDetails?: GiftCardActivityLoad;
  /** Represents details about an `ACTIVATE` [gift card activity type]($m/GiftCardActivityType). */
  activateActivityDetails?: GiftCardActivityActivate;
  /** Represents details about a `REDEEM` [gift card activity type]($m/GiftCardActivityType). */
  redeemActivityDetails?: GiftCardActivityRedeem;
  /** Represents details about a `CLEAR_BALANCE` [gift card activity type]($m/GiftCardActivityType). */
  clearBalanceActivityDetails?: GiftCardActivityClearBalance;
  /** Represents details about a `DEACTIVATE` [gift card activity type]($m/GiftCardActivityType). */
  deactivateActivityDetails?: GiftCardActivityDeactivate;
  /** Represents details about an `ADJUST_INCREMENT` [gift card activity type]($m/GiftCardActivityType). */
  adjustIncrementActivityDetails?: GiftCardActivityAdjustIncrement;
  /** Represents details about an `ADJUST_DECREMENT` [gift card activity type]($m/GiftCardActivityType). */
  adjustDecrementActivityDetails?: GiftCardActivityAdjustDecrement;
  /** Represents details about a `REFUND` [gift card activity type]($m/GiftCardActivityType). */
  refundActivityDetails?: GiftCardActivityRefund;
  /** Represents details about an `UNLINKED_ACTIVITY_REFUND` [gift card activity type]($m/GiftCardActivityType). */
  unlinkedActivityRefundActivityDetails?: GiftCardActivityUnlinkedActivityRefund;
  /**
   * Represents details about an `IMPORT` [gift card activity type]($m/GiftCardActivityType).
   * This activity type is used when Square imports a third-party gift card, in which case the
   * `gan_source` of the gift card is set to `OTHER`.
   */
  importActivityDetails?: GiftCardActivityImport;
  /** Represents details about a `BLOCK` [gift card activity type]($m/GiftCardActivityType). */
  blockActivityDetails?: GiftCardActivityBlock;
  /** Represents details about an `UNBLOCK` [gift card activity type]($m/GiftCardActivityType). */
  unblockActivityDetails?: GiftCardActivityUnblock;
  /** Represents details about an `IMPORT_REVERSAL` [gift card activity type]($m/GiftCardActivityType). */
  importReversalActivityDetails?: GiftCardActivityImportReversal;
  /** Represents details about a `TRANSFER_BALANCE_TO` [gift card activity type]($m/GiftCardActivityType). */
  transferBalanceToActivityDetails?: GiftCardActivityTransferBalanceTo;
  /** Represents details about a `TRANSFER_BALANCE_FROM` [gift card activity type]($m/GiftCardActivityType). */
  transferBalanceFromActivityDetails?: GiftCardActivityTransferBalanceFrom;
}

export const giftCardActivitySchema: Schema<GiftCardActivity> = object({
  id: ['id', optional(string())],
  type: ['type', string()],
  locationId: ['location_id', string()],
  createdAt: ['created_at', optional(string())],
  giftCardId: ['gift_card_id', optional(nullable(string()))],
  giftCardGan: ['gift_card_gan', optional(nullable(string()))],
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
  transferBalanceToActivityDetails: [
    'transfer_balance_to_activity_details',
    optional(lazy(() => giftCardActivityTransferBalanceToSchema)),
  ],
  transferBalanceFromActivityDetails: [
    'transfer_balance_from_activity_details',
    optional(lazy(() => giftCardActivityTransferBalanceFromSchema)),
  ],
});
