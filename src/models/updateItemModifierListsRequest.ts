import { array, object, optional, Schema, string } from '../schema';

export interface UpdateItemModifierListsRequest {
  /** The IDs of the catalog items associated with the CatalogModifierList objects being updated. */
  itemIds: string[];
  /** The IDs of the CatalogModifierList objects to enable for the CatalogItem. */
  modifierListsToEnable?: string[];
  /** The IDs of the CatalogModifierList objects to disable for the CatalogItem. */
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
