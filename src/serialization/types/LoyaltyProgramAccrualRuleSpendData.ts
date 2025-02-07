/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Money } from "./Money";
import { LoyaltyProgramAccrualRuleTaxMode } from "./LoyaltyProgramAccrualRuleTaxMode";

export const LoyaltyProgramAccrualRuleSpendData: core.serialization.ObjectSchema<
    serializers.LoyaltyProgramAccrualRuleSpendData.Raw,
    Square.LoyaltyProgramAccrualRuleSpendData
> = core.serialization.object({
    amountMoney: core.serialization.property("amount_money", Money),
    excludedCategoryIds: core.serialization.property(
        "excluded_category_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
    excludedItemVariationIds: core.serialization.property(
        "excluded_item_variation_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
    taxMode: core.serialization.property("tax_mode", LoyaltyProgramAccrualRuleTaxMode),
});

export declare namespace LoyaltyProgramAccrualRuleSpendData {
    export interface Raw {
        amount_money: Money.Raw;
        excluded_category_ids?: (string[] | null) | null;
        excluded_item_variation_ids?: (string[] | null) | null;
        tax_mode: LoyaltyProgramAccrualRuleTaxMode.Raw;
    }
}
