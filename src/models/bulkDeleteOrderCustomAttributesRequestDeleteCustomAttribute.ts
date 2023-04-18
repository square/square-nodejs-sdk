import { object, optional, Schema, string } from '../schema';

/** Represents one delete within the bulk operation. */
export interface BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute {
  /**
   * The key of the custom attribute to delete.  This key must match the key
   * of an existing custom attribute definition.
   */
  key?: string;
  /** The ID of the target [order](entity:Order). */
  orderId: string;
}

export const bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema: Schema<BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute> = object(
  { key: ['key', optional(string())], orderId: ['order_id', string()] }
);
