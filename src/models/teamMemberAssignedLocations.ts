import { array, nullable, object, optional, Schema, string } from '../schema';

/** An object that represents a team member's assignment to locations. */
export interface TeamMemberAssignedLocations {
  /** Enumerates the possible assignment types that the team member can have. */
  assignmentType?: string;
  /** The explicit locations that the team member is assigned to. */
  locationIds?: string[] | null;
}

export const teamMemberAssignedLocationsSchema: Schema<TeamMemberAssignedLocations> = object(
  {
    assignmentType: ['assignment_type', optional(string())],
    locationIds: ['location_ids', optional(nullable(array(string())))],
  }
);
