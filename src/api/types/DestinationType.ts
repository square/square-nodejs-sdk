/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * List of possible destinations against which a payout can be made.
 */
export type DestinationType = "BANK_ACCOUNT" | "CARD" | "SQUARE_BALANCE" | "SQUARE_STORED_BALANCE";
export const DestinationType = {
    BankAccount: "BANK_ACCOUNT",
    Card: "CARD",
    SquareBalance: "SQUARE_BALANCE",
    SquareStoredBalance: "SQUARE_STORED_BALANCE",
} as const;
