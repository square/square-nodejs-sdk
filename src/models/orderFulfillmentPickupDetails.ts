import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  OrderFulfillmentPickupDetailsCurbsidePickupDetails,
  orderFulfillmentPickupDetailsCurbsidePickupDetailsSchema,
} from './orderFulfillmentPickupDetailsCurbsidePickupDetails';
import {
  OrderFulfillmentRecipient,
  orderFulfillmentRecipientSchema,
} from './orderFulfillmentRecipient';

/** Contains details necessary to fulfill a pickup order. */
export interface OrderFulfillmentPickupDetails {
  /** Contains information on the recipient of a fulfillment. */
  recipient?: OrderFulfillmentRecipient;
  /**
   * The [timestamp](#workingwithdates) indicating when this fulfillment
   * will expire if it is not accepted. Must be in RFC 3339 format
   * e.g., "2016-09-04T23:59:33.123Z". Expiration time can only be set up to 7
   * days in the future. If `expires_at` is not set, this pickup fulfillment
   * will be automatically accepted when placed.
   */
  expiresAt?: string;
  /**
   * The duration of time after which an open and accepted pickup fulfillment
   * will automatically move to the `COMPLETED` state. Must be in RFC3339
   * duration format e.g., "P1W3D".
   * If not set, this pickup fulfillment will remain accepted until it is canceled or completed.
   */
  autoCompleteDuration?: string;
  /** The schedule type of the pickup fulfillment. */
  scheduleType?: string;
  /**
   * The [timestamp](#workingwithdates) that represents the start of the pickup window.
   * Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   * For fulfillments with the schedule type `ASAP`, this is automatically set
   * to the current time plus the expected duration to prepare the fulfillment.
   */
  pickupAt?: string;
  /**
   * The window of time in which the order should be picked up after the `pickup_at` timestamp.
   * Must be in RFC3339 duration format, e.g., "P1W3D". Can be used as an
   * informational guideline for merchants.
   */
  pickupWindowDuration?: string;
  /**
   * The duration of time it takes to prepare this fulfillment.
   * Must be in RFC3339 duration format, e.g., "P1W3D".
   */
  prepTimeDuration?: string;
  /**
   * A note meant to provide additional instructions about the pickup
   * fulfillment displayed in the Square Point of Sale and set by the API.
   */
  note?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment
   * was placed. Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  placedAt?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment
   * was accepted. In RFC3339 timestamp format,
   * e.g., "2016-09-04T23:59:33.123Z".
   */
  acceptedAt?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment
   * was rejected. In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  rejectedAt?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment is
   * marked as ready for pickup. In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  readyAt?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment expired.
   * In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  expiredAt?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment
   * was picked up by the recipient. In RFC3339 timestamp format,
   * e.g., "2016-09-04T23:59:33.123Z".
   */
  pickedUpAt?: string;
  /**
   * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z",
   * indicating when the fulfillment was canceled.
   */
  canceledAt?: string;
  /** A description of why the pickup was canceled. Max length: 100 characters. */
  cancelReason?: string;
  /** If true, indicates this pickup order is for curbside pickup, not in-store pickup. */
  isCurbsidePickup?: boolean;
  /** Specific details for curbside pickup. */
  curbsidePickupDetails?: OrderFulfillmentPickupDetailsCurbsidePickupDetails;
}

export const orderFulfillmentPickupDetailsSchema: Schema<OrderFulfillmentPickupDetails> = object(
  {
    recipient: [
      'recipient',
      optional(lazy(() => orderFulfillmentRecipientSchema)),
    ],
    expiresAt: ['expires_at', optional(string())],
    autoCompleteDuration: ['auto_complete_duration', optional(string())],
    scheduleType: ['schedule_type', optional(string())],
    pickupAt: ['pickup_at', optional(string())],
    pickupWindowDuration: ['pickup_window_duration', optional(string())],
    prepTimeDuration: ['prep_time_duration', optional(string())],
    note: ['note', optional(string())],
    placedAt: ['placed_at', optional(string())],
    acceptedAt: ['accepted_at', optional(string())],
    rejectedAt: ['rejected_at', optional(string())],
    readyAt: ['ready_at', optional(string())],
    expiredAt: ['expired_at', optional(string())],
    pickedUpAt: ['picked_up_at', optional(string())],
    canceledAt: ['canceled_at', optional(string())],
    cancelReason: ['cancel_reason', optional(string())],
    isCurbsidePickup: ['is_curbside_pickup', optional(boolean())],
    curbsidePickupDetails: [
      'curbside_pickup_details',
      optional(
        lazy(() => orderFulfillmentPickupDetailsCurbsidePickupDetailsSchema)
      ),
    ],
  }
);
