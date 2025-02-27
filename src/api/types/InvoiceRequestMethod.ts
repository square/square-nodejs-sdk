/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Specifies the action for Square to take for processing the invoice. For example,
 * email the invoice, charge a customer's card on file, or do nothing. DEPRECATED at
 * version 2021-01-21. The corresponding `request_method` field is replaced by the
 * `Invoice.delivery_method` and `InvoicePaymentRequest.automatic_payment_source` fields.
 */
export type InvoiceRequestMethod =
    | "EMAIL"
    | "CHARGE_CARD_ON_FILE"
    | "SHARE_MANUALLY"
    | "CHARGE_BANK_ON_FILE"
    | "SMS"
    | "SMS_CHARGE_CARD_ON_FILE"
    | "SMS_CHARGE_BANK_ON_FILE";
export const InvoiceRequestMethod = {
    Email: "EMAIL",
    ChargeCardOnFile: "CHARGE_CARD_ON_FILE",
    ShareManually: "SHARE_MANUALLY",
    ChargeBankOnFile: "CHARGE_BANK_ON_FILE",
    Sms: "SMS",
    SmsChargeCardOnFile: "SMS_CHARGE_CARD_ON_FILE",
    SmsChargeBankOnFile: "SMS_CHARGE_BANK_ON_FILE",
} as const;
