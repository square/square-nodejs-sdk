import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  LoyaltyPromotionAvailableTimeData,
  loyaltyPromotionAvailableTimeDataSchema,
} from './loyaltyPromotionAvailableTimeData';
import {
  LoyaltyPromotionIncentive,
  loyaltyPromotionIncentiveSchema,
} from './loyaltyPromotionIncentive';
import {
  LoyaltyPromotionTriggerLimit,
  loyaltyPromotionTriggerLimitSchema,
} from './loyaltyPromotionTriggerLimit';
import { Money, moneySchema } from './money';

/**
 * Represents a promotion for a [loyalty program]($m/LoyaltyProgram). Loyalty promotions enable buyers
 * to earn extra points on top of those earned from the base program.
 * A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED` status.
 */
export interface LoyaltyPromotion {
  /** The Square-assigned ID of the promotion. */
  id?: string;
  /** The name of the promotion. */
  name: string;
  /**
   * Represents how points for a [loyalty promotion]($m/LoyaltyPromotion) are calculated,
   * either by multiplying the points earned from the base program or by adding a specified number
   * of points to the points earned from the base program.
   */
  incentive: LoyaltyPromotionIncentive;
  /**
   * Represents scheduling information that determines when purchases can qualify to earn points
   * from a [loyalty promotion]($m/LoyaltyPromotion).
   */
  availableTime: LoyaltyPromotionAvailableTimeData;
  /**
   * Represents the number of times a buyer can earn points during a [loyalty promotion]($m/LoyaltyPromotion).
   * If this field is not set, buyers can trigger the promotion an unlimited number of times to earn points during
   * the time that the promotion is available.
   * A purchase that is disqualified from earning points because of this limit might qualify for another active promotion.
   */
  triggerLimit?: LoyaltyPromotionTriggerLimit;
  /** Indicates the status of a [loyalty promotion]($m/LoyaltyPromotion). */
  status?: string;
  /** The timestamp of when the promotion was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp of when the promotion was canceled, in RFC 3339 format. */
  canceledAt?: string;
  /** The timestamp when the promotion was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /** The ID of the [loyalty program](entity:LoyaltyProgram) associated with the promotion. */
  loyaltyProgramId?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  minimumSpendAmountMoney?: Money;
  /**
   * The IDs of any qualifying `ITEM_VARIATION` [catalog objects](entity:CatalogObject). If specified,
   * the purchase must include at least one of these items to qualify for the promotion.
   * This option is valid only if the base loyalty program uses a `VISIT` or `SPEND` accrual rule.
   * With `SPEND` accrual rules, make sure that qualifying promotional items are not excluded.
   * You can specify `qualifying_item_variation_ids` or `qualifying_category_ids` for a given promotion, but not both.
   */
  qualifyingItemVariationIds?: string[] | null;
  /**
   * The IDs of any qualifying `CATEGORY` [catalog objects](entity:CatalogObject). If specified,
   * the purchase must include at least one item from one of these categories to qualify for the promotion.
   * This option is valid only if the base loyalty program uses a `VISIT` or `SPEND` accrual rule.
   * With `SPEND` accrual rules, make sure that qualifying promotional items are not excluded.
   * You can specify `qualifying_category_ids` or `qualifying_item_variation_ids` for a promotion, but not both.
   */
  qualifyingCategoryIds?: string[] | null;
}

export const loyaltyPromotionSchema: Schema<LoyaltyPromotion> = object({
  id: ['id', optional(string())],
  name: ['name', string()],
  incentive: ['incentive', lazy(() => loyaltyPromotionIncentiveSchema)],
  availableTime: [
    'available_time',
    lazy(() => loyaltyPromotionAvailableTimeDataSchema),
  ],
  triggerLimit: [
    'trigger_limit',
    optional(lazy(() => loyaltyPromotionTriggerLimitSchema)),
  ],
  status: ['status', optional(string())],
  createdAt: ['created_at', optional(string())],
  canceledAt: ['canceled_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  loyaltyProgramId: ['loyalty_program_id', optional(string())],
  minimumSpendAmountMoney: [
    'minimum_spend_amount_money',
    optional(lazy(() => moneySchema)),
  ],
  qualifyingItemVariationIds: [
    'qualifying_item_variation_ids',
    optional(nullable(array(string()))),
  ],
  qualifyingCategoryIds: [
    'qualifying_category_ids',
    optional(nullable(array(string()))),
  ],
});
