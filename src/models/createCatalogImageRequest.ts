import { lazy, object, optional, Schema, string } from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';

export interface CreateCatalogImageRequest {
  /**
   * A unique string that identifies this CreateCatalogImage request.
   * Keys can be any valid string but must be unique for every CreateCatalogImage request.
   * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
   */
  idempotencyKey: string;
  /**
   * Unique ID of the `CatalogObject` to attach to this `CatalogImage`. Leave this
   * field empty to create unattached images, for example if you are building an integration
   * where these images can be attached to catalog items at a later time.
   */
  objectId?: string;
  /**
   * The wrapper object for the Catalog entries of a given object type.
   * The type of a particular `CatalogObject` is determined by the value of the
   * `type` attribute and only the corresponding data attribute can be set on the `CatalogObject` instance.
   * For example, the following list shows some instances of `CatalogObject` of a given `type` and
   * their corresponding data atrribute that can be set:
   * - For a `CatalogObject` of the `ITEM` type, set the `item_data` attribute to yield the `CatalogItem` object.
   * - For a `CatalogObject` of the `ITEM_VARIATION` type, set the `item_variation_data` attribute to yield the `CatalogItemVariation` object.
   * - For a `CatalogObject` of the `MODIFIER` type, set the `modifier_data` attribute to yield the `CatalogModifier` object.
   * - For a `CatalogObject` of the `MODIFIER_LIST` type, set the `modifier_list_data` attribute to yield the `CatalogModifierList` object.
   * - For a `CatalogObject` of the `CATEGORY` type, set the `category_data` attribute to yield the `CatalogCategory` object.
   * - For a `CatalogObject` of the `DISCOUNT` type, set the `discount_data` attribute to yield the `CatalogDiscount` object.
   * - For a `CatalogObject` of the `TAX` type, set the `tax_data` attribute to yield the `CatalogTax` object.
   * - For a `CatalogObject` of the `IMAGE` type, set the `image_data` attribute to yield the `CatalogImageData`  object.
   * - For a `CatalogObject` of the `QUICK_AMOUNTS_SETTINGS` type, set the `quick_amounts_settings_data` attribute to yield the `CatalogQuickAmountsSettings` object.
   * - For a `CatalogObject` of the `PRICING_RULE` type, set the `pricing_rule_data` attribute to yield the `CatalogPricingRule` object.
   * - For a `CatalogObject` of the `TIME_PERIOD` type, set the `time_period_data` attribute to yield the `CatalogTimePeriod` object.
   * - For a `CatalogObject` of the `PRODUCT_SET` type, set the `product_set_data` attribute to yield the `CatalogProductSet`  object.
   * - For a `CatalogObject` of the `SUBSCRIPTION_PLAN` type, set the `subscription_plan_data` attribute to yield the `CatalogSubscriptionPlan` object.
   * For a more detailed discussion of the Catalog data model, please see the
   * [Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.
   */
  image?: CatalogObject;
}

export const createCatalogImageRequestSchema: Schema<CreateCatalogImageRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    objectId: ['object_id', optional(string())],
    image: ['image', optional(lazy(() => catalogObjectSchema))],
  }
);
