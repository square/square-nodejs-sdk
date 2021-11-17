import { ApiResponse, RequestOptions } from '../core';
import {
  BulkCreateTeamMembersRequest,
  bulkCreateTeamMembersRequestSchema,
} from '../models/bulkCreateTeamMembersRequest';
import {
  BulkCreateTeamMembersResponse,
  bulkCreateTeamMembersResponseSchema,
} from '../models/bulkCreateTeamMembersResponse';
import {
  BulkUpdateTeamMembersRequest,
  bulkUpdateTeamMembersRequestSchema,
} from '../models/bulkUpdateTeamMembersRequest';
import {
  BulkUpdateTeamMembersResponse,
  bulkUpdateTeamMembersResponseSchema,
} from '../models/bulkUpdateTeamMembersResponse';
import {
  CreateTeamMemberRequest,
  createTeamMemberRequestSchema,
} from '../models/createTeamMemberRequest';
import {
  CreateTeamMemberResponse,
  createTeamMemberResponseSchema,
} from '../models/createTeamMemberResponse';
import {
  RetrieveTeamMemberResponse,
  retrieveTeamMemberResponseSchema,
} from '../models/retrieveTeamMemberResponse';
import {
  RetrieveWageSettingResponse,
  retrieveWageSettingResponseSchema,
} from '../models/retrieveWageSettingResponse';
import {
  SearchTeamMembersRequest,
  searchTeamMembersRequestSchema,
} from '../models/searchTeamMembersRequest';
import {
  SearchTeamMembersResponse,
  searchTeamMembersResponseSchema,
} from '../models/searchTeamMembersResponse';
import {
  UpdateTeamMemberRequest,
  updateTeamMemberRequestSchema,
} from '../models/updateTeamMemberRequest';
import {
  UpdateTeamMemberResponse,
  updateTeamMemberResponseSchema,
} from '../models/updateTeamMemberResponse';
import {
  UpdateWageSettingRequest,
  updateWageSettingRequestSchema,
} from '../models/updateWageSettingRequest';
import {
  UpdateWageSettingResponse,
  updateWageSettingResponseSchema,
} from '../models/updateWageSettingResponse';
import { string } from '../schema';
import { BaseApi } from './baseApi';

export class TeamApi extends BaseApi {
  /**
   * Creates a single `TeamMember` object. The `TeamMember` object is returned on successful creates.
   * You must provide the following values in your request to this endpoint:
   * - `given_name`
   * - `family_name`
   *
   * Learn about [Troubleshooting the Team API](https://developer.squareup.
   * com/docs/team/troubleshooting#createteammember).
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                       See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async createTeamMember(
    body: CreateTeamMemberRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateTeamMemberResponse>> {
    const req = this.createRequest('POST', '/v2/team-members');
    const mapped = req.prepareArgs({
      body: [body, createTeamMemberRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createTeamMemberResponseSchema, requestOptions);
  }

  /**
   * Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on successful
   * creates.
   * This process is non-transactional and processes as much of the request as possible. If one of the
   * creates in
   * the request cannot be successfully processed, the request is not marked as failed, but the body of
   * the response
   * contains explicit error information for the failed create.
   *
   * Learn about [Troubleshooting the Team API](https://developer.squareup.
   * com/docs/team/troubleshooting#bulk-create-team-members).
   *
   * @param body         An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  async bulkCreateTeamMembers(
    body: BulkCreateTeamMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkCreateTeamMembersResponse>> {
    const req = this.createRequest('POST', '/v2/team-members/bulk-create');
    const mapped = req.prepareArgs({
      body: [body, bulkCreateTeamMembersRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(bulkCreateTeamMembersResponseSchema, requestOptions);
  }

  /**
   * Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on successful
   * updates.
   * This process is non-transactional and processes as much of the request as possible. If one of the
   * updates in
   * the request cannot be successfully processed, the request is not marked as failed, but the body of
   * the response
   * contains explicit error information for the failed update.
   * Learn about [Troubleshooting the Team API](https://developer.squareup.
   * com/docs/team/troubleshooting#bulk-update-team-members).
   *
   * @param body         An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  async bulkUpdateTeamMembers(
    body: BulkUpdateTeamMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BulkUpdateTeamMembersResponse>> {
    const req = this.createRequest('POST', '/v2/team-members/bulk-update');
    const mapped = req.prepareArgs({
      body: [body, bulkUpdateTeamMembersRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(bulkUpdateTeamMembersResponseSchema, requestOptions);
  }

  /**
   * Returns a paginated list of `TeamMember` objects for a business.
   * The list can be filtered by the following:
   * - location IDs
   * - `status`
   *
   * @param body         An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async searchTeamMembers(
    body: SearchTeamMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchTeamMembersResponse>> {
    const req = this.createRequest('POST', '/v2/team-members/search');
    const mapped = req.prepareArgs({
      body: [body, searchTeamMembersRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(searchTeamMembersResponseSchema, requestOptions);
  }

  /**
   * Retrieves a `TeamMember` object for the given `TeamMember.id`.
   * Learn about [Troubleshooting the Team API](https://developer.squareup.
   * com/docs/team/troubleshooting#retrieve-a-team-member).
   *
   * @param teamMemberId   The ID of the team member to retrieve.
   * @return Response from the API call
   */
  async retrieveTeamMember(
    teamMemberId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveTeamMemberResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ teamMemberId: [teamMemberId, string()] });
    req.appendTemplatePath`/v2/team-members/${mapped.teamMemberId}`;
    return req.callAsJson(retrieveTeamMemberResponseSchema, requestOptions);
  }

  /**
   * Updates a single `TeamMember` object. The `TeamMember` object is returned on successful updates.
   * Learn about [Troubleshooting the Team API](https://developer.squareup.
   * com/docs/team/troubleshooting#update-a-team-member).
   *
   * @param teamMemberId   The ID of the team member to update.
   * @param body           An object containing the fields to POST for the request.
   *                                                         See the corresponding object definition for field details.
   * @return Response from the API call
   */
  async updateTeamMember(
    teamMemberId: string,
    body: UpdateTeamMemberRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateTeamMemberResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      teamMemberId: [teamMemberId, string()],
      body: [body, updateTeamMemberRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/team-members/${mapped.teamMemberId}`;
    return req.callAsJson(updateTeamMemberResponseSchema, requestOptions);
  }

  /**
   * Retrieves a `WageSetting` object for a team member specified
   * by `TeamMember.id`.
   * Learn about [Troubleshooting the Team API](https://developer.squareup.
   * com/docs/team/troubleshooting#retrievewagesetting).
   *
   * @param teamMemberId   The ID of the team member for which to retrieve the wage setting.
   * @return Response from the API call
   */
  async retrieveWageSetting(
    teamMemberId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveWageSettingResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ teamMemberId: [teamMemberId, string()] });
    req.appendTemplatePath`/v2/team-members/${mapped.teamMemberId}/wage-setting`;
    return req.callAsJson(retrieveWageSettingResponseSchema, requestOptions);
  }

  /**
   * Creates or updates a `WageSetting` object. The object is created if a
   * `WageSetting` with the specified `team_member_id` does not exist. Otherwise,
   * it fully replaces the `WageSetting` object for the team member.
   * The `WageSetting` is returned on a successful update.
   * Learn about [Troubleshooting the Team API](https://developer.squareup.
   * com/docs/team/troubleshooting#create-or-update-a-wage-setting).
   *
   * @param teamMemberId   The ID of the team member for which to update the
   *                                                          `WageSetting` object.
   * @param body           An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  async updateWageSetting(
    teamMemberId: string,
    body: UpdateWageSettingRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateWageSettingResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      teamMemberId: [teamMemberId, string()],
      body: [body, updateWageSettingRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/team-members/${mapped.teamMemberId}/wage-setting`;
    return req.callAsJson(updateWageSettingResponseSchema, requestOptions);
  }
}
