import { lazy, object, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * Represents an additional recipient (other than the merchant) entitled to a portion of the tender.
 * Support is currently limited to USD, CAD and GBP currencies
 */
export interface ChargeRequestAdditionalRecipient {
  /** The location ID for a recipient (other than the merchant) receiving a portion of the tender. */
  locationId: string;
  /** The description of the additional recipient. */
  description: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney: Money;
}

export const chargeRequestAdditionalRecipientSchema: Schema<ChargeRequestAdditionalRecipient> = object(
  {
    locationId: ['location_id', string()],
    description: ['description', string()],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
  }
);
