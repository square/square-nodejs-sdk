import { boolean, object, optional, Schema } from '../schema';

/** The payment methods that customers can use to pay an invoice on the Square-hosted invoice page. */
export interface InvoiceAcceptedPaymentMethods {
  /** Indicates whether credit card or debit card payments are accepted. The default value is `false`. */
  card?: boolean;
  /** Indicates whether Square gift card payments are accepted. The default value is `false`. */
  squareGiftCard?: boolean;
  /**
   * Indicates whether bank transfer payments are accepted. The default value is `false`.
   * This option is allowed only for invoices that have a single payment request of type `BALANCE`.
   */
  bankAccount?: boolean;
}

export const invoiceAcceptedPaymentMethodsSchema: Schema<InvoiceAcceptedPaymentMethods> = object(
  {
    card: ['card', optional(boolean())],
    squareGiftCard: ['square_gift_card', optional(boolean())],
    bankAccount: ['bank_account', optional(boolean())],
  }
);
