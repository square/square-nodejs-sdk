import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { DeviceMetadata, deviceMetadataSchema } from './deviceMetadata';
import { ReceiptOptions, receiptOptionsSchema } from './receiptOptions';
import { SaveCardOptions, saveCardOptionsSchema } from './saveCardOptions';

/** Represents an action processed by the Square Terminal. */
export interface TerminalAction {
  /** A unique ID for this `TerminalAction`. */
  id?: string;
  /**
   * The unique Id of the device intended for this `TerminalAction`.
   * The Id can be retrieved from /v2/devices api.
   */
  deviceId?: string | null;
  /**
   * The duration as an RFC 3339 duration, after which the action will be automatically canceled.
   * TerminalActions that are `PENDING` will be automatically `CANCELED` and have a cancellation reason
   * of `TIMED_OUT`
   * Default: 5 minutes from creation
   * Maximum: 5 minutes
   */
  deadlineDuration?: string | null;
  /**
   * The status of the `TerminalAction`.
   * Options: `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, `COMPLETED`
   */
  status?: string;
  cancelReason?: string;
  /** The time when the `TerminalAction` was created as an RFC 3339 timestamp. */
  createdAt?: string;
  /** The time when the `TerminalAction` was last updated as an RFC 3339 timestamp. */
  updatedAt?: string;
  /** The ID of the application that created the action. */
  appId?: string;
  /** Describes the type of this unit and indicates which field contains the unit information. This is an ‘open’ enum. */
  type?: string;
  /** Describes save-card action fields. */
  saveCardOptions?: SaveCardOptions;
  /** Describes receipt action fields. */
  receiptOptions?: ReceiptOptions;
  deviceMetadata?: DeviceMetadata;
}

export const terminalActionSchema: Schema<TerminalAction> = object({
  id: ['id', optional(string())],
  deviceId: ['device_id', optional(nullable(string()))],
  deadlineDuration: ['deadline_duration', optional(nullable(string()))],
  status: ['status', optional(string())],
  cancelReason: ['cancel_reason', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  appId: ['app_id', optional(string())],
  type: ['type', optional(string())],
  saveCardOptions: [
    'save_card_options',
    optional(lazy(() => saveCardOptionsSchema)),
  ],
  receiptOptions: [
    'receipt_options',
    optional(lazy(() => receiptOptionsSchema)),
  ],
  deviceMetadata: [
    'device_metadata',
    optional(lazy(() => deviceMetadataSchema)),
  ],
});
