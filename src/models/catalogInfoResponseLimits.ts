import { nullable, number, object, optional, Schema } from '../schema';

export interface CatalogInfoResponseLimits {
  /**
   * The maximum number of objects that may appear within a single batch in a
   * `/v2/catalog/batch-upsert` request.
   */
  batchUpsertMaxObjectsPerBatch?: number | null;
  /**
   * The maximum number of objects that may appear across all batches in a
   * `/v2/catalog/batch-upsert` request.
   */
  batchUpsertMaxTotalObjects?: number | null;
  /**
   * The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve`
   * request.
   */
  batchRetrieveMaxObjectIds?: number | null;
  /**
   * The maximum number of results that may be returned in a page of a
   * `/v2/catalog/search` response.
   */
  searchMaxPageLimit?: number | null;
  /**
   * The maximum number of object IDs that may be included in a single
   * `/v2/catalog/batch-delete` request.
   */
  batchDeleteMaxObjectIds?: number | null;
  /**
   * The maximum number of item IDs that may be included in a single
   * `/v2/catalog/update-item-taxes` request.
   */
  updateItemTaxesMaxItemIds?: number | null;
  /**
   * The maximum number of tax IDs to be enabled that may be included in a single
   * `/v2/catalog/update-item-taxes` request.
   */
  updateItemTaxesMaxTaxesToEnable?: number | null;
  /**
   * The maximum number of tax IDs to be disabled that may be included in a single
   * `/v2/catalog/update-item-taxes` request.
   */
  updateItemTaxesMaxTaxesToDisable?: number | null;
  /**
   * The maximum number of item IDs that may be included in a single
   * `/v2/catalog/update-item-modifier-lists` request.
   */
  updateItemModifierListsMaxItemIds?: number | null;
  /**
   * The maximum number of modifier list IDs to be enabled that may be included in
   * a single `/v2/catalog/update-item-modifier-lists` request.
   */
  updateItemModifierListsMaxModifierListsToEnable?: number | null;
  /**
   * The maximum number of modifier list IDs to be disabled that may be included in
   * a single `/v2/catalog/update-item-modifier-lists` request.
   */
  updateItemModifierListsMaxModifierListsToDisable?: number | null;
}

export const catalogInfoResponseLimitsSchema: Schema<CatalogInfoResponseLimits> = object(
  {
    batchUpsertMaxObjectsPerBatch: [
      'batch_upsert_max_objects_per_batch',
      optional(nullable(number())),
    ],
    batchUpsertMaxTotalObjects: [
      'batch_upsert_max_total_objects',
      optional(nullable(number())),
    ],
    batchRetrieveMaxObjectIds: [
      'batch_retrieve_max_object_ids',
      optional(nullable(number())),
    ],
    searchMaxPageLimit: ['search_max_page_limit', optional(nullable(number()))],
    batchDeleteMaxObjectIds: [
      'batch_delete_max_object_ids',
      optional(nullable(number())),
    ],
    updateItemTaxesMaxItemIds: [
      'update_item_taxes_max_item_ids',
      optional(nullable(number())),
    ],
    updateItemTaxesMaxTaxesToEnable: [
      'update_item_taxes_max_taxes_to_enable',
      optional(nullable(number())),
    ],
    updateItemTaxesMaxTaxesToDisable: [
      'update_item_taxes_max_taxes_to_disable',
      optional(nullable(number())),
    ],
    updateItemModifierListsMaxItemIds: [
      'update_item_modifier_lists_max_item_ids',
      optional(nullable(number())),
    ],
    updateItemModifierListsMaxModifierListsToEnable: [
      'update_item_modifier_lists_max_modifier_lists_to_enable',
      optional(nullable(number())),
    ],
    updateItemModifierListsMaxModifierListsToDisable: [
      'update_item_modifier_lists_max_modifier_lists_to_disable',
      optional(nullable(number())),
    ],
  }
);
