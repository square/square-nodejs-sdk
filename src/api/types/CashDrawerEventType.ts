/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The types of events on a CashDrawerShift.
 * Each event type represents an employee action on the actual cash drawer
 * represented by a CashDrawerShift.
 */
export type CashDrawerEventType =
    | "NO_SALE"
    | "CASH_TENDER_PAYMENT"
    | "OTHER_TENDER_PAYMENT"
    | "CASH_TENDER_CANCELLED_PAYMENT"
    | "OTHER_TENDER_CANCELLED_PAYMENT"
    | "CASH_TENDER_REFUND"
    | "OTHER_TENDER_REFUND"
    | "PAID_IN"
    | "PAID_OUT";
export const CashDrawerEventType = {
    NoSale: "NO_SALE",
    CashTenderPayment: "CASH_TENDER_PAYMENT",
    OtherTenderPayment: "OTHER_TENDER_PAYMENT",
    CashTenderCancelledPayment: "CASH_TENDER_CANCELLED_PAYMENT",
    OtherTenderCancelledPayment: "OTHER_TENDER_CANCELLED_PAYMENT",
    CashTenderRefund: "CASH_TENDER_REFUND",
    OtherTenderRefund: "OTHER_TENDER_REFUND",
    PaidIn: "PAID_IN",
    PaidOut: "PAID_OUT",
} as const;
