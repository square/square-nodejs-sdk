import { boolean, nullable, object, optional, Schema, string } from '../schema';

/** Describes receipt action fields. */
export interface ReceiptOptions {
  /** The reference to the Square payment ID for the receipt. */
  paymentId: string;
  /**
   * Instructs the device to print the receipt without displaying the receipt selection screen.
   * Requires `printer_enabled` set to true.
   * Defaults to false.
   */
  printOnly?: boolean | null;
  /**
   * Identify the receipt as a reprint rather than an original receipt.
   * Defaults to false.
   */
  isDuplicate?: boolean | null;
}

export const receiptOptionsSchema: Schema<ReceiptOptions> = object({
  paymentId: ['payment_id', string()],
  printOnly: ['print_only', optional(nullable(boolean()))],
  isDuplicate: ['is_duplicate', optional(nullable(boolean()))],
});
