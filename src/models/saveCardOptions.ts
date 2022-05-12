import { object, optional, Schema, string } from '../schema';

/** Describes save-card action fields. */
export interface SaveCardOptions {
  /** The square-assigned ID of the customer linked to the saved card. */
  customerId: string;
  /** The id of the created card-on-file. */
  cardId?: string;
  /**
   * An optional user-defined reference ID that can be used to associate
   * this `Card` to another entity in an external system. For example, a customer
   * ID generated by a third-party system.
   */
  referenceId?: string;
}

export const saveCardOptionsSchema: Schema<SaveCardOptions> = object({
  customerId: ['customer_id', string()],
  cardId: ['card_id', optional(string())],
  referenceId: ['reference_id', optional(string())],
});