import { nullable, object, optional, Schema, string } from '../schema';

/** V1UpdateOrderRequest */
export interface V1UpdateOrderRequest {
  action: string;
  /** The tracking number of the shipment associated with the order. Only valid if action is COMPLETE. */
  shippedTrackingNumber?: string | null;
  /** A merchant-specified note about the completion of the order. Only valid if action is COMPLETE. */
  completedNote?: string | null;
  /** A merchant-specified note about the refunding of the order. Only valid if action is REFUND. */
  refundedNote?: string | null;
  /** A merchant-specified note about the canceling of the order. Only valid if action is CANCEL. */
  canceledNote?: string | null;
}

export const v1UpdateOrderRequestSchema: Schema<V1UpdateOrderRequest> = object({
  action: ['action', string()],
  shippedTrackingNumber: [
    'shipped_tracking_number',
    optional(nullable(string())),
  ],
  completedNote: ['completed_note', optional(nullable(string()))],
  refundedNote: ['refunded_note', optional(nullable(string()))],
  canceledNote: ['canceled_note', optional(nullable(string()))],
});
