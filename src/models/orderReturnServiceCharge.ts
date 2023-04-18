import {
  array,
  bigint,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';
import {
  OrderLineItemAppliedTax,
  orderLineItemAppliedTaxSchema,
} from './orderLineItemAppliedTax';

/** Represents the service charge applied to the original order. */
export interface OrderReturnServiceCharge {
  /** A unique ID that identifies the return service charge only within this order. */
  uid?: string | null;
  /**
   * The service charge `uid` from the order containing the original
   * service charge. `source_service_charge_uid` is `null` for
   * unlinked returns.
   */
  sourceServiceChargeUid?: string | null;
  /** The name of the service charge. */
  name?: string | null;
  /** The catalog object ID of the associated [OrderServiceCharge](entity:OrderServiceCharge). */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this service charge references. */
  catalogVersion?: bigint | null;
  /**
   * The percentage of the service charge, as a string representation of
   * a decimal number. For example, a value of `"7.25"` corresponds to a
   * percentage of 7.25%.
   * Either `percentage` or `amount_money` should be set, but not both.
   */
  percentage?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  appliedMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalTaxMoney?: Money;
  /**
   * Represents a phase in the process of calculating order totals.
   * Service charges are applied after the indicated phase.
   * [Read more about how order totals are calculated.](https://developer.squareup.com/docs/orders-api/how-it-works#how-totals-are-calculated)
   */
  calculationPhase?: string;
  /**
   * Indicates whether the surcharge can be taxed. Service charges
   * calculated in the `TOTAL_PHASE` cannot be marked as taxable.
   */
  taxable?: boolean | null;
  /**
   * The list of references to `OrderReturnTax` entities applied to the
   * `OrderReturnServiceCharge`. Each `OrderLineItemAppliedTax` has a `tax_uid`
   * that references the `uid` of a top-level `OrderReturnTax` that is being
   * applied to the `OrderReturnServiceCharge`. On reads, the applied amount is
   * populated.
   */
  appliedTaxes?: OrderLineItemAppliedTax[] | null;
  /**
   * Indicates whether the service charge will be treated as a value-holding line item or
   * apportioned toward a line item.
   */
  treatmentType?: string;
  /**
   * Indicates whether this is a line-item or order-level apportioned
   * service charge.
   */
  scope?: string;
}

export const orderReturnServiceChargeSchema: Schema<OrderReturnServiceCharge> = object(
  {
    uid: ['uid', optional(nullable(string()))],
    sourceServiceChargeUid: [
      'source_service_charge_uid',
      optional(nullable(string())),
    ],
    name: ['name', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    percentage: ['percentage', optional(nullable(string()))],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
    totalMoney: ['total_money', optional(lazy(() => moneySchema))],
    totalTaxMoney: ['total_tax_money', optional(lazy(() => moneySchema))],
    calculationPhase: ['calculation_phase', optional(string())],
    taxable: ['taxable', optional(nullable(boolean()))],
    appliedTaxes: [
      'applied_taxes',
      optional(nullable(array(lazy(() => orderLineItemAppliedTaxSchema)))),
    ],
    treatmentType: ['treatment_type', optional(string())],
    scope: ['scope', optional(string())],
  }
);
