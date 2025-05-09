/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the Square product used to process a transaction.
 */
export type TransactionProduct =
    | "REGISTER"
    | "EXTERNAL_API"
    | "BILLING"
    | "APPOINTMENTS"
    | "INVOICES"
    | "ONLINE_STORE"
    | "PAYROLL"
    | "OTHER";
export const TransactionProduct = {
    Register: "REGISTER",
    ExternalApi: "EXTERNAL_API",
    Billing: "BILLING",
    Appointments: "APPOINTMENTS",
    Invoices: "INVOICES",
    OnlineStore: "ONLINE_STORE",
    Payroll: "PAYROLL",
    Other: "OTHER",
} as const;
