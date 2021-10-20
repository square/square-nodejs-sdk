import { array, lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import {
  ApplicationDetails,
  applicationDetailsSchema,
} from './applicationDetails';
import {
  BankAccountPaymentDetails,
  bankAccountPaymentDetailsSchema,
} from './bankAccountPaymentDetails';
import {
  CardPaymentDetails,
  cardPaymentDetailsSchema,
} from './cardPaymentDetails';
import {
  CashPaymentDetails,
  cashPaymentDetailsSchema,
} from './cashPaymentDetails';
import { DeviceDetails, deviceDetailsSchema } from './deviceDetails';
import {
  DigitalWalletDetails,
  digitalWalletDetailsSchema,
} from './digitalWalletDetails';
import {
  ExternalPaymentDetails,
  externalPaymentDetailsSchema,
} from './externalPaymentDetails';
import { Money, moneySchema } from './money';
import { ProcessingFee, processingFeeSchema } from './processingFee';
import { RiskEvaluation, riskEvaluationSchema } from './riskEvaluation';

/** Represents a payment processed by the Square API. */
export interface Payment {
  /** A unique ID for the payment. */
  id?: string;
  /** The timestamp of when the payment was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp of when the payment was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  tipMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  appFeeMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  approvedMoney?: Money;
  /** The processing fees and fee adjustments assessed by Square for this payment. */
  processingFee?: ProcessingFee[];
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  refundedMoney?: Money;
  /** Indicates whether the payment is APPROVED, PENDING, COMPLETED, CANCELED, or FAILED. */
  status?: string;
  /**
   * The duration of time after the payment's creation when Square automatically applies the
   * `delay_action` to the payment. This automatic `delay_action` applies only to payments that
   * do not reach a terminal state (COMPLETED, CANCELED, or FAILED) before the `delay_duration`
   * time period.
   * This field is specified as a time duration, in RFC 3339 format.
   * Notes:
   * This feature is only supported for card payments.
   * Default:
   * - Card-present payments: "PT36H" (36 hours) from the creation time.
   * - Card-not-present payments: "P7D" (7 days) from the creation time.
   */
  delayDuration?: string;
  /**
   * The action to be applied to the payment when the `delay_duration` has elapsed. This field
   * is read-only.
   * Current values include `CANCEL`.
   */
  delayAction?: string;
  /**
   * The read-only timestamp of when the `delay_action` is automatically applied,
   * in RFC 3339 format.
   * Note that this field is calculated by summing the payment's `delay_duration` and `created_at`
   * fields. The `created_at` field is generated by Square and might not exactly match the
   * time on your local machine.
   */
  delayedUntil?: string;
  /**
   * The source type for this payment.
   * Current values include `CARD`, `BANK_ACCOUNT`, `WALLET`, `CASH`, or `EXTERNAL`.
   */
  sourceType?: string;
  /** Reflects the current status of a card payment. Contains only non-confidential information. */
  cardDetails?: CardPaymentDetails;
  /**
   * Stores details about a cash payment. Contains only non-confidential information. For more information, see
   * [Take Cash Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
   */
  cashDetails?: CashPaymentDetails;
  /** Additional details about BANK_ACCOUNT type payments. */
  bankAccountDetails?: BankAccountPaymentDetails;
  /**
   * Stores details about an external payment. Contains only non-confidential information.
   * For more information, see
   * [Take External Payments](https://developer.squareup.com/docs/payments-api/take-payments/external-payments).
   */
  externalDetails?: ExternalPaymentDetails;
  /** Additional details about `WALLET` type payments. Contains only non-confidential information. */
  walletDetails?: DigitalWalletDetails;
  /** The ID of the location associated with the payment. */
  locationId?: string;
  /** The ID of the order associated with the payment. */
  orderId?: string;
  /**
   * An optional ID that associates the payment with an entity in
   * another system.
   */
  referenceId?: string;
  /** The [Customer]($m/Customer) ID of the customer associated with the payment. */
  customerId?: string;
  /**
   * __Deprecated__: Use `Payment.team_member_id` instead.
   * An optional ID of the employee associated with taking the payment.
   */
  employeeId?: string;
  /** An optional ID of the [TeamMember]($m/TeamMember) associated with taking the payment. */
  teamMemberId?: string;
  /** A list of `refund_id`s identifying refunds for the payment. */
  refundIds?: string[];
  /**
   * Represents fraud risk information for the associated payment.
   * When you take a payment through Square's Payments API (using the `CreatePayment`
   * endpoint), Square evaluates it and assigns a risk level to the payment. Sellers
   * can use this information to determine the course of action (for example,
   * provide the goods/services or refund the payment).
   */
  riskEvaluation?: RiskEvaluation;
  /** The buyer's email address. */
  buyerEmailAddress?: string;
  /**
   * Represents a postal address in a country. The address format is based
   * on an [open-source library from Google](https://github.com/google/libaddressinput). For more information,
   * see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata).
   * This format has dedicated fields for four address components: postal code,
   * locality (city), administrative district (state, prefecture, or province), and
   * sublocality (town or village). These components have dedicated fields in the
   * `Address` object because software sometimes behaves differently based on them.
   * For example, sales tax software may charge different amounts of sales tax
   * based on the postal code, and some software is only available in
   * certain states due to compliance reasons.
   * For the remaining address components, the `Address` type provides the
   * `address_line_1` and `address_line_2` fields for free-form data entry.
   * These fields are free-form because the remaining address components have
   * too many variations around the world and typical software does not parse
   * these components. These fields enable users to enter anything they want.
   * Note that, in the current implementation, all other `Address` type fields are blank.
   * These include `address_line_3`, `sublocality_2`, `sublocality_3`,
   * `administrative_district_level_2`, `administrative_district_level_3`,
   * `first_name`, `last_name`, and `organization`.
   * When it comes to localization, the seller's language preferences
   * (see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences))
   * are ignored for addresses. Even though Square products (such as Square Point of Sale
   * and the Seller Dashboard) mostly use a seller's language preference in
   * communication, when it comes to addresses, they will use English for a US address,
   * Japanese for an address in Japan, and so on.
   */
  billingAddress?: Address;
  /**
   * Represents a postal address in a country. The address format is based
   * on an [open-source library from Google](https://github.com/google/libaddressinput). For more information,
   * see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata).
   * This format has dedicated fields for four address components: postal code,
   * locality (city), administrative district (state, prefecture, or province), and
   * sublocality (town or village). These components have dedicated fields in the
   * `Address` object because software sometimes behaves differently based on them.
   * For example, sales tax software may charge different amounts of sales tax
   * based on the postal code, and some software is only available in
   * certain states due to compliance reasons.
   * For the remaining address components, the `Address` type provides the
   * `address_line_1` and `address_line_2` fields for free-form data entry.
   * These fields are free-form because the remaining address components have
   * too many variations around the world and typical software does not parse
   * these components. These fields enable users to enter anything they want.
   * Note that, in the current implementation, all other `Address` type fields are blank.
   * These include `address_line_3`, `sublocality_2`, `sublocality_3`,
   * `administrative_district_level_2`, `administrative_district_level_3`,
   * `first_name`, `last_name`, and `organization`.
   * When it comes to localization, the seller's language preferences
   * (see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences))
   * are ignored for addresses. Even though Square products (such as Square Point of Sale
   * and the Seller Dashboard) mostly use a seller's language preference in
   * communication, when it comes to addresses, they will use English for a US address,
   * Japanese for an address in Japan, and so on.
   */
  shippingAddress?: Address;
  /** An optional note to include when creating a payment. */
  note?: string;
  /**
   * Additional payment information that gets added to the customer's card statement
   * as part of the statement description.
   * Note that the `statement_description_identifier` might get truncated on the statement description
   * to fit the required information including the Square identifier (SQ *) and the name of the
   * seller taking the payment.
   */
  statementDescriptionIdentifier?: string;
  /**
   * Actions that can be performed on this payment:
   * - `EDIT_AMOUNT_UP` - The payment amount can be edited up.
   * - `EDIT_AMOUNT_DOWN` - The payment amount can be edited down.
   * - `EDIT_TIP_AMOUNT_UP` - The tip amount can be edited up.
   * - `EDIT_TIP_AMOUNT_DOWN` - The tip amount can be edited down.
   */
  capabilities?: string[];
  /**
   * The payment's receipt number.
   * The field is missing if a payment is canceled.
   */
  receiptNumber?: string;
  /**
   * The URL for the payment's receipt.
   * The field is only populated for COMPLETED payments.
   */
  receiptUrl?: string;
  /** Details about the device that took the payment. */
  deviceDetails?: DeviceDetails;
  /** Details about the application that took the payment. */
  applicationDetails?: ApplicationDetails;
  /**
   * Used for optimistic concurrency. This opaque token identifies a specific version of the
   * `Payment` object.
   */
  versionToken?: string;
}

export const paymentSchema: Schema<Payment> = object({
  id: ['id', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
  tipMoney: ['tip_money', optional(lazy(() => moneySchema))],
  totalMoney: ['total_money', optional(lazy(() => moneySchema))],
  appFeeMoney: ['app_fee_money', optional(lazy(() => moneySchema))],
  approvedMoney: ['approved_money', optional(lazy(() => moneySchema))],
  processingFee: [
    'processing_fee',
    optional(array(lazy(() => processingFeeSchema))),
  ],
  refundedMoney: ['refunded_money', optional(lazy(() => moneySchema))],
  status: ['status', optional(string())],
  delayDuration: ['delay_duration', optional(string())],
  delayAction: ['delay_action', optional(string())],
  delayedUntil: ['delayed_until', optional(string())],
  sourceType: ['source_type', optional(string())],
  cardDetails: ['card_details', optional(lazy(() => cardPaymentDetailsSchema))],
  cashDetails: ['cash_details', optional(lazy(() => cashPaymentDetailsSchema))],
  bankAccountDetails: [
    'bank_account_details',
    optional(lazy(() => bankAccountPaymentDetailsSchema)),
  ],
  externalDetails: [
    'external_details',
    optional(lazy(() => externalPaymentDetailsSchema)),
  ],
  walletDetails: [
    'wallet_details',
    optional(lazy(() => digitalWalletDetailsSchema)),
  ],
  locationId: ['location_id', optional(string())],
  orderId: ['order_id', optional(string())],
  referenceId: ['reference_id', optional(string())],
  customerId: ['customer_id', optional(string())],
  employeeId: ['employee_id', optional(string())],
  teamMemberId: ['team_member_id', optional(string())],
  refundIds: ['refund_ids', optional(array(string()))],
  riskEvaluation: [
    'risk_evaluation',
    optional(lazy(() => riskEvaluationSchema)),
  ],
  buyerEmailAddress: ['buyer_email_address', optional(string())],
  billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
  shippingAddress: ['shipping_address', optional(lazy(() => addressSchema))],
  note: ['note', optional(string())],
  statementDescriptionIdentifier: [
    'statement_description_identifier',
    optional(string()),
  ],
  capabilities: ['capabilities', optional(array(string()))],
  receiptNumber: ['receipt_number', optional(string())],
  receiptUrl: ['receipt_url', optional(string())],
  deviceDetails: ['device_details', optional(lazy(() => deviceDetailsSchema))],
  applicationDetails: [
    'application_details',
    optional(lazy(() => applicationDetailsSchema)),
  ],
  versionToken: ['version_token', optional(string())],
});
