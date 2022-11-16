import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { AfterpayDetails, afterpayDetailsSchema } from './afterpayDetails';
import { ClearpayDetails, clearpayDetailsSchema } from './clearpayDetails';

/** Additional details about a Buy Now Pay Later payment type. */
export interface BuyNowPayLaterDetails {
  /**
   * The brand used for the Buy Now Pay Later payment.
   * The brand can be `AFTERPAY`, `CLEARPAY` or `UNKNOWN`.
   */
  brand?: string | null;
  /** Additional details about Afterpay payments. */
  afterpayDetails?: AfterpayDetails;
  /** Additional details about Clearpay payments. */
  clearpayDetails?: ClearpayDetails;
}

export const buyNowPayLaterDetailsSchema: Schema<BuyNowPayLaterDetails> = object(
  {
    brand: ['brand', optional(nullable(string()))],
    afterpayDetails: [
      'afterpay_details',
      optional(lazy(() => afterpayDetailsSchema)),
    ],
    clearpayDetails: [
      'clearpay_details',
      optional(lazy(() => clearpayDetailsSchema)),
    ],
  }
);
