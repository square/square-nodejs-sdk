import { object, optional, Schema, string } from '../schema';

/**
 * Represents a group of customer profiles.
 * Customer groups can be created, modified, and have their membership defined either via
 * the Customers API or within Customer Directory in the Square Dashboard or Point of Sale.
 */
export interface CustomerGroup {
  /** Unique Square-generated ID for the customer group. */
  id?: string;
  /** Name of the customer group. */
  name: string;
  /** The timestamp when the customer group was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timesamp when the customer group was last updated, in RFC 3339 format. */
  updatedAt?: string;
}

export const customerGroupSchema: Schema<CustomerGroup> = object({
  id: ['id', optional(string())],
  name: ['name', string()],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
