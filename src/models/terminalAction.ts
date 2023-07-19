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
  ConfirmationOptions,
  confirmationOptionsSchema,
} from './confirmationOptions';
import {
  DataCollectionOptions,
  dataCollectionOptionsSchema,
} from './dataCollectionOptions';
import { DeviceMetadata, deviceMetadataSchema } from './deviceMetadata';
import { QrCodeOptions, qrCodeOptionsSchema } from './qrCodeOptions';
import { ReceiptOptions, receiptOptionsSchema } from './receiptOptions';
import { SaveCardOptions, saveCardOptionsSchema } from './saveCardOptions';
import { SelectOptions, selectOptionsSchema } from './selectOptions';
import { SignatureOptions, signatureOptionsSchema } from './signatureOptions';

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
  /** The location id the action is attached to, if a link can be made. */
  locationId?: string;
  /** Describes the type of this unit and indicates which field contains the unit information. This is an ‘open’ enum. */
  type?: string;
  /** Fields to describe the action that displays QR-Codes. */
  qrCodeOptions?: QrCodeOptions;
  /** Describes save-card action fields. */
  saveCardOptions?: SaveCardOptions;
  signatureOptions?: SignatureOptions;
  confirmationOptions?: ConfirmationOptions;
  /** Describes receipt action fields. */
  receiptOptions?: ReceiptOptions;
  dataCollectionOptions?: DataCollectionOptions;
  selectOptions?: SelectOptions;
  deviceMetadata?: DeviceMetadata;
  /**
   * Indicates the action will be linked to another action and requires a waiting dialog to be
   * displayed instead of returning to the idle screen on completion of the action.
   * Only supported on SIGNATURE, CONFIRMATION, DATA_COLLECTION, and SELECT types.
   */
  awaitNextAction?: boolean | null;
  /**
   * The timeout duration of the waiting dialog as an RFC 3339 duration, after which the
   * waiting dialog will no longer be displayed and the Terminal will return to the idle screen.
   * Default: 5 minutes from when the waiting dialog is displayed
   * Maximum: 5 minutes
   */
  awaitNextActionDuration?: string | null;
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
  locationId: ['location_id', optional(string())],
  type: ['type', optional(string())],
  qrCodeOptions: ['qr_code_options', optional(lazy(() => qrCodeOptionsSchema))],
  saveCardOptions: [
    'save_card_options',
    optional(lazy(() => saveCardOptionsSchema)),
  ],
  signatureOptions: [
    'signature_options',
    optional(lazy(() => signatureOptionsSchema)),
  ],
  confirmationOptions: [
    'confirmation_options',
    optional(lazy(() => confirmationOptionsSchema)),
  ],
  receiptOptions: [
    'receipt_options',
    optional(lazy(() => receiptOptionsSchema)),
  ],
  dataCollectionOptions: [
    'data_collection_options',
    optional(lazy(() => dataCollectionOptionsSchema)),
  ],
  selectOptions: ['select_options', optional(lazy(() => selectOptionsSchema))],
  deviceMetadata: [
    'device_metadata',
    optional(lazy(() => deviceMetadataSchema)),
  ],
  awaitNextAction: ['await_next_action', optional(nullable(boolean()))],
  awaitNextActionDuration: [
    'await_next_action_duration',
    optional(nullable(string())),
  ],
});
