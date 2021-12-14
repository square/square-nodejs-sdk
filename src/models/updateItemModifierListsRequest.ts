import { array, object, optional, Schema, string } from '../schema';

export interface UpdateItemModifierListsRequest {
  /** The IDs of the catalog items associated with the CatalogModifierList objects being updated. */
  itemIds: string[];
  /**
   * The IDs of the CatalogModifierList objects to enable for the CatalogItem.
   * At least one of `modifier_lists_to_enable` or `modifier_lists_to_disable` must be specified.
   */
  modifierListsToEnable?: string[];
  /**
   * The IDs of the CatalogModifierList objects to disable for the CatalogItem.
   * At least one of `modifier_lists_to_enable` or `modifier_lists_to_disable` must be specified.
   */
  modifierListsToDisable?: string[];
}

export const updateItemModifierListsRequestSchema: Schema<UpdateItemModifierListsRequest> = object(
  {
    itemIds: ['item_ids', array(string())],
    modifierListsToEnable: [
      'modifier_lists_to_enable',
      optional(array(string())),
    ],
    modifierListsToDisable: [
      'modifier_lists_to_disable',
      optional(array(string())),
    ],
  }
);
