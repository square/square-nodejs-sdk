import { object, optional, Schema, string } from '../schema';

/** Specific details for curbside pickup. */
export interface OrderFulfillmentPickupDetailsCurbsidePickupDetails {
  /** Specific details for curbside pickup, such as parking number, vehicle model, etc. */
  curbsideDetails?: string;
  /**
   * The [timestamp](#workingwithdates) in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z",
   * indicating when the buyer arrived and is waiting for pickup.
   */
  buyerArrivedAt?: string;
}

export const orderFulfillmentPickupDetailsCurbsidePickupDetailsSchema: Schema<OrderFulfillmentPickupDetailsCurbsidePickupDetails> = object(
  {
    curbsideDetails: ['curbside_details', optional(string())],
    buyerArrivedAt: ['buyer_arrived_at', optional(string())],
  }
);
