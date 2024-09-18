import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
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
  BuyNowPayLaterDetails,
  buyNowPayLaterDetailsSchema,
} from './buyNowPayLaterDetails';
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
import {
  OfflinePaymentDetails,
  offlinePaymentDetailsSchema,
} from './offlinePaymentDetails';
import { ProcessingFee, processingFeeSchema } from './processingFee';
import { RiskEvaluation, riskEvaluationSchema } from './riskEvaluation';
import {
  SquareAccountDetails,
  squareAccountDetailsSchema,
} from './squareAccountDetails';

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
   * The action to be applied to the payment when the `delay_duration` has elapsed.
   * Current values include `CANCEL` and `COMPLETE`.
   */
  delayAction?: string | null;
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
   * Current values include `CARD`, `BANK_ACCOUNT`, `WALLET`, `BUY_NOW_PAY_LATER`, `SQUARE_ACCOUNT`,
   * `CASH` and `EXTERNAL`. For information about these payment source types,
   * see [Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).
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
  /** Additional details about a Buy Now Pay Later payment type. */
  buyNowPayLaterDetails?: BuyNowPayLaterDetails;
  /** Additional details about Square Account payments. */
  squareAccountDetails?: SquareAccountDetails;
  /** The ID of the location associated with the payment. */
  locationId?: string;
  /** The ID of the order associated with the payment. */
  orderId?: string;
  /**
   * An optional ID that associates the payment with an entity in
   * another system.
   */
  referenceId?: string;
  /**
   * The ID of the customer associated with the payment. If the ID is
   * not provided in the `CreatePayment` request that was used to create the `Payment`,
   * Square may use information in the request
   * (such as the billing and shipping address, email address, and payment source)
   * to identify a matching customer profile in the Customer Directory.
   * If found, the profile ID is used. If a profile is not found, the
   * API attempts to create an
   * [instant profile](https://developer.squareup.com/docs/customers-api/what-it-does#instant-profiles).
   * If the API cannot create an
   * instant profile (either because the seller has disabled it or the
   * seller's region prevents creating it), this field remains unset. Note that
   * this process is asynchronous and it may take some time before a
   * customer ID is added to the payment.
   */
  customerId?: string;
  /**
   * __Deprecated__: Use `Payment.team_member_id` instead.
   * An optional ID of the employee associated with taking the payment.
   */
  employeeId?: string;
  /** An optional ID of the [TeamMember](entity:TeamMember) associated with taking the payment. */
  teamMemberId?: string | null;
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
  /** An optional ID for a Terminal checkout that is associated with the payment. */
  terminalCheckoutId?: string;
  /** The buyer's email address. */
  buyerEmailAddress?: string;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  billingAddress?: Address;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
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
   * - `EDIT_DELAY_ACTION` - The delay_action can be edited.
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
  /** Whether or not this payment was taken offline. */
  isOfflinePayment?: boolean;
  /** Details specific to offline payments. */
  offlinePaymentDetails?: OfflinePaymentDetails;
  /**
   * Used for optimistic concurrency. This opaque token identifies a specific version of the
   * `Payment` object.
   */
  versionToken?: string | null;
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
  delayAction: ['delay_action', optional(nullable(string()))],
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
  buyNowPayLaterDetails: [
    'buy_now_pay_later_details',
    optional(lazy(() => buyNowPayLaterDetailsSchema)),
  ],
  squareAccountDetails: [
    'square_account_details',
    optional(lazy(() => squareAccountDetailsSchema)),
  ],
  locationId: ['location_id', optional(string())],
  orderId: ['order_id', optional(string())],
  referenceId: ['reference_id', optional(string())],
  customerId: ['customer_id', optional(string())],
  employeeId: ['employee_id', optional(string())],
  teamMemberId: ['team_member_id', optional(nullable(string()))],
  refundIds: ['refund_ids', optional(array(string()))],
  riskEvaluation: [
    'risk_evaluation',
    optional(lazy(() => riskEvaluationSchema)),
  ],
  terminalCheckoutId: ['terminal_checkout_id', optional(string())],
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
  isOfflinePayment: ['is_offline_payment', optional(boolean())],
  offlinePaymentDetails: [
    'offline_payment_details',
    optional(lazy(() => offlinePaymentDetailsSchema)),
  ],
  versionToken: ['version_token', optional(nullable(string()))],
});
