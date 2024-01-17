import {
  array,
  bigint,
  boolean,
  dict,
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

/** Represents a service charge applied to an order. */
export interface OrderServiceCharge {
  /** A unique ID that identifies the service charge only within this order. */
  uid?: string | null;
  /** The name of the service charge. */
  name?: string | null;
  /** The catalog object ID referencing the service charge [CatalogObject](entity:CatalogObject). */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this service charge references. */
  catalogVersion?: bigint | null;
  /**
   * The service charge percentage as a string representation of a
   * decimal number. For example, `"7.25"` indicates a service charge of 7.25%.
   * Exactly 1 of `percentage` or `amount_money` should be set.
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
   * Indicates whether the service charge can be taxed. If set to `true`,
   * order-level taxes automatically apply to the service charge. Note that
   * service charges calculated in the `TOTAL_PHASE` cannot be marked as taxable.
   */
  taxable?: boolean | null;
  /**
   * The list of references to the taxes applied to this service charge. Each
   * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
   * `OrderLineItemTax` that is being applied to this service charge. On reads, the amount applied
   * is populated.
   * An `OrderLineItemAppliedTax` is automatically created on every taxable service charge
   * for all `ORDER` scoped taxes that are added to the order. `OrderLineItemAppliedTax` records
   * for `LINE_ITEM` scoped taxes must be added in requests for the tax to apply to any taxable
   * service charge. Taxable service charges have the `taxable` field set to `true` and calculated
   * in the `SUBTOTAL_PHASE`.
   * To change the amount of a tax, modify the referenced top-level tax.
   */
  appliedTaxes?: OrderLineItemAppliedTax[] | null;
  /**
   * Application-defined data attached to this service charge. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
   * identifiable information or card details).
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   * Values have a maximum length of 255 characters.
   * An application can have up to 10 entries per metadata field.
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   * For more information, see [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Record<string, string> | null;
  type?: string;
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

export const orderServiceChargeSchema: Schema<OrderServiceCharge> = object({
  uid: ['uid', optional(nullable(string()))],
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
  metadata: ['metadata', optional(nullable(dict(string())))],
  type: ['type', optional(string())],
  treatmentType: ['treatment_type', optional(string())],
  scope: ['scope', optional(string())],
});
