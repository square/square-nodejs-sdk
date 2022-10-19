import { boolean, object, optional, Schema } from '../schema';

/** The payment methods that customers can use to pay an [invoice]($m/Invoice) on the Square-hosted invoice payment page. */
export interface InvoiceAcceptedPaymentMethods {
  /** Indicates whether credit card or debit card payments are accepted. The default value is `false`. */
  card?: boolean;
  /** Indicates whether Square gift card payments are accepted. The default value is `false`. */
  squareGiftCard?: boolean;
  /**
   * Indicates whether bank transfer payments are accepted. The default value is `false`.
   * This option is allowed only for invoices that have a single payment request of the `BALANCE` type.
   */
  bankAccount?: boolean;
  /**
   * Indicates whether Afterpay (also known as Clearpay) payments are accepted. The default value is `false`.
   * This option is allowed only for invoices that have a single payment request of the `BALANCE` type. This payment method is
   * supported if the seller account accepts Afterpay payments and the seller location is in a country where Afterpay
   * invoice payments are supported. As a best practice, consider enabling an additional payment method when allowing
   * `buy_now_pay_later` payments. For more information, including detailed requirements and processing limits, see
   * [Buy Now Pay Later payments with Afterpay](https://developer.squareup.com/docs/invoices-api/overview#buy-now-pay-later).
   */
  buyNowPayLater?: boolean;
}

export const invoiceAcceptedPaymentMethodsSchema: Schema<InvoiceAcceptedPaymentMethods> = object(
  {
    card: ['card', optional(boolean())],
    squareGiftCard: ['square_gift_card', optional(boolean())],
    bankAccount: ['bank_account', optional(boolean())],
    buyNowPayLater: ['buy_now_pay_later', optional(boolean())],
  }
);
