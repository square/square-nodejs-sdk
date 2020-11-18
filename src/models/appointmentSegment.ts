import { number, object, Schema, string } from '../schema';

/** Defines an appointment segment of a booking. */
export interface AppointmentSegment {
  /** The time span in minutes of an appointment segment. */
  durationMinutes: number;
  /** The ID of the [CatalogItemVariation](#type-CatalogItemVariation) object representing the service booked in this segment. */
  serviceVariationId: string;
  /** The ID of the [TeamMember](#type-TeamMember) object representing the team member booked in this segment. */
  teamMemberId: string;
  /** The current version of the item variation representing the service booked in this segment. */
  serviceVariationVersion: number;
}

export const appointmentSegmentSchema: Schema<AppointmentSegment> = object({
  durationMinutes: ['duration_minutes', number()],
  serviceVariationId: ['service_variation_id', string()],
  teamMemberId: ['team_member_id', string()],
  serviceVariationVersion: ['service_variation_version', number()],
});
