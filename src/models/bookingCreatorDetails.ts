import { object, optional, Schema, string } from '../schema';

/** Information about a booking creator. */
export interface BookingCreatorDetails {
  /** Supported types of a booking creator. */
  creatorType?: string;
  /**
   * The ID of the team member who created the booking, when the booking creator is of the `TEAM_MEMBER` type.
   * Access to this field requires seller-level permissions.
   */
  teamMemberId?: string;
  /**
   * The ID of the customer who created the booking, when the booking creator is of the `CUSTOMER` type.
   * Access to this field requires seller-level permissions.
   */
  customerId?: string;
}

export const bookingCreatorDetailsSchema: Schema<BookingCreatorDetails> = object(
  {
    creatorType: ['creator_type', optional(string())],
    teamMemberId: ['team_member_id', optional(string())],
    customerId: ['customer_id', optional(string())],
  }
);
