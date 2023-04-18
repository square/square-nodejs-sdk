import { nullable, object, optional, Schema, string } from '../schema';

/** Additional details about `WALLET` type payments with the `brand` of `CASH_APP`. */
export interface CashAppDetails {
  /** The name of the Cash App account holder. */
  buyerFullName?: string | null;
  /**
   * The country of the Cash App account holder, in ISO 3166-1-alpha-2 format.
   * For possible values, see [Country](entity:Country).
   */
  buyerCountryCode?: string | null;
  /** $Cashtag of the Cash App account holder. */
  buyerCashtag?: string;
}

export const cashAppDetailsSchema: Schema<CashAppDetails> = object({
  buyerFullName: ['buyer_full_name', optional(nullable(string()))],
  buyerCountryCode: ['buyer_country_code', optional(nullable(string()))],
  buyerCashtag: ['buyer_cashtag', optional(string())],
});
