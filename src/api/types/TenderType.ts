/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates a tender's type.
 */
export type TenderType =
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
export const TenderType = {
    Card: "CARD",
    Cash: "CASH",
    ThirdPartyCard: "THIRD_PARTY_CARD",
    SquareGiftCard: "SQUARE_GIFT_CARD",
    NoSale: "NO_SALE",
    BankAccount: "BANK_ACCOUNT",
    Wallet: "WALLET",
    BuyNowPayLater: "BUY_NOW_PAY_LATER",
    SquareAccount: "SQUARE_ACCOUNT",
    Other: "OTHER",
} as const;
