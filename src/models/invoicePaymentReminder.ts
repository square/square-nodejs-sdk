import { nullable, number, object, optional, Schema, string } from '../schema';

/**
 * Describes a payment request reminder (automatic notification) that Square sends
 * to the customer. You configure a reminder relative to the payment request
 * `due_date`.
 */
export interface InvoicePaymentReminder {
  /**
   * A Square-assigned ID that uniquely identifies the reminder within the
   * `InvoicePaymentRequest`.
   */
  uid?: string;
  /**
   * The number of days before (a negative number) or after (a positive number)
   * the payment request `due_date` when the reminder is sent. For example, -3 indicates that
   * the reminder should be sent 3 days before the payment request `due_date`.
   */
  relativeScheduledDays?: number | null;
  /** The reminder message. */
  message?: string | null;
  /** The status of a payment request reminder. */
  status?: string;
  /** If sent, the timestamp when the reminder was sent, in RFC 3339 format. */
  sentAt?: string;
}

export const invoicePaymentReminderSchema: Schema<InvoicePaymentReminder> = object(
  {
    uid: ['uid', optional(string())],
    relativeScheduledDays: [
      'relative_scheduled_days',
      optional(nullable(number())),
    ],
    message: ['message', optional(nullable(string()))],
    status: ['status', optional(string())],
    sentAt: ['sent_at', optional(string())],
  }
);
