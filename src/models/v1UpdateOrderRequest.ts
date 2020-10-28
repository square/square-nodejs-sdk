import { object, optional, Schema, string } from '../schema';

/** V1UpdateOrderRequest */
export interface V1UpdateOrderRequest {
  action: string;
  /** The tracking number of the shipment associated with the order. Only valid if action is COMPLETE. */
  shippedTrackingNumber?: string;
  /** A merchant-specified note about the completion of the order. Only valid if action is COMPLETE. */
  completedNote?: string;
  /** A merchant-specified note about the refunding of the order. Only valid if action is REFUND. */
  refundedNote?: string;
  /** A merchant-specified note about the canceling of the order. Only valid if action is CANCEL. */
  canceledNote?: string;
}

export const v1UpdateOrderRequestSchema: Schema<V1UpdateOrderRequest> = object({
  action: ['action', string()],
  shippedTrackingNumber: ['shipped_tracking_number', optional(string())],
  completedNote: ['completed_note', optional(string())],
  refundedNote: ['refunded_note', optional(string())],
  canceledNote: ['canceled_note', optional(string())],
});
