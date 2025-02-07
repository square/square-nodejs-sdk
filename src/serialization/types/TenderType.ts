/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const TenderType: core.serialization.Schema<serializers.TenderType.Raw, Square.TenderType> =
    core.serialization.enum_([
        "CARD",
        "CASH",
        "THIRD_PARTY_CARD",
        "SQUARE_GIFT_CARD",
        "NO_SALE",
        "BANK_ACCOUNT",
        "WALLET",
        "BUY_NOW_PAY_LATER",
        "SQUARE_ACCOUNT",
        "OTHER",
    ]);

export declare namespace TenderType {
    export type Raw =
        | "CARD"
        | "CASH"
        | "THIRD_PARTY_CARD"
        | "SQUARE_GIFT_CARD"
        | "NO_SALE"
        | "BANK_ACCOUNT"
        | "WALLET"
        | "BUY_NOW_PAY_LATER"
        | "SQUARE_ACCOUNT"
        | "OTHER";
}
