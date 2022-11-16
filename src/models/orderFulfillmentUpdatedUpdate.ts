import { nullable, object, optional, Schema, string } from '../schema';

/** Information about fulfillment updates. */
export interface OrderFulfillmentUpdatedUpdate {
  /** A unique ID that identifies the fulfillment only within this order. */
  fulfillmentUid?: string | null;
  /** The current state of this fulfillment. */
  oldState?: string;
  /** The current state of this fulfillment. */
  newState?: string;
}

export const orderFulfillmentUpdatedUpdateSchema: Schema<OrderFulfillmentUpdatedUpdate> = object(
  {
    fulfillmentUid: ['fulfillment_uid', optional(nullable(string()))],
    oldState: ['old_state', optional(string())],
    newState: ['new_state', optional(string())],
  }
);
