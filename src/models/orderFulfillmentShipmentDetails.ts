import { lazy, object, optional, Schema, string } from '../schema';
import {
  OrderFulfillmentRecipient,
  orderFulfillmentRecipientSchema,
} from './orderFulfillmentRecipient';

/** Contains the details necessary to fulfill a shipment order. */
export interface OrderFulfillmentShipmentDetails {
  /** Contains information about the recipient of a fulfillment. */
  recipient?: OrderFulfillmentRecipient;
  /** The shipping carrier being used to ship this fulfillment (such as UPS, FedEx, or USPS). */
  carrier?: string;
  /** A note with additional information for the shipping carrier. */
  shippingNote?: string;
  /**
   * A description of the type of shipping product purchased from the carrier
   * (such as First Class, Priority, or Express).
   */
  shippingType?: string;
  /** The reference number provided by the carrier to track the shipment's progress. */
  trackingNumber?: string;
  /** A link to the tracking webpage on the carrier's website. */
  trackingUrl?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the shipment was requested. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  placedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when this fulfillment was moved to the `RESERVED` state, which  indicates that preparation
   * of this shipment has begun. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  inProgressAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when this fulfillment was moved to the `PREPARED` state, which indicates that the
   * fulfillment is packaged. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  packagedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the shipment is expected to be delivered to the shipping carrier.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  expectedShippedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when this fulfillment was moved to the `COMPLETED` state, which indicates that
   * the fulfillment has been given to the shipping carrier. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  shippedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating the shipment was canceled.
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  canceledAt?: string;
  /** A description of why the shipment was canceled. */
  cancelReason?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * indicating when the shipment failed to be completed. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  failedAt?: string;
  /** A description of why the shipment failed to be completed. */
  failureReason?: string;
}

export const orderFulfillmentShipmentDetailsSchema: Schema<OrderFulfillmentShipmentDetails> = object(
  {
    recipient: [
      'recipient',
      optional(lazy(() => orderFulfillmentRecipientSchema)),
    ],
    carrier: ['carrier', optional(string())],
    shippingNote: ['shipping_note', optional(string())],
    shippingType: ['shipping_type', optional(string())],
    trackingNumber: ['tracking_number', optional(string())],
    trackingUrl: ['tracking_url', optional(string())],
    placedAt: ['placed_at', optional(string())],
    inProgressAt: ['in_progress_at', optional(string())],
    packagedAt: ['packaged_at', optional(string())],
    expectedShippedAt: ['expected_shipped_at', optional(string())],
    shippedAt: ['shipped_at', optional(string())],
    canceledAt: ['canceled_at', optional(string())],
    cancelReason: ['cancel_reason', optional(string())],
    failedAt: ['failed_at', optional(string())],
    failureReason: ['failure_reason', optional(string())],
  }
);
