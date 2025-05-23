/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Provides details about the reward tier discount. DEPRECATED at version 2020-12-16. Discount details
 * are now defined using a catalog pricing rule and other catalog objects. For more information, see
 * [Getting discount details for a reward tier](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards#get-discount-details).
 */
export interface LoyaltyProgramRewardDefinition {
    /**
     * Indicates the scope of the reward tier. DEPRECATED at version 2020-12-16. You can find this information in the
     * `product_set_data` field of the `PRODUCT_SET` catalog object referenced by the pricing rule. For `ORDER` scopes,
     * `all_products` is true. For `ITEM_VARIATION` or `CATEGORY` scopes, `product_ids_any` is a list of
     * catalog object IDs of the given type.
     * See [LoyaltyProgramRewardDefinitionScope](#type-loyaltyprogramrewarddefinitionscope) for possible values
     */
    scope: Square.LoyaltyProgramRewardDefinitionScope;
    /**
     * The type of discount the reward tier offers. DEPRECATED at version 2020-12-16. You can find this information
     * in the `discount_data.discount_type` field of the `DISCOUNT` catalog object referenced by the pricing rule.
     * See [LoyaltyProgramRewardDefinitionType](#type-loyaltyprogramrewarddefinitiontype) for possible values
     */
    discountType: Square.LoyaltyProgramRewardDefinitionType;
    /**
     * The fixed percentage of the discount. Present if `discount_type` is `FIXED_PERCENTAGE`.
     * For example, a 7.25% off discount will be represented as "7.25". DEPRECATED at version 2020-12-16. You can find this
     * information in the `discount_data.percentage` field of the `DISCOUNT` catalog object referenced by the pricing rule.
     */
    percentageDiscount?: string;
    /**
     * The list of catalog objects to which this reward can be applied. They are either all item-variation ids or category ids, depending on the `type` field.
     * DEPRECATED at version 2020-12-16. You can find this information in the `product_set_data.product_ids_any` field
     * of the `PRODUCT_SET` catalog object referenced by the pricing rule.
     */
    catalogObjectIds?: string[];
    /**
     * The amount of the discount. Present if `discount_type` is `FIXED_AMOUNT`. For example, $5 off.
     * DEPRECATED at version 2020-12-16. You can find this information in the `discount_data.amount_money` field of the
     * `DISCOUNT` catalog object referenced by the pricing rule.
     */
    fixedDiscountMoney?: Square.Money;
    /**
     * When `discount_type` is `FIXED_PERCENTAGE`, the maximum discount amount that can be applied.
     * DEPRECATED at version 2020-12-16. You can find this information in the `discount_data.maximum_amount_money` field
     * of the `DISCOUNT` catalog object referenced by the the pricing rule.
     */
    maxDiscountMoney?: Square.Money;
}
