import { object, optional, Schema, string } from '../schema';

/** Information about fulfillment updates. */
export interface OrderFulfillmentUpdatedUpdate {
  /** Unique ID that identifies the fulfillment only within this order. */
  fulfillmentUid?: string;
  /** The current state of this fulfillment. */
  oldState?: string;
  /** The current state of this fulfillment. */
  newState?: string;
}

export const orderFulfillmentUpdatedUpdateSchema: Schema<OrderFulfillmentUpdatedUpdate> = object(
  {
    fulfillmentUid: ['fulfillment_uid', optional(string())],
    oldState: ['old_state', optional(string())],
    newState: ['new_state', optional(string())],
  }
);
