import { number, object, optional, Schema, string } from '../schema';

/** V1AdjustInventoryRequest */
export interface V1AdjustInventoryRequest {
  /** The number to adjust the variation's quantity by. */
  quantityDelta?: number;
  adjustmentType?: string;
  /** A note about the inventory adjustment. */
  memo?: string;
}

export const v1AdjustInventoryRequestSchema: Schema<V1AdjustInventoryRequest> = object(
  {
    quantityDelta: ['quantity_delta', optional(number())],
    adjustmentType: ['adjustment_type', optional(string())],
    memo: ['memo', optional(string())],
  }
);
