import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

export interface OrderLineItemAppliedServiceCharge {
  /** A unique ID that identifies the applied service charge only within this order. */
  uid?: string | null;
  /**
   * The `uid` of the service charge that the applied service charge represents. It must
   * reference a service charge present in the `order.service_charges` field.
   * This field is immutable. To change which service charges apply to a line item,
   * delete and add a new `OrderLineItemAppliedServiceCharge`.
   */
  serviceChargeUid: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  appliedMoney?: Money;
}

export const orderLineItemAppliedServiceChargeSchema: Schema<OrderLineItemAppliedServiceCharge> = object(
  {
    uid: ['uid', optional(nullable(string()))],
    serviceChargeUid: ['service_charge_uid', string()],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
  }
);
