import { object, optional, Schema, string } from '../schema';

/** Additional details about `WALLET` type payments. Contains only non-confidential information. */
export interface DigitalWalletDetails {
  /**
   * The status of the `WALLET` payment. The status can be `AUTHORIZED`, `CAPTURED`, `VOIDED`, or
   * `FAILED`.
   */
  status?: string;
}

export const digitalWalletDetailsSchema: Schema<DigitalWalletDetails> = object({
  status: ['status', optional(string())],
});
