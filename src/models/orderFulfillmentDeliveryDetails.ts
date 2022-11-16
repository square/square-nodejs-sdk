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
  OrderFulfillmentRecipient,
  orderFulfillmentRecipientSchema,
} from './orderFulfillmentRecipient';

/** Describes delivery details of an order fulfillment. */
export interface OrderFulfillmentDeliveryDetails {
  /** Information about the fulfillment recipient. */
  recipient?: OrderFulfillmentRecipient;
  /** The schedule type of the delivery fulfillment. */
  scheduleType?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was placed.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   * Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  placedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * that represents the start of the delivery period.
   * When the fulfillment `schedule_type` is `ASAP`, the field is automatically
   * set to the current time plus the `prep_time_duration`.
   * Otherwise, the application can set this field while the fulfillment `state` is
   * `PROPOSED`, `RESERVED`, or `PREPARED` (any time before the
   * terminal state such as `COMPLETED`, `CANCELED`, and `FAILED`).
   * The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  deliverAt?: string | null;
  /**
   * The duration of time it takes to prepare and deliver this fulfillment.
   * The timestamp must be in RFC 3339 format (for example, "P1W3D").
   */
  prepTimeDuration?: string | null;
  /**
   * The time period after the `deliver_at` timestamp in which to deliver the order.
   * Applications can set this field when the fulfillment `state` is
   * `PROPOSED`, `RESERVED`, or `PREPARED` (any time before the terminal state
   * such as `COMPLETED`, `CANCELED`, and `FAILED`).
   * The timestamp must be in RFC 3339 format (for example, "P1W3D").
   */
  deliveryWindowDuration?: string | null;
  /**
   * Provides additional instructions about the delivery fulfillment.
   * It is displayed in the Square Point of Sale application and set by the API.
   */
  note?: string | null;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicates when the seller completed the fulfillment.
   * This field is automatically set when  fulfillment `state` changes to `COMPLETED`.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  completedAt?: string | null;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicates when the seller started processing the fulfillment.
   * This field is automatically set when the fulfillment `state` changes to `RESERVED`.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  inProgressAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was rejected. This field is
   * automatically set when the fulfillment `state` changes to `FAILED`.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  rejectedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the seller marked the fulfillment as ready for
   * courier pickup. This field is automatically set when the fulfillment `state` changes
   * to PREPARED.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  readyAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was delivered to the recipient.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  deliveredAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the fulfillment was canceled. This field is automatically
   * set when the fulfillment `state` changes to `CANCELED`.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  canceledAt?: string;
  /** The delivery cancellation reason. Max length: 100 characters. */
  cancelReason?: string | null;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when an order can be picked up by the courier for delivery.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  courierPickupAt?: string | null;
  /**
   * The period of time in which the order should be picked up by the courier after the
   * `courier_pickup_at` timestamp.
   * The time must be in RFC 3339 format (for example, "P1W3D").
   */
  courierPickupWindowDuration?: string | null;
  /** Whether the delivery is preferred to be no contact. */
  isNoContactDelivery?: boolean | null;
  /** A note to provide additional instructions about how to deliver the order. */
  dropoffNotes?: string | null;
  /** The name of the courier provider. */
  courierProviderName?: string | null;
  /** The support phone number of the courier. */
  courierSupportPhoneNumber?: string | null;
  /** The identifier for the delivery created by Square. */
  squareDeliveryId?: string | null;
  /** The identifier for the delivery created by the third-party courier service. */
  externalDeliveryId?: string | null;
  /**
   * The flag to indicate the delivery is managed by a third party (ie DoorDash), which means
   * we may not receive all recipient information for PII purposes.
   */
  managedDelivery?: boolean | null;
}

export const orderFulfillmentDeliveryDetailsSchema: Schema<OrderFulfillmentDeliveryDetails> = object(
  {
    recipient: [
      'recipient',
      optional(lazy(() => orderFulfillmentRecipientSchema)),
    ],
    scheduleType: ['schedule_type', optional(string())],
    placedAt: ['placed_at', optional(string())],
    deliverAt: ['deliver_at', optional(nullable(string()))],
    prepTimeDuration: ['prep_time_duration', optional(nullable(string()))],
    deliveryWindowDuration: [
      'delivery_window_duration',
      optional(nullable(string())),
    ],
    note: ['note', optional(nullable(string()))],
    completedAt: ['completed_at', optional(nullable(string()))],
    inProgressAt: ['in_progress_at', optional(string())],
    rejectedAt: ['rejected_at', optional(string())],
    readyAt: ['ready_at', optional(string())],
    deliveredAt: ['delivered_at', optional(string())],
    canceledAt: ['canceled_at', optional(string())],
    cancelReason: ['cancel_reason', optional(nullable(string()))],
    courierPickupAt: ['courier_pickup_at', optional(nullable(string()))],
    courierPickupWindowDuration: [
      'courier_pickup_window_duration',
      optional(nullable(string())),
    ],
    isNoContactDelivery: [
      'is_no_contact_delivery',
      optional(nullable(boolean())),
    ],
    dropoffNotes: ['dropoff_notes', optional(nullable(string()))],
    courierProviderName: [
      'courier_provider_name',
      optional(nullable(string())),
    ],
    courierSupportPhoneNumber: [
      'courier_support_phone_number',
      optional(nullable(string())),
    ],
    squareDeliveryId: ['square_delivery_id', optional(nullable(string()))],
    externalDeliveryId: ['external_delivery_id', optional(nullable(string()))],
    managedDelivery: ['managed_delivery', optional(nullable(boolean()))],
  }
);
