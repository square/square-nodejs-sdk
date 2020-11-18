import { array, object, optional, Schema, string } from '../schema';

export interface UpdateItemTaxesRequest {
  /** IDs for the CatalogItems associated with the CatalogTax objects being updated. */
  itemIds: string[];
  /** IDs of the CatalogTax objects to enable. */
  taxesToEnable?: string[];
  /** IDs of the CatalogTax objects to disable. */
  taxesToDisable?: string[];
}

export const updateItemTaxesRequestSchema: Schema<UpdateItemTaxesRequest> = object(
  {
    itemIds: ['item_ids', array(string())],
    taxesToEnable: ['taxes_to_enable', optional(array(string()))],
    taxesToDisable: ['taxes_to_disable', optional(array(string()))],
  }
);
