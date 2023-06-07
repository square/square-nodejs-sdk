import {
  array,
  bigint,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';
import {
  OrderLineItemAppliedDiscount,
  orderLineItemAppliedDiscountSchema,
} from './orderLineItemAppliedDiscount';
import {
  OrderLineItemAppliedServiceCharge,
  orderLineItemAppliedServiceChargeSchema,
} from './orderLineItemAppliedServiceCharge';
import {
  OrderLineItemAppliedTax,
  orderLineItemAppliedTaxSchema,
} from './orderLineItemAppliedTax';
import { OrderQuantityUnit, orderQuantityUnitSchema } from './orderQuantityUnit';
import {
  OrderReturnLineItemModifier,
  orderReturnLineItemModifierSchema,
} from './orderReturnLineItemModifier';

/** The line item being returned in an order. */
export interface OrderReturnLineItem {
  /** A unique ID for this return line-item entry. */
  uid?: string | null;
  /** The `uid` of the line item in the original sale order. */
  sourceLineItemUid?: string | null;
  /** The name of the line item. */
  name?: string | null;
  /**
   * The quantity returned, formatted as a decimal number.
   * For example, `"3"`.
   * Line items with a `quantity_unit` can have non-integer quantities.
   * For example, `"1.70000"`.
   */
  quantity: string;
  /**
   * Contains the measurement unit for a quantity and a precision that
   * specifies the number of digits after the decimal point for decimal quantities.
   */
  quantityUnit?: OrderQuantityUnit;
  /** The note of the return line item. */
  note?: string | null;
  /** The [CatalogItemVariation](entity:CatalogItemVariation) ID applied to this return line item. */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this line item references. */
  catalogVersion?: bigint | null;
  /** The name of the variation applied to this return line item. */
  variationName?: string | null;
  /** Represents the line item type. */
  itemType?: string;
  /** The [CatalogModifier](entity:CatalogModifier)s applied to this line item. */
  returnModifiers?: OrderReturnLineItemModifier[] | null;
  /**
   * The list of references to `OrderReturnTax` entities applied to the return line item. Each
   * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
   * `OrderReturnTax` applied to the return line item. On reads, the applied amount
   * is populated.
   */
  appliedTaxes?: OrderLineItemAppliedTax[] | null;
  /**
   * The list of references to `OrderReturnDiscount` entities applied to the return line item. Each
   * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
   * `OrderReturnDiscount` applied to the return line item. On reads, the applied amount
   * is populated.
   */
  appliedDiscounts?: OrderLineItemAppliedDiscount[] | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  basePriceMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  variationTotalPriceMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  grossReturnMoney?: Money;
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
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalDiscountMoney?: Money;
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
   * The list of references to `OrderReturnServiceCharge` entities applied to the return
   * line item. Each `OrderLineItemAppliedServiceCharge` has a `service_charge_uid` that
   * references the `uid` of a top-level `OrderReturnServiceCharge` applied to the return line
   * item. On reads, the applied amount is populated.
   */
  appliedServiceCharges?: OrderLineItemAppliedServiceCharge[] | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalServiceChargeMoney?: Money;
}

export const orderReturnLineItemSchema: Schema<OrderReturnLineItem> = object({
  uid: ['uid', optional(nullable(string()))],
  sourceLineItemUid: ['source_line_item_uid', optional(nullable(string()))],
  name: ['name', optional(nullable(string()))],
  quantity: ['quantity', string()],
  quantityUnit: [
    'quantity_unit',
    optional(lazy(() => orderQuantityUnitSchema)),
  ],
  note: ['note', optional(nullable(string()))],
  catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
  catalogVersion: ['catalog_version', optional(nullable(bigint()))],
  variationName: ['variation_name', optional(nullable(string()))],
  itemType: ['item_type', optional(string())],
  returnModifiers: [
    'return_modifiers',
    optional(nullable(array(lazy(() => orderReturnLineItemModifierSchema)))),
  ],
  appliedTaxes: [
    'applied_taxes',
    optional(nullable(array(lazy(() => orderLineItemAppliedTaxSchema)))),
  ],
  appliedDiscounts: [
    'applied_discounts',
    optional(nullable(array(lazy(() => orderLineItemAppliedDiscountSchema)))),
  ],
  basePriceMoney: ['base_price_money', optional(lazy(() => moneySchema))],
  variationTotalPriceMoney: [
    'variation_total_price_money',
    optional(lazy(() => moneySchema)),
  ],
  grossReturnMoney: ['gross_return_money', optional(lazy(() => moneySchema))],
  totalTaxMoney: ['total_tax_money', optional(lazy(() => moneySchema))],
  totalDiscountMoney: [
    'total_discount_money',
    optional(lazy(() => moneySchema)),
  ],
  totalMoney: ['total_money', optional(lazy(() => moneySchema))],
  appliedServiceCharges: [
    'applied_service_charges',
    optional(
      nullable(array(lazy(() => orderLineItemAppliedServiceChargeSchema)))
    ),
  ],
  totalServiceChargeMoney: [
    'total_service_charge_money',
    optional(lazy(() => moneySchema)),
  ],
});
