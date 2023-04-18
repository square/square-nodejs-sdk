import {
  array,
  bigint,
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/** Defines an appointment segment of a booking. */
export interface AppointmentSegment {
  /** The time span in minutes of an appointment segment. */
  durationMinutes?: number | null;
  /** The ID of the [CatalogItemVariation](entity:CatalogItemVariation) object representing the service booked in this segment. */
  serviceVariationId?: string | null;
  /** The ID of the [TeamMember](entity:TeamMember) object representing the team member booked in this segment. */
  teamMemberId: string;
  /** The current version of the item variation representing the service booked in this segment. */
  serviceVariationVersion?: bigint | null;
  /** Time between the end of this segment and the beginning of the subsequent segment. */
  intermissionMinutes?: number;
  /** Whether the customer accepts any team member, instead of a specific one, to serve this segment. */
  anyTeamMember?: boolean;
  /** The IDs of the seller-accessible resources used for this appointment segment. */
  resourceIds?: string[];
}

export const appointmentSegmentSchema: Schema<AppointmentSegment> = object({
  durationMinutes: ['duration_minutes', optional(nullable(number()))],
  serviceVariationId: ['service_variation_id', optional(nullable(string()))],
  teamMemberId: ['team_member_id', string()],
  serviceVariationVersion: [
    'service_variation_version',
    optional(nullable(bigint())),
  ],
  intermissionMinutes: ['intermission_minutes', optional(number())],
  anyTeamMember: ['any_team_member', optional(boolean())],
  resourceIds: ['resource_ids', optional(array(string()))],
});
