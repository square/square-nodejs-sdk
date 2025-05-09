/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents additional data for rules with the `VISIT` accrual type.
 */
export interface LoyaltyProgramAccrualRuleVisitData {
    /** The minimum purchase required during the visit to quality for points. */
    minimumAmountMoney?: Square.Money;
    /**
     * Indicates how taxes should be treated when calculating the purchase amount to determine whether the visit qualifies for points.
     * This setting applies only if `minimum_amount_money` is specified.
     * See [LoyaltyProgramAccrualRuleTaxMode](#type-loyaltyprogramaccrualruletaxmode) for possible values
     */
    taxMode: Square.LoyaltyProgramAccrualRuleTaxMode;
}
