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
  CreateJobRequest,
  createJobRequestSchema,
} from '../models/createJobRequest';
import {
  CreateJobResponse,
  createJobResponseSchema,
} from '../models/createJobResponse';
import {
  CreateTeamMemberRequest,
  createTeamMemberRequestSchema,
} from '../models/createTeamMemberRequest';
import {
  CreateTeamMemberResponse,
  createTeamMemberResponseSchema,
} from '../models/createTeamMemberResponse';
import {
  ListJobsResponse,
  listJobsResponseSchema,
} from '../models/listJobsResponse';
import {
  RetrieveJobResponse,
  retrieveJobResponseSchema,
} from '../models/retrieveJobResponse';
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
  UpdateJobRequest,
  updateJobRequestSchema,
} from '../models/updateJobRequest';
import {
  UpdateJobResponse,
  updateJobResponseSchema,
} from '../models/updateJobResponse';
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
import { optional, string } from '../schema';
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
    req.authenticate([{ global: true }]);
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
    req.authenticate([{ global: true }]);
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
    req.authenticate([{ global: true }]);
    return req.callAsJson(bulkUpdateTeamMembersResponseSchema, requestOptions);
  }

  /**
   * Lists jobs in a seller account. Results are sorted by title in ascending order.
   *
   * @param cursor The pagination cursor returned by the previous call to this endpoint. Provide this cursor
   *                         to retrieve the next page of results for your original request. For more information, see
   *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
   *                         patterns/pagination).
   * @return Response from the API call
   */
  async listJobs(
    cursor?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListJobsResponse>> {
    const req = this.createRequest('GET', '/v2/team-members/jobs');
    const mapped = req.prepareArgs({ cursor: [cursor, optional(string())] });
    req.query('cursor', mapped.cursor);
    req.authenticate([{ global: true }]);
    return req.callAsJson(listJobsResponseSchema, requestOptions);
  }

  /**
   * Creates a job in a seller account. A job defines a title and tip eligibility. Note that
   * compensation is defined in a [job assignment]($m/JobAssignment) in a team member's wage setting.
   *
   * @param body         An object containing the fields to POST for the request.  See the
   *                                                corresponding object definition for field details.
   * @return Response from the API call
   */
  async createJob(
    body: CreateJobRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateJobResponse>> {
    const req = this.createRequest('POST', '/v2/team-members/jobs');
    const mapped = req.prepareArgs({ body: [body, createJobRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ global: true }]);
    return req.callAsJson(createJobResponseSchema, requestOptions);
  }

  /**
   * Retrieves a specified job.
   *
   * @param jobId  The ID of the job to retrieve.
   * @return Response from the API call
   */
  async retrieveJob(
    jobId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RetrieveJobResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ jobId: [jobId, string()] });
    req.appendTemplatePath`/v2/team-members/jobs/${mapped.jobId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(retrieveJobResponseSchema, requestOptions);
  }

  /**
   * Updates the title or tip eligibility of a job. Changes to the title propagate to all
   * `JobAssignment`, `Shift`, and `TeamMemberWage` objects that reference the job ID. Changes to
   * tip eligibility propagate to all `TeamMemberWage` objects that reference the job ID.
   *
   * @param jobId        The ID of the job to update.
   * @param body         An object containing the fields to POST for the request.  See the
   *                                                corresponding object definition for field details.
   * @return Response from the API call
   */
  async updateJob(
    jobId: string,
    body: UpdateJobRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateJobResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      jobId: [jobId, string()],
      body: [body, updateJobRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v2/team-members/jobs/${mapped.jobId}`;
    req.authenticate([{ global: true }]);
    return req.callAsJson(updateJobResponseSchema, requestOptions);
  }

  /**
   * Returns a paginated list of `TeamMember` objects for a business.
   * The list can be filtered by location IDs, `ACTIVE` or `INACTIVE` status, or whether
   * the team member is the Square account owner.
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
    req.authenticate([{ global: true }]);
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
    req.authenticate([{ global: true }]);
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
    req.authenticate([{ global: true }]);
    return req.callAsJson(updateTeamMemberResponseSchema, requestOptions);
  }

  /**
   * Retrieves a `WageSetting` object for a team member specified
   * by `TeamMember.id`. For more information, see
   * [Troubleshooting the Team API](https://developer.squareup.
   * com/docs/team/troubleshooting#retrievewagesetting).
   *
   * Square recommends using [RetrieveTeamMember]($e/Team/RetrieveTeamMember) or
   * [SearchTeamMembers]($e/Team/SearchTeamMembers)
   * to get this information directly from the `TeamMember.wage_setting` field.
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
    req.authenticate([{ global: true }]);
    return req.callAsJson(retrieveWageSettingResponseSchema, requestOptions);
  }

  /**
   * Creates or updates a `WageSetting` object. The object is created if a
   * `WageSetting` with the specified `team_member_id` doesn't exist. Otherwise,
   * it fully replaces the `WageSetting` object for the team member.
   * The `WageSetting` is returned on a successful update. For more information, see
   * [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-
   * update-a-wage-setting).
   *
   * Square recommends using [CreateTeamMember]($e/Team/CreateTeamMember) or
   * [UpdateTeamMember]($e/Team/UpdateTeamMember)
   * to manage the `TeamMember.wage_setting` field directly.
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
    req.authenticate([{ global: true }]);
    return req.callAsJson(updateWageSettingResponseSchema, requestOptions);
  }
}
