import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  SearchTeamMembersQuery,
  searchTeamMembersQuerySchema,
} from './searchTeamMembersQuery';

/** Represents a search request for a filtered list of `TeamMember` objects. */
export interface SearchTeamMembersRequest {
  /** Represents the parameters in a search for `TeamMember` objects. */
  query?: SearchTeamMembersQuery;
  /** The maximum number of `TeamMember` objects in a page (25 by default). */
  limit?: number;
  /**
   * The opaque cursor for fetching the next page. Read about
   * [pagination](https://developer.squareup.com/docs/working-with-apis/pagination) with Square APIs for more information.
   */
  cursor?: string;
}

export const searchTeamMembersRequestSchema: Schema<SearchTeamMembersRequest> = object(
  {
    query: ['query', optional(lazy(() => searchTeamMembersQuerySchema))],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
