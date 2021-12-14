import { array, object, optional, Schema, string } from '../schema';

export interface UpdateItemTaxesRequest {
  /**
   * IDs for the CatalogItems associated with the CatalogTax objects being updated.
   * No more than 1,000 IDs may be provided.
   */
  itemIds: string[];
  /**
   * IDs of the CatalogTax objects to enable.
   * At least one of `taxes_to_enable` or `taxes_to_disable` must be specified.
   */
  taxesToEnable?: string[];
  /**
   * IDs of the CatalogTax objects to disable.
   * At least one of `taxes_to_enable` or `taxes_to_disable` must be specified.
   */
  taxesToDisable?: string[];
}

export const updateItemTaxesRequestSchema: Schema<UpdateItemTaxesRequest> = object(
  {
    itemIds: ['item_ids', array(string())],
    taxesToEnable: ['taxes_to_enable', optional(array(string()))],
    taxesToDisable: ['taxes_to_disable', optional(array(string()))],
  }
);
