import { lazy, object, optional, Schema, string } from '../schema';
import {
  OrderFulfillmentRecipient,
  orderFulfillmentRecipientSchema,
} from './orderFulfillmentRecipient';

/** Contains details necessary to fulfill a shipment order. */
export interface OrderFulfillmentShipmentDetails {
  /** Contains information on the recipient of a fulfillment. */
  recipient?: OrderFulfillmentRecipient;
  /**
   * The shipping carrier being used to ship this fulfillment
   * e.g. UPS, FedEx, USPS, etc.
   */
  carrier?: string;
  /** A note with additional information for the shipping carrier. */
  shippingNote?: string;
  /**
   * A description of the type of shipping product purchased from the carrier.
   * e.g. First Class, Priority, Express
   */
  shippingType?: string;
  /** The reference number provided by the carrier to track the shipment's progress. */
  trackingNumber?: string;
  /** A link to the tracking webpage on the carrier's website. */
  trackingUrl?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when the shipment was
   * requested. Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  placedAt?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when this fulfillment was
   * moved to the `RESERVED` state. Indicates that preparation of this shipment has begun.
   * Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  inProgressAt?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when this fulfillment
   * was moved to the `PREPARED` state. Indicates that the fulfillment is packaged.
   * Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  packagedAt?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when the shipment is
   * expected to be delivered to the shipping carrier. Must be in RFC 3339 timestamp
   * format, e.g., "2016-09-04T23:59:33.123Z".
   */
  expectedShippedAt?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when this fulfillment
   * was moved to the `COMPLETED`state. Indicates that the fulfillment has been given
   * to the shipping carrier. Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  shippedAt?: string;
  /**
   * The [timestamp](#workingwithdates) indicating the shipment was canceled.
   * Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  canceledAt?: string;
  /** A description of why the shipment was canceled. */
  cancelReason?: string;
  /**
   * The [timestamp](#workingwithdates) indicating when the shipment
   * failed to be completed. Must be in RFC 3339 timestamp format, e.g.,
   * "2016-09-04T23:59:33.123Z".
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
