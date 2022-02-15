import { lazy, object, optional, Schema, string } from '../schema';
import { AfterpayDetails, afterpayDetailsSchema } from './afterpayDetails';

/** Additional details about a Buy Now Pay Later payment type. */
export interface BuyNowPayLaterDetails {
  /**
   * The brand used for the Buy Now Pay Later payment.
   * The brand can be `AFTERPAY` or `UNKNOWN`.
   */
  brand?: string;
  /** Additional details about Afterpay payments. */
  afterpayDetails?: AfterpayDetails;
}

export const buyNowPayLaterDetailsSchema: Schema<BuyNowPayLaterDetails> = object(
  {
    brand: ['brand', optional(string())],
    afterpayDetails: [
      'afterpay_details',
      optional(lazy(() => afterpayDetailsSchema)),
    ],
  }
);
