import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Represents an additional recipient (other than the merchant) receiving a portion of this tender. */
export interface AdditionalRecipient {
  /** The location ID for a recipient (other than the merchant) receiving a portion of this tender. */
  locationId: string;
  /** The description of the additional recipient. */
  description?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney: Money;
  /** The unique ID for the RETIRED `AdditionalRecipientReceivable` object. This field should be empty for any `AdditionalRecipient` objects created after the retirement. */
  receivableId?: string | null;
}

export const additionalRecipientSchema: Schema<AdditionalRecipient> = object({
  locationId: ['location_id', string()],
  description: ['description', optional(nullable(string()))],
  amountMoney: ['amount_money', lazy(() => moneySchema)],
  receivableId: ['receivable_id', optional(nullable(string()))],
});
