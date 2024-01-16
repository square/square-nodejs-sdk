import {
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
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
  /** Information about the fulfillment recipient. */
  recipient?: OrderFulfillmentRecipient;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when this fulfillment expires if it is not marked in progress. The timestamp must be
   * in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set
   * up to 7 days in the future. If `expires_at` is not set, any new payments attached to the order
   * are automatically completed.
   */
  expiresAt?: string | null;
  /**
   * The duration of time after which an in progress pickup fulfillment is automatically moved
   * to the `COMPLETED` state. The duration must be in RFC 3339 format (for example, "P1W3D").
   * If not set, this pickup fulfillment remains in progress until it is canceled or completed.
   */
  autoCompleteDuration?: string | null;
  /** The schedule type of the pickup fulfillment. */
  scheduleType?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g.,
   * "2016-09-04T23:59:33.123Z".
   * For fulfillments with the schedule type `ASAP`, this is automatically set
   * to the current time plus the expected duration to prepare the fulfillment.
   */
  pickupAt?: string | null;
  /**
   * The window of time in which the order should be picked up after the `pickup_at` timestamp.
   * Must be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an
   * informational guideline for merchants.
   */
  pickupWindowDuration?: string | null;
  /**
   * The duration of time it takes to prepare this fulfillment.
   * The duration must be in RFC 3339 format (for example, "P1W3D").
   */
  prepTimeDuration?: string | null;
  /**
   * A note to provide additional instructions about the pickup
   * fulfillment displayed in the Square Point of Sale application and set by the API.
   */
  note?: string | null;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  placedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was marked in progress. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  acceptedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  rejectedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  readyAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment expired. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  expiredAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  pickedUpAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  canceledAt?: string;
  /** A description of why the pickup was canceled. The maximum length: 100 characters. */
  cancelReason?: string | null;
  /** If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup. */
  isCurbsidePickup?: boolean | null;
  /** Specific details for curbside pickup. */
  curbsidePickupDetails?: OrderFulfillmentPickupDetailsCurbsidePickupDetails;
}

export const orderFulfillmentPickupDetailsSchema: Schema<OrderFulfillmentPickupDetails> = object(
  {
    recipient: [
      'recipient',
      optional(lazy(() => orderFulfillmentRecipientSchema)),
    ],
    expiresAt: ['expires_at', optional(nullable(string()))],
    autoCompleteDuration: [
      'auto_complete_duration',
      optional(nullable(string())),
    ],
    scheduleType: ['schedule_type', optional(string())],
    pickupAt: ['pickup_at', optional(nullable(string()))],
    pickupWindowDuration: [
      'pickup_window_duration',
      optional(nullable(string())),
    ],
    prepTimeDuration: ['prep_time_duration', optional(nullable(string()))],
    note: ['note', optional(nullable(string()))],
    placedAt: ['placed_at', optional(string())],
    acceptedAt: ['accepted_at', optional(string())],
    rejectedAt: ['rejected_at', optional(string())],
    readyAt: ['ready_at', optional(string())],
    expiredAt: ['expired_at', optional(string())],
    pickedUpAt: ['picked_up_at', optional(string())],
    canceledAt: ['canceled_at', optional(string())],
    cancelReason: ['cancel_reason', optional(nullable(string()))],
    isCurbsidePickup: ['is_curbside_pickup', optional(nullable(boolean()))],
    curbsidePickupDetails: [
      'curbside_pickup_details',
      optional(
        lazy(() => orderFulfillmentPickupDetailsCurbsidePickupDetailsSchema)
      ),
    ],
  }
);
