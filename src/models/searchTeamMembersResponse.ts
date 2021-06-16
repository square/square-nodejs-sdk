import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { TeamMember, teamMemberSchema } from './teamMember';

/** Represents a response from a search request containing a filtered list of `TeamMember` objects. */
export interface SearchTeamMembersResponse {
  /** The filtered list of `TeamMember` objects. */
  teamMembers?: TeamMember[];
  /**
   * The opaque cursor for fetching the next page. For more information, see
   * [pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /** The errors that occurred during the request. */
  errors?: Error[];
}

export const searchTeamMembersResponseSchema: Schema<SearchTeamMembersResponse> = object(
  {
    teamMembers: [
      'team_members',
      optional(array(lazy(() => teamMemberSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
