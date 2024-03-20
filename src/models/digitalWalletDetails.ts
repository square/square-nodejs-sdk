import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { CashAppDetails, cashAppDetailsSchema } from './cashAppDetails';

/** Additional details about `WALLET` type payments. Contains only non-confidential information. */
export interface DigitalWalletDetails {
  /**
   * The status of the `WALLET` payment. The status can be `AUTHORIZED`, `CAPTURED`, `VOIDED`, or
   * `FAILED`.
   */
  status?: string | null;
  /**
   * The brand used for the `WALLET` payment. The brand can be `CASH_APP`, `PAYPAY`, `ALIPAY`,
   * `RAKUTEN_PAY`, `AU_PAY`, `D_BARAI`, `MERPAY`, `WECHAT_PAY` or `UNKNOWN`.
   */
  brand?: string | null;
  /** Additional details about `WALLET` type payments with the `brand` of `CASH_APP`. */
  cashAppDetails?: CashAppDetails;
}

export const digitalWalletDetailsSchema: Schema<DigitalWalletDetails> = object({
  status: ['status', optional(nullable(string()))],
  brand: ['brand', optional(nullable(string()))],
  cashAppDetails: [
    'cash_app_details',
    optional(lazy(() => cashAppDetailsSchema)),
  ],
});
