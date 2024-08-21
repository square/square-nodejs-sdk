import { object, optional, Schema, string } from '../schema';

/** Details specific to offline payments. */
export interface OfflinePaymentDetails {
  /** The client-side timestamp of when the offline payment was created, in RFC 3339 format. */
  clientCreatedAt?: string;
}

export const offlinePaymentDetailsSchema: Schema<OfflinePaymentDetails> = object(
  { clientCreatedAt: ['client_created_at', optional(string())] }
);
